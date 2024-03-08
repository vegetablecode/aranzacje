import { parseISO, format } from 'date-fns';
import { pl } from 'date-fns/locale';

const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'd LLLL yyyy', { locale: pl })}
    </time>
  );
};

export default DateFormatter;
