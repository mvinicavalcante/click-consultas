import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import PatientFirstPage from "./pages/register/patientFirst";
import PatientSecondPage from "./pages/register/patientSecond";
import DoctorFirstPage from "./pages/register/doctorFirst";
import DoctorSecondPage from "./pages/register/doctorSecond";
import WaitingPage from "./pages/register/waiting";
import Main from "./pages/main";
import Profile from "./pages/profile";
import Wallet from "./pages/profile/wallet";
import Deposit from "./pages/profile/wallet/deposit";
import Withdraw from "./pages/profile/wallet/withdraw";
import NewAccount from "./pages/profile/wallet/withdraw/newAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/login' />} path="/" />
          <Route element={<Login />} path="/login" />

          <Route element={<Register />} path="/cadastro" />
          <Route element={<PatientFirstPage />} path="/cadastro/paciente" />
          <Route element={<PatientSecondPage />} path="/cadastro/paciente/plano" />
          <Route element={<DoctorFirstPage />} path="/cadastro/medico" />
          <Route element={<DoctorSecondPage />} path="/cadastro/medico/profissional" />
          <Route element={<WaitingPage />} path="/aguarda-confirmacao" />
          
          <Route element={<Main />} path="/principal" />
          <Route element={<Profile />} path="/perfil" />
          <Route element={<Wallet />} path="/carteira" />
          <Route element={<Deposit />} path="/carteira/deposito" />
          <Route element={<Withdraw />} path="/carteira/saque" />
          <Route element={<NewAccount />} path="/carteira/saque/conta-destino" />
          <Route path="/historico" />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
