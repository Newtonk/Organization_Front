import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';

function ModalDelSector({baseUrl, data, setData, showDelModal, setShowDelModal, sector}) {

    const pedidoDelete = async()=>
    await axios.delete(baseUrl+"/"+sector.idSetor, sector)
    .then(response => {
        setData({ ...data,["UpdateSectors"] : true});
        setShowDelModal(!showDelModal)
    }).catch(error =>{
    console.log(error);
    })
    

    return(
    <div className="modal_sector_del">
        <Modal isOpen={showDelModal}>
            <ModalHeader>Criar Usuário</ModalHeader>
            <ModalBody>
                Confirma a exclusão do setor {sector && sector.name} ?
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

export default ModalDelSector;