export const dateFix = (date) => {
  const yearMonthDay = date.substring(0, 10).split('-');
  console.log(yearMonthDay);
  const formattedDate = `${yearMonthDay[1]}-${yearMonthDay[2]}-${yearMonthDay[0]}`;
  return formattedDate;
};
/**
 *
 */
