import "./App.css";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import CartManipulation from "./store/CartManipulation";
import AddressForm from "./Components/Layout/AddressForm";
import OrderSummary from "./Components/Layout/OrderSummary";
import { useState } from "react";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);
  const [orderSummaryVisible, setOrderSummaryVisible] = useState(false);
  const [getAddress, setGetAddress] = useState({});

  const showCart = () => {
    setCartVisible(true);
    setAddressVisible(false);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  const showAddress = () => {
    setAddressVisible(true);
    setCartVisible(false);
  };

  const hideAddress = () => {
    setAddressVisible(false);
    setCartVisible(true);
  };

  const hideOrderSummary = () => {
    setOrderSummaryVisible(false);
    setAddressVisible(true);
  };

  const getAddressHandler = (addressDetails) => {
    setGetAddress(addressDetails);
    setOrderSummaryVisible(true);
    setAddressVisible(false);
  };

  return (
    <>
      {addressVisible && (
        <AddressForm
          onGetAddress={getAddressHandler}
          onHideAddress={hideAddress}
        />
      )}
      <CartManipulation>
        {orderSummaryVisible && (
          <OrderSummary
            addressDetails={getAddress}
            onHideOrderSummary={hideOrderSummary}
          />
        )}
        {cartVisible && (
          <Cart onHideCart={hideCart} onShowAddress={showAddress} />
        )}
        <Header onShowCart={showCart} />
        <MealsSummary />
        <AvailableMeals />
      </CartManipulation>
    </>
  );
}

export default App;
