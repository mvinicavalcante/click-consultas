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
    <div className="row h-100">
      <div className="profile-edit-container col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
        <h1>Dados profissionais</h1>
        <div className="px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center flex-column">
          <div className="body-edit">
            <div className="row">
              <div className="col-md-6">
                <div className="user-data">
                  <BoxContent title={"CRM"} type={"crm"} content={arrayCrm} />
                </div>
              </div>
              <div className="col-md-6">
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
      </div>
      <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <FinishingSide
          icon="fa-solid fa-user-pen"
          path="/principal"
          action="Finalizar"
        />
      </div>
    </div>
  );
};

export default ProfileProfessional;
