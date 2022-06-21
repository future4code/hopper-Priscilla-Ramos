import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import ListTripsPage from "./Pages/ListTripsPage";
import AdminHomePage from "./Pages/AdminHomePage";
import CreateTripPage from "./Pages/CreateTripPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import TripDetailsPage from "./Pages/TripDetailsPage"
import ErrorPage from "./Pages/ErrorPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/admin/trips/list"} element={<AdminHomePage />} />
          <Route path={"/trips/list"} element={<ListTripsPage />} />
          <Route path={"/admin/trips/create"} element={<CreateTripPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/admin/trips/:id"} element={<TripDetailsPage />} />
          <Route path={"/trips/application"} element={<ApplicationFormPage />}/>
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
