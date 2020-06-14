const { useState, useEffect } = React;

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
