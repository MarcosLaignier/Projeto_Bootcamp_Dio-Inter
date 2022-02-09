import React, { useEffect, useState } from "react";
import Message_Form from "../components/message_form";
import Cards from "../components/cards_contact";
import Header from "../components/header";
import api from "../Services/api";


const Contact = () => {

  const [dadosform, setdados] = useState([]);
  useEffect(() => {
    api.get('/card').then(response => {
      setdados(response.data);

    })
  }, []
  );



  return (
    <>
      <Header />

      <Message_Form />

      {dadosform.map((content, uuid) => {
        return (
          <div key={uuid}>
            <Cards nameAuthor={content.username}
              conteudoMensagem={content.mensagem}
              dateMensagem={content.data_envio} />

          </div>

        )
      })}

    </>
  );



}


export default Contact;

