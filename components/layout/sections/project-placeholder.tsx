export const ProjectPlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={`gradient-background relative flex items-center justify-center overflow-hidden ${className ?? ''}`}
    >
      <svg
        viewBox="0 0 640 360"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <circle
          cx="110"
          cy="70"
          r="140"
          className="fill-primary/20"
        />
        <circle
          cx="550"
          cy="300"
          r="160"
          className="fill-accent/20"
        />
        <circle
          cx="420"
          cy="100"
          r="70"
          className="fill-primary/30"
        />
        <path
          d="M0 230 C 150 180, 280 290, 430 220 S 660 180, 640 270 L 640 360 L 0 360 Z"
          className="fill-primary/10"
        />
      </svg>
    </div>
  )
}

export default ProjectPlaceholder
