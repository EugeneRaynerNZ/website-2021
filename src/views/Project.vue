<template>
  <div id="home">
    <!-- logo n stuff goes here -->
    <header>
      <img :src="img" />
    </header>

    <!-- Projects -->
    <main>
      <section class="max-width mainSection">
        <h1>Velocity platform redesign</h1>

        <div class="containerLeftRight">
            <div class="left">
                <h2>Overview</h2>
                <p>Velocity is a utilities platform used by many small and large businesses across the globe.</p>
                <p>The goal of this on-going project is to identify usability issues, as well as align the branding to make the software easier to use.</p>
            </div>
            <div class="right">
                <h2>Role</h2>
                <p><strong>UX/UI Designer &amp; Front End Developer</strong></p>
                <p>User Research, Prototyping, Testing and Front End Coding</p>
                <p>December 2021 - Ongoing</p>
            </div>
        </div>
      </section>

      <section style="background: rgba(0,0,0,0.2)">
        <div class="max-width">
            <h1>Background</h1>
            <p>Gentrack is a globally recognised utilities company, currently aimed at transforming the way in which utilities are managed. Velocity is one of their products. <a href="https://gentrack.com/" target="_blank">Learn more about what Gentrack does.</a></p>
            <p class="exerpt">I am half the design team at Gentrack.</p>
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
      </section>

      <section class="max-width">
        <h1>Gathering Insights</h1>
      </section>

      <section class="max-width">
        <h1>Workshop</h1>
      </section>

      <section class="max-width">
        <h1>Wireframing the solution</h1>
      </section>

      <section class="max-width">
        <h1>Validating the designs</h1>
      </section>

      <section class="max-width">
        <h1>Developing the solution</h1>
      </section>

      <section class="max-width">
        <h1>Results and takeaways</h1>
      </section>

    </main>
  </div>
</template>


<script>
import VelocityLanding from "@/assets/velocity-landing.png";

export default {
  name: "Project",
  data() {
    return {
      img: VelocityLanding,
    };
  },
};
</script>

<style scoped>
header {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f19b7d+0,f1a189+100 */
  background: #f19b7d; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f19b7d 0%,
    #f1a189 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #f19b7d 0%,
    #f1a189 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #f19b7d 0%,
    #f1a189 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f19b7d', endColorstr='#f1a189',GradientType=0 ); /* IE6-9 */

  display: flex;
  justify-content: center;
  align-items: center;
}

strong{
    font-weight: 400;
}

ul{
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

li{
    list-style-type: disc;
    font-weight: 200;
}

section{

}

section h1{
    font-size: 28px;
    margin-bottom: 32px;
}

section.mainSection h1{
    font-size: 40px;
}

section h2{
    font-size: 20px;
    margin-bottom: 16px;
}

p, li{
    line-height: 1.75;
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 16px;
}

section .containerLeftRight{
    display: flex;
}

section .containerLeftRight .left{
    flex: 0 0 70%;
    padding-right: 32px;
}

section .containerLeftRight .right{
    flex: 0 0 30%;
}

section .exerpt{
    margin-bottom: 16px;
    font-weight: 400;
    text-align: center;
    font-size: 28px;
}
</style>