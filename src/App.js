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
import Login from './page/Login/Login/Login';
import AuthProvider from './contextApi/AuthProvider';
import PrivetRoute from './page/Login/PrivetRoute/PrivetRoute';


function App() {




  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={
            <PrivetRoute>
              <ProductsDetails />
            </PrivetRoute>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
