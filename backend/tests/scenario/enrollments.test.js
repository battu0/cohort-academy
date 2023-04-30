const app = require("../..")
const courseService = require("../../service/course-service")
const enrollmentService = require("../../service/enrollment-service")
const groupService = require("../../service/group-service")
const request = require("supertest")(app)

test("create a new enrollment", async () => {
  const groupToCreate = {
    name: "Test Group#1",
  }

  const courseToCreate = {
    name: "Topology",
    subject: "Advanced Mathematics",
  }

  const enrollmentDate = "20 February, 2022"

  const groupResponse = await request
    .post("/groups")
    .send(groupToCreate)
    .expect(200)
  console.log(groupResponse.body)

  const courseResponse = await request
    .post("/courses")
    .send(courseToCreate)
    .expect(200)

  const enrollmentResponse = await request
    .post(`/groups/${groupResponse.body._id}/courses`)
    .send({
      courseId: courseResponse.body._id,
      enrollmentDate,
    })
    .expect(200)

  const enrollmentCreated = enrollmentResponse.body

  expect(enrollmentCreated).toMatchObject({
    group: groupResponse.body,
    course: courseResponse.body,
    enrollmentDate,
  })

  expect(enrollmentCreated.enrollments)
})

test.skip("should group drops course", async () => {
  const groupToCreate = {
    name: "Kizilcik",
  }

  const courseToCreate = {
    name: "Elementary Algebra",
    subject: "Mathematics",
  }

  const enrollmentDate = "20 February, 2022"

  const groupResponse = await request
    .post("/groups")
    .send(groupToCreate)
    .expect(200)

  const courseResponse = await request
    .post("/courses")
    .send(courseToCreate)
    .expect(200)

  const enrollmentResponse = await request
    .post(`/groups/${groupResponse.body._id}/courses`)
    .send({
      courseId: courseResponse.body._id,
      enrollmentDate,
    })
    .expect(200)

  const groupId = groupResponse.body._id
  const courseId = courseResponse.body._id

  const groupCreated = groupResponse.body
  const courseCreated = courseResponse.body

  const enrollmentCreated = await enrollmentService.enroll(
    groupId,
    courseId,
    enrollmentDate
  )
  console.log(groupCreated)
  // enrollmentCreated.drop({groupCreated, courseCreated})
})
