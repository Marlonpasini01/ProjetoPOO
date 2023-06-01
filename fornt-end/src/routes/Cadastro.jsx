import { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';


function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState(0)
  

  async function getUsers(){
    const response = await axios.get('http://127.0.0.1:8000/alunos/')
    console.log(response.data)
  }

  async function addUser(){
    const response = await axios.post ('http://127.0.0.1:8000/alunos/', {
      nome: nome,
      email: email,
      cpf: cpf,
      
    })
    console.log(response.data)
  }

  return (
    <>

<div class='cadastro'> 
     <h1>Cadastrar </h1>
    
 </div>
 <br></br><br></br>
<div class='cad'>
  
      <input style={style.input} type= "text" placeholder='Nome' onChange={(e) => setNome(e.target.value)}/> <br></br><br></br><br></br>
  
      <input style={style.input} type= "text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/><br></br><br></br><br></br>
  
      <input style={style.input} type= "number" maxLength = "11" placeholder= 'CPF' onChange={(e) => setCpf(e.target.value)}/><br></br><br></br><br></br>

    

    <button onClick={addUser}>
        CADASTRAR
     </button>
</div>

     
    </>

  )
}

export default App

const style = {
  input: {
    width: '160px',
    height: '30px',
    fontSize: '20px',
  }
}