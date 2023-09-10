import "./styles.css"
import { useState } from "react";
import { toast } from "react-toastify";
import {Form, Button, Modal} from "react-bootstrap";
import FormInput from "../../form/formInput";
import UserService from "../../../services/UserService";

const RedefinePasswordModal = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    function formSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }
        UserService.patchPasswordByEmail(email, password)
        .then(e => {
            toast.success("Senha atualizada com sucesso!");
        })
        .catch(e => {
            toast.error(e.response.data);
        })
        props.onHide();
      }
      
    return(
    <>
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Form onSubmit={formSubmit}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
                <h3>Redefinir Senha</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="body-modal">
            
                <div className="redefine-password-inputs">
                    <div className="redefine-password-input">
                        <FormInput 
                        label="Email"
                        placeholder={"Digite o seu email"}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="redefine-password-input">
                        <FormInput 
                        label="Nova Senha"
                        type="password"
                        placeholder={"Digite a sua nova senha"}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="success" type="submit">
                    Atualizar Senha
                    </Button>
                </div>
            </Modal.Body>
        </Form>
        </Modal>
    </>
    )
}

export default RedefinePasswordModal;