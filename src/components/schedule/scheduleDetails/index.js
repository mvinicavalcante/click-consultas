import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../form/formInput";
import FinishingSide from "../../finishingSide";
import TimeBox from "../../timeBox";
import ScheduleService from "../../../services/ScheduleService";
import DoctorService from "../../../services/DoctorService";

const ScheduleDetails = ({ type }) => {
  const [especialidade, setEspecialidade] = useState();
  const [endereco, setEndereco] = useState();
  const [tiposConsulta, setTiposConsulta] = useState();
  const [arrayTiposConsulta, setArrayTiposConsulta] = useState([]);
  const [planosAtendidos, setPlanosAtendidos] = useState();
  const [arrayPlanosAtendidos, setArrayPlanosAtendidos] = useState([]);
  const [valorConsulta, setValorConsulta] = useState();
  const [telefone, setTelefone] = useState();
  const [horarios, setHorarios] = useState([]);

  const [enderecos, setEnderecos] = useState();
  const [specialtys, setSpecialtys] = useState();
  const doctorId = sessionStorage.doctorId;
  const navigate = useNavigate()

  const agenda = {
    especialidadeMedica: especialidade,
    enderecoMedico: { id: endereco },
    tiposConsulta: arrayTiposConsulta,
    planosAtendidos: arrayPlanosAtendidos,
    valorConsulta,
    contato: telefone,
    horariosDisponiveis: horarios
  }

  useEffect(() => {
    DoctorService.getAllAddressByDoctorId(doctorId)
      .then(e => {
        setEnderecos(e.data);
      })
      .catch(e => {
      });

    DoctorService.getAllSpecialtysByDoctorId(doctorId)
      .then(e => {
        setSpecialtys(e.data);
      })
      .catch(e => {
      });
  }, [doctorId]);

  const changeTiposConsultaToArray = (value) => {
    setTiposConsulta(value);
    const array = value.split(',').map(e => e.trim());
    setArrayTiposConsulta(array);
  };

  const changePlanosAtendidosToArray = (value) => {
    setPlanosAtendidos(value);
    const arrayPlanos = value.split(',').map(e => e.trim());
    setArrayPlanosAtendidos(arrayPlanos);
  };

  let scheduleForm = false;

  function registerSchedule(e) {
    e.preventDefault();

    if (scheduleForm === false)
      return;

    //Evita que outro button submit seja executado
    scheduleForm = false;

    if (horarios.length === 0)
      return toast.error("Insira os horários da agenda.");

    ScheduleService.registerSchedule(doctorId, agenda)
      .then(e => {
        toast.success("Agenda adicionada com sucesso.");
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      })
      .catch(e => {
        toast.error(e.response.data)
      });
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-center">
          <form onSubmit={registerSchedule} className="row px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-center">
            <div className="col-8 col-md-5 pt-3 pt-md-0">
              <div className="form-group d-flex flex-column">
                <label className="form-label">Especialidade</label>
                <select onChange={(e) => setEspecialidade(e.target.value)} className="form-select" required>
                  <option selected disabled>-- Selecione a especialidade --</option>
                  {specialtys?.map((specialty, key) => (
                    <option key={key} value={specialty.nome}>
                      {specialty.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group d-flex flex-column">
                <label className="form-label">Endereço</label>
                <select onChange={(e) => setEndereco(e.target.value)} className="form-select" required>
                  <option selected disabled>-- Selecione o endereço médico --</option>
                  {enderecos?.map((end, key) => (
                    <option key={key} value={end.id}>
                      {end.apelido}
                    </option>
                  ))}
                </select>
              </div>
              <FormInput
                label={"Tipos de Consulta"}
                placeholder={"Primeira consulta, Revisão..."}
                onChange={(e) => changeTiposConsultaToArray(e.target.value)}
                value={tiposConsulta}
              />
            </div>

            <div className="col-8 col-md-5">
              <FormInput
                label={"Planos atendidos"}
                onChange={(e) => changePlanosAtendidosToArray(e.target.value)}
                value={planosAtendidos}
                required={false}
              />
              <FormInput
                label={"Valor da Consulta"}
                onChange={(e) => setValorConsulta(e.target.value)}
                value={valorConsulta}
              />
              <FormInput
                label={"Telefone p/ contato"}
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
              />
            </div>
            <div className="col-10 m-5">
              <TimeBox content={horarios} updateContent={setHorarios} />
            </div>
            <button type="submit" id="submit-button" onClick={() => { scheduleForm = true }} />
          </form>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center pt-3 pt-md-0">
          <FinishingSide icon="fa-solid fa-book-medical" action={type} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;