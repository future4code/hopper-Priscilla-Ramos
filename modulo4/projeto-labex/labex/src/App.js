import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ApplicationFormPage from "./pages/ApplicationFormPage";
import ListTripsPage from "./pages/ListTripsPage";
import AdminHomePage from "./pages/AdminHomePage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/Admin"} element={<AdminHomePage />} />
          <Route path={"/Lista"} element={<ListTripsPage />} />
        </Routes>
      </BrowserRouter>  */}

      <ListTripsPage />
      <ApplicationFormPage />
    </div>
  );
}

export default App;
