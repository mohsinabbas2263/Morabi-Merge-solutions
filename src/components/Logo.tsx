// Simple inline SVG logo component that matches Morabi Merge Solutions brand
// Replace this with <Image src="/logo.png" ... /> once you add your logo PNG to /public/

export default function Logo({ size = 36 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Morabi Merge Solutions Logo"
        >
            <defs>
                <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
            </defs>
            {/* Left chevron < */}
            <polyline
                points="72,62 44,100 72,138"
                stroke="url(#logoGrad1)"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Right chevron > */}
            <polyline
                points="128,62 156,100 128,138"
                stroke="url(#logoGrad2)"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Code dashes */}
            <rect x="82" y="86" width="36" height="8" rx="4" fill="url(#logoGrad1)" opacity="0.95" />
            <rect x="87" y="100" width="26" height="8" rx="4" fill="#EC4899" opacity="0.8" />
            <rect x="82" y="114" width="18" height="6" rx="3" fill="url(#logoGrad2)" opacity="0.65" />
            <circle cx="106" cy="117" r="3" fill="#7C3AED" opacity="0.7" />
        </svg>
    );
}
