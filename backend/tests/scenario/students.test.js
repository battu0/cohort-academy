const app = require("../..")
const request = require("supertest")(app)
const studentService = require("../../service/student-service")

test("create students, one forms group, one joins and one quits", async () => {
  const studentToCreateOne = {
    name: "Selin",
  }

  const studentToCreateTwo = {
    name: "Sila",
  }

  const studentToCreateThree = {
    name: "Selen",
  }

  const responseOne = await request
    .post("/students")
    .send(studentToCreateOne)
    .expect(200)

  const responseTwo = await request
    .post("/students")
    .send(studentToCreateTwo)
    .expect(200)

  const responseThree = await request
    .post("/students")
    .send(studentToCreateThree)
    .expect(200)

  const studentCreatedOne = await studentService.find(responseOne.body._id)
  const studentCreatedTwo = await studentService.find(responseTwo.body._id)
  const studentCreatedThree = await studentService.find(responseThree.body._id)

  // one student forms, others join to a group
  const groupCreated = studentCreatedOne.form({ name: "Kale" })
  studentCreatedTwo.join(groupCreated)
  studentCreatedThree.join(groupCreated)

  // one student quits
  studentCreatedThree.quit(groupCreated)

  expect(groupCreated.members.length).toBe(2)
})
