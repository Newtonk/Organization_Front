import React, { useState } from 'react'
import  {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import axios from 'axios';

function ModalEditSector({setData, baseUrl, data, showEditModal, setshowModalEditSector, sector, setSector}) {

    const pedidoPut = async()=>
    await axios.put(baseUrl+"/"+sector.idSetor, sector)
    .then(response => {
        // var response = response.data;
        // data.Users.map(user =>{
        //     if (user.idPessoa === response.idPessoa){
        //         user.name = response.name;
        //         user.cpf = response.cpf;
        //         user.cpf = response.cpf;
        //     }
        // })
        setData({ ...data,["UpdateSectors"] : true});
        setshowModalEditSector(!showEditModal)
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
    <div className="modal_sector_edit">
        <Modal isOpen={showEditModal}>
            <ModalHeader>Atualizar Setor</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome do Setor: </label>
                    <br />
                    <input type="text" className="form-control" name="name" onChange={handleChange} 
                                        value={sector && sector.name}                />
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => pedidoPut()}>Atualizar</button>{"   "}
                    <button className="btn btn-danger" onClick={() => setshowModalEditSector(false)}>Cancelar</button>
                </div>
            </ModalFooter>
        </Modal>
    </div>
    )};

export default ModalEditSector;