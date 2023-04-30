<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HomeView from "./views/HomeView.vue"
</script>

<template>
  <header class="navbar">
    <div class="navbar__company-meta">
      <img
        id="navbar__company-logo"
        class="navbar__company-logo"
        src="./assets/images/logo.svg"
      />
      <label for="navbar__company-logo" class="navbar__company-name"
        >kurs</label
      >
    </div>
    <nav class="navbar__menu-block">
      <ul class="navbar__menus">
        <li class="navbar__menu">
          <a class="navbar__menu-link" href="#">Subjects</a>
        </li>
        <li class="navbar__menu">
          <a class="navbar__menu-link" href="#">Courses</a>
        </li>
      </ul>
    </nav>
    <div class="navbar__button-group">
      <a class="navbar__button-link" href="#"
        ><button class="navbar__sign-in navbar__sign-in--passive">
          SIGN IN
        </button></a
      >
      <a class="navbar__button-link" href="#"
        ><button class="navbar__get-started navbar__get-started--passive">
          GET STARTED
        </button></a
      >
    </div>
  </header>
  <div class="layout">
    <div class="layout__left-sidebar"></div>
    <div class="layout__main">
      <HomeView />
    </div>
    <div class="layout__right-sidebar-container">
      <div class="layout__right-sidebar"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap");

/* navbar */
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  background-color: #837474;
}

.navbar__company-meta {
  cursor: pointer;
}

.navbar__company-logo {
  padding-top: 10px;
  padding-right: 4px;
  padding-left: 4px;
  margin-left: 5px;
  margin-bottom: -10px;
}

.navbar__company-name {
  font-size: 24;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: 3px;
  color: #4c585b;
  display: inline-block;
  padding-left: 4px;
  padding-bottom: 10px;
  padding: 10px;
}

.navbar__menus {
  list-style: none;
}

.navbar__menu {
  font-size: 24;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 2px;
  display: inline-block;
  padding: 0px 16px;
}

.navbar__menu-link {
  text-decoration: none;
  color: #494949;
}

.navbar__button-group {
  margin-left: auto;
  margin-right: 1em;
}

.navbar__button-link {
  padding: 10px;
}
.navbar__sign-in {
  font-size: 24;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 2px;
  padding: 10px;
  border-radius: 8px;
}

.navbar__get-started {
  box-sizing: border-box;
  font-size: 24;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 2px;
  padding: 10px;
  border-radius: 8px;
}

.navbar__sign-in--passive {
  background-color: #252b2a;
  color: #bad7df;
  border: none;
}
.navbar__get-started--passive {
  background-color: transparent;
  border: 1px solid #252b2a;
  color: #494949;
}

.navbar__sign-in:hover {
  background-color: #bad7df;
  color: #252b2a;
}

.navbar__get-started:hover {
  background-color: #bad7df;
  color: #494949;
  border: 1px solid #778a8f;
}

/* layout */
.layout {
  display: grid;
  grid-template-columns: 380px auto 380px;
  margin: 0 auto;
}

.layout__main {
  display: flex;
  /* align-items: flex-end; */
  justify-content: center;
  min-height: 100vh;
}

.layout__right-sidebar {
  position: fixed;
}
</style>
