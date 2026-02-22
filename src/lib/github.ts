export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
    updated_at: string;
    created_at: string;
    fork: boolean;
    size: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
    // Extra: marks a manually added project (not from GitHub API)
    _manual?: boolean;
}

const TEAM_MEMBERS = ["RabailB", "abiha-Shamshad"];

// Rabail's manually-listed projects not yet pushed to GitHub
const RABAIL_MANUAL_REPOS: GitHubRepo[] = [
    {
        id: 800001,
        name: "smart-timetable-assistant",
        full_name: "RabailB/smart-timetable-assistant",
        description: "Smart Time Table Assistant — an AI-powered university timetable scheduling system with a Python backend, React frontend, and Docker support. Automatically generates conflict-free schedules for classes, rooms, and teachers.",
        html_url: "https://github.com/RabailB/smart-timetable-assistant",
        homepage: null,
        language: "Python",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["python", "react", "frontend", "backend", "docker", "scheduling", "web"],
        updated_at: "2026-02-08T00:00:00Z",
        created_at: "2026-02-08T00:00:00Z",
        fork: false,
        size: 210,
        open_issues_count: 0,
        owner: {
            login: "RabailB",
            avatar_url: "https://avatars.githubusercontent.com/u/216653358?v=4",
        },
        _manual: true,
    },
];

// Mohsin's repos are manually showcased since his GitHub account
// has no public repositories yet. Add/update these as he publishes.
const MOHSIN_MANUAL_REPOS: GitHubRepo[] = [
    {
        id: 900001,
        name: "student-management-system",
        full_name: "mohsinabbas2263/student-management-system",
        description: "A full-featured student management system built with Python. Handles enrollment, grading, attendance, and reporting with a clean command-line interface.",
        html_url: "https://github.com/mohsinabbas2263",
        homepage: null,
        language: "Python",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["python", "backend", "data-structures", "algorithms"],
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        fork: false,
        size: 120,
        open_issues_count: 0,
        owner: {
            login: "mohsinabbas2263",
            avatar_url: "https://avatars.githubusercontent.com/u/256499069?v=4",
        },
        _manual: true,
    },
    {
        id: 900002,
        name: "dsa-problem-solutions",
        full_name: "mohsinabbas2263/dsa-problem-solutions",
        description: "A curated collection of Data Structures and Algorithm solutions in C++ and Python. Covers arrays, linked lists, trees, graphs, sorting, and dynamic programming.",
        html_url: "https://github.com/mohsinabbas2263",
        homepage: null,
        language: "C++",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["dsa", "algorithms", "data-structures", "competitive-programming"],
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        fork: false,
        size: 80,
        open_issues_count: 0,
        owner: {
            login: "mohsinabbas2263",
            avatar_url: "https://avatars.githubusercontent.com/u/256499069?v=4",
        },
        _manual: true,
    },
    {
        id: 900003,
        name: "library-management-api",
        full_name: "mohsinabbas2263/library-management-api",
        description: "RESTful API for a library management system. Supports book inventory, member management, issue/return tracking, and search functionality.",
        html_url: "https://github.com/mohsinabbas2263",
        homepage: null,
        language: "Python",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["api", "backend", "python", "rest"],
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        fork: false,
        size: 95,
        open_issues_count: 0,
        owner: {
            login: "mohsinabbas2263",
            avatar_url: "https://avatars.githubusercontent.com/u/256499069?v=4",
        },
        _manual: true,
    },
];

// Simple in-memory cache
const cache: Record<string, { data: GitHubRepo[]; ts: number }> = {};
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
    const cacheKey = `repos_${username}`;
    const now = Date.now();

    if (cache[cacheKey] && now - cache[cacheKey].ts < CACHE_TTL) {
        return cache[cacheKey].data;
    }

    const headers: Record<string, string> = {
        Accept: "application/vnd.github.v3+json",
    };

    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            { headers, next: { revalidate: 600 } }
        );

        if (!res.ok) {
            console.warn(`GitHub API error for ${username}: ${res.status}`);
            return [];
        }

        const data: GitHubRepo[] = await res.json();
        const filtered = filterRepos(data);

        cache[cacheKey] = { data: filtered, ts: now };
        return filtered;
    } catch (err) {
        console.error(`Failed to fetch repos for ${username}:`, err);
        return [];
    }
}

function filterRepos(repos: GitHubRepo[]): GitHubRepo[] {
    return repos.filter((repo) => {
        // Skip forks
        if (repo.fork) return false;
        // Skip tiny repos (likely empty or template)
        if (repo.size < 5) return false;
        // Skip repos without description AND with generic names
        const isGeneric =
            repo.name.toLowerCase().includes("test") ||
            repo.name.toLowerCase() === "hello-world";
        if (isGeneric && !repo.description) return false;
        return true;
    });
}

export async function fetchAllRepos(): Promise<GitHubRepo[]> {
    const results = await Promise.allSettled(
        TEAM_MEMBERS.map((username) => fetchUserRepos(username))
    );

    const allRepos: GitHubRepo[] = [...RABAIL_MANUAL_REPOS, ...MOHSIN_MANUAL_REPOS];

    results.forEach((result) => {
        if (result.status === "fulfilled") {
            allRepos.push(...result.value);
        }
    });

    // Remove duplicates (by name, in case of forks of same repo)
    const seen = new Set<string>();
    return allRepos.filter((repo) => {
        const key = repo.name.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

export { TEAM_MEMBERS, fetchUserRepos };
