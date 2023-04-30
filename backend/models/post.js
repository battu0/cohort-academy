const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
  name: String,
  username: String,
  publishTime: String,
  content: String,
})

module.exports = mongoose.model("Post", postSchema)
