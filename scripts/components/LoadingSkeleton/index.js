const LoadingSkeleton = () => (
  <div className="card card-container bg-light w-100" data-aos="zoom-in">
    <div className="ph-item bg-light m-0 p-0">
      <div className="ph-col-12 card-img-top p-0 m-0">
        <div className="ph-picture m-0 p-0"></div>
        <div className="ph-picture m-0 p-0"></div>
        <div className="ph-row">
          <div className="ph-col-12 big m-0 p-0"></div>
          <div className="ph-col-12 big m-0 p-0"></div>
          <div className="ph-col-12 big"></div>
        </div>
      </div>
      <div className=" ph-col-12 card-body p-0">
        <div className="h-75">
          <div className="ph-row card-title pl-5 pr-5 pt-3">
            <div className="ph-col-10 big m-0 p-0"></div>
            <div className="ph-col-10 big"></div>
          </div>
          <div className="ph-row card-text p-0 pl-5 pr-5 mb-1">
            <div className="ph-col-12 mb-3"></div>
            <div className="ph-col-8 mb-3"></div>
            <div className="ph-col-12 mb-3"></div>
            <div className="ph-col-8 mb-3"></div>
            <div className="ph-col-12 mb-3"></div>
            <div className="ph-col-8 mb-3"></div>
          </div>
        </div>
        <div className="dropdown-divider ml-5 mr-5 mt-2"></div>
        <div className="ph-row detail-container p-2 pl-5 pr-5">
          <div className="ph-col-12 big m-0 p-0"></div>
          <div className="ph-col-12 big m-0 p-0"></div>
          <div className="ph-col-6 big mt-3 p-0">
            <div className="ph-col-12 big m-0 p-0"></div>
            <div className="ph-col-12 big m-0 p-0"></div>
          </div>
          <div className="ph-col-4 big mt-3 ml-1">
            <div className="ph-col-12 big m-0 p-0"></div>
            <div className="ph-col-12 big m-0 p-0"></div>
          </div>
        </div>
        <div className="ph-row detail-container m-0 mt-3 p-0">
          <div className="ph-col-12 big m-0 p-0"></div>
          <div className="ph-col-12 big m-0 p-0"></div>
          <div className="ph-col-12 m-0 p-0"></div>
        </div>
      </div>
    </div>
  </div>
);

const keyGenerator = () => {
  const randomNumber = Math.ceil(Math.random() * 1000);
  const randomLetter = ["a", "m", "Z", "X", "e", "I", "l", "O", "P", "W", "q"];
  return `${randomLetter[Math.ceil(Math.random() * randomLetter.length)]}${
    randomLetter[Math.ceil(Math.random() * randomLetter.length)]
  }${randomNumber}${
    randomLetter[Math.ceil(Math.random() * randomLetter.length)]
  }${randomLetter[Math.ceil(Math.random() * randomLetter.length)]}`;
};

const SkeletonsContainer = ({ itemsToRender }) => {
  const itemsArray = Array.from(new Array(itemsToRender));

  return (
    <section className="mx-auto hotels-container">
      {itemsArray.map((item, index) => (
        <LoadingSkeleton key={`skeleton-loader-${keyGenerator()}-${index}`} />
      ))}
    </section>
  );
};
