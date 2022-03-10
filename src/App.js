import React, { useEffect } from 'react';
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Models/Home';
import Users from './Models/Users';
import Positions from './Models/Positions';
import Sectors from './Models/Sectors';
import Colabs from './Models/Colabs';
import Navbar from './Navbars/Navbar';
import axios from 'axios';

function App() {

  const baseUrlUsers = "https://localhost:44301/api/Pessoas";
  const baseUrlPositions = "https://localhost:44301/api/Cargos";
  const baseUrlSectors = "https://localhost:44301/api/Setores";
  const baseUrlColabs = "https://localhost:44301/api/Colaborador";

  const [allData,setData]=useState({
    Users : [],
    Positions : [],
    Sectors : [],
    Colabs: [],
    UpdateUsers : true,
    UpdatePositions : true,
    UpdateSectors : true,
    UpdateColabs : true
  });


  const pedidoGetUser = async()=>
  await axios.get(baseUrlUsers)
  .then(response => {
    setData({ ...allData,["UpdateUsers"]:false,["Users"]:response.data});
  }).catch(error =>{
    console.log(error);
  });

  const pedidoGetSectors = async()=>
  await axios.get(baseUrlSectors)
  .then(response => {
    setData({ ...allData,["UpdateSectors"]:false,["Sectors"]:response.data});
  }).catch(error =>{
    console.log(error);
  });

  const pedidoGetPositions = async()=>
  await axios.get(baseUrlPositions)
  .then(response => {
    setData({ ...allData,["UpdatePositions"]:false,["Positions"]:response.data});
  }).catch(error =>{
    console.log(error);
  });

  const pedidoGetColabs = async()=>
  await axios.get(baseUrlColabs)
  .then(response => {
    setData({ ...allData,["UpdateColabs"]:false,["Colabs"]:response.data});
  }).catch(error =>{
    console.log(error);
  });

  useEffect(()=>{
    if (allData.UpdateSectors){
      pedidoGetSectors();
    }
  }, [allData.UpdateSectors]);

  useEffect(()=>{
    if (allData.UpdatePositions){
      pedidoGetPositions();
    }
  }, [allData.UpdatePositions] );

  useEffect(()=>{
    if (allData.UpdateColabs){
      pedidoGetColabs();
    }
  }, [allData.UpdateColabs]);

  useEffect(()=>{
    if (allData.UpdateUsers){
      pedidoGetUser();
    }
  }, [allData.UpdateUsers]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Usuarios' element={<Users data={allData} setData={setData}/>}></Route>
          <Route exact path='/Cargos' element={<Positions data={allData} setData={setData}/>}></Route>
          <Route exact path='/Setores' element={<Sectors data={allData} setData={setData}/>}></Route>
          <Route exact path='/Colabs' element={<Colabs data={allData} setData={setData}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;