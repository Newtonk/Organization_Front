import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';

function ModalSector({setData, baseUrl, data, showModal, setshowModalAddSector, sector, setSector}) {
 
    const pedidoPost = async()=>
    await axios.post(baseUrl, sector)
    .then(response => {
        setSector(response.data);
        setData({ ...data,["UpdateSectors"] : true});
        console.log(data)
        console.log(data)
        setshowModalAddSector(!showModal)
    }).catch(error =>{
    console.log(error);
    })


    const handleChange = e =>{
        const {name,value} = e.target;
        setSector({
            ...sector,[name]:value
        });
        console.log(sector)
    }
    
    return(
    <div className="modal_sector">
        <Modal isOpen={showModal}>
            <ModalHeader>Criar Setor</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome do Setor: </label>
                    <br />
                    <input type="text" className="form-control" name="name" onChange={handleChange} />
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>{"   "}
                    <button className="btn btn-danger" onClick={() => setshowModalAddSector(false)}>Cancelar</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};
    
export default ModalSector;