import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../form/formInput";
import FinishingSide from "../../finishingSide";
import DoctorService from "../../../services/DoctorService";

const AddressDetails = ({ type }) => {
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [apelido, setApelido] = useState();
  const doctorId = sessionStorage.doctorId;
  const addressId = sessionStorage.addressId;
  const navigate = useNavigate();

  const address = {
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    apelido
  }

  useEffect(() => {
    if (addressId) {
      DoctorService.getAddressById(doctorId, addressId)
        .then(e => {
          setCep(e.data.cep);
          setLogradouro(e.data.logradouro);
          setNumero(e.data.numero);
          setComplemento(e.data.complemento);
          setBairro(e.data.bairro);
          setCidade(e.data.cidade);
          setEstado(e.data.estado);
          setApelido(e.data.apelido);
        })
        .catch(e => {
          toast.error(e.response.data);
        });
    }
  }, [doctorId, addressId]);

  function post(e) {
    e.preventDefault();
    DoctorService.registerAdress(doctorId, address)
      .then(e => {
        toast.success("Endereço adicionado com sucesso.");
        setTimeout(() => {
          navigate("/principal/enderecos");
        }, 1500);
      })
      .catch(e => {
        toast.error(e.response.data);
      })
  }

  function patch(e) {
    e.preventDefault();
    DoctorService.patchAdress(doctorId, addressId, address)
      .then(e => {
        toast.success("Endereço atualizado com sucesso.");
        setTimeout(() => {
          navigate("/principal/enderecos");
        }, 1500);
        sessionStorage.removeItem("addressId");
      })
      .catch(e => {
        toast.error(e.response.data)
      });
  }

  return (
    <div className="container-fluid vh-100 vw-100 overflow-auto">
      <div className="row vh-100">
        <div className="col-logo col-12 col-md-8 d-flex justify-content-center align-items-flex-start">
          <form onSubmit={addressId ? patch : post} className="row w-100 px-0 px-md-3 g-0 g-md-5 justify-content-center align-items-flex-start mt-5">
            <div className="col-8 col-md-6 pt-3 pt-md-0">
              <FormInput
                label={"CEP"}
                onInput={(e) => setCep(e.target.value)}
                value={cep}
              />
              <FormInput
                label={"Número"}
                type={"number"}
                onInput={(e) => setNumero(e.target.value)}
                value={numero}
              />
              <FormInput
                label={"Bairro"}
                onInput={(e) => setBairro(e.target.value)}
                value={bairro}
              />
              <FormInput
                label={"Estado"}
                type={"state"}
                onChange={(e) => setEstado(e.target.value)}
                value={estado}
              />
            </div>
            <div className="col-8 col-md-6 ">
              <FormInput
                label={"Logradouro"}
                onInput={(e) => setLogradouro(e.target.value)}
                value={logradouro}
              />
              <FormInput
                label={"Complemento"}
                onInput={(e) => setComplemento(e.target.value)}
                value={complemento}
              />
              <FormInput
                label={"Cidade"}
                onInput={(e) => setCidade(e.target.value)}
                value={cidade}
              />
              <FormInput
                label={"Apelido"}
                onInput={(e) => setApelido(e.target.value)}
                value={apelido}
              />
            </div>
            <button type="submit" id="submit-button" />
          </form>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center pt-3 pt-md-0">
          <FinishingSide icon="house-medical" action={type} />
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;