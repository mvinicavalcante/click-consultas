import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import PatientFirstPage from "./pages/register/patientFirst";
import PatientSecondPage from "./pages/register/patientSecond";
import DoctorFirstPage from "./pages/register/doctorFirst";
import DoctorSecondPage from "./pages/register/doctorSecond";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/login' />} path="*" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/cadastro" />
          <Route element={<PatientFirstPage />} path="/cadastro/paciente" />
          <Route element={<PatientSecondPage />} path="/cadastro/paciente/plano" />
          <Route element={<DoctorFirstPage />} path="/cadastro/medico" />
          <Route element={<DoctorSecondPage />} path="/cadastro/medico/profissional" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
