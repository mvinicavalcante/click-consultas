import "./styles.css";

import FinishingSide from "../../../../components/finishingSide";
import BoxContent from "../../../../components/boxContent";

const ProfileProfessional = () => {
  const arrayCrm = [
    {
      id: 1,
      numero: 1234,
      uf: "PE",
      status: "aprovado",
    },
    {
      id: 2,
      numero: 4321,
      uf: "AL",
      status: "em análise",
    },
  ];

  const arrayEspecialidade = [
    {
      id: 1,
      nome: "Especialidade 1",
      nrqe: "1234",
      status: "aprovado",
    },
    {
      id: 2,
      nome: "Especialidade 2",
      nrqe: "4321",
      status: "em análise",
    },
  ];

  return (
    <div className="container-fluid vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8">
          <div className="row h-75">
            <div className="col-12 pt-5">
              <h2 className="text-center">Dados Profissionais</h2>
            </div>
            <div className="row justify-content-evenly m-0">
              <div className="col-8 col-md-6 col-lg-5 col-xl-4 my-5 my-md-0">
                <div className="user-data">
                  <BoxContent title={"CRM"} type={"crm"} content={arrayCrm} />
                </div>
              </div>
              <div className="col-8 col-md-6 col-lg-5 col-xl-4 mb-5 mb-md-0">
                <div className="user-data">
                  <BoxContent
                    title={"Especialidades"}
                    type={"especialidades"}
                    content={arrayEspecialidade}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 pt-4 pt-md-0">
          <FinishingSide
            icon="fa-solid fa-user-plus"
            path="/principal"
            action="Finalizar"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileProfessional;
