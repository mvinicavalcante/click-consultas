import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

import HistoryBox from "../historyBox"

const UserHistory = ({type, content}) => {
    return (
        <>
        <div className="history">
          {type === "medico" ? (
              <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
                <div id="content" className="overflow-auto row vh-100">
                  <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6 my-3 m-md-0 d-flex justify-content-center">
                        <FontAwesomeIcon
                          icon={faClockRotateLeft}
                          color="#1E3050"
                          className="icon"
                        />
                    </div>
                  </div>
                  <div className="col-logo col-12 col-lg-8">
                    <div className="col-12 pt-5">
                      <h2 className="text-center">
                        Histórico
                      </h2>
                    </div>
                    <div className="history-data">
                      <div className="add-schedule col-12 mt-3 text-left">
                          {content.map((historico, index) => (
                            <div key={index} className="col mb-5">
                              <HistoryBox content={historico} type={type}/>
                            </div>  
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ) : (
            <div className="container-fluid vh-100 vw-100 justify-content-center align-items-center">
                <div id="content" className="overflow-auto row vh-100">
                  <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6 my-3 m-md-0 d-flex justify-content-center">
                        <FontAwesomeIcon
                          icon={faClockRotateLeft}
                          color="#1E3050"
                          className="icon"
                        />
                    </div>
                  </div>
                  <div className="col-logo col-12 col-lg-8">
                    <div className="col-12 pt-5">
                      <h2 className="text-center">
                        Histórico
                      </h2>
                    </div>
                    <div className="history-data">
                      <div className="add-schedule col-12 mt-3 text-left">
                          {content.map((historico, index) => (
                            <div key={index} className="col mb-5">
                              <HistoryBox content={historico} type={type} />
                            </div>  
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </>
    );
};

export default UserHistory;