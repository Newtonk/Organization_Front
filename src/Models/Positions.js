import React, { useState, useEffect } from 'react';
import '../styles/Positions.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoCadastro from '../assets/cadastro.png';
import ModalPosition from '../Modal/ModalPosition/ModalPosition'
import ModalEditPosition from '../Modal/ModalPosition/ModalEditPosition'
import ModalDelPosition from '../Modal/ModalPosition/ModalDelPosition';

function Positions({data, setData}) {

const baseUrl = "https://localhost:44301/api/Cargos"

const [showModalAddPos,setShowModalAddPos]=useState(false);
const [showModalEditPos,setshowModalEditPos]=useState(false);
const [showModalDelPos,setshowModalDelPos]=useState(false);

const [posSelecionado, setPosSelecionado] = useState({})

const initializeAddModal = () => {
  setPosSelecionado({});
  setShowModalAddPos(!showModalAddPos)
}

const toggleEditModal = () => setshowModalEditPos(!showModalEditPos)

const toggleDelModal = () => setshowModalDelPos(!showModalDelPos)

const selectPosition = (position, option) =>{
  setPosSelecionado(position);
  (option === "Editar") ?
    toggleEditModal() : toggleDelModal();
}

console.log(data)
return(
<div className="Positions">
    <h3>Cadastro de Cargos</h3>
      <header>
      <img src={logoCadastro} alt='Cadastro_Pos' />
      <button className='btn btn-sucess' onClick={initializeAddModal}>Incluir novo Cargo</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nome do Cargo</th>
            <th>Setor do Cargo</th>
          </tr>
        </thead>
        <tbody>
          {data.Positions.map(pos=>(
            <tr>
            <td>{pos.name}</td>
            <td>
            {pos && pos.setor.name}
            </td>
            <td>
              <button className="btn btn-primary" onClick={() => selectPosition(pos, "Editar")}>Editar</button> {"  "}
              <button className="btn btn-danger" onClick={() => selectPosition(pos, "Excluir")}>Excluir</button>
            </td>
            </tr>
          ))}
        </tbody>
        <div>
          <ModalPosition showModalPos={showModalAddPos} data={data} setData={setData} baseUrl={baseUrl} setShowModalPos={setShowModalAddPos} position={posSelecionado} setPosition={setPosSelecionado}  />
          <ModalEditPosition showModalEditPos={showModalEditPos} data={data} setData={setData} baseUrl={baseUrl} setShowModalEditPos={setshowModalEditPos} position={posSelecionado} setPosition={setPosSelecionado}  />
          <ModalDelPosition showModalDelPos={showModalDelPos} data={data} setData={setData} baseUrl={baseUrl} setshowModalDelPos={setshowModalDelPos} position={posSelecionado} setPosition={setPosSelecionado}  />
        </div>
      </table>
    </div>
    )
          };

export default Positions;