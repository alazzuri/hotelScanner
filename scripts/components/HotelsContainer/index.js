const renderHotelCards = (data) =>
  data.map((hotel, index) => (
    <Card
      key={`${hotel.name}-${index}`}
      name={hotel.name}
      description={hotel.description}
      country={hotel.country}
      city={hotel.city}
      rooms={hotel.rooms}
      image={hotel.photo}
      price={hotel.price}
      maxPrice={4}
    />
  ));

const NotFoundPlaceholder = () => (
  <div className="not-found-message">
    <i class="far fa-meh-rolling-eyes fa-4x"></i>
    <h3>Ups!</h3>
    <h4>No encontramos hoteles que coincidan con tu búsqueda</h4>
    <p>Intentá cambiando los filtros aplicados</p>
  </div>
);

const HotelContainer = ({ data }) => (
  <section className="mx-auto hotels-container">
    {data.length ? renderHotelCards(data) : <NotFoundPlaceholder />}
  </section>
);
