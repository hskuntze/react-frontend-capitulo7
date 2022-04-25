import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" element={<Home />}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;