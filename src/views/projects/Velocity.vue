<template>
  <div id="project" class="projectContent--mobile">
    <!-- logo n stuff goes here -->
    <header class="projectHeader projectHeaderVelocity">
      <img :src="velocityLanding" />
    </header>

    <!-- Projects -->
    <main>
      <section class="max-width mainSection">
        <h1>Velocity platform redesign</h1>

        <div class="containerLeftRight">
            <div class="left">
                <h2>Overview</h2>
                <p>Velocity is a utilities platform used by many small and large businesses across the globe.</p>
                <p>The goal of this ongoing project is to identify usability issues, as well as align the branding to make the software easier to use.</p>
            </div>
            <div class="right">
                <h2>Role</h2>
                <p><strong>UX/UI Designer &amp; Front End Developer</strong></p>
                <p>User Research, Prototyping, Testing and Front End Coding</p>
                <p>2021 - 2024</p>
            </div>
        </div>
      </section>

      <section class="bg">
        <div class="max-width">
            <h1>Background</h1>
            <p>Gentrack is a globally recognised utilities company, currently aimed at transforming the way in which utilities are managed. Velocity is one of their products. <a href="https://gentrack.com/" target="_blank">Learn more about what Gentrack does.</a></p>
            <p class="exerpt">I was the sole UX designer on this project.</p>
            <p>I joined Gentrack as a Senior UX Designer back in October of 2021. Tasked with redesigning their biggest revenue gain, I set out to work.</p>
            <p>I've grown tremendously over the past 3 years, some key achievements of which I have listed below:</p>
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
          <li>Uncovering pain points with existing user journeys.</li>
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
        <p>Workshops were conducted over <strong>Teams</strong>, using <strong>Miro</strong>, as Gentrack's employees are spread out across the globe. Using a <strong>Lean UX</strong> approach, we were able to narrow down the fastest and best course of action to get <strong>Iteration One of the MVP</strong> started.</p>
        <div class="img--container"><img :src="workshopHMW" alt="How Might We"></div>
        <p>Based off the workshop, we were able to narrow down what MVP might look like:</p>
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
          <p>We prepared the current state of the user interface by conducting unmoderated tests internally with users who had experience on the current platform.</p>
          <p>Knowing what the most common User Journeys were from our Pulse Energy workshops, I developed a test which we would replicate for the new User Interface that would be designed.</p>
          <div class="img--container"><img :src="uiMobileUITesting" alt="Current landscape"></div>
          <p>Doing this would make comparing our new User Interface with our old one much easier.</p>
        </div>
      </section>

      <section class="max-width">
        <h1>Validating the designs</h1>
        <div class="img--container"><img :src="uiCurrent1" alt="The new design 1"></div>
        <!-- <div class="img--container"><img :src="uiCurrent2" alt="The new design 2"></div> -->
        <p>I conducted unmoderated usability tests via the platform <a href="https://www.usertesting.com/" target="_blank">usertesting.com</a>.</p>
        <p>I then compared the results between the old User Interface and the new User Interface and concluded:</p>
        <ul>
          <li>Users took <strong>25% less time on average</strong> to complete a task</li>
          <li>Users knew where they were in the system</li>
          <li>Users knew what their next best action was</li>
        </ul>
      </section>

      <!-- example of the new UI -->
      <!-- <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb0ZSSNtYsZPqTsvtCUyZaZ%2FNUI-Navigation-Baseline%3Fpage-id%3D0%253A1%26node-id%3D24-109347%26viewport%3D3720%252C1095%252C0.13%26t%3D9IO0BQSXVFfesEWV-1%26scaling%3Dscale-down%26starting-point-node-id%3D24%253A109347%26content-scaling%3Dfixed&hide-ui=1" allowfullscreen></iframe> -->

      <section class="bg">
        <div class="max-width">
          <h1>Developing the solution</h1>
          <p>I have a Front End Developer background and Gentrack did not have any front end developers.</p>
          <p>With my knowledge of CSS &amp; Javascript, I was able to:</p>
          <ul>
            <li>Take on the role of Lead Frontend Developer, with assistance from 3 Backend developers, completely reskin Velocity to look like the designs.</li>
            <li>Pull the styles out of Figma and create a <a href="https://lesscss.org/" target="_blank">LESS</a> design framework for the front end.</li>
            <li>Help out the backend developers with any questions they had about CSS or Javascript.</li>
          </ul>
        </div>
      </section>

      <section class="max-width">
        <h1>Ongoing UX projects</h1>
        <p>Velocity is an extremely large and complex piece of software. There are over 1000 screens that are generated across 17 different templates.</p>
        <p>During the three years that I worked on this project, I had the chance to research, define, design and test many features. Here are some honourable mentions.</p>
        <div class="tabs">
          <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{ 'active': activeTab === index }">
            {{ tab }}
          </div>
        </div>
        <div class="tab-content">
          <div v-for="(data, index) in tabData" v-show="activeTab === index" :key="index">
            <!-- Display your data for each tab here -->
            <h2>{{ data.title }}</h2>
            <p>{{ data.explanation }}</p>
            <p>We wanted these benefits for our users:</p>
            <ul>
                <li v-for="(need, i) in data.userNeeds" :key="i">{{ need }}</li>
            </ul>
            <p>And an example of what we tested:</p>
            <img style="max-width: 100%;" :src=data.image alt="Example Image">
          </div>
        </div>
      </section>

      <section class="bg">
        <div class="max-width">
          <h1>Project results</h1>
          <p>We have had <strong>incredibly positive feedback</strong> from internal stakeholders, as well as perspective customers.</p>
          <p>So far, we have had <strong>three large companies</strong> see the User Interface and have <strong>signed up as new users</strong></p>
        </div>
      </section>

    </main>
  </div>
