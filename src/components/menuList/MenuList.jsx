import { Button, requirePropFactory } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import restaurantService from "../../services/restaurant.services";
import productService from "../../services/product.services";
import bin from "./bin.svg"

import("./MenuList.css");

const MenuList = ({ newProduct }) => {

  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadMenu();
  }, [user]);

  useEffect(() => {
    loadMenu();
  }, [newProduct]);

  const loadMenu = () => {
    restaurantService
      .getRestaurant(user)
      .then((response) => setProducts(response.data.menu))
      .catch((err) => console.log(err));
  };

  const handleDelete = (_id) => {
    productService
      .deleteProduct(_id)
      .then(() => loadMenu())
      .catch(e => { throw e })
  }



  return (
    <>
      <ul className="list">
        <h2>Lista de productos</h2>
        {products.map((product) => {
          return (
            <li key={product._id}>
              <p>{product.name} {product.price}€
                <button onClick={() => { handleDelete(product._id) }}>
                  <img className="bin" src={bin} alt="eliminar" />
                </button>
              </p>
              <hr></hr>
            </li>

          );
        })}
      </ul>
      <Link to="/" className='link' ><Button className="btn-primary btn-back">Volver</Button></Link>

    </>
  );
};

export default MenuList;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="trasparent" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
</svg>