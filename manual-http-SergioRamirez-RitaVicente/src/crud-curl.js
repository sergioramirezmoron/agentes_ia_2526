import dotenv from "dotenv";
dotenv.config();

const baseUrl = `${process.env.API_BASE_URL}:${process.env.PORT}/students`;
console.log(baseUrl);

/**
 * Create an student with an object
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Object} studentData - Student that we want to create
 * @return - A curl command to create a new student
 */
const createStudent = (studentData = {}) => {
  const curl = `curl -X POST ${baseUrl} \
  -H "Content-Type: application/json" \
  -d '${JSON.stringify(
    studentData
  )}'`;
  console.log("Create student:\n", curl);
};
/**
 * Read all students
 * @autor - Sergio Ramírez & Rita Vicente
 * @return - A curl command with all students
 */
const readAllStudents = () => {
  const curl = `curl -X GET ${baseUrl}`;
  console.log("Students:", curl);
};
/**
 * Read a student with the id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student id that we want to read
 * @return - A curl command to read a student
 */
const readStudentById = (id = 1) => {
  const curl = `curl -X GET ${baseUrl}/${id}`;
  console.log(`Student by Id(${id}):`, curl);
};
/**
 * Update an student with an object and id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to update
 * @param {Object} studentData - Student that we want to update
 * @return - A curl command to update a student
 */
const updateStudent = (id = 1, studentData = {}) => {
  const curl = `curl -X PUT ${baseUrl}/${id} \
  -H "Content-Type: application/json" \
  -d '${JSON.stringify(
    studentData
  )}'`;
  console.log(`Updated Student (${id}):`, curl);
};
/**
 * Patch a student with an object and id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to patch
 * @param {Object} partialData - Student that we want to patch
 * @return - A curl command to patch a student
 */
const patchStudent = (id = 1, partialData = {}) => {
  const curl = `curl -X PATCH ${baseUrl}/${id} \
  -H "Content-Type: application/json" \
  -d '${JSON.stringify(
    partialData
  )}'`;
  console.log(`Patched Student (${id}):`, curl);
};
/**
 * Delete a student with an object
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to delete
 * @return - A curl command to delete a student
 */
const deleteStudent = (id = 1) => {
  const curl = `curl -X DELETE ${baseUrl}/${id}`;
  console.log(`Deleted Student (${id}):`, curl);
};

const scripts = () => {
  console.log("=== CRUD Students API ===\n");
console.log("=== CREATE ===");
  createStudent({
    id: 8,
      name: "Juan Cevilla",
      email: "juanchi@email.com",
      enrollmentDate: "2024-09-15",
      active: true,
      level: "begginer"
  });
  console.log("=== READ ALL ===");
  readAllStudents();
  console.log("=== READ BY ID ===");
  readStudentById(3);
  console.log("=== UPDATE ===");
  updateStudent(3, {
    id: 3,
      name: "Pedro Lunatico",
      email: "pedrolunatico@email.com",
      enrollmentDate: "2024-09-15",
      active: false,
      level: "advanced"
  });
  console.log("=== PATCH ===");
  patchStudent(4, { active: true });
  console.log("=== DELETE ===");
  deleteStudent(5);

  console.log("=== FIN DEL SCRIPT ===");
};

// CODE EXECUTION
scripts();
