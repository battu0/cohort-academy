<script setup>
import { ref, onMounted } from "vue"
import NavBar from "../components/NavBar.vue"
import UserPost from "../components/UserPost.vue"
import PostService from "../services/PostService"
const posts = ref(null)

onMounted(() => {
  PostService.getPosts()
    .then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <NavBar />
  <UserPost v-for="post in posts" :key="post._id" :post="post" />
</template>

<style scoped></style>
