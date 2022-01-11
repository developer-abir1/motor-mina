import logo from './logo.svg';
import './App.css';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './page/share/Navbar/Navbar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './page/Home/Home/Home';
import ProductsDetails from './page/Home/Products/ProductsDetails/ProductsDetails';


function App() {




  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
