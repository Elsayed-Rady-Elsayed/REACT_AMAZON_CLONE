import React, { useEffect } from "react";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";
import { Home } from "./components/home/Home";
import { CheckOut } from "./components/checkout/CheckOut";
import { Orders } from "./components/orders/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./components/payment/Payment";
function App() {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe(
    "pk_test_51PjqFPGUQ74IbSPH0L2MidoMM1735USQdADG38jT6HjimtYRVdMmgldekh6PXOyJ7Vs8El8x5LLzLVnIHvujNgTf003WWQlQkk"
  );
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chheckout"
          element={
            <>
              <Header />
              <CheckOut />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