</template>


<script>
import VelocityLanding from "@/assets/velocity/velocity-landing-2.png";

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

import OngoingUXProjectLaunchpad from "@/assets/velocity/ongoing-ux-projects/launchpad.png";
import OngoingUXProjectHelp from "@/assets/velocity/ongoing-ux-projects/help-center.png";
import OngoingUXProjectLogin from "@/assets/velocity/ongoing-ux-projects/login.png";
import OngoingUXProjectActivityLog from "@/assets/velocity/ongoing-ux-projects/activity-log.png";

export default {
  name: "Project1",
  data() {
    return {
      velocityLanding: VelocityLanding,
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
      uiMobileUITesting: UiMobileUITesting,
      activeTab: 0, // Index of the active tab
      tabs: ['Launchpad', 'Login Screen', 'Help Menu', 'Activity Log'], // Names of the tabs
      tabData: [ // Data for each tab
        {
          title: 'Launchpad',
          explanation: 'The Launchpad is essentially the starting screen for Velocity. The current Velocity Launchpad is extremely outdated.',
          userNeeds: [
            "The ability to easily find a customer who is calling",
            "The ability to see what tasks are assigned to them",
            "The ability to access the most commonly used actions, quickly."
          ],
          image: OngoingUXProjectLaunchpad,
        },
        {
          title: 'Login Screen',
          explanation: 'The login screen is the first screen a user lands on when they start their day. Our existing login screen is extremely outdated.',
          userNeeds: [
            "The ability to easily login to start their day",
            "Become inspired and moved by a beautiful landing page",
            "The ability to reset their passwords quickly and efficiently"
          ],
          image: OngoingUXProjectLogin,
        },
        {
          title: 'Help Menu',
          explanation: 'The utilities industry is extremely complex. The help menu is designed to help users wrap their head around Utility based concepts within Velocity.',
          userNeeds: [
            "Easily find help within the software.",
            "The ability to search for difficult utility-based subjects",
            "The option to look up frequenrtly asked questions"
          ],
          image: OngoingUXProjectHelp,
        },
        {
          title: 'Activity Log',
          explanation: 'An activity log was needed as a history of customer communications is extremely important.',
          userNeeds: [
            "Easily see what has happened on a customer's account",
            "Have a comprehensive understanding of a customer's account",
          ],
          image: OngoingUXProjectActivityLog,
        },
      ]
    };
  },
};
</script>

<style scoped>
  .tabs {
    display: flex;
  }
  .tabs div {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    background-color: #f9f9f9;
  }
  .tabs div.active {
    background-color: #fff;
  }
  .tab-content {
    border: 1px solid #ccc;
    border-radius: 0 5px 5px 5px;
    padding: 16px;
  }

  .tab-content p:last-child {
    margin-bottom: 0 !important;
  }
</style>