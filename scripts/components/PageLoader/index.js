const PageLoader = ({ showLoader }) => {
  return (
    showLoader && (
      <div className="page-loader">
        <MainLogo />
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
};
