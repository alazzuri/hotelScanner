const filterByDate = (dateFrom, dateTo, hotelData) => {
  return dateFrom && dateTo
    ? hotelData.availabilityFrom / 1000 >= dateFrom &&
        hotelData.availabilityTo / 1000 >= dateTo
    : hotelData;
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
  if (size === "small") {
    return hotelData.rooms <= 10;
  } else if (size === "medium") {
    return hotelData.rooms >= 10 && hotelData.rooms <= 20;
  } else if (size === "big") {
    return hotelData.rooms > 20;
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
