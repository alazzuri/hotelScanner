const DetailIcons = ({ iconName, description, size }) => (
  <figure
    className={`form-control  detail-icon mb-3 ${
      size === "small" && "input-medium"
    }`}
  >
    <i className={iconName}></i>
    <p>{description}</p>
  </figure>
);

const PriceIcon = () => (
  <figure className="form-control w-25 price-icon">
    <i className="fas fa-dollar-sign"></i>
    <i className="fas fa-dollar-sign"></i>
    <i className="fas fa-dollar-sign"></i>
    <i className="fas fa-dollar-sign"></i>
  </figure>
);

const Card = () => (
  <div className="card card-container">
    <img
      className="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div className="card-body p-0">
      <h3 className="card-title pl-5 pr-5 pt-4">Nombre</h3>
      <p className="card-text p-0 pl-5 pr-5">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div className="dropdown-divider ml-5 mr-5"></div>
      <div className="detail-container p-2 pl-5 pr-5">
        <DetailIcons
          iconName="far fa-calendar"
          description="Buenos Aires, Argentina"
        />
        <DetailIcons
          iconName="far fa-calendar"
          description="2 Habitaciones"
          size="small"
        />
        <PriceIcon></PriceIcon>
      </div>
      <button type="button" className="btn-book">
        Reservar
      </button>
    </div>
  </div>
);
