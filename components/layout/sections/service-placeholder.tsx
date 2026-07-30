export const ServicePlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative overflow-hidden bg-[#0f2b26] ${className ?? ''}`}
    >
      <svg
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <circle cx="90" cy="80" r="140" fill="#4EB19A" fillOpacity="0.35" />
        <circle cx="430" cy="340" r="160" fill="#4EB19A" fillOpacity="0.25" />
        <circle cx="330" cy="120" r="70" fill="#4EB19A" fillOpacity="0.45" />
        <path
          d="M0 260 C 120 200, 220 320, 340 240 S 520 200, 500 300 L 500 400 L 0 400 Z"
          fill="#4EB19A"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}

export default ServicePlaceholder
