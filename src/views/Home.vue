<template>
  <div id="home" class="mainContent--mobile">
    <!-- logo n stuff goes here -->
    <header class="max-width homepageHeader">
      <h1>Hey! I'm Eugene.</h1>
      <h2>I'm a Product Designer, Front End Developer &amp; Creative.</h2>
      <p>I create products that solve problems through human-centered design patterns.</p>
    </header>

    <main class="max-width" style="display: flex; flex-direction: column; gap: 48px;">
      <section style="display: flex; flex-direction: column; gap: 16px;">
        <!-- Projects -->
        <h3 style="font-weight: 500;">Recent Projects</h3>
        <div class="project--img-container">
          <Project
            v-for="(project, index) in professionalProjects"
            :key="'project-' + index"
            :img="project.img"
            :link="project.link"
          />

          <!-- Side Projects -->
          <Project
            v-for="(project, index) in personalProjects"
            :key="'project-' + index"
            :img="project.img"
            :link="project.link"
          />
        </div>
      </section>

      <!-- <section style="display: flex; flex-direction: column; gap: 16px;">
        <h3 style="font-weight: 500;">Recent Side Projects</h3>
        <div class="project--img-container">
          
          
        </div>
      </section> -->
    </main>
  </div>
</template>


<script>
import Project from "@/components/Project.vue";
import Me from "@/assets/me.svg";
import Velocity from "@/assets/velocity.png";
import UpSkiller from "@/assets/upskiller.png";
import Freejoas from "@/assets/freejoas.png";
// import BoysNight from "@/assets/boys-night.png";
// import POSForecasting from "@/assets/pos-forecasting/pos-forecasting.png";


export default {
  name: "Home",
  components: {
    Project,
  },
  data() {
    return {
      me: Me,
      professionalProjects: [
        {
          img: Velocity,
          link: "velocity",
        },
        // {
        //   img: POSForecasting,
        //   link: "point-of-sale-forecasting",
        // },
      ],
      personalProjects: [
        {
          img: Freejoas,
          link: "freejoas",
        },
        {
          img: UpSkiller,
          link: "up-skill",
        },
      ],
    };
  },
};
</script>