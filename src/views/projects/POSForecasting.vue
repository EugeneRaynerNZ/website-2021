<template>
  <div id="project" class="projectContent--mobile pos-forecasting">
    <!-- logo n stuff goes here -->
    <header class="projectHeader">
      <img :src="posForecasting" />
    </header>

    <!-- Projects -->
    <main>
      <section class="max-width mainSection">
        <h1>Point of Sale (POS) Forecasting</h1>

        <div class="containerLeftRight">
            <div class="left">
                <h2>Overview</h2>
                <p>Forecasting profits &amp; usage in the Utilities space has always been a nusance to say the least.</p>
                <p>The goal of this project was to transform the way in which companies forecast </p>
            </div>
            <div class="right">
                <h2>Role</h2>
                <p><strong>UX/UI Designer</strong></p>
                <p>Product Research, User Research, Prototyping and User Testing</p>
                <p>Dec 2021 - Nov 2022</p>
            </div>
        </div>
      </section>

      <section class="bg">
        <div class="max-width">
            <h1>Background</h1>
            <p>Gentrack is a globally recognised utilities company, currently aimed at transforming the way in which utilities are managed. Velocity is one of their products. <a href="https://gentrack.com/" target="_blank">Learn more about what Gentrack does.</a></p>
            <p class="exerpt">I am the sole UX designer </p>
            <p>I joined Gentrack as a Senior UX Designer back in October of 2021. The landscape back then was ___ to say the least. Tasked with redesigning their biggest revenue gain, I set out to work.</p>
            <p>I've grown tremendously over the past year, some key achievements of which I have listed below:</p>
            <ul>
                <li><strong>Improved usability across the platform.</strong> Time On Task, Less Clicks, Holistic view of the customer</li>
                <li><strong>Established a component library.</strong> It is used daily to export from Figma to front end components</li>
                <li><strong>On-site usability tests with our customers.</strong> </li>
                <li><strong>Our salespeople are proud of the product.</strong></li>
            </ul>
        </div>
      </section>

      <section class="max-width">
        <h1>Understanding the problem</h1>
        <p>Velocity has been around for the past 35 years. It's aim is to help utility companies manage business processes.</p>
        <div class="img--container"><img :src="uiClassic1" alt="Velocity Classic"></div>
        <div class="img--container"><img :src="uiClassic2" alt="Velocity Classic Drilled"></div>
        <p>Over the years, Velocity has had a tonne of growth. Business objectives had changed and so a reskin was built 6 years ago, named MobileUI, which aimed to be responsive and work on mobile devices.</p>
        <div class="img--container"><img :src="uiMobileUI1" alt="Velocity MobileUI"></div>
        <div class="img--container"><img :src="uiMobileUI2" alt="Velocity MobileUI Drilled"></div>
        <p>Problems began to arise with MobileUI as users found it more difficult to use, had more clicks to complete tasks, and overall found the software bland and boring.</p>
        <p>In 2021, plans formed for the newly founded UX team to look at the way in which users used our software.</p>
        <p>User Experience at Gentrack had never been looked at before. If you had asked anyone at our company what they thought our users used the software for, no one would have a <strong>definitive</strong> answer for you.</p>
      </section>

      <section class="bg">
        <div class="max-width">
        <h1>Gathering Insights</h1>
        <p>We started the process of gathering insights by going to our customers and asking them what they did most on our software.</p>
        <p>Pulse Energy were our prime contenders. We had a good working customer relationship so it was easy to get our foot in the door.</p>
        <p>Conducting User Interview on site at their premise in Auckland, we found the key journeys they were using the software for. We also found the key User Roles that their company had, and how each role played it's part in delivering their customers with meaningful experiences.</p>
        <p>My research encompassed:</p>
        <ul>
          <li>Understanding of user goals and needs.</li>
          <li>Unconvering pain points with existing users journeys.</li>
          <li>Mapping users mood while using the software.</li>
        </ul>
        <div class="img--container"><img :src="moodMap1" alt="Pulse Energy User Journey and Mood Map 1"></div>
        <div class="img--container"><img :src="moodMap2" alt="Pulse Energy User Journey and Mood Map 2"></div>
        </div>
      </section>
      

      <section class="max-width">
        <h1>Workshop &amp; UX Outcomes</h1>
        <div class="img--container"><img :src="workshopCanvas" alt="Workshop"></div>
        <p>Beginning in March, we began workshopping to understand how we could transform our old software into something that our company and our customers would have pride in using.</p>
        <p>Workshops were conducted over <strong>Teams</strong>, using <strong>Miro</strong>, as Gentrack's employees are spread out across the globe. Using a <strong>Lean UX approach</strong>, we were able to narrow down the fastest and best course of action to take to get <strong>Iteration One</strong> of MVP started.</p>
        <div class="img--container"><img :src="workshopHMW" alt="How Might We"></div>
        <p>Based off the workshop, we were able to narrow down what MVP1 might look like:</p>
        <ul>
          <li>Users have the ability to see a holistic view of the customer they are speaking with.</li>
          <li>Users take less time to complete a task.</li>
          <li>Users know where they are in the system and know what their next best action is.</li>
        </ul>
        <div class="img--container"><img :src="workshopProcess" alt="UX Process"></div> 
      </section>

      <section class="bg">
        <div class="max-width">
          <h1>Testing the current state</h1>
          <p>We prepped the current state of the User Interface by conducting unmoderated tests internally with users who had experience on the current platform.</p>
          <p>Knowing what the most common User Journeys were from our Pulse Energy workshops, I developed a test which we would replicate for the new User Interface that would be designed.</p>
          <div class="img--container"><img :src="uiMobileUITesting" alt="Current landscape"></div>
          <p>Doing this would make comparing our new User Interface with our old one much easier.</p>
        </div>
      </section>

      

      <!-- <section class="max-width">
        <h1>Wireframing the solution</h1>
        
        
      </section> -->

      <section class="max-width">
        <h1>Validating the designs</h1>
        <div class="img--container"><img :src="uiCurrent1" alt="The new design 1"></div>
        <div class="img--container"><img :src="uiCurrent2" alt="The new design 2"></div>
        <p>I conducted unmoderated usability tests via the platform <a href="https://www.usertesting.com/" target="_blank">usertesting.com</a>.</p>
        <p>I then compared the results between the old User Interface and the new User Interface and concluded:</p>
        <ul>
          <li>Users took X less time on average to complete a task</li>
          <li>Users knew where they were in the system</li>
          <li>Users knew what their next best action was</li>
        </ul>
      </section>

      <section class="bg">
        <div class="max-width">
        <h1>Developing the solution</h1>
        <p>I have a Front End Developer background and Gentrack did not have any front end developers.</p>
        <p>With my knowledge of CSS &amp; Javascript, I was asked to get the ball rolling while we found a full-time front end developer for the role. I was able to:</p>
        <ul>
          <li>Pull the styles out of Figma and create a <a href="https://lesscss.org/">LESS</a> design framework for the front end</li>
          <li>Restyle the content using Javascript</li>
          <li>Help out the backend developers with any questions they had about CSS or Javascript</li>
        </ul>
        </div>
      </section>

      <section class="max-width">
        <h1>Project results</h1>
        <p>The reskin of Velocity will be on-going for the next couple of years.</p>
        <p>So far, we have had <strong>two large companies</strong> see the User Interface and have <strong>signed up as new users</strong></p>
      </section>

    </main>
  </div>
