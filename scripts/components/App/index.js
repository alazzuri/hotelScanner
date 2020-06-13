// procesar la data que viene de data.js para que quede con este formato
const options = {
  country: ["Argentina", "Brasil", "Buenos Aires"],
  price: ["$", "$$", "$$$", "$$$$"],
  size: ["small", "medium", "big"],
};
const { useState, useEffect } = React;

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

const App = () => {
  const [selectedHotels, setSelectedHotels] = useState(hotelsData);
  const [filters, setFilters] = useState({});

  const handleChange = (e) => {
    const inputType = setInputType(
      e.target.id.split("input-").join("").toLowerCase()
    );

    //obtaining the correct data based on each input type
    const data =
      e.target.type === "date"
        ? e.target.valueAsNumber / 1000
        : inputType === "price"
        ? e.target.value.length
        : e.target.value;

    setFilters((prevState) => {
      return { ...prevState, [inputType]: data };
    });
  };

  useEffect(() => {
    setSelectedHotels(filterHotels(hotelsData, filters));
  }, [filters]);

  return (
    <Container>
      <Header
        dateFrom={convertDateToString(filters.dateFrom)}
        dateTo={convertDateToString(filters.dateTo)}
      />
      <FilterBar options={options} onChangeFunction={handleChange} />
      <HotelContainer data={selectedHotels} />
    </Container>
  );
};
