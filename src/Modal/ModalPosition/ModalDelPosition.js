import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';

function ModalDelPosition({baseUrl, data, setData, showModalDelPos, setshowModalDelPos, position}) {

    const pedidoDelete = async()=>
    await axios.delete(baseUrl+"/"+position.idCargo, position)
    .then(response => {
        setData({ ...data,["UpdatePositions"] : true});
        setshowModalDelPos(!showModalDelPos)
    }).catch(error =>{
    console.log(error);
    })
    

    return(
    <div className="modal_pos_del">
        <Modal isOpen={showModalDelPos}>
            <ModalHeader>Deletar Cargo</ModalHeader>
            <ModalBody>
                Confirma a exclusão do cargo {position && position.name} , Setor {position.setor && position.setor.name} ?
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-danger" onClick={() => pedidoDelete()}>Sim</button>
                    <button className="btn btn-secondary" onClick={() => setshowModalDelPos(false)}>Não</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};

export default ModalDelPosition;