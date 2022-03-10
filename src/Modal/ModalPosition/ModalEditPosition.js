import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';
import Select from 'react-select'

function ModalEditPosition({setData, baseUrl, data, showModalEditPos, setShowModalEditPos, position, setPosition}) {

    const pedidoPut = async()=>
    await axios.put(baseUrl+"/"+position.idCargo, position)
    .then(response => {
        setData({ ...data,["UpdatePositions"] : true});
        setShowModalEditPos(!showModalEditPos)
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

    const handlerPoschange = (event, action) => {
        const value = event.value
        const name = action.name
        setPosition({
            ...position,[name]:value
        })
    }

    return(
    <div className="modal_position_edit">
        <Modal isOpen={showModalEditPos}>
            <ModalHeader>Atualizar Usuário</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome do Cargo: </label>
                    <br />
                    <input type="text" className="form-control" name="name" onChange={handleChange} 
                                        value={position && position.name}                />
                    <label>Setor: </label>
                    <br />
                    <Select placeholder='Selecione o Setor' name="idSetor" onChange={handlerPoschange}
                    options={data.Sectors.map(e => ({ label: e.name, value: e.idSetor}))} defaultValue={ { label : position.setor && position.setor.name , value : position && position.idSetor}}/>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => pedidoPut()}>Atualizar</button>{"   "}
                    <button className="btn btn-danger" onClick={() => setShowModalEditPos(false)}>Cancelar</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};

export default ModalEditPosition;