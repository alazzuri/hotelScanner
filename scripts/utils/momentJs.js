const convertDateToString = (miliseconds) => {
  const dateToString = moment
    .unix(miliseconds)
    .utc()
    .locale("es")
    .format("dddd, LL");

  return dateToString.toLowerCase() !== "fecha invalida" ? dateToString : null;
};

const minDateFrom = (dateFrom = null) => {
  const now = moment().format("YYYY-MM-DD");
  const selectedFrom = moment.unix(dateFrom).utc().format("YYYY-MM-DD");

  return dateFrom ? selectedFrom : now;
};

const maxDateTo = () => {
  const dateTo = hotelsData.map((h) => h.availabilityTo);
  const max = Math.max(...dateTo);
  const maxLimit = moment.unix(max / 1000).format("YYYY-MM-DD");
  return maxLimit;
};

//check this and handle message
const validateDate = (input) => {
  const now =
    moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).valueOf() /
    1000;
  const dateTo = hotelsData.map((h) => h.availabilityTo);
  const maxDate = Math.max(...dateTo);

  return input >= now && input <= maxDate && true;
};

const formatDateToUtc = (date) => {
  const localDate = moment.utc(date);
  const convertedDate = localDate.hour(0).minute(0).second(0).millisecond(0);
  return convertedDate.valueOf();
};
