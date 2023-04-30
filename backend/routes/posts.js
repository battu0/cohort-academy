const postService = require("../service/post-service")

const router = require("express").Router()

router.get("/", async (req, res) => {
  res.send(postService.find())
})

router.post("/", async (req, res) => {
  const post = await postService.insert(req.body)
  res.send(post)
})
