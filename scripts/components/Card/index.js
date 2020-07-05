const Card = ({
  name,
  description,
  country,
  city,
  rooms,
  image,
  price,
  maxPrice,
}) => (
  <div className="card card-container">
    <img className="card-img-top" src={image} alt="card image" />
    <div className="card-body p-0">
      <div className="h-75">
        <h3 className="card-title pl-5 pr-5 pt-4">{name}</h3>
        <p className="card-text p-0 pl-5 pr-5">{description}</p>
      </div>
      <div className="dropdown-divider ml-5 mr-5"></div>
      <div className="detail-container p-2 pl-5 pr-5">
        <DetailIcons
          iconName="fas fa-map-pin"
          description={`${city}, ${country}`}
        />
        <DetailIcons
          iconName="fas fa-bed"
          description={`${rooms} habitaciones`}
          size="small"
        />
        <PriceIcon price={price} maxPrice={maxPrice} />
      </div>
      <button type="button" className="btn-book">
        Reservar
      </button>
    </div>
  </div>
);
