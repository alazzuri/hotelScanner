const DateDetails = ({ dateFrom, dateTo }) => (
  <div className="data-details-container">
    {dateFrom && dateTo ? (
      <React.Fragment>
        <h3>Hoteles</h3>
        <p className="date-details">
          desde el <strong>{dateFrom}</strong> hasta el
          <strong>{dateTo}</strong>
        </p>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h3>Busca los mejores Hoteles para tu estancia</h3>
        <p className="date-details">Ingresa las fechas de tu viaje</p>
      </React.Fragment>
    )}
  </div>
);
