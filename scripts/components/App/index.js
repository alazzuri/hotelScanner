const { useState, useEffect } = React;

const App = () => {
  const [selectedHotels, setSelectedHotels] = useState(hotelsData);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState({
    pageLoading: true,
    hotelLoading: false,
  });

  const handleChange = (e) => {
    setLoading((prevState) => {
      return { ...prevState, hotelLoading: true };
    });

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
    loading.pageLoading &&
      document.querySelector("body").classList.toggle("body-loading");
    setTimeout(() => {
      loading.pageLoading &&
        document.querySelector("body").classList.toggle("body-loading");
      setLoading({ pageLoading: false, hotelLoading: false });
    }, 2000);

    setSelectedHotels(filterHotels(hotelsData, filters));
  }, [filters]);

  return (
    <Container>
      <PageLoader showLoader={loading.pageLoading} />
      <Header
        dateFrom={convertDateToString(filters.dateFrom)}
        dateTo={convertDateToString(filters.dateTo)}
      />
      <FilterBar
        options={options}
        onChangeFunction={handleChange}
        dateFrom={filters.dateFrom}
      />
      {loading.hotelLoading ? (
        <SkeletonsContainer itemsToRender={6} />
      ) : (
        <HotelContainer data={selectedHotels} />
      )}
    </Container>
  );
};
