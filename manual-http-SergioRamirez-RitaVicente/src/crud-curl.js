import dotenv from "dotenv";
import { exec } from "child_process";
dotenv.config();

const baseUrl = `${process.env.API_BASE_URL}:${process.env.PORT}/students`;

/**
 * Create an student with an object
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Object} studentData - Student that we want to create
 * @return - A curl command to create a new student
 */
const createStudent = (studentData = {}) => {
  const curl = `curl -s -X POST ${baseUrl} \
  -H "Content-Type: application/json" \
  -d "${JSON.stringify(studentData).replace(/"/g, '\\"')}"`;
  exec(curl, (error, stdout, stderr) => {
    if (error) {
      console.error("Error ejecutando el curl -> ", error.message);
      return;
    }
    if (stderr) {
      console.error("Error de salida -> ", stderr);
      return;
    }

    const data = JSON.parse(stdout);
    console.log("=== CREATE ===");
    console.log(data);
  });
};
/**
 * Read all students
 * @autor - Sergio Ramírez & Rita Vicente
 * @return - A curl command with all students
 */
const readAllStudents = () => {
  const curl = `curl -s -X GET ${baseUrl}`;
  exec(curl, (error, stdout, stderr) => {
    if (error) {
      console.error("Error ejecutando el curl -> ", error.message);
      return;
    }
    if (stderr) {
      console.error("Error de salida -> ", stderr);
      return;
    }
    const data = JSON.parse(stdout);
    console.log("=== READ ALL ===");
    console.log(data);
  });
};
/**
 * Read a student with the id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student id that we want to read
 * @return - A curl command to read a student
 */
const readStudentById = (id = 1) => {
  const curl = `curl -s -X GET ${baseUrl}/${id}`;
  exec(curl, (error, stdout, stderr) => {
    if (error) {
      console.error("Error ejecutando el curl -> ", error.message);
      return;
    }
    if (stderr) {
      console.error("Error de salida -> ", stderr);
      return;
    }
    const data = JSON.parse(stdout);
    console.log("=== READ BY ID ===");
    console.log(data);
  });
};
/**
 * Update an student with an object and id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to update
 * @param {Object} studentData - Student that we want to update
 * @return - A curl command to update a student
 */
const updateStudent = (id = 1, studentData = {}) => {
  const curl = `curl -s -X PUT ${baseUrl}/${id} \
  -H "Content-Type: application/json" \
  -d "${JSON.stringify(studentData).replace(/"/g, '\\"')}"`;
  exec(curl, (error, stdout, stderr) => {
    if (error) {
      console.error("Error ejecutando el curl -> ", error.message);
      return;
    }
    if (stderr) {
      console.error("Error de salida -> ", stderr);
      return;
    }

    const data = JSON.parse(stdout);
    console.log("=== UPDATE ===");
    console.log(data);
  });
};
/**
 * Patch a student with an object and id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to patch
 * @param {Object} partialData - Student that we want to patch
 * @return - A curl command to patch a student
 */
const patchStudent = (id = 1, partialData = {}) => {
  const curl = `curl -s -X PATCH ${baseUrl}/${id} \
  -H "Content-Type: application/json" \
  -d "${JSON.stringify(partialData).replace(/"/g, '\\"')}"
`;
  exec(curl, (error, stdout, stderr) => {
    if (error) {
      console.error("Error ejecutando el curl -> ", error.message);
      return;
    }
    if (stderr) {
      console.error("Error de salida -> ", stderr);
      return;
    }

    const data = JSON.parse(stdout);
    console.log("=== PATCH ===");
    console.log(data);
  });
};
/**
 * Delete a student with an object
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to delete
 * @return - A curl command to delete a student
 */
const deleteStudent = (id = 1) => {
  const curl = `curl -s -X DELETE ${baseUrl}/${id}`;
  exec(curl, (error, stdout, stderr) => {
    if (error) {
      console.error("Error ejecutando el curl -> ", error.message);
      return;
    }
    if (stderr) {
      console.error("Error de salida -> ", stderr);
      return;
    }

    const data = JSON.parse(stdout);
    console.log("=== DELETE ===");
    console.log(data);
  });
};

const tests = () => {
  console.log("=== CRUD Students API ===\n");

  createStudent({
    id: 8,
    name: "Juan Cevilla",
    email: "juanchi@email.com",
    enrollmentDate: "2024-09-15",
    active: true,
    level: "begginer",
  });
  readAllStudents();
  readStudentById(3);

  updateStudent(3, {
    id: 3,
    name: "Pedro Lunatico",
    email: "pedrolunatico@email.com",
    enrollmentDate: "2024-09-15",
    active: false,
    level: "advanced",
  });

  patchStudent(4, { active: false });

  deleteStudent(5);
};

// CODE EXECUTION
tests();
