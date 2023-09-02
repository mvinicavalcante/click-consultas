import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

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
import History from "./pages/profile/history";
import Deposit from "./pages/profile/wallet/deposit";
import Withdraw from "./pages/profile/wallet/withdraw";
import NewAccount from "./pages/profile/wallet/withdraw/newAccount";
import ProfileEdit from "./pages/profile/edit/profileEdit";
import ProfileChoose from "./pages/profile/edit/profileChoose";
import ProfileProfessional from "./pages/profile/edit/profileProfessional";
import MainSearch from "./pages/main/search";
import MainAddress from "./pages/main/address";
import AddressCreator from "./pages/main/address/addAddress"
import AddressUpdate from "./pages/main/address/updateAddress";
import SchedulePage from "./pages/main/schedule";
import ScheduleCreator from "./pages/main/schedule/addSchedule";
import ScheduleUpdate from "./pages/main/schedule/updateSchedule";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        transition={Slide}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Login />} path="/sair" />

          <Route element={<Register />} path="/cadastro" />
          <Route element={<PatientFirstPage />} path="/cadastro/paciente" />
          <Route element={<PatientSecondPage />} path="/cadastro/paciente/plano" />
          <Route element={<DoctorFirstPage />} path="/cadastro/medico" />
          <Route element={<DoctorSecondPage />} path="/cadastro/medico/profissional" />
          <Route element={<WaitingPage />} path="/aguarda-confirmacao" />

          <Route element={<Main />} path="/principal" />
          <Route element={<MainSearch />} path="/principal/busca" />
          <Route element={<MainAddress />} path="/principal/enderecos" />
          <Route element={<AddressCreator />} path="/principal/enderecos/criar" />
          <Route element={<AddressUpdate />} path="/principal/enderecos/atualizar" />
          <Route element={<SchedulePage />} path="/principal/agendas" />
          <Route element={<ScheduleCreator />} path="/principal/agendas/criar" />
          <Route element={<ScheduleUpdate />} path="/principal/agendas/atualizar" />

          {/* ---  Rotas de PERFIL  --- */}
          <Route element={<Profile />} path="/perfil" />
          <Route element={<Wallet />} path="/perfil/carteira" />
          <Route element={<Deposit />} path="/perfil/carteira/deposito" />
          <Route element={<Withdraw />} path="/perfil/carteira/saque" />
          <Route element={<NewAccount />} path="/perfil/carteira/saque/conta-destino" />
          <Route element={<ProfileEdit />} path="/perfil/editar" />
          <Route element={<ProfileChoose />} path="/perfil/escolher-perfis" />
          <Route element={<ProfileProfessional />} path="/perfil/editar-profissional" />
          <Route element={<History />} path="/perfil/historico" />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
