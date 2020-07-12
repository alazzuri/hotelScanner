const renderOptions = (options) =>
  options.map((element, index) => (
    <option value={element} key={`$${element}-${index}`}>
      {element}
    </option>
  ));

const SelectInput = ({
  label,
  defaultPlaceholder,
  iconName,
  options,
  onChangeFunction,
}) => (
  <div className="form-group col">
    <label className="mr-sm-2" htmlFor={`input-${label}`}>
      {label}
    </label>
    <div className="form-control input-container">
      <i className={iconName}></i>
      <select
        className="custom-select input-container"
        id={`input-${label}`}
        onChange={onChangeFunction}
      >
        <option value={""}>{defaultPlaceholder}</option>
        {renderOptions(options)}
      </select>
    </div>
  </div>
);
