interface SectionDividerProps {
  id?: string;
}

export const SectionDivider = ({ id }: SectionDividerProps) => {
  return (
    <div className="container py-[120px] ">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div id={id}></div>
    </div>
  );
};
