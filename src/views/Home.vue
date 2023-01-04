<template>
  <div id="home" class="mainContent--mobile">
    <!-- logo n stuff goes here -->
    <header class="max-width homepageHeader">
      <h1>Hey! I'm Eugene</h1>
      <h2>I'm a UX Designer, Javascript Nerd &amp; Musician</h2>
      <p>
        I'm a UX Designer based in Auckland, New Zealand with experience in
        delivering end-to-end UX/UI design for software products. I'm passionate
        about improving the lives of others through design and am constantly
        looking to learn new things everyday.
      </p>
    </header>

    <main class="max-width">
      <!-- Projects -->
      <h3 style="margin-bottom: 16px">MY RECENT WORK</h3>
      <Project
        v-for="(project, index) in projects"
        :key="'project-' + index"
        :img="project.img"
        :link="project.link"
      />
    </main>
  </div>
</template>


<script>
import Project from "@/components/Project.vue";
import Me from "@/assets/me.svg";
import Velocity from "@/assets/velocity.png";
import POSForecasting from "@/assets/pos-forecasting/pos-forecasting.png";


export default {
  name: "Home",
  components: {
    Project,
  },
  data() {
    return {
      me: Me,
      projects: [
        {
          img: Velocity,
          link: "velocity-crm",
        },
        {
          img: POSForecasting,
          link: "point-of-sale-forecasting",
        },
      ],
    };
  },
};
</script>