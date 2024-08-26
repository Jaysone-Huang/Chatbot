import clsx from "clsx";
import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


const util = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

export default util;
