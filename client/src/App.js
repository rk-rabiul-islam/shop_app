import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/Product/CreateProduct";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import './App.css';
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getAllProduct } from "./redux/product/action.js";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {

  const dispatch = useDispatch();

  useEffect(() =>{

    dispatch(getAllProduct())

  }, [dispatch]);





  return (
    <>

      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/admin/product" element={ <Product /> } />
        <Route path="/admin/product/create" element={ <CreateProduct /> } />
      </Routes>

    </>
  );
}

export default App;
