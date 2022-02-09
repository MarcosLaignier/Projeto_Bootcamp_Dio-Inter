import {Pool} from "pg";

const connectionString  = '';
const conexaoDB = new Pool({connectionString });

export default conexaoDB;