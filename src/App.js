import "./App.css";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import CartManipulation from "./store/CartManipulation";
import { useState } from "react";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCart = () => {
    setCartVisible(true);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  return (
    <CartManipulation>
      {cartVisible && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <MealsSummary />
      <AvailableMeals />
    </CartManipulation>
  );
}

export default App;
