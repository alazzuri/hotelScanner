const DateInput = ({ label, onChangeFunction, dateFrom }) => (
  <div className="form-group col">
    <label htmlFor={`input-${label}`}>{label}</label>
    <div className="form-control input-container">
      <i className="far fa-calendar-alt"></i>
      <input
        type="date"
        id={`input-${label}`}
        min={`${minDateFrom(dateFrom)}`}
        max={`${maxDateTo()}`}
        onChange={onChangeFunction}
      ></input>
    </div>
  </div>
);
