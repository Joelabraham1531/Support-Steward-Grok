import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function gbp(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function eur(amount: number) {
  return gbp(amount);
}

export function usd(amount: number) {
  return gbp(amount);
}

export function aud(amount: number) {
  return gbp(amount);
}
