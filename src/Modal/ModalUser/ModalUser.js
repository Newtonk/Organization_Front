import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import "../../styles/style.css";

function ModalUser({setData, baseUrl, data, showModal, setshowModalAddUser, user, setUser}) {
 
    const pedidoPost = async()=>
        await axios.post(baseUrl, user)
            .then(response => {
                setUser(response.data.pessoa);
                if (response.data.success === false) {
                    setUser({ ...user, ["Message"]: response.data.message })
                } else {
                    setData({ ...data, ["UpdateUsers"]: true });
                    setshowModalAddUser(!showModal)
                }
            }).catch(error => {
                console.log(error);
            })

    const handleChange = e =>{
        const {name,value} = e.target;
        setUser({
            ...user,[name]:value
        });
        console.log(user)
    }


    const handleChangeToggle = e => {
        const {name,checked} = e.target;
        setUser({
            ...user, [name]:checked
        });
        console.log(user)
    }

    return(
    <div className="modal_user">
        <Modal isOpen={showModal}>
            <ModalHeader>Criar Usuário</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome do Usuário: </label>
                    <br />
                    <input type="text" className="form-control" name="name" onChange={handleChange} />
                    <label>CPF: </label>
                    <br />
                    <input 
                        type="number" 

                        className="form-control"
                        name="cpf"
                        onChange={handleChange}
                    />
                    <label>Email: </label>
                    <br />
                    <input type="text" className="form-control" name="email" onChange={handleChange} />
                    <br />
                    <Toggle name="IsColab"
                        defaultChecked={user.IsColab}
                        onChange={handleChangeToggle}/>
                    <span>É Colaborador?</span>
                    <br />
                    <br />
                    <Toggle  name="IsSuperior"
                        defaultChecked={user.IsSuperior}
                        onChange={handleChangeToggle}/>
                    <span>É Superior Imediato?</span>
                    <br />
                    <br />
                    {user.Message && <p className="error"> {user.Message} </p>}
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>{"   "}
                    <button className="btn btn-danger" onClick={() => setshowModalAddUser(false)}>Cancelar</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};

export default ModalUser;