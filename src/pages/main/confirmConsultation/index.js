import "./styles.css";
import Header from "../../../components/header";
import { useEffect, useState } from "react";

const ConfirmConsultation = () => {
  const [medico, setMedico] = useState();

  useEffect(() => {
    const medicoFromSession = sessionStorage.getItem("medicoSelecionado");
    if (medicoFromSession) {
      const parsedMedico = JSON.parse(medicoFromSession);
      setMedico(parsedMedico);
    }
  }, []);

  console.log(medico)

  return (
    <>
      <Header />
      <div className="container-fluid pt-5 px-5">
        <div className="box-confirm-consultation d-flex justify-content-center rounded-4">
          <div className="py-4 d-flex flex-column">
            <img src={sessionStorage.fotoMedicoSelecionado} width={120} className="rounded-4 align-self-center" alt={"Foto do médico"} />
            <h3 className="text-white pt-3">Dr. {medico?.nome}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmConsultation;
