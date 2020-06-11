// procesar la data que viene de data.js para que quede con este formato
const options = {
  country: ["Argentina", "Brasil", "Buenos Aires"],
  price: ["$", "$$", "$$$", "$$$$"],
  size: ["small", "medium", "big"],
};

const App = () => (
  <Container>
    <Header />
    <FilterBar options={options} />
  </Container>
);
