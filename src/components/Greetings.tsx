import { UseDate } from "./UseDate";

interface MyProps {
  locale: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  classes?: string;
}
export const Greetings = ({
  locale,
  morning,
  afternoon,
  evening,
  classes,
}: MyProps) => {
  const { wish } = UseDate({
    locale,
    morning,
    afternoon,
    evening,
  });
  return <>{wish}</>;
};
