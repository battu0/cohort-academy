const app = require("../..")
const request = require("supertest")(app)

describe("get to see", () => {
  test("a student", async () => {
    await request.get("/students").expect(200)
  })

  test("students", async () => {
    const studentToCreated = {
      name: "foo",
    }

    const response = await request
      .post("/students")
      .send(studentToCreated)
      .expect(200)

    await request.get(`/students/${response.body._id}`).expect(200)
  })
})

describe("create and delete a student", () => {
  test("create a student", async () => {
    const studentToCreated = {
      name: "foo",
    }
    const response = await request
      .post("/students")
      .send(studentToCreated)
      .expect(200)
  })

  test("delete a student", async () => {
    const studentToCreated = {
      name: "foo",
    }

    const response = await request
      .post("/students")
      .send(studentToCreated)
      .expect(200)

    await request.delete(`/students/${response.body._id}`).expect(200)
  })
})
