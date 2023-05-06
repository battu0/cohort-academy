const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  username: String,
  publishTime: String,
  postTitle: String,
  content: String,
})

module.exports = mongoose.model("Post", postSchema)
