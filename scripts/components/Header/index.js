const Header = ({ dateFrom, dateTo }) => (
  <header className="header">
    <MainLogo />
    <DateDetails dateFrom={dateFrom} dateTo={dateTo} />
  </header>
);
