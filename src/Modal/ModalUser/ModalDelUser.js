import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';

function ModalDelUser({baseUrl, data, setData, showDelModal, setShowDelModal, user}) {

    const pedidoDelete = async()=>
    await axios.delete(baseUrl+"/"+user.idPessoa, user)
    .then(response => {
        setData({ ...data,["UpdateUsers"] : true});
        setShowDelModal(!showDelModal)
    }).catch(error =>{
    console.log(error);
    })
    
    console.log(user)
    return(
    <div className="modal_user_del">
        <Modal isOpen={showDelModal}>
            <ModalHeader>Excluir Usuário</ModalHeader>
            <ModalBody>
                Confirma a exclusão do usuário {user && user.name} , CPF {user && user.cpf} ?
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-danger" onClick={() => pedidoDelete()}>Sim</button>
                    <button className="btn btn-secondary" onClick={() => setShowDelModal(false)}>Não</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};

export default ModalDelUser;