import { Timestamp } from 'firebase/firestore';
import moment from 'moment';

const timestampToDate = (timestamp) => {
  return new Date(timestamp.seconds * 1000);
};

const dateToTimestamp = (date) => {
  let timestamp = Timestamp.fromDate(date);
  timestamp.nanoseconds = 0;
  return timestamp;
};

const momentToTimestamp = (date) => {
  return dateToTimestamp(date.toDate());
};

const timestampToMoment = (timestamp) => {
  return typeof timestamp?.seconds === 'number'
    ? moment(timestampToDate(timestamp))
    : timestamp;
};

const momentToDate = (date) => {
  return date ? date.toDate() : null;
};

const momentToString = (date) => {
  return date ? date.format('MMM D, YYYY') : '';
};

export {
  timestampToDate,
  dateToTimestamp,
  momentToTimestamp,
  timestampToMoment,
  momentToDate,
  momentToString,
};
