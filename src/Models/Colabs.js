import React, { useState, useEffect } from 'react';
import '../styles/Sectors.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoCadastro from '../assets/cadastro.png';
import ModalColab from '../Modal/ModalColab/ModalColab';

function Colabs({data, setData}) {

const baseUrl = "https://localhost:44301/api/Colaborador"

const [showModalAddColab,setShowModalAddColab]=useState(false);
const [showModalEditColab,setShowModalEditColab]=useState(false);
const [showModalDelColab,setShowModalDelColab]=useState(false);

    
const [colabSelecionado, setColabSelecionado] = useState({})

const initiateAddModal = () =>{
    setColabSelecionado({});
    setShowModalAddColab(!showModalAddColab);
}

const toggleEditModal = () => setShowModalEditColab(!showModalEditColab)

const toggleDelModal = () => setShowModalDelColab(!showModalDelColab)

const selectColab = (colab, option) =>{
    setColabSelecionado(colab);
    (option === "Editar") ?
        toggleEditModal() : toggleDelModal();
}

return(
<div className="Colabs">
    <h3>Cadastro de Colaboradores</h3>
      <header>
      <img src={logoCadastro} alt='Cadastro' />
      <button className='btn btn-sucess' onClick={initiateAddModal}>Incluir Novo Colaborador</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nome do Colaborador</th>
            <th>Superior Direto</th>
            <th>Setor</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {data.Colabs.map(colab=>(
            <tr>
            <td>{colab.Colaborador.name}</td>
            <td>{colab.Superior.name}</td>
            <td>{colab.Cargo.name}</td>
            <td>{colab.Setor.name}</td>
            <td>
              <button className="btn btn-primary" onClick={() => selectColab(colab, "Editar")}>Editar</button> {"  "}
              <button className="btn btn-danger" onClick={() => selectColab(colab, "Excluir")}>Excluir</button>
            </td>
            </tr>
          ))}
        </tbody>
        <div>
          <ModalColab setData ={setData} showModal={showModalAddColab} data={data} baseUrl={baseUrl} setShowModalAddColab={setShowModalAddColab} colab={colabSelecionado} setColab={setColabSelecionado}  />
        </div>
      </table>
    </div>
    )
    };

export default Colabs;