import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormat = (date: string) => {
  const utcDate = new Date(date);

  return new Date(utcDate.getTime()).toLocaleString("ja", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
  });
};
