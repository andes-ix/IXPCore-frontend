import React from "react";
import "./style.css";
import { useState } from "react";
import { password_reset } from "../../../Service/Apirest";
import axios from "axios";

  export const SolicitudDe = ({state}) => {
    const [email, setEmail] = useState ("")
    const [password1, setPassword1] = useState ("")
    const [password2, setPassword2] = useState ("")
    const [error, setError] = useState (false)
  
    
  
    const handlebutton = (e) => {
      state={ 
        form: {
        "email":email,
        "password1":password1,
        "password2":password2
        }
      }
      
      let url = password_reset 
      axios.post(url,state.form)
      .then( response =>{
        console.log(response);
        if(response.status == "success"){
          console.log(response.data)
          localStorage.setItem("token",response.data.token);
          window.location.href="./Login";
        }
        
      }
      
  
      )
    }
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email == "" || password1 == "" || password2 == "") {
        setError(true)
        return;
      }
      setError(false)
    }



  return (
    <div className="solicitud-de">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectngulo" />
          <div className="b-preview" />
          <div className="div" />
          <img className="fondo" alt="Fondo" src="/img/portal.png" />
          <div className="rectngulo-2" />
          <form onSubmit={handleSubmit} >
          <div className="rectngulo-3" />
          <div className="text-wrapper">Restablecer contraseña</div>
          <div className="text-wrapper-2">Correo Electrónico</div>
          <div className="rectngulo-4" />
          <img className="trazado" alt="Trazado" src="/img/trazado-2500.png" />
          <button onClick={handlebutton} className="text-wrapper-3">Guardar</button>
          <div className="rectngulo-5" />
          <input className="correo-electrnico" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" type="password" value={password1} onChange={e => setPassword1(e.target.value)} />
          
          <div className="text-wrapper-4">Contraseña</div>
          <img
            className="logo-placeholder"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview-5.png"
          />
          </form>
          <p className="tu-clave-de-acceso">
            <span className="span">
              Tu clave de acceso debe cumplir con estos requisitos:
              <br />
            </span>
            <span className="text-wrapper-5">
              - Tener 8 caracteres
              <br />- Ser alfanumérica con al menos 1 carácter numérico y un <br />
              único carácter especial
              <br />- Tener uno de estos caracteres especiales - / = . $ # *<br />- Evita colocar información personal
            </span>
          </p>
          <div className="rectngulo-6" />
          <input className="input-2" type="password" value={password2} onChange={e => setPassword2(e.target.value)} />
          <div className="text-wrapper-6">Confirmar contraseña</div>
          <p className="p">Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a configurar.</p>
        </div>
      </div>
    </div>
  );
};    
 
