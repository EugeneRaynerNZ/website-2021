<template>
  <div id="project" class="projectContent--mobile">
    <!-- logo n stuff goes here -->
    <header class="projectHeader projectHeaderBoysNight">
      <img :src="landing" />
    </header>

    <!-- Projects -->
    <main>
      <section class="max-width mainSection">
        <h1>Boys Night App Creation</h1>

        <div class="containerLeftRight">
            <div class="left">
                <h2>Overview</h2>
                <p>Boys Night is a native application used by those seeking to track their progress when playing games with friends.</p>
                <p>The goal of this project was to create an easy to use native application that could be used by close friends looking to improve in their gaming endeavours.</p>
            </div>
            <div class="right">
                <h2>Role</h2>
                <p><strong>Product Designer &amp; Front End Developer</strong></p>
                <p>UI Design, Prototyping, Testing and React Frontend</p>
                <p>April 2024 - Ongoing</p>
            </div>
        </div>
      </section>

      <section class="bg">
        <div class="max-width">
            <h1>Background</h1>
            <p>Every Thursday, my friends and I have been competing in an event that we call "Boys Night". We play competitive sports such as Golf, Pool and Tennis.</p>
            <p class="exerpt">I am the founder of Boys Night</p>
            <p>I've always been into creating great products that solve a problem. Boys Night came to me when my friends and I struggled to keep records of our scores in a singular place.</p>
            <p>The need for an application to track progress between friends also needed to be:</p>
            <ul>
                <li><strong>Easy to use.</strong> Able to enter data in quickly and efficiently</li>
                <li><strong>Store results locally.</strong> Ability to view results from previous weeks.</li>
                <li><strong>Review data-driven results.</strong> Results can be viewed in text or graph form.</li>
            </ul>
        </div>
      </section>

      <section class="max-width creative">

        <div class="creative--container">
          <h1>Brand & Logo Design</h1>
          <p>Boys Night needs to be friendly and familiar. Give the sense of fun and excitement. A free and easy way to track games between friends.</p>
        </div>

        <div class="creative--container">
          <h2>Illustrations</h2>
          <div class="img--container"><img :src="sketches" alt="Freejoas Sketches"></div>
        </div>

        <div class="creative--container">
          <h2>Colour Palette</h2>
          <div class="img--container" style="display: flex; flex-direction: column; gap: 32px;">
            <div>
              <h3 style="margin-bottom: 16px">Primary Colour</h3>
              <img :src="colourPaletteA" alt="Primary Colour">
            </div>
            <div>
              <h3 style="margin-bottom: 16px">Secondary Colour</h3>
              <img :src="colourPaletteB" alt="Secondary Colour">
            </div>
          </div>
        </div>

        <div class="creative--container">
          <h2>Fonts</h2>
          <div class="img--container" style="display: flex; flex-direction: column; gap: 32px;">
            <div style="display: flex; flex-direction: column; gap: 32px">
              <div style="display: flex; flex-direction: column; gap: 16px">
                <h2 class="source-sans font-heading">Source Sans</h2>
                <h3 class="source-sans font-subheading">The quick brown fox jumps over the lazy dog</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 16px">
                <div class="source-sans letters--container">
                  <div class="letter uppercase">A</div>
                  <div class="letter uppercase">B</div>
                  <div class="letter uppercase">C</div>
                  <div class="letter uppercase">D</div>
                  <div class="letter uppercase">E</div>
                  <div class="letter uppercase">F</div>
                  <div class="letter uppercase">G</div>
                  <div class="letter uppercase">H</div>
                  <div class="letter uppercase">A</div>
                  <div class="letter uppercase">I</div>
                  <div class="letter uppercase">J</div>
                  <div class="letter uppercase">K</div>
                  <div class="letter uppercase">L</div>
                  <div class="letter uppercase">M</div>
                  <div class="letter uppercase">N</div>
                  <div class="letter uppercase">O</div>
                  <div class="letter uppercase">P</div>
                  <div class="letter uppercase">Q</div>
                  <div class="letter uppercase">R</div>
                  <div class="letter uppercase">S</div>
                  <div class="letter uppercase">T</div>
                  <div class="letter uppercase">U</div>
                  <div class="letter uppercase">V</div>
                  <div class="letter uppercase">W</div>
                  <div class="letter uppercase">X</div>
                  <div class="letter uppercase">Y</div>
                  <div class="letter uppercase">Z</div>
                </div>
                <div class="arima letters--container">
                  <div class="letter lowercase">A</div>
                  <div class="letter lowercase">B</div>
                  <div class="letter lowercase">C</div>
                  <div class="letter lowercase">D</div>
                  <div class="letter lowercase">E</div>
                  <div class="letter lowercase">F</div>
                  <div class="letter lowercase">G</div>
                  <div class="letter lowercase">H</div>
                  <div class="letter lowercase">A</div>
                  <div class="letter lowercase">I</div>
                  <div class="letter lowercase">J</div>
                  <div class="letter lowercase">K</div>
                  <div class="letter lowercase">L</div>
                  <div class="letter lowercase">M</div>
                  <div class="letter lowercase">N</div>
                  <div class="letter lowercase">O</div>
                  <div class="letter lowercase">P</div>
                  <div class="letter lowercase">Q</div>
                  <div class="letter lowercase">R</div>
                  <div class="letter lowercase">S</div>
                  <div class="letter lowercase">T</div>
                  <div class="letter lowercase">U</div>
                  <div class="letter lowercase">V</div>
                  <div class="letter lowercase">W</div>
                  <div class="letter lowercase">X</div>
                  <div class="letter lowercase">Y</div>
                  <div class="letter lowercase">Z</div>
                </div>
              </div>
              <div class="arima letters--container">
                <div class="letter lowercase">1</div>
                <div class="letter lowercase">2</div>
                <div class="letter lowercase">3</div>
                <div class="letter lowercase">4</div>
                <div class="letter lowercase">5</div>
                <div class="letter lowercase">6</div>
                <div class="letter lowercase">7</div>
                <div class="letter lowercase">8</div>
                <div class="letter lowercase">9</div>
                <div class="letter lowercase">0</div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 32px">
              <div style="display: flex; flex-direction: column; gap: 16px">
                <h2 class="roboto font-heading">Roboto</h2>
                <h3 class="roboto font-subheading">The quick brown fox jumps over the lazy dog</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 16px">
                <div class="roboto letters--container">
                  <div class="letter uppercase">A</div>
                  <div class="letter uppercase">B</div>
                  <div class="letter uppercase">C</div>
                  <div class="letter uppercase">D</div>
                  <div class="letter uppercase">E</div>
                  <div class="letter uppercase">F</div>
                  <div class="letter uppercase">G</div>
                  <div class="letter uppercase">H</div>
                  <div class="letter uppercase">A</div>
                  <div class="letter uppercase">I</div>
                  <div class="letter uppercase">J</div>
                  <div class="letter uppercase">K</div>
                  <div class="letter uppercase">L</div>
                  <div class="letter uppercase">M</div>
                  <div class="letter uppercase">N</div>
                  <div class="letter uppercase">O</div>
                  <div class="letter uppercase">P</div>
                  <div class="letter uppercase">Q</div>
                  <div class="letter uppercase">R</div>
                  <div class="letter uppercase">S</div>
                  <div class="letter uppercase">T</div>
                  <div class="letter uppercase">U</div>
                  <div class="letter uppercase">V</div>
                  <div class="letter uppercase">W</div>
                  <div class="letter uppercase">X</div>
                  <div class="letter uppercase">Y</div>
                  <div class="letter uppercase">Z</div>
                </div>
                <div class="roboto letters--container">
                  <div class="letter lowercase">A</div>
                  <div class="letter lowercase">B</div>
                  <div class="letter lowercase">C</div>
                  <div class="letter lowercase">D</div>
                  <div class="letter lowercase">E</div>
                  <div class="letter lowercase">F</div>
                  <div class="letter lowercase">G</div>
                  <div class="letter lowercase">H</div>
                  <div class="letter lowercase">A</div>
                  <div class="letter lowercase">I</div>
                  <div class="letter lowercase">J</div>
                  <div class="letter lowercase">K</div>
                  <div class="letter lowercase">L</div>
                  <div class="letter lowercase">M</div>
                  <div class="letter lowercase">N</div>
                  <div class="letter lowercase">O</div>
                  <div class="letter lowercase">P</div>
                  <div class="letter lowercase">Q</div>
                  <div class="letter lowercase">R</div>
                  <div class="letter lowercase">S</div>
                  <div class="letter lowercase">T</div>
                  <div class="letter lowercase">U</div>
                  <div class="letter lowercase">V</div>
                  <div class="letter lowercase">W</div>
                  <div class="letter lowercase">X</div>
                  <div class="letter lowercase">Y</div>
                  <div class="letter lowercase">Z</div>
                </div>
              </div>
              <div class="roboto letters--container">
                <div class="letter lowercase">1</div>
                <div class="letter lowercase">2</div>
                <div class="letter lowercase">3</div>
                <div class="letter lowercase">4</div>
                <div class="letter lowercase">5</div>
                <div class="letter lowercase">6</div>
                <div class="letter lowercase">7</div>
                <div class="letter lowercase">8</div>
                <div class="letter lowercase">9</div>
                <div class="letter lowercase">0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg">
        <div class="max-width">
          <h1>Prototyping</h1>
          <p>I like to create Figma prototypes as a point of reference so that I can refer back to what I am wanting to create at a glance while I code the project.</p>
          <p>Sometimes I like to create these prototypes in a way which show animation which allow others greater visibility over what I am wanting to create.</p>
          <iframe width="100%" height="925" style="max-width: 800px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FT9Rfeh6cCidjQpFoAActWy%2FFreejoas%3Fpage-id%3D3%253A3%26node-id%3D701-212%26viewport%3D-7669%252C-5021%252C0.25%26t%3DLSuMjRolmLfxYzlb-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D701%253A212" allowfullscreen></iframe>
        </div>
      </section>

      <section class="max-width">
        <h1>Creating a working version</h1>
        <p>I began by building a simple Front End using <a target="_blank" href="https://react.dev">React Native</a>. I want Boys Night to be available on both Android and Apple devices.</p>
        <p>Boys Night functionality is nothing out of the ordinary. I opted to use <a target="_blank" href="https://expo.dev">Expo</a> to create the application on both Android and Apple devices.</p>
        <p>I chose React Native as it is something I am still learning and wanted to learn while also creating.</p>
        <p>I also chose to use <a target="_blank" href="https://sass-lang.com">Sass</a> - a preprocessor for CSS which makes it easier to:</p>
        <ul>
          <li>Create stylesheets and control the cascading effect of CSS.</li>
          <li>Easier to create hover states and animations.</li>
          <li>Scalable for future development - incase I want to branch out to more types of fruit.</li>
        </ul>
        <!-- <p>You can checkout the working version by visiting <a target="_blank" href="https://www.freejoas.com">www.freejoas.com</a>. I recommend you use your mobile phone to open the app for a cleaner experience. The project is still a work in progress.</p> -->
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
import Landing from "@/assets/boys-night/landing.png";

import Sketches from "@/assets/boys-night/creative-illustrations.png";
import ColourPaletteA from "@/assets/boys-night/primary-colour.png";
import ColourPaletteB from "@/assets/boys-night/secondary-colour.png";

export default {
  name: "Boys Night",
  data() {
    return {
      landing: Landing,
      sketches: Sketches,
      colourPaletteA: ColourPaletteA,
      colourPaletteB: ColourPaletteB,
    };
  },
};
</script>