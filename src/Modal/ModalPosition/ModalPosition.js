import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';
import Select from 'react-select'

function ModalPosition({baseUrl, data, setData, showModalPos, setShowModalPos, position, setPosition}) {
 
    const pedidoPost = async()=>
    await axios.post(baseUrl, position)
    .then(response => {
        setPosition(response.data)
        setData({...data, ["UpdatePositions"]:true});
        console.log(data.Positions)
        setShowModalPos(!showModalPos)
    }).catch(error =>{
    console.log(error);
    })

    const handleChange = e =>{
        const {name,value} = e.target;
        setPosition({
            ...position,[name]:value
        });
        console.log(position)
    }

    const handlePosChange = e => {
        setPosition({ ...position,["idSetor"]:e.value.idSetor})
        console.log(`Option selected:`, e.value );
      };

    return(
    <div className="modal_position">
        <Modal isOpen={showModalPos}>
            <ModalHeader>Criar Cargo</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome do Cargo: </label>
                    <br />
                    <input type="text" className="form-control" name="name" onChange={handleChange} />
                    <label>Setor: </label>
                    <br />
                    <Select placeholder='Selecione o Setor' name="position" onChange={handlePosChange} 
                    options={data.Sectors.map(e => ({ label: e.name, value: e}))} />
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>{"   "}
                    <button className="btn btn-danger" onClick={() => setShowModalPos(false)}>Cancelar</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};

export default ModalPosition;