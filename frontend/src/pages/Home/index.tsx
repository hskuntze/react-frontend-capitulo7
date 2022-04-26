import MainImg from "assets/images/car-header 1 (1).png";
import { Link } from 'react-router-dom';
import "./styles.css";

function Home() {
  return (
    <main>
      <div className="top-container">
        <div className="img-container">
          <img src={MainImg} alt="Carro Audi Amarelo" />
        </div>
        <div className="text-container">
          <h3>O carro perfeito para você</h3>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="button-container">
          <Link to="/catalogo">
            <h6 className="text-uppercase fw-bold">ver catálogo</h6>
          </Link>
        </div>
        <div className="bottom-text-container">
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
