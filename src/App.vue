<template>
  <div id="app">
    <nav class="nav">
      <div class="nav--container max-width">
        <router-link to="/">Eugene Rayner</router-link>
        <router-link to="/creations">Creations</router-link>
        <router-link to="/design">Design</router-link>
        <router-link to="/code">Code</router-link>
        <!-- <router-link to="/Blog">Blog</router-link> -->
        <!-- <router-link to="/about">About</router-link> -->
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
    <router-view/>

  </div>
</template>

