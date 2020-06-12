const DateDetails = ({ dateFrom, dateTo }) => (
  <div className="data-details-container">
    <h3>Hoteles</h3>
    {dateFrom && dateTo ? (
      <p className="date-details">
        desde el <strong>{dateFrom}</strong> hasta el <strong>{dateTo}</strong>
      </p>
    ) : (
      <p className="date-details">Ingresa las fechas de tu estancia</p>
    )}
  </div>
);
