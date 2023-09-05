import "./styles.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseMedical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import AddressBox from "../../../components/adress/addressBox";
import DoctorService from "../../../services/DoctorService";
import BackIcon from "../../../components/backIcon";

const MainAddress = () => {
  const [arrayEnderecos, setArrayEnderecos] = useState([]);
  const doctorId = sessionStorage.doctorId;
  const navigate = useNavigate();

  useEffect(() => {
    DoctorService.getAllAddressByDoctorId(doctorId)
      .then(e => {
        setArrayEnderecos(e.data)
      })
      .catch(e => {
      });
  });

  const handleDeleteComponente = (addressId) => {
    DoctorService.deleteAddress(doctorId, addressId)
      .then(e => {
        toast.success(e.data, { position: "top-left" })
      })
      .catch(e => {
        toast.error(e.response.data);
      });

    const novoArray = arrayEnderecos.filter(comp => comp.addressId !== addressId);
    setArrayEnderecos(novoArray);
  };

  return (
    <>
      <div className="address">
        <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
          <div id="content" className="overflow-auto row vh-100">
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center position-relative">
              <BackIcon />
              <FontAwesomeIcon
                icon={faHouseMedical}
                color="#1E3050"
                size="8x"
                className="icon"
              />
            </div>
            <div className="col-logo col-12 col-lg-8">
              <div className="col-12 pt-5">
                <h2 className="text-center">
                  Meus Endereços
                </h2>
              </div>
              <div className="address-details">
                <div className="add-schedule col-12 mt-3 text-left">
                  <button
                    onClick={() => {
                      navigate("/principal/enderecos/criar");
                      sessionStorage.removeItem("addressId");
                    }}
                    className="add-address"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="white"
                      className="icon"
                      width={65}
                    />
                  </button>
                </div>
                <div className="col-12 mt-4">
                  <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {arrayEnderecos?.map((endereco, index) => (
                      <div key={index} className="col">
                        <AddressBox id={endereco.id} content={endereco} onDelete={handleDeleteComponente} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAddress;
