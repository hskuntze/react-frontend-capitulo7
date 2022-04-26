import "./styles.css";
import ProductImg from "assets/images/car-card 1 (1).png";

function ProductCard() {
  return (
    <div className="card-container">
      <div className="product-card">
        <div className="product-img">
          <img src={ProductImg} alt="Carro Audi Supra TT Vermelho" />
        </div>
        <div className="product-text">
          <div>
            <h4>Audi Supra TT</h4>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, nisi
            </p>
          </div>
        </div>
        <div className="product-button">
          <button type="button" className="text-uppercase">
            comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
