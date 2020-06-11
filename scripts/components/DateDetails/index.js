const DateDetails = ({ dateFrom, dateTo }) => (
  <div className="data-details-container">
    <h3>Hoteles</h3>
    <p className="date-details">
      desde el <strong>{dateFrom}</strong> hasta el <strong>{dateTo}</strong>
    </p>
  </div>
);
