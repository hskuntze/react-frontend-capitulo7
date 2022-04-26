import "./styles.css";

function Searchbar() {
  return (
    <div className="main-container">
      <div className="searchbar-container">
        <div className="search">
          <input
            type="text"
            placeholder="Digite sua busca"
            id="searchText"
            name="searchText"
          />
        </div>
        <div className="search-button">
          <button type="button" className="btn text-uppercase">
            buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
