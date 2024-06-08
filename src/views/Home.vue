<template>
  <div id="home" class="mainContent--mobile">
    <!-- logo n stuff goes here -->
    <header class="max-width homepageHeader">
      <h1>Hey! I'm Eugene.</h1>
      <h2>I'm a Product Designer, UX Designer, Front End Developer &amp; Creative.</h2>
      <p>I have 10 years experience in delivering end-to-end UX/UI design & Front End Development for web &amp; software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.</p>
    </header>

    <main class="max-width" style="display: flex; flex-direction: column; gap: 48px;">
      <section style="display: flex; flex-direction: column; gap: 16px;">
        <!-- Projects -->
        <h3 style="font-weight: 500;">Recent Professional Projects</h3>
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <Project
            v-for="(project, index) in professionalProjects"
            :key="'project-' + index"
            :img="project.img"
            :link="project.link"
          />
        </div>
      </section>

      <section style="display: flex; flex-direction: column; gap: 16px;">
        <h3 style="font-weight: 500;">Recent Side Projects</h3>
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <!-- Projects -->
          <Project
            v-for="(project, index) in personalProjects"
            :key="'project-' + index"
            :img="project.img"
            :link="project.link"
          />
        </div>
      </section>
    </main>
  </div>
</template>


<script>
import Project from "@/components/Project.vue";
import Me from "@/assets/me.svg";
import Velocity from "@/assets/velocity.png";
import Freejoas from "@/assets/freejoas.png";
import BoysNight from "@/assets/boys-night.png";
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
          img: BoysNight,
          link: "boys-night",
        },
      ],
    };
  },
};
</script>