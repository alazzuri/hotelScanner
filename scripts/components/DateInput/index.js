const DateInput = ({ label }) => (
  <div className="form-group col">
    <label htmlFor="dateFrom">{label}</label>
    <div className="form-control input-container">
      <i className="far fa-calendar-alt"></i>
      <input type="date" id="dateFrom"></input>
    </div>
  </div>
);
