import { Button} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import restaurantService from "../../services/restaurant.services";
import productService from "../../services/product.services";

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
      <ul>
        <h3>Lista de productos</h3>
        {products.map((product) => {
          return (
            <li key={product._id}>
              <p>{product.name} {product.price}€  <button onClick={() => { handleDelete(product._id) }}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
              </svg></button></p>
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
