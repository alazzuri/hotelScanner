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
