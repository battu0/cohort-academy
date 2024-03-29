const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const indexRouter = require("./routes/index")
const groupsRouter = require("./routes/groups")
const coursesRouter = require("./routes/courses")
const studentsRouter = require("./routes/students")
const instructorsRouter = require("./routes/instructors")
const enrollmentsRouter = require("./routes/enrollments")
const postsRouter = require("./routes/posts")
// require("./mongo-connection-test");
require("./mongo-connection")
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.set("view engine", "pug")

app.use("/", indexRouter)
app.use("/groups", groupsRouter)
app.use("/courses", coursesRouter)
app.use("/students", studentsRouter)
app.use("/instructors", instructorsRouter)
app.use("/enrollments", enrollmentsRouter)
app.use("/posts", postsRouter)

module.exports = app
