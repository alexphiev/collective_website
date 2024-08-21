import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createNumberArray(size: number) {
  return Array.from({ length: size }, (_, index) => index + 1);
}
