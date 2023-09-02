import "./styles.css";
import CustomButton from "../customButton"


const HistoryBox = ({content, type}) => {
    return(
        <>
        <div className="history-box-container" >
            <div className="container-fluid history-box justify-content-center align-items-center">
                <div className="history-details">
                    <div className="history-details-info">
                        <h4 className="history-text">Medico</h4>
                        <p className="history-text-description">{content.medico.nome}</p>
                        <p className="history-text-description">{content.medico.especialidade}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="history-details-info">
                        <h4 className="history-text">Paciente</h4>
                        <p className="history-text-description">{content.paciente.nome}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="history-details-info">
                        <h4 className="history-text">Data e Hora</h4>
                        <p className="history-text-description">{content.data}</p>
                        <p className="history-text-description">{content.hora}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="history-details-info">
                        <h4 className="history-text">Endereço</h4>
                        <p className="history-text-description">{content.endereco.logradouro}, {content.endereco.numero}, {content.endereco.bairro}, {content.endereco.cidade} {content.endereco.estado}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="history-details-info">
                        <h4 className="history-text">Valor</h4>
                        <p className="history-text-description">R${content.valor}</p>
                    </div>
                </div>
            </div>
            {type === "paciente" ? (
                content.status === "disponivel" ? (
                <div>
                        <CustomButton
                        className ="review-button"
                        action="Avaliar Consulta"
                        path="/perfil/historico"
                        bgColor="light green" />
                </div>
                ) : (
                    <div>
                        <CustomButton
                        className ="review-button"
                        action="Consulta Avaliada"
                        path="/perfil/historico"
                        bgColor="gray" />
                    </div>
                )
            ) : (
                content.status === "disponivel" ? (
                    <div>
                            <CustomButton
                            className ="review-button"
                            action="Consulta não Avaliada"
                            path="/perfil/historico"
                            bgColor="gray" />
                    </div>
                    ) : (
                        <div>
                            <CustomButton
                            className ="review-button"
                            action="Visualizar avaliação"
                            path="/perfil/historico"
                            bgColor="light green" />
                        </div>
                    )
            )}
        </div>
        </>
    )
}

export default HistoryBox;