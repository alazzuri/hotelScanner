const { useState, useEffect } = React;

const App = () => {
  const [selectedHotels, setSelectedHotels] = useState(hotelsData);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setLoading(true);

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

    if (e.target.type === "date" && !validateDate(e.target.valueAsNumber)) {
      // alert("Invalid date"); ///hanlde this
      //handle this when input is reseted
    } else {
      setFilters((prevState) => {
        return { ...prevState, [inputType]: data };
      });
    }
  };

  useEffect(() => {
    document.querySelector("body").classList.toggle("body-loading");
    setTimeout(() => {
      document.querySelector("body").classList.toggle("body-loading");
      setLoading(false);
    }, 2000);

    setSelectedHotels(filterHotels(hotelsData, filters));
  }, [filters]);

  return (
    <Container>
      <PageLoader showLoader={loading} />
      <Header
        dateFrom={convertDateToString(filters.dateFrom)}
        dateTo={convertDateToString(filters.dateTo)}
      />
      <FilterBar
        options={options}
        onChangeFunction={handleChange}
        dateFrom={filters.dateFrom}
      />
      <HotelContainer data={selectedHotels} />
    </Container>
  );
};
