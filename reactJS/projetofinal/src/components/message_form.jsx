import React, { useState } from "react";
import api from "../Services/api";



function Message_Form() {
  const [autor, setAutor] = useState('');
  const [message, setMessage] = useState('')


  const recebe = () => {
   
    const stringform = {
      username: autor,
      mensagem: message,
    }

    console.log(stringform)
    if (!autor || !message){
      alert('ta burro?')
    const headers = {
      "Content-Type": "application/json"
    };

  }else{
    api.post('/card', stringform)
      .then((response) => {
        
      });
    }

  }
  


  return (
    <>
    <form >

      <div className="form-group mt-2 mx-2">
        <label htmlFor="inputAddress">Nome Completo</label>
        <br />
        <input type="text" className="form-control mt-2" id="inputName" placeholder="Full Name" name="Name" value={autor} onChange={(event) => { setAutor(event.target.value) }} />
      </div>
      <div className="form-group mx-2">
        <label htmlFor="exampleFormControlTextarea1">Mensagem</label>
        <textarea className="form-control mt-2" name="Mensagem" id="exampleFormControlTextarea1" rows="3" placeholder="Deixe sua mensagem para a nossa equipe" value={message} onChange={(event) => { setMessage(event.target.value) }}></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-2 mx-2" onClick={recebe} >Enviar</button>
    </form>
    
  </>
  )
}

export default Message_Form; 