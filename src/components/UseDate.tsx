import { useEffect, useState } from "react";

export type ReturnDate = {
  time: string;
  date: string;
  wish: string;
};
interface MyProps {
  locale: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
}

export const UseDate = ({
  locale,
  morning,
  afternoon,
  evening,
}: MyProps): ReturnDate => {
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: "long" })}\n\n`;

  const hour = today.getHours();
  const wish = `${(hour < 12 && morning) || (hour < 18 && afternoon) || evening}`;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
    wish,
  };
};
