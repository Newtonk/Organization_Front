import React, { useState, useEffect } from 'react';
import '../styles/Sectors.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoCadastro from '../assets/cadastro.png';
import ModalSector from '../Modal/ModalSector/ModalSector';
import ModalEditSector from '../Modal/ModalSector/ModalEditSector';
import ModalDelSector from '../Modal/ModalSector/ModalDelSector';

function Sectors({data, setData}) {

const baseUrl = "https://localhost:44301/api/Setores"

const [showModalAddSector,setshowModalAddSector]=useState(false);
const [showModalEditSector,setshowModalEditSector]=useState(false);
const [showModalDelSector,setshowModalDelSector]=useState(false);

    
const [sectorSelecionado, setSectorSelecionado] = useState({})

const initiateAddModal = () =>{
   setSectorSelecionado({});
   setshowModalAddSector(!showModalAddSector);
}

const toggleEditModal = () => setshowModalEditSector(!showModalEditSector)

const toggleDelModal = () => setshowModalDelSector(!showModalDelSector)

const selectSector = (sector, option) =>{
    setSectorSelecionado(sector);
    (option === "Editar") ?
        toggleEditModal() : toggleDelModal();
}

return(
<div className="Sectors">
    <h3>Cadastro de Setores</h3>
      <header>
      <img src={logoCadastro} alt='Cadastro' />
      <button className='btn btn-sucess' onClick={initiateAddModal}>Incluir Novo Setor</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nome do Setor</th>
          </tr>
        </thead>
        <tbody>
          {data.Sectors.map(sector=>(
            <tr>
            <td>{sector.name}</td>
            <td>
              <button className="btn btn-primary" onClick={() => selectSector(sector, "Editar")}>Editar</button> {"  "}
              <button className="btn btn-danger" onClick={() => selectSector(sector, "Excluir")}>Excluir</button>
            </td>
            </tr>
          ))}
        </tbody>
        <div>
          <ModalSector setData ={setData} showModal={showModalAddSector} data={data} baseUrl={baseUrl} setshowModalAddSector={setshowModalAddSector} sector={sectorSelecionado} setSector={setSectorSelecionado}  />
          <ModalEditSector setData ={setData} showEditModal={showModalEditSector} data={data} baseUrl={baseUrl} setshowModalEditSector={setshowModalEditSector} sector={sectorSelecionado} setSector={setSectorSelecionado}  />
          <ModalDelSector setData ={setData} showDelModal={showModalDelSector} data={data} baseUrl={baseUrl} setShowDelModal={setshowModalDelSector} sector={sectorSelecionado} />
        </div>
      </table>
    </div>
    )
    };

export default Sectors;