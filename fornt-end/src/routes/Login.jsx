import { Link } from "react-router-dom";
import React, { useState } from 'react';


const Login = () => {




  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loginSucesso, setLoginSucesso] = useState(false);



  const handleNomeUsuarioChange = (event) => {

    setNomeUsuario(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nomeUsuario === 'admin' && senha === 'admin') {
      setLoginSucesso(true);
      setErro('');
      
    } else {

      setErro('Nome de usuário ou senha inválidos');
      setLoginSucesso(false);
    }
  };


  return (

    <div class='login'>

      <h2>LOGIN</h2>
    


      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome-usuario">Usuário: </label>
          <input
            type="text"
            id="nome-usuario"
            value={nomeUsuario}

            onChange={handleNomeUsuarioChange}
          />

        </div>
        <br></br>
        <div>
          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
          />
        </div>
        <div> 
          <br></br>
          <button type="submit">Entrar</button>
        </div>
        <br></br>
        {erro && <p>{erro}</p>}
         <Link to={'/btn2'}>{loginSucesso && <button type="submit">LOGAR</button>}</Link>
      </form>
    </div>
  );
};

export default Login;