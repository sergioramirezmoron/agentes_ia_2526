//importaciones
import { config } from "dotenv";
import  { exec } from "child_process"

//declaracion de variables
config(); //><--- ha cargado en process.env las variables

const API_URL = process.env.API_URL;

export const getAllUsers = () => {
    //Logica para obtener los usuarios
    const URL_BASE = `${API_URL}/users`;
    const cmd = `curl -sS -X GET ${URL_BASE}`;

    exec(cmd, (error, stdout, stderr, )=> {
        if(error) {
            console.error("Erro ejecutando el curl -> ", error.message);
            return; 
        }
        if(stderr){
            console.error("Error de salida -> ", stderr);
            return;
        }
        const data = JSON.parse(stdout);
        console.log(data);
        
    })
}