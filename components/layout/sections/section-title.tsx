export const SectionTitle: React.FC<{
  title: string
  className?: string
  textAlign?: string
}> = ({ title, className, textAlign }) => (
  <h2
    className={`text-3xl md:text-4xl ${
      textAlign ? textAlign : 'text-center'
    } mb-4 font-semibold text-foreground/90 ${className}`}
  >
    {title}
  </h2>
)
