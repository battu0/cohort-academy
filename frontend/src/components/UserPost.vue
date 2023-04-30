<script setup>
const post = {
  name: 'Michael',
  username: 'jordan23',
  publishTime: '22hr',
  content: 'This is a message from Jordan.'
}

</script>

<template>
  <div class="post">
    <img class="post__author-logo" src="../assets/images/image_woman_1.jpg" />
    <div class="post__main">
      <div class="post__header">
        <div class="post__author-name">{{ post.name }}</div>
        <div class="post__author-username">@{{ post.username }}</div>
        <div class="post__publish-time">{{ post.publishTime }}</div>
      </div>
      <div class="post__content">{{ post.content }}</div>
        <div class="post__buttons">
        <a class="post__button-link" href="#"><button class="post__ask-question post__ask-question--passive">Ask Question</button></a>
        <a class="post__button-link" href="#"><button class="post__apply-here post__apply-here--passive">Apply here</button></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  justify-content: center;
  background-color: #080808;
  border-bottom: 1px solid #F6F6F6;
  margin-bottom: 0.2rem;
  padding-right:10px;
  padding-left: 10px;
}

.post:hover {
  background-color: #080808;
  opacity: 80%;
  cursor: pointer;
}

.post__author-logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: 0.3rem;
  margin-right: 1rem;
}

.post__header {
  display: flex;
  border: 1px solid whitesmoke
}

.post__author-name {
  font-size: 16px;
  font-weight: 400;
  color: #E2E2E2;
  padding: 4px 0;
  margin-right: 0.5rem;
}

.post__author-username {
  font-size: 16px;
  font-weight: 400;
  color: #E2E2E2;
  opacity: 60%;
  padding: 4.5px 0;

}

.post__publish-time {
  font-size: 16px;
  font-weight: 400;
  margin-left: 0.5rem;
  color: #E2E2E2;
  opacity: 60%;
  padding: 6px 0;
}

.post__content {
  font-size: 16px;
  font-weight: 400;
  color: #F6F6F6;
  padding-top: 8px;
  padding-bottom: 24px;
  margin-bottom: 32px;
}

.post__buttons {
  display: flex;
  justify-content: right;
  width: 100%;
  padding-bottom: 8px;
}

.post__ask-question {
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
}

.post__ask-question--passive {
  background-color: #5F6E72;
  color: #080808;
}
.post__ask-question:hover {
  background-color: #101212;
  color: #5F6E72;
}
.post__apply-here {
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #080808;
  letter-spacing: 2;
  margin-left: 8px;
  border: none;
  border-radius: 8px;
}
.post__apply-here--passive {
  background-color: #778A8F;
  color: #080808;
}
.post__apply-here:hover {
  background-color: #101212;
  color: #5F6E72;
}
</style>