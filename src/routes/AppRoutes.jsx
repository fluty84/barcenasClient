import IndexPage from "../pages/IndexPage/IndexPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import CreateMenu from "../components/createMenu/CreateMenu";
import Basket from "../components/basket/Basket";
import { Routes, Route } from "react-router-dom";
import DayPanel from "../pages/DayPanel/DayPanel";
import ClientView from "../pages/customerPages/clientView/ClientView";
import QrPrint from "../pages/qrPrint/QrPrint";
import LandingCustomer from "../pages/customerPages/landingCostumer/Landing-Costumer";
import CheckOut from "../pages/checkOut/CheckOut";
import ClientPanel from "../pages/customerPages/clientPanel/ClientPanel";
import PaymentGateway from "../pages/paymentGateway/PaymentGateway";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route //landing Restaurante
          path="/"
          element={<IndexPage />} />

        <Route //registro nuevo Restaurante
          path="/restaurante/registro"
          element={<RegisterPage />} />

        <Route // crear nuevo Menú
          path="/restaurante/:id/menu"
          element={<CreateMenu />} />

        <Route // Pedido del cliente
          path="/:_id/:tableId/customer-order"
          element={<ClientView />}
        />

        <Route //visualizar comanda cliente
          path="/:_id/:tableId/display-order"
          element={<Basket />}
        />

        <Route //Vision de todas las mesas
          path="/panel" 
          element={<DayPanel />}
        />

        <Route //landing cliente 
          path="/:_id/:tableId/vista-cliente" 
          element={<LandingCustomer />}
        />

        <Route //Panel cliente
          path="/:_id/:tableId/panel-cliente"
          element={<ClientPanel />}
        />

        <Route // impresion de QR
          path="/restaurante/:id/panel/:tableId/qr/:number" 
          element={<QrPrint/>}
        />

        <Route //resumen antes de pago
          path="restaurante/:id/:tableId/check-out" 
          element={<CheckOut/>}
        />

        <Route 
          path="/payment-gateway"
          element={<PaymentGateway/>}
        />


      </Routes>
    </>
  );
};

export default AppRoutes;
