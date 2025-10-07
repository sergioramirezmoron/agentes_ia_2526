

# REST Client
@baseUrl
@port
@apiUrl
@contentType 

Son variables que evitan repetir valores y permiten cambiar el puertoo ruta una sola vez. 

# Sección CRUD 
Algunos de los requisitos previos que debemos tener en cuenta son: 

1. Levantar el servidor de json-server: 
``` npm run server:up ``` 
Saco los datos de la base de datos (db.json) para que la URL http://localhost:4000 escuche. Usamos esa URL porque es donde hemos señalado en server:up que corra json-server.

2. Tener las variables de enterno (.env) correctas para que el crud-curl.js pueda utilizarlas.


# Como usar Thunder Client
Thunder Client permite probar APIs Rest en el ediot, muy útil para enviar peticiones HTTP (GET, POST, PUT, PATCH, DELETE) a un servidor y ver las respuestas.

Después de instalarlo en VS Studio Code, usamos la opción New Request para crear una nueva petición. 
A continuación, podremos rellenar los campos principales: 
-> Method (operación GET, POST, PUT, PATH, DELETE... )
-> Reques URL: la URL, en este caso http://localhost:4000/students

Le damos a SEND para ejecutar la petición. 

Tambien, podemos añadir Headers, normalmente usaremos:
-> Content-Type: application/json
Indica el formato de los datos que envias
-> Accept: application/json
Indica el formato en el que quieres recibir la respuesta

En el Body es el cuerpo de la petición donde ponemos para qué sirve es clave cuando trabajas con APIs. Es lo que se le manda al servidor para que trabaje con ello 



## CREATE
Añade un nuevo estudiante a la base de datos. Usando el método POST se envian los datos del estudiante, se generará una ID y devuelve tanto el recurso creado como un código 201 Created. 

Utilizamos el método POST porque es usado para crear un nuevo recurso dentro de una colección existente, por lo que señalamos con el comando crear un nuevo estudiante dentro de la colección students (Por ello ponemos /students, así le indicamos a json-server que añada el estudiante dentro del array "students").


``` POST /students HTTP/1.1 Host: localhost:4000 Content-Type: application/json ```

### Rest Client

![createRestClient](images/createRestClient.png)

### Thunder Client CREATE

El header Content-Type indica el formato del contenido que enviaremos al cuerpo de la petición, en esete caso pedimos JSON, así el servidor sabe como interpretar la información. 

Al ser una operación POST el body contiene los datos del recurso que queremos crear, en este caso las propiedades de un estudiante. No incluiremos id porque json-server lo genera automáticamente. 

Devuelve un código 201 Created indicando que se ha creado correctamente en el servidor y lo guarda en en la base de datos.

![ThunderClientCreatedHeader]
![ThunderClientCreated]

## READ ALL
Consulta la lista completa de estudiantes almacenados en la base de datos. Usando el método GET (leer recursos) sin parámetros, obtiene un array de objetos con todos los registros existentes. Se responderá con un OK (200) y el listado. 

En el headers poner Accept: application/json porque se indica que aceptamos respuestas de JSON.



### Thunder Client READ ALL

![ThunderClientReadAll](images/ThunderClientReadAllHeaders.png)


## READ BY ID
Consulta un estudiante concreto indicando su ID. Usando el método GET (Leer datos, no cambia de estado) y la URL donde debemos añadir al final /id con el id correspondiente. Si existe se devolverá un código 200 OK, si no, 404 Not Found.

En los headers podemos poner Accept: application/json para que espere JSON

### Thunder Client READ BY ID 

![ThunderClientReadByOk](images/ThunderClientReadByIdOk.png)



## UPDATE
Reemplaza completamente la información de un estudiante que ya existe. Usando el método PUT (reemplazar el recurso entero uno por uno, con las mismas claves. Sustituye el objeto completo, todo lo que no mandes desaparecerá)Enviando un objeto JSON con todos los campos, se sobreescribe y devuelve un 200 OK.
Se debe especificar el id de la URL. 

En los headers debemos establecer el Content-Type: application/json para que sepa como interpretar el body y Accept: application/json para que responda con un JSON

### Thunder Client UPDATE
![ThunderClientUpdate](images/ThunderClientCreatedStudentHeaders.png)

![ThunderClientUpdate](images/ThunderClientUpdateStudentBody.png)




## PATCH
Modifica parcialmente un estudiante, se utiliza PATCH para cambiar solo algunos campos, modifica solo las claves enciadas y el resto las conservará. Devolverá un 200 OK.
Se debe especificar el id al final de la URL. 

En los headers debemos establecer el Content-Type: application/json para que sepa como interpretar el body y Accept: application/json para que responda con un JSON

Se debe especificar el id del estudiante en la URL

### Thunder Client Patch

![ThunderClientPatch](images/ThunderClientPathHeaders.png)
![ThunderClientPatchBody](images/ThunderClientPatchBody.png)




## DELETE
Elimina un estudiante de la base de datos indicano su ID. Devolvera un 200 OK, un 204 Not Content o si el ID no exxiste un 404 Not Found.

En los headers se puede poner Accept: application/json

Se debe especificar el id del estudiante en la URL.


###

# REST Client

## CREATE

![createRestClient](images/createRestClient.png)

## READ ALL

![ReadAllStudents](images/ReadAllStudentsRestClient.png)

## READ BY ID

![ReadById](images/studentByIdRestClient.png)

## UPDATE

![updateFieldRestClient](images/UpdateFieldRestClient.png)

![updateStudentRestClient](images/updateStudentRestClient.png)


## PATCH

## DELETE

![DeleteStudent](images/DeleteStudentRestClient.png)


# Script de validación
El objetivo del script es verificar que el proyecto cumple con la estructura y requisitos mínimos antes de entrgarlo. Por lo que comprobará archivos, carpetas y configuraciones del proyecto. 

Primero se verifica si existen los archivos y carpetas: 


A continuación, se verifica el package.json


Se verifican las imagnes: 


Resultado final: 

