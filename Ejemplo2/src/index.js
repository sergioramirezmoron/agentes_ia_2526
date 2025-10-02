// IMPORTACIONES (siempre al inicio del archivo)
import dotenv from "dotenv";

// Añado las variables .env a este fichero
dotenv.config();
// Todas las variables están en process.env.NOMBRE_DE_LA_VARIABLE

// Mostrar por consola el valor de las variables de ENTORNO
console.log("URL de acceso: ", process.env.URL);
console.log("Puerto: ", process.env.PORT);
console.log(`Url con puerto: ${process.env.URL}:${process.env.PORT}`);
console.log(`Url con puerto: ${process.env.URL}:${process.env.PORT}`);
console.log(
  `Url con puerto: ${process.env.URL}:${Number(process.env.PORT) + 1}`
);
