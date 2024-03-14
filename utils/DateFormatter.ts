import dayjs from "dayjs";
export const formatDate = (
  dateString: string,
  month: "short" | "long" = "short"
): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month,
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

export const readableDate = (dateString: string) => {
  // Parse the date string using Day.js
  const date = dayjs(dateString);

  // Format the date as "DD Month YYYY"
  const formattedDate = date.format("DD MMMM YYYY");

  return formattedDate;
};
