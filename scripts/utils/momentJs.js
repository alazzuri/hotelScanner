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

const formatDateToUtc = (date) => {
  const localDate = moment.utc(date);
  const convertedDate = localDate.hour(0).minute(0).second(0).millisecond(0);
  return convertedDate.valueOf();
};
