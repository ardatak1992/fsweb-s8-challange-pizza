import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
