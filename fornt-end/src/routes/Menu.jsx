import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [data, setData] = useState([]);

  function renderizar (){
    axios.get(`http://127.0.0.1:8000/alunos/`)
    .then(response => setData(response.data))
    .catch(error => console.log(error));
  }



  useEffect(renderizar,[]);




  return (
    <div id='fundo'>
      <h1 className='Menu'>Menu</h1>
      {data.map(item => (
        <div key={item.id}id= {item.id} className='usuario'>
          <h3>{item.nome}</h3>
          <p>CPF: {item.cpf}</p>
          <p>Email: {item.email}</p>
          <p>id: {item.id}</p>

          
        <button onClick= { e =>{axios.delete(`http://127.0.0.1:8000/alunos/${e.target.parentElement.id}/`);renderizar()}} className='botao'> Delete </button>
        <br></br><br></br>
        </div>
        
      ))}
      <br></br><br></br>
      


    </div>
  );
};

export default Menu;