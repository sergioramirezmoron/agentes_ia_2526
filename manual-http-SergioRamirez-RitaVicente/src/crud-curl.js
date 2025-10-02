import dotenv from "dotenv";
dotenv.config();

const baseUrl = `${process.env.API_BASE_URL}/${process.env.PORT}`;
console.log(baseUrl);

/**
 * Create an student with an object
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Object} studentData - Student that we want to create
 * @return - A curl command to create a new student
 */
const createStudent = (studentData = {}) => {};
/**
 * Read all students
 * @autor - Sergio Ramírez & Rita Vicente
 * @return - A curl command with all students
 */
const readAllStudents = () => {};
/**
 * Read a student with the id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student id that we want to read
 * @return - A curl command to read a student
 */
const readStudentById = (id = 1) => {};
/**
 * Update an student with an object and id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to update
 * @param {Object} studentData - Student that we want to update
 * @return - A curl command to update a student
 */
const updateStudent = (id = 1, studentData = {}) => {};
/**
 * Patch a student with an object and id
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to patch
 * @param {Object} partialData - Student that we want to patch
 * @return - A curl command to patch a student
 */
const patchStudent = (id = 1, partialData = {}) => {};
/**
 * Delete a student with an object
 * @autor - Sergio Ramírez & Rita Vicente
 * @param {Number} id - Student that we want to delete
 * @return - A curl command to delete a student
 */
const deleteStudent = (id = 1) => {};
