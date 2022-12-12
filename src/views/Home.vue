<template>
  <div id="home">
    <!-- logo n stuff goes here -->
    <div>
      <header class="max-width">
        <Title :heading="'Hey! Nice to meet you. My name\'s Eugene'" />
        <h2>I'm a UX Designer, Javascript Nerd &amp; Musician</h2>
        <p>I'm a product designer based in Auckland, New Zealand with experience in delivering end-to-end UX/UI design for software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.</p>
      </header>
    </div>

    <main class="max-width">
      <!-- Projects -->
      <h3>MY RECENT WORK</h3>
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
import Title from "@/components/Title.vue";
import Project from "@/components/Project.vue";
import Me from "@/assets/me.svg";
import Velocity from "@/assets/velocity.png";

export default {
  name: "Home",
  components: {
    Title,
    Project
  },
  data() {
    return {
      me: Me,
      projects: [
        {
          img: Velocity, 
          link: 'velocity'
        },
        {
          img: Velocity, 
          link: 'project'
        },
        {
          img: Velocity, 
          link: 'pos-forecasting'
        }
      ]
    };
  },
};
</script>

<style>
#home {
  overflow-x: hidden;
}
.home-logo {
  display: flex;
  align-items: center;
  margin-top: 60px;
}
.home-logo--text {
  font-size: 151px;
  text-transform: uppercase;
  flex: 1;
}

#home main h2 {
  padding: 120px 0;
  font-weight: 100;
  font-size: 50px;
}

#me {
  /* position: absolute; */

  z-index: 3;
  width: 200px;
  height: 200px;
}

#me .st0 {
  fill: #5d58a5;
}
#me .st1 {
  fill: #ffffff;
}
#me .st2 {
  fill: #f9c5a2;
}
#me .st3 {
  fill: #cb936e;
}
#me .st4 {
  fill: #e8b69a;
}
#me .st5 {
  fill: #84663d;
}
#me .st6 {
  fill: #3b3b4c;
}
#me .st7 {
  fill: #30303d;
}
#me .st8 {
  fill: #e7eff8;
}
#me .st9 {
  fill: #f4e1d7;
}
#me .st10 {
  fill: #705433;
}
#me .st11 {
  fill: #5e59a5;
}
#me .st12 {
  fill: #a8886a;
}

.me2 {
  min-height: 200px;
  /* width: 99%;
    height: 99%; */
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#p1 {
  padding-top: 20px;
}
</style>