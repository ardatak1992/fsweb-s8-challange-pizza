import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";
import Header from "./components/Header";
import Footer from "./components/Footer"


function App() {
 
  return (
    <>
    <Header />
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
      <Footer />
    </>
  );
}

export default App;
