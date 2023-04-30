<script setup>
import UserPost from '../components/UserPost.vue'
</script>

<template>
  <main class="posts-container">
    <UserPost />
    <UserPost />
    <UserPost />
    <UserPost />
    <UserPost />
  </main>
</template>

<style scoped>
.posts-container {
  display: flex;
  flex-direction: column-reverse;
}
</style>
