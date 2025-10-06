


# Sección CRUD 

## CREATE
Añade un nuevo estudiante a la base de datos. Usando el método POST se envian los datos del estudiante, se generará una ID y devuelve tanto el recurso creado como un código 201 Created. 

``` ```

## READ ALL
Consulta la lista completa de estudiantes almacenados en la base de datos. Usando el método GET sin parámetros, obtiene un array de objetos con todos los registros existentes. Se responderá con un OK y el listado. 


``` ```

## READ BY ID
Consulta un estudiante concreto indicando su ID. Usando el método GET y la URL. Si existe se devolverá un código 200 OK, si no, 404 Not Found.



``` ```



## UPDATE
Reemplaza completamente la información de un estudiante que ya existe. Usando el método PUT enviando un objeto JSON con todos los campos, se sobreescribe y devuelve un 200 OK.


``` ```

## PATCH
Modifica parcialmente un estudiante, actualizando algunos campos. Devolverá un 200 OK.


``` ```


## DELETE
Elimina un estudiante de la base de datos indicano su ID. Devolvera un 200 OK, un 204 Not Content o si el ID no exxiste un 404 Not Found.


``` ```

# Como usar Thunder Client

![ThunderClientCreatedHeader]
![ThunderClientCreated]

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

