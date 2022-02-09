import conexaoDB from "../db";
import Form from "../models/form.model";

class querys {
    async consultaCard(): Promise<Form[]> {
        const sql = `select uuid,username,mensagem,data_envio from sv_cards;`;
        const { rows } = await conexaoDB.query(sql);

        return rows || [];
    }
  

    async insereCard(form: Form): Promise<string> {
        const sql = `INSERT INTO sv_cards(username , mensagem,data_envio ) VALUES ( $1,$2 ,CURRENT_TIMESTAMP) RETURNING uuid;`;
        const values = [form.username, form.mensagem];
        const { rows } = await conexaoDB.query<{ form: string }>(sql, values);
        const [newCard] = rows;

        return newCard.form;


    }
}


export default new querys();