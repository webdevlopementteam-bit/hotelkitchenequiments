// Elementor heading + Element Pack "advanced divider" (animated line.svg stroke).
export function Divider({ maxWidth, strokeWidth = 4, className = "" }) {
  return (
    <div className={`mx-auto pb-[15px] ${className}`} style={{ maxWidth }}>
      <svg viewBox="0 0 1202 10" className="block w-full" aria-hidden="true">
        <line
          className="divider-line"
          x1="1"
          y1="1"
          x2="1201"
          y2="1"
          fill="none"
          stroke="#798184"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function SectionHeading({ children, dividerWidth, strokeWidth, className = "", light = false }) {
  return (
    <div className={`text-center ${className}`}>
      <h2
        className={`mb-[20px] px-[10px] leading-[1.5] ${light ? "text-white [text-shadow:1px_1px_2px_#000]" : ""}`}
      >
        {children}
      </h2>
      <Divider maxWidth={dividerWidth} strokeWidth={strokeWidth} />
    </div>
  );
}