</template>


<script>
import PosForecasting from "@/assets/pos-forecasting/pos-forecasting-example.png";

import UiCurrent1 from "@/assets/velocity/ui-current-1.png";
import UiCurrent2 from "@/assets/velocity/ui-current-2.png";
import UiClassic1 from "@/assets/velocity/ui-classic.png";
import UiClassic2 from "@/assets/velocity/ui-classic-drilled.png";
import UiMobileUI1 from "@/assets/velocity/ui-mobileui.png";
import UiMobileUI2 from "@/assets/velocity/ui-mobileui-drilled.png";

import WorkshopCanvas from "@/assets/velocity/workshop-canvas.png";
import WorkshopHMW from "@/assets/velocity/workshop-hmw.png";
import WorkshopProcess from "@/assets/velocity/workshop-process.png";
import InformationArchitecture from "@/assets/velocity/information-architecture.png";

import UiMobileUITesting from "@/assets/velocity/mobileUI-testing.png";

import MoodMap1 from "@/assets/velocity/mood-map-1.png";
import MoodMap2 from "@/assets/velocity/mood-map-2.png";

export default {
  name: "Project2",
  data() {
    return {
      posForecasting: PosForecasting,
      uiCurrent1: UiCurrent1,
      uiCurrent2: UiCurrent2,
      uiClassic1: UiClassic1,
      uiClassic2: UiClassic2,
      uiMobileUI1: UiMobileUI1,
      uiMobileUI2: UiMobileUI2,
      workshopCanvas: WorkshopCanvas,
      workshopHMW: WorkshopHMW,
      workshopProcess: WorkshopProcess,
      informationArchitecture: InformationArchitecture,
      moodMap1: MoodMap1,
      moodMap2: MoodMap2,
      uiMobileUITesting: UiMobileUITesting
    };
  },
};
</script>