const convertDateToString = (miliseconds) => {
  const dateToString = moment
    .unix(miliseconds / 1000)
    .utc()
    .locale("es")
    .format("dddd, LL");

  return dateToString.toLowerCase() !== "fecha invalida" ? dateToString : null;
};
