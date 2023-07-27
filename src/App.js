import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
