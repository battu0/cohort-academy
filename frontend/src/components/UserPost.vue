<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="post">
    <div class="post">
      <div class="post__header">
        <div class="post__author-logo">{{ post.avatar }}</div>
        <div class="post__author-name">{{ post.name }}</div>
        <div class="post__author-slug">{{ post.username }}</div>
        <div class="post__publish-time">{{ post.publish_time }}</div>
      </div>
      <div class="post__main">
        <h3 class="post__title">{{ post.post_title }}</h3>
        <div class="post__content">{{ post.content }}</div>
      </div>
    </div>
  </div>
</template>
<style>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.post {
  width: 728px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgb(117, 117, 117);
}

.post__header {
  display: flex;
  margin-bottom: 8px;
}

.post__author-logo,
.post__author-name,
.post__author-slug,
.post__publish-time {
  padding: 4px;
}

.post__author-slug,
.post__publish-time {
  color: rgb(117, 117, 117);
}

.post__author-slug::after {
  content: "•";
  padding-left: 4px;
}

.post__main {
  margin-bottom: 8px;
}

.post__title {
  font-weight: 600;
  font-size: 24px;
}

.post__content {
  padding: 8px 0;
  font-weight: 400;
  line-height: 140%;
}
</style>
