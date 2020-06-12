// procesar la data que viene de data.js para que quede con este formato
const options = {
  country: ["Argentina", "Brasil", "Buenos Aires"],
  price: ["$", "$$", "$$$", "$$$$"],
  size: ["small", "medium", "big"],
};
const { useState } = React;

const App = () => {
  const [selectedHotels, setSelectedHotels] = useState(hotelsData);
  const [filters, setFilters] = useState({});

  const handleChange = (e) => {
    const inputType = e.target.id.split("input-").join("").toLowerCase();
    //obtaining the correct data based on each input type
    const data =
      e.target.type === "date"
        ? e.target.valueAsNumber
        : inputType === "precio"
        ? e.target.value.length
        : e.target.value;

    setFilters((prevState) => {
      return { ...prevState, [inputType]: data };
    });
  };

  return (
    <Container>
      <Header
        dateFrom={convertDateToString(filters.entrada)}
        dateTo={convertDateToString(filters.salida)}
      />
      <FilterBar options={options} onChangeFunction={handleChange} />
      <HotelContainer data={selectedHotels} />
    </Container>
  );
};
