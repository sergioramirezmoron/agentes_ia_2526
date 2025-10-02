import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
const api = process.env.API_BASE_URL;

const baseUrl = `${api}/${port}`;

const createStudent = (studentData) => {};
const readAllStudents = () => {};
const readStudentById = (id) => {};
const updateStudent = (id, studentData) => {};
const patchStudent = (id, partialData) => {};
const deleteStudent = (id) => {};
