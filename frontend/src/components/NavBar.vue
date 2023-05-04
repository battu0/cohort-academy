<template>
  <ul class="navbar">
    <li class="navbar__item">
      <a href="#" class="navbar__item-link navbar__item-link--active">Home</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__item-link navbar__item-link" href="#">Subjects</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__item-link" href="#">Courses</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__item-link" href="#">Get Started</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__item-link" href="#">Sign In</a>
    </li>
  </ul>
</template>

<style>
@import "../assets/main.css";

.navbar__item {
  float: left;
  border-right: 1px solid #bbb;
}
.navbar__item:nth-last-of-type(-n + 2) {
  float: right;
}
.navbar__item:nth-last-child(2) {
  border-right: none;
}
.navbar__item-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar__item-link:hover {
  background-color: #111;
}

.navbar__item-link--active {
  background-color: #04aa6d;
}
</style>
