// Fichero encargado de levantar una API_REST con Express

//import
import { config } from 'dotenv';
import express from 'express'; 
import dataBooks from './db/db.js';
import cors from "cors";

//variables de entorno
config(); 

const PORT= process.env.PORT || 4001;
const NODE_ENV= process.env.NODE_ENV;
const SERVER_URL= process.env.SERVER_URL || "http://localhost";
const HOST= process.env.HOST;

const app = express();

// CORS
app.use(cors())

//voy a permitir JSON como cuerpo de peticion
app.use(express.json());

//midleware 
app.use((req, res, next)=> {
    const timeData = new Date().toISOString();
    console.log(`${timeData} ${req.method} ${req.url} -IP ${req.ip}`);

    next();

})

app.get('/', (req, res)=>{
    res.json({
        message: "Mini API de post de alumnos",
        version: "1.0.0",
        endpoints: {
            "GET /posts": "Obtiene todos los post de mi api"
        }
    }

    )
}); 

app.get("/posts", (req, res)=>{
    console.log("Petición GET para traer los post de mi api")
    res.json({
        success: true,
        data: dataBooks,
        // para que se autoincrementa : count:posts.lenght
        count: dataBooks.length,

    })
}
)
app.delete("/posts/:id", (req, res) => {
  const id = +req.params.id;
  const post = dataBooks.find(b => b.id === id);
  if (!post) return res.status(404).json({ success: false, message: "Not found" });
  dataBooks = dataBooks.filter(b => b.id !== id);
  res.json({ success: true, message: `Deleted id ${id}` });
});


// ------Iniciar el servidor
app.listen(PORT, HOST, ()=> {
    console.log(`Servidor de RITA VD -> ${HOST}:${PORT}`)
})

