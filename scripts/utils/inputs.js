const setCountryInputs = (data, type) => {
  const options = [];
  data.forEach((element) => {
    !options.includes(element[type]) && options.push(element[type]);
  });
  return options;
};

const setPriceInput = (data, type) => {
  const price = [];
  data.forEach((element) => {
    !price.includes(element[type]) && price.push(element[type]);
  });
  const maxPrice = Math.max(...price);

  return Array.from(new Array(maxPrice), (item, index) =>
    "$".repeat(index + 1)
  );
};

const options = {
  country: setCountryInputs(hotelsData, "country"),
  price: setPriceInput(hotelsData, "price"),

  size: ["Pequeño", "Mediano", "Grande"],
};

const setInputType = (input) => {
  switch (input) {
    case "entrada":
      return "dateFrom";
    case "salida":
      return "dateTo";
    case "país":
      return "country";
    case "precio":
      return "price";
    case "tamaño":
      return "size";
    default:
      break;
  }
};
