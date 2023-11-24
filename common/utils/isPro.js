const { timestampToDate } = require('./dateConverters');

const isPro = (proUntil) => {
  if (proUntil?.seconds) {
    const date = timestampToDate(proUntil);
    const today = new Date();
    return today.getTime() < date.getTime();
  }
  return false;
};

export default isPro;
