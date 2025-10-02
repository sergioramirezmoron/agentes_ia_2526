import dotenv from "dotenv";
dotenv.config();

const baseUrl = `${process.env.API_BASE_URL}/${process.env.PORT}`;
console.log(baseUrl);

const createStudent = (studentData) => {};
const readAllStudents = () => {};
const readStudentById = (id) => {};
const updateStudent = (id, studentData) => {};
const patchStudent = (id, partialData) => {};
const deleteStudent = (id) => {};
