# ✅ Checklist de Proyecto: CRUD HTTP con cURL y Herramientas Visuales

## 🚀 Parte 1: Configuración inicial

- [x] Crear carpeta del proyecto `manual-http-[nombre-iniciales-apellidos]` (Rita)
- [x] Inicializar con `npm init` y completar datos (nombre, versión, autor, descripción) (Sergio)
- [x] Instalar dependencias: (sergio)
  - [x] `json-server`
  - [x] `dotenv`
- [x] Configurar `package.json` con `"type": "module"` (sergio)
- [x] Añadir scripts en `package.json`: (Rita)
  - [x] `server:up` (levantar json-server en puerto 4000)
  - [x] `crud:curl` (ejecutar `src/crud-curl.js`)
  - [x] `validate` (ejecutar `scripts/validate.sh`)
- [x] Crear estructura de carpetas y archivos:
  - [x] `src/db/db.json` (con students, courses, enrollments) (Sergio)
  - [x] `src/crud-curl.js` (Sergio)
  - [x] `scripts/validate.sh` (Rita)
  - [x] `images/` (capturas Thunder Client) (Rita)
  - [x] `peticiones-crud.http` (Rita)
  - [x] `.env` (Rita)
  - [x] `.env.example` (Rita)
  - [x] `.gitignore` (Sergio)
  - [x] `README.md` (Rita)
  - [x] `checklist.md` (Rita)

## 💻 Parte 2: Script CRUD (src/crud-curl.js) (Sergio)

- [x] Importar y configurar dotenv
- [x] Construir `BASE_URL` desde `.env`
- [x] Implementar funciones (con JSDoc y console.log de comandos cURL):
  - [x] `createStudent(studentData)`
  - [x] `readAllStudents()`
  - [x] `readStudentById(id)`
  - [x] `updateStudent(id, studentData)`
  - [x] `patchStudent(id, partialData)`
  - [x] `deleteStudent(id)`
- [x] Ejecutar todas las funciones en orden al final del archivo con mensajes informativos

## 📚 Parte 3: Documentación CRUD con cURL (README.md) (Rita)

- [x] Documentar cada operación (CREATE, READ ALL, READ BY ID, UPDATE, PATCH, DELETE) con:
  - [x] Descripción
  - [x] Comando cURL
  - [x] Explicación flags y método HTTP
  - [x] Headers usados
  - [x] Respuesta HTTP real (headers + body)
  - [x] Explicación del código de estado
- [x] Añadir capturas de las respuestas

## ⚡ Parte 4: Thunder Client (Rita)

- [x] Crear colección "CRUD Students API"
- [x] Configurar entorno de variables (baseUrl, port, fullUrl)
- [x] Crear peticiones:
  - [x] CREATE Student (POST)
  - [x] GET All Students (GET)
  - [x] GET Student by ID (GET)
  - [x] UPDATE Student (PUT)
  - [x] PATCH Student (PATCH)
  - [x] DELETE Student (DELETE)
- [x] Capturar pantalla de cada petición mostrando request y response
- [x] Guardar capturas en `images/` con nombres descriptivos
- [x] Incluir capturas en README con explicación

## 📝 Parte 5: REST Client (Sergio)

- [x] Crear `peticiones-crud.http` con variables `@baseUrl`, `@port`, `@apiUrl`
- [x] Implementar operaciones CRUD:
  - [x] CREATE Student
  - [x] READ All Students
  - [x] READ Student by ID
  - [x] READ Filtrar estudiantes activos
  - [x] READ Filtrar por nivel
  - [x] UPDATE Student (PUT)
  - [x] PATCH Student
  - [x] DELETE Student
- [x] Probar todas las peticiones desde VS Code

## ✅ Parte 6: Script de validación (scripts/validate.sh) (Sergio)

- [x] Verificar existencia de todos los archivos/carpetas obligatorios
- [x] Verificar `package.json` (type, dependencias, scripts)
- [x] Verificar al menos 6 capturas en `images/`
- [x] Mostrar resultado final (pasado/fallado)
- [x] Dar permisos de ejecución y probar

## 📋 Parte 7: Checklist de progreso (Rita)

- [x] Crear `checklist.md` con tareas organizadas por fases
- [x] Incluir todas las secciones del proyecto con checkboxes

## 🌿 Parte 8: Git y GitHub (Sergio)

- [x] Crear repositorio en GitHub (`manual-http-[tu-nombre]`)
- [x] Inicializar Git local y conectar remoto
- [x] Crear rama `main` y subir código inicial
- [x] Crear rama `m1/http-request-response` para trabajar
- [x] Hacer commits incrementales y descriptivos
- [x] Asignar profesor como reviewer

