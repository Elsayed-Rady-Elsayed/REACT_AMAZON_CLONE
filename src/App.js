import React, { useEffect } from "react";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";
import { Home } from "./components/home/Home";
function App() {
  const { dispatch } = useAuth();
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
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
