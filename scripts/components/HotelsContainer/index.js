const HotelContainer = ({ data }) => (
  <section className="mx-auto hotels-container">
    {data.map((hotel, index) => (
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
    ))}
  </section>
);
