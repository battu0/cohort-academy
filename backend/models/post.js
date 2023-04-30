const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
  name: String,
  username: String,
  publishTime: String,
  content: String,
})

module.export = mongoose.model("Post", postSchema)
