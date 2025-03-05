import dayjs from "dayjs";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = dayjs(dateString);
  if (!date.isValid()) {
    return <time dateTime="Invalid Date">Invalid Date</time>;
  }
  return <time dateTime={dateString}>{date.format("MMMM D, YYYY")}</time>;
};

export default DateFormatter;
