export { clsx as cn } from "clsx";

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const formatDateTime = (date: string) => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  });
};
