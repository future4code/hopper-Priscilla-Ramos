import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import ListTripsPage from "./Pages/ListTripsPage";
import AdminHomePage from "./Pages/AdminHomePage";
import CreateTripPage from "./Pages/CreateTripPage";
import HomePage from "./Pages/HomePage";
import { RouterSharp } from "@mui/icons-material";
import LoginPage from "./Pages/LoginPage";
import TripDetailsPage from "./Pages/TripDetailsPage"
import ErrorPage from "./Pages/ErrorPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/admin"} element={<AdminHomePage />} />
          <Route path={"/lista"} element={<ListTripsPage />} />
          <Route path={"/cria-lista"} element={<CreateTripPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/detalhes-lista"} element={<TripDetailsPage />} />
          {/* <Route path={"/formulario"} element={<ApplicationFormPage />} /> */}
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
