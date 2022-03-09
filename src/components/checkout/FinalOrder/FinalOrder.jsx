import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantService from "../../../services/restaurant.services";
import { AuthContext } from "../../../context/auth.context";
import { useContext } from "react";

const FinalOrder = ({ getDataFromFinalOrder }) => {

  const { id, tableId } = useParams();
// ARRAY DE OBJETOS DE PRODUCTOS DE MENU: {name: cerveza, price: 1 ....}
  const [menuData, setMenuData] = useState([]); 
// ARRAY DE OBJ: {Cerveza: "3", Oreja: "2"} CANTIDADES DE PEDIDO, VIENEN CON ID
  const [finalOrderData, setFinalOrderData] = useState([]); 
// ARRAY DE OBJ IGUAL QUE FINALORDERDATA PERO SIN IDS
  const [orderDataNoIds, setOrderDataNoIds] = useState([]); 
// ARRAY DE ARRAYS [Cerveza, cantidad, precio]
  const [arrFinalOrder, setArrFinalOrder] = useState([]); 

  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    objToArr(orderDataNoIds);
  }, [orderDataNoIds]);

  useEffect(() => {
    filterOutIds(finalOrderData);
  }, [finalOrderData]);

  useEffect(() => {
    restaurantService
      .checkTable(tableId)
      .then((res) => {
        setMenuData(res.data.restaurantId[0].menu)
        setFinalOrderData(res.data.total.flat())
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getDataFromFinalOrder(arrFinalOrder)

  }, [arrFinalOrder])

  const filterOutIds = (arrOfObjects) => {
    const objectWithoutId = [];
    arrOfObjects.forEach((elm) => {
      const { id, ...rest } = elm;
      objectWithoutId.push(rest);
    });
    setOrderDataNoIds(objectWithoutId);
  };

  const objToArr = (arrOfObjects) => {
    const arrOfOrders = [];

    arrOfObjects.forEach((elm, idx) => {

      arrOfOrders.push(Object.entries(elm))


      menuData.forEach((menuItem) => {

        for (const property in menuItem) {

          arrOfOrders[idx].forEach((item, index) => {

            if (menuItem.name === arrOfOrders[idx][index][0]) {


              arrOfOrders[idx][index].length < 3 &&
                arrOfOrders[idx][index].push(menuItem.price)
            }
          })
        }
      })
    })

    setArrFinalOrder((arrOfOrders.flat()))
    getDataFromFinalOrder((arrOfOrders.flat()))

  }




  return (
    <>
      <h1>FINAL ORDER: PAGA CABRON</h1>

      <form
        className="foodList"
        method="POST"
        action={`http://localhost:5005/api/update-total/${user._id}`}
      >
        {arrFinalOrder.map((order) => {
          return (
            <div class="mb-3">
              <div class="input-group">
                <p>{order[0]}, {order[1]}, {order[2]}</p>
                <span class="input-group-text">{order[0]}</span>
                <input
                  type="number"
                  class="form-control"
                  name={order[0]}
                  aria-label="Dollar amount (with dot and two decimal places)"
                  defaultValue={order[1]}
                  min="0"
                  max="100"
                  readOnly={isLoggedIn ? "false" : "true"}
                />
                <input type="hidden" value={tableId} name="id"></input>
                <span class="input-group-text">€</span>
                <span class="input-group-text">

                  {parseInt(order[1]) * order[2]}

                </span>
              </div>
            </div>
          );
        })}
        {isLoggedIn ? <button>Acutualizar cuenta</button> : "boton del cliente"}
      </form>
    </>
  );
};

export default FinalOrder;