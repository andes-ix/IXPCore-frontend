import React from "react";
import "./style.css";
import { useState } from "react";
import { Apiurl } from "../../../Service/Apirest";
import axios from "axios";

 


export const Login = ({state}) => {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [error, setError] = useState (false)

  

  const handlebutton = (e) => {
    state={ 
      form: {
      "email":email,
      "password":password
      }
    }
    
    let url = Apiurl + "v1/signin/"
    axios.post(url,state.form)
    .then( response =>{
      console.log(response);
      if(response.status == "200"){
        console.log(response.data)
        localStorage.setItem("token",response.data.token);
        window.location.href="./dashboard";
      }
      
    }
    

    )
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      setError(true)
      return;
    }
    setError(false)
  }

  
  return (
    <div className="login">
      <div className="overlap-group-wrapper-2">
        <div className="overlap-group-25">
          <img className="portal" alt="Portal" src="/img/portal.png" />
          <div className="rectngulo-49" />
          <div className="rectngulo-50" />
          <div className="text-wrapper-272">¡Hola!</div>
          <p className="ingresa-tu-correo">
            <span className="text-wrapper-273">
              Ingresa tu correo electrónico y contraseña e inicia sesión para disfrutar de los beneficios de nuestro{" "}
            </span>
            <span className="text-wrapper-274">PCP</span>
          </p>
          <div className="text-wrapper-275">Correo electrónico</div>
          <div className="rectngulo-51" />
          <div className="componente-26">
            <img className="trazado-72" alt="Trazado" src="/img/trazado-2500.png" />
          </div>
          <div className="rectngulo-52" /> 
          <form onSubmit={handleSubmit} >
            <input type="email" placeholder="Correo Electronico" className="correo-electronico" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password"placeholder="Contraseña" className="contrasea" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={handlebutton} className="text-wrapper-276">Iniciar sesion</button>
            <div className="text-wrapper-277">Recuperar contraseña?</div>
            <div className="text-wrapper-278">Contraseñas</div>
          </form>
          {error && <p>obligatorios</p>}
          <p className="text-wrapper-279">Términos y Condiciones de uso</p>
          <img className="chevron-right-19" alt="Chevron right" src="/img/chevron-right-20.png" />
          <img
            className="logo-placeholder-6"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview-5.png"
          />
        </div>
      </div>
    </div>
  );
};
