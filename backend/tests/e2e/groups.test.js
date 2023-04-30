const app = require("../..")
const request = require("supertest")(app)

describe("get to see", () => {
  test("a group", async () => {
    await request.get("/groups").expect(200)
  })

  test("groups", async () => {
    const groupToCreated = {
      name: "foo",
    }

    const response = await request
      .post("/groups")
      .send(groupToCreated)
      .expect(200)

    await request.get(`/groups/${response.body._id}`).expect(200)
  })
})

describe("create and delete a group", () => {
  test("create a group", async () => {
    const groupToCreated = {
      name: "foo",
    }
    const response = await request
      .post("/groups")
      .send(groupToCreated)
      .expect(200)
  })

  test("delete a group", async () => {
    const groupToCreated = {
      name: "foo",
    }

    const response = await request
      .post("/groups")
      .send(groupToCreated)
      .expect(200)

    await request.delete(`/groups/${response.body._id}`).expect(200)
  })
})
