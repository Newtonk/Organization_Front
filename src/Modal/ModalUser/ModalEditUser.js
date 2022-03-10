import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';
import Toggle from 'react-toggle'

function ModalEditUser({setData, baseUrl, data, showEditModal, setshowModalEditUser, user, setUser}) {

    const pedidoPut = async()=>
    await axios.put(baseUrl+"/"+user.idPessoa, user)
    .then(response => {
        // var response = response.data;
        // data.Users.map(user =>{
        //     if (user.idPessoa === response.idPessoa){
        //         user.name = response.name;
        //         user.cpf = response.cpf;
        //         user.cpf = response.cpf;
        //     }
        // })
        setData({ ...data,["UpdateUsers"] : true});
        setshowModalEditUser(!showEditModal)
    }).catch(error =>{
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

    const setToggle = (value) => {
        if (value === null) {
          return false;
        } else {
          return true;
        }
    }
    
    return(
    <div className="modal_user_edit">
        <Modal isOpen={showEditModal}>
            <ModalHeader>Atualizar Usuário</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome do Usuário: </label>
                    <br />
                    <input type="text" className="form-control" name="name" onChange={handleChange} 
                                        value={user && user.name}                />
                    <label>CPF: </label>
                    <br />
                    <input type="text" className="form-control" name="cpf" onChange={handleChange}
                                        value={user && user.cpf}     />
                    <label>Email: </label>
                    x
                    <input type="text" className="form-control" name="email" onChange={handleChange} 
                                        value={user && user.email}    />
                    <br />
                    <Toggle name="IsColab"
                        defaultChecked={setToggle(user.colaborador)}
                        onChange={handleChangeToggle}/>
                    <span>É Colaborador?</span>
                    <br />
                    <br />
                    <Toggle  name="IsSuperior"
                        defaultChecked={setToggle(user.superior)}
                        onChange={handleChangeToggle}/>
                    <span>É Superior Imediato?</span>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => pedidoPut()}>Atualizar</button>{"   "}
                    <button className="btn btn-danger" onClick={() => setshowModalEditUser(false)}>Cancelar</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};

export default ModalEditUser;