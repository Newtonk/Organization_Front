import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';
import Select from 'react-select'

function ModalColab({setData, baseUrl, data, showModal, setShowModalAddColab, colab, setColab}) {
 
    const pedidoPost = async()=>
    await axios.post(baseUrl, colab)
    .then(response => {
        setColab(response.data);
        setData({ ...data,["UpdateColabs"] : true});
        setShowModalAddColab(!showModal)
    }).catch(error =>{
    console.log(error);
    })

    const handlerPoschange = (event, action) => {
        const value = event.value
        const name = action.name
        setColab({
            ...colab,[name]:value
        })
    }

    console.log(colab)
    
    return(
    <div className="modal_colab">
        <Modal isOpen={showModal}>
            <ModalHeader>Criar Colaborador</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome do Colaborador: </label>
                    <br />
                    <Select placeholder='Selecione o Colaborador' name="idColaborador" onChange={handlerPoschange} 
                    options={data.Users.map(e => ({ label: e.name, value: e.idPessoa}))} />
                    <label>Nome do Setor: </label>
                    <br />
                    <Select placeholder='Selecione o Superior Imediato' name="idSuperior" onChange={handlerPoschange} 
                    options={data.Users.map(e => ({ label: e.name, value: e.idPessoa}))} />
                    <label>Nome do Setor: </label>
                    <br />
                    <Select placeholder='Selecione o Setor' name="idSetor" onChange={handlerPoschange} 
                    options={data.Sectors.map(e => ({ label: e.name, value: e.idSetor}))} />
                    <label>Nome do Setor: </label>
                    <br />
                    <Select placeholder='Selecione o Cargo' name="idCargo" onChange={handlerPoschange} 
                    options={data.Positions.map(e => ({ label: e.name, value: e.idCargo}))} />
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>{"   "}
                    <button className="btn btn-danger" onClick={() => setShowModalAddColab(false)}>Cancelar</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};
    
export default ModalColab;