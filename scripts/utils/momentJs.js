const convertDateToString = (miliseconds) => {
  const dateToString = moment
    .unix(miliseconds)
    .utc()
    .locale("es")
    .format("dddd, LL");

  return dateToString.toLowerCase() !== "fecha invalida" ? dateToString : null;
};
