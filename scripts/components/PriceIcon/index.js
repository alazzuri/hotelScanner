const renderPrice = (price, maxPrice) => {
  return Array.from(new Array(maxPrice), (element, index) => {
    return (
      <i
        className={`fas fa-dollar-sign ${
          index < price ? "price-active" : "price-muted"
        }`}
        key={`price-${index}`}
      />
    );
  });
};

const PriceIcon = ({ price, maxPrice }) => (
  <figure className="form-control w-25 price-icon">
    {renderPrice(price, maxPrice)}
  </figure>
);
