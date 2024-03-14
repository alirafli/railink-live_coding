export const formatTime = (timeString: string) => {
  const hours = parseInt(timeString.substring(0, 2), 10); // Explicitly specify radix
  const minutes = parseInt(timeString.substring(2), 10); // Explicitly specify radix
  const formattedTime = new Date(0, 0, 0, hours, minutes).toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit" }
  );
  return formattedTime;
};
