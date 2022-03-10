import React, { useState, useEffect } from 'react';
import '../styles/Users.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoCadastro from '../assets/cadastro.png';
import ModalUser from '../Modal/ModalUser/ModalUser';
import ModalEditUser from '../Modal/ModalUser/ModalEditUser';
import ModalDelUser from '../Modal/ModalUser/ModalDelUser';
import { formatResultsErrors } from 'jest-message-util';

function Users({data, setData}) {

const baseUrl = "https://localhost:44301/api/Pessoas"

const [showModalAddUser,setshowModalAddUser]=useState(false);
const [showModalEditUser,setshowModalEditUser]=useState(false);
const [showModalDelUser,setshowModalDelUser]=useState(false);

    
const [userSelecionado, setUserSelecionado] = useState({
  cpf : '',
  name : '',
  email : '',
  IsColab : true,
  IsSuperior : false
  })

const initiateAddModal = () =>{
  setUserSelecionado({});
  setshowModalAddUser(!showModalAddUser);
}

const toggleEditModal = () => setshowModalEditUser(!showModalEditUser)

const toggleDelModal = () => setshowModalDelUser(!showModalDelUser)

const selectUser = (user, option) =>{
  setUserSelecionado(user);
  (option === "Editar") ?
    toggleEditModal() : toggleDelModal();
}

const getToggle = (value) => {
    if (value === null) {
      return "Não";
    } else {
      return "Sim";
    }
}

return(
<div className="Users">
    <h3>Cadastro de Usuários</h3>
      <header>
      <img src={logoCadastro} alt='Cadastro' />
      <button className='btn btn-sucess' onClick={initiateAddModal}>Incluir novo Usuário</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>IsColab</th>
            <th>IsSuperior</th>
          </tr>
        </thead>
        <tbody>
          {data.Users.map(user=>(
            <tr>
            <td>{user.name}</td>
            <td>
            {user.email}
            </td>
            <td>{user.cpf}</td>
            <td>{getToggle(user.colaborador)}</td>
            <td>{getToggle(user.superior)}</td>
            <td>
              <button className="btn btn-primary" onClick={() => selectUser(user, "Editar")}>Editar</button> {"  "}
              <button className="btn btn-danger" onClick={() => selectUser(user, "Excluir")}>Excluir</button>
            </td>
            </tr>
          ))}
        </tbody>
        <div>
          <ModalUser setData={setData} showModal={showModalAddUser} data={data} baseUrl={baseUrl} setshowModalAddUser={setshowModalAddUser} user={userSelecionado} setUser={setUserSelecionado}  />
          <ModalEditUser setData ={setData} showEditModal={showModalEditUser} data={data} baseUrl={baseUrl} setshowModalEditUser={setshowModalEditUser} user={userSelecionado} setUser={setUserSelecionado}  />
          <ModalDelUser setData ={setData} showDelModal={showModalDelUser} data={data} baseUrl={baseUrl} setShowDelModal={setshowModalDelUser} user={userSelecionado}  />
        </div>
      </table>
    </div>
    )
          };

export default Users;