const DateInput = ({ label, onChangeFunction }) => (
  <div className="form-group col">
    <label htmlFor={`input-${label}`}>{label}</label>
    <div className="form-control input-container">
      <i className="far fa-calendar-alt"></i>
      <input
        type="date"
        id={`input-${label}`}
        onChange={onChangeFunction}
      ></input>
    </div>
  </div>
);
