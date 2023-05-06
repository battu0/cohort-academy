<template>
  <div class="posts">
    <div class="post">
      <div class="post__header">
        <div class="post__author-logo">{{ post.logo }}</div>
        <div class="post__author-name">{{ post.name }}</div>
        <div class="post__author-slug">{{ post.slug }}</div>
        <div class="post__publish-time">{{ post.publish_time }}</div>
      </div>
      <div class="post__main">
        <h3 class="post__title">{{ post.title }}</h3>
        <div class="post__content">{{ post.content }}</div>
      </div>
    </div>
    <!-- <div class="post">
      <div class="post__header">
        <div class="post__author-logo">Logo</div>
        <div class="post__author-name">Ben Mishali</div>
        <div class="post__author-slug">@benmishali</div>
        <div class="post__publish-time">14min</div>
      </div>
      <div class="post__main">
        <h3 class="post__title">Post Title</h3>
        <div class="post__content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sit
          voluptatem dolores adipisci expedita officia voluptatibus fuga est
          ullam et. Laboriosam praesentium ad nulla dolores quibusdam
          dignissimos necessitatibus temporibus ipsa.
        </div>
      </div>
    </div> -->
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
