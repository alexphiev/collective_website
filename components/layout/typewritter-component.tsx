"use client";

import { Typewriter } from "react-simple-typewriter";

export const TypewritterComponent = ({ words }: { words: string[] }) => {
  return (
    <Typewriter
      loop={0} // Infinite loop on the words
      words={words}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};
