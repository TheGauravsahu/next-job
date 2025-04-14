import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatSalary(salary:number, salaryFrequency:string) {
  const formattedSalary = new Intl.NumberFormat('en-IN').format(salary);
  return `₹ ${formattedSalary}/${salaryFrequency.toLowerCase()}`;
}