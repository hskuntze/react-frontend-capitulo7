import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalogo from 'pages/Catalogo';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
