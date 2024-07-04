<template>
    <div id="project" class="projectContent--mobile">
  
      <BackToTop />
  
      <!-- logo n stuff goes here -->
      <header class="projectHeader projectHeaderBoysNight">
        <img :src="landing" />
      </header>
  
      <!-- Projects -->
      <main>
        <section class="max-width mainSection">
          <h1>Up Skill Design & Development</h1>
  
          <div class="containerLeftRight">
              <div class="left">
                  <h2>Overview</h2>
                  <p>Upskill is a project designed to help users create a learning journey, track what they need to learn and review what they've learnt.</p>
                  <p>The goal of this project was to create an easy to use application that could be used by those who up skill, but find it difficult to know what to do next, and know what they have done.</p>
              </div>
              <div class="right">
                  <h2>Role</h2>
                  <p><strong>Product Designer</strong></p>
                  <p>Ideation and UX/UI Design</p>
                  <p>June 2024 - Ongoing</p>
              </div>
          </div>
        </section>
  
        <section class="bg">
          <div class="max-width">
              <h1>Background</h1>
              <p>My whole life I have been on a up-skilling journey. I am constantly learning new skills, and in the process, forgetting what I have learnt. </p>
              <p class="exerpt">I am the founder of Up Skill</p>
              <p>I've always been into creating great products that solve a problem. Up skill came to me when I was discussing up-skilling with friends on similar up-skill journeys.</p>
              <p>The need for an application to track learning progress towards a goal needs to be:</p>
              <ul>
                  <li><strong>Easy to use.</strong> Able to enter learnings quickly and efficiently</li>
                  <li><strong>AI-powered.</strong> Ability to quickly and efficiently create a learning journey.</li>
                  <li><strong>Learnt, Learning, Learn.</strong> Remind users what they have learnt, what they are currently learning and what they need to learn.</li>
              </ul>
            </div>
        </section>
  
        <section class="max-width">
  
            <h1>How it works</h1>
            <p>Upskill is not a place to enroll to learn something. It's a platform that uses AI to create a learning path, and allows users to track their progress towards a goal.</p>

            <h2 style="margin-top: 32px;">The initial setup</h2>
            <p>We ask our users to tell us what they want to learn. We then prompt the input to our Learning AI and ask it to create a learning path.</p>
            <p>With a learning path setup, we then ask the user to explain how familiar they are with the subject. Users do this initially by selecting 1 of 5 options. We use this later on.</p>
            <p>We then ask users to set a goal. This goal is used to gamify their learning. Users can set more learning goals in the future if you would like to.</p>

            <h2 style="margin-top: 32px;">Familiarity with the subject</h2>
            <p>Once an account is setup, we take the user to their dashboard where they are asked in more detail about their familiarity with the subject.</p>
            <p>We do this by asking our Learning AI to provide a series of questions about the subject from the learning level that the user seleted. </p>
            <p>This process allows us to tailor the learning experience from what the user currently knows.</p>

            <h2 style="margin-top: 32px;">The learning Dashboard</h2>
            <p>The user lands on a dashboard showing what task they need to do.</p>
            <p>Upskill splits a learning jounrey into Subjects, Topics and Tasks. Subjects exist inside of a Learning Journey, Topics exist inside of Subjects, and Tasks exist inside of Topics. Users tackle tasks.</p>
            <p>The dashboard also provides:</p>
            <ul>
                <li>Visual learning progress towards a topic, subject and overall learning journey</li>
                <li>Progress towards goals set by user</li>
                <li>Visual summary of what has been learnt and what the user needs to learn.</li>
            </ul>
        </section>
  
        <section class="bg">
          <div class="max-width">
            <h1>Prototyping</h1>
            <p>I like to create Figma prototypes as a point of reference so that I can refer back to what I am wanting to create at a glance while I code the project.</p>
            <h4 style="margin-bottom: 16px;">Website sign up</h4>
            <iframe width="100%" height="570" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnregVjTHWIyZGKIrsEYf2v%2FUpskiller%3Fpage-id%3D4103%253A842%26node-id%3D4103-843%26viewport%3D184%252C253%252C0.09%26t%3DrscVAueiVOkK9jbs-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D4103%253A843&hide-ui=1" allowfullscreen></iframe>
            <h4 style="margin-bottom: 16px; margin-top: 32px;">App onboarding</h4>
            <iframe width="100%" height="570" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnregVjTHWIyZGKIrsEYf2v%2FUpskiller%3Fpage-id%3D4103%253A1356%26node-id%3D4103-1511%26viewport%3D1464%252C523%252C0.18%26t%3DrEIUKQN1xOTDLJED-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D4103%253A1511&hide-ui=1" allowfullscreen></iframe>
          </div>
        </section>
  
        <section class="max-width">
            <h1>Creating a working version</h1>
            <p>I began by creating a quick landing page to drum up interest. <a href="https://up-skiller.netlify.app/" target="_blank">You can view the website here.</a></p>
            <p>The application is still in production. It is being built with some of the latest and greatest technologies; </p>
            <ul>
                <li><a href="https://vuejs.org/" target="_blank">Vue</a> and <a href="https://www.vuemastery.com/blog/the-future-of-vue-vapor-mode/" target="_blank">Vapor</a></li>
                <li><a href="https://expressjs.com/" target="_blank">Express.js</a> and <a href="https://feathersjs.com/" target="_blank">Feathers.js</a></li>
                <li>The <a href="https://up-skiller.netlify.app/" target="_blank">Current website</a> is built using <a href="https://react.dev/" target="_blank">React</a> and is a work in progress.</li>
            </ul>
        </section>
  
        <!-- <section class="bg">
          <div class="max-width">
            <h1>Project results</h1>
            <p>This is an on-going project. The release relys heavily on the season. I plan on releasing it to the public in January 2025.</p>
            <p>So far, I have had plenty of positive feedback from colleagues, friends, family and perspective employers. I welcome the feedback, be it positive or negative. I have a growth mindset, I want my app to perform at it's best when it is released.</p>
          </div>
        </section> -->
  
      </main>
    </div>
  </template>
  
  
<script>
import BackToTop from '../../components/BackToTop.vue';
import Landing from "@/assets/upskill/landing-page.png";
  
export default {
    name: "Up Skill Project",
    components: {
    BackToTop,
    },
    data() {
        return {
        landing: Landing,
        };
    },
};
</script>