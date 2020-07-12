const filterByDate = (dateFrom, dateTo, hotelData) => {
  const availabilityFrom = formatDateToUtc(hotelData.availabilityFrom) / 1000;

  const availabilityTo = formatDateToUtc(hotelData.availabilityTo) / 1000;

  if (dateFrom && dateTo && dateFrom <= dateTo) {
    return availabilityFrom <= dateFrom && availabilityTo >= dateTo;
  } else if (dateFrom) {
    return availabilityFrom <= dateFrom;
  } else if (dateTo) {
    return availabilityTo >= dateTo;
  } else {
    return hotelData;
  }
};

const filterByCountry = (country, hotelData) => {
  return country
    ? hotelData.country.toLowerCase() === country.toLowerCase()
    : hotelData;
};

const filterByPrice = (price, hotelData) => {
  return price ? +hotelData.price === +price : hotelData;
};

const filterBySize = (size, hotelData) => {
  if (size && size.toLowerCase() === "pequeño") {
    return +hotelData.rooms <= 10;
  } else if (size && size.toLowerCase() === "mediano") {
    return +hotelData.rooms >= 10 && +hotelData.rooms <= 20;
  } else if (size && size.toLowerCase() === "grande") {
    return +hotelData.rooms > 20;
  } else {
    return hotelsData;
  }
};

const filterHotels = (hotelData, filters) => {
  const { dateFrom, dateTo, country, price, size } = filters;

  return dateFrom || dateTo || country || price || size
    ? hotelData.filter(
        (hotel) =>
          filterByDate(dateFrom, dateTo, hotel) &&
          filterByCountry(country, hotel) &&
          filterByPrice(price, hotel) &&
          filterBySize(size, hotel)
      )
    : hotelData;
};
