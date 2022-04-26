import ProductCard from "components/ProductCard";
import Searchbar from "components/Searchbar";
import './styles.css';

function Catalogo() {
  return (
    <div className="container">
      <div className="row">
        <Searchbar />
      </div>
      <div className="row products">
        <div className="col-sm-6 col-lg-4">
            <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
            <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
            <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
            <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
            <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
            <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
