import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ApplicationFormPage from "../pages/ApplicationFormPage";
import ListTripsPage from "../pages/ListTripsPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage"
import ErrorPage from "../pages/ErrorPage";

export const Rotas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={"/admin/trips/list"} element={<AdminHomePage />} />
          <Route path={"/trips/list"} element={<ListTripsPage />} />
          <Route path={"/admin/trips/create"} element={<CreateTripPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/admin/trips/:id"} element={<TripDetailsPage />} />
          <Route path={"/trips/application/:id"} element={<ApplicationFormPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

 