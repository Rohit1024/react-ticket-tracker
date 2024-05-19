import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function timeStampToDate(timestamp: any) {
  return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
}
