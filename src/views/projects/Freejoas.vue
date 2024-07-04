<template>
    <div id="project" class="projectContent--mobile">

      <BackToTop />
      <!-- logo n stuff goes here -->
      <header class="projectHeader projectHeaderFreejoas">
        <img :src="landing" />
      </header>
  
      <!-- Projects -->
      <main>
        <section class="max-width mainSection">
          <h1>Freejoas Design & Development</h1>
  
          <div class="containerLeftRight">
              <div class="left">
                  <h2>Overview</h2>
                  <p>Freejoas is a web application used by those seeking to exercise and find free tasty treats.</p>
                  <p>The goal of this project was to create an easy to use application that could be used by anyone looking for free Feijoas.</p>
              </div>
              <div class="right">
                  <h2>Role</h2>
                  <p><strong>Product Designer &amp; Front End Developer</strong></p>
                  <p>UI Design, Prototyping, Testing and React Frontend</p>
                  <p>January 2024 - Ongoing</p>
              </div>
          </div>
        </section>
  
        <section class="bg">
          <div class="max-width">
              <h1>Background</h1>
              <p>Freejoas is an application used by Kiwis with plans to expand with more free fruit, and to open to overseas users too. <a href="https://freejoas.com/" target="_blank">Checkout Freejoas on your mobile phone today</a></p>
              <p class="exerpt">I am the founder of Freejoas</p>
              <p>I've always been into creating great products that solve a problem. Freejoas came to me when I saw the price of Feijoas in supermarkets. I always wondered why people didn't find their own with the abundance that existed nearby.</p>
              <p>The need for an application to track free Feijoa trees also needed to be:</p>
              <ul>
                  <li><strong>Easy to use.</strong> Accessible to all walks of life.</li>
                  <li><strong>Feel like a game of hide and seek.</strong> Gamify it for families.</li>
                  <li><strong>Easily manage the status of Freejoas Trees.</strong> We don't want our users to be dissatisfied with the service.</li>
              </ul>
          </div>
        </section>
  
        <section class="max-width creative">

          <div class="creative--container">
            <h1>Brand & Logo Design</h1>
            <p>Freejoas needs to be friendly and familiar. Give the sense of walking in nature. Give the sense of fun and excitement. A free activity for families. A game of hide and seek.</p>
          </div>

          <div class="creative--container">
            <h2>Creative Illustrations</h2>
            <div class="img--container"><img :src="sketches" alt="Freejoas Sketches"></div>
          </div>

          <div class="creative--container">
            <h2>Logo Ideas</h2>
            <div class="img--container" style="gap: 32px; display: flex; flex-wrap: wrap;">
              <img :src="logo1" alt="Logo Idea 1">
              <img :src="logo2" alt="Logo Idea 2">
              <img :src="logo3" alt="Logo Idea 3">
              <img :src="logo4" alt="Logo Idea 4">
              <img :src="logo5" alt="Logo Idea 5">
              <img :src="logo6" alt="Logo Idea 6">
              <img :src="logo7" alt="Logo Idea 7">
              <img :src="logo8" alt="Logo Idea 8">
              <img :src="logo9" alt="Logo Idea 9">
            </div>
          </div>

          <div class="creative--container">
            <h2>Logo Options</h2>
            <div class="img--container" style="display: flex; flex-direction: row; gap: 32px; flex-wrap: wrap;">
              <div style="display: flex; flex-direction: column; gap: 16px">
                <h3>Option A</h3>
                <img :src="optionA" style="max-width: 64px" alt="Option A">
                <div>
                  <p style="margin: 0;">Abstract design</p>
                  <p style="margin: 0;">Represents the inside of a Feijoa</p>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 16px">
                <h3>Option B</h3>
                <img :src="optionB" style="max-width: 64px" alt="Option B">
                <div>
                  <p style="margin: 0;">“X marks the spot”</p>
                  <p style="margin: 0;">Represents the inside of a Feijoa</p>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 16px">
                <h3>Option C</h3>
                <img :src="optionC" style="max-width: 64px" alt="Option C">
                <div>
                  <p style="margin: 0;">Most familiar</p>
                  <p style="margin: 0;">Represents the inside of a Feijoa</p>
                </div>
              </div>
            </div>
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
                  <h2 class="arima font-heading">Arima Madurai</h2>
                  <h3 class="arima font-subheading">The quick brown fox jumps over the lazy dog</h3>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px">
                  <div class="arima letters--container">
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

          <div class="creative--container">
            <h2>Logo Ideas</h2>
            <div class="img--container" style="display: flex; flex-direction: row; gap: 32px; flex-wrap: wrap">
              <img :src="logoOptionA" style="max-width: 234px" alt="Logo Option A">
              <img :src="logoOptionB" style="max-width: 234px" alt="Logo Option B">
              <img :src="logoOptionC" style="max-width: 234px" alt="Logo Option C">
            </div>
          </div>
        </section>
  
        <section class="bg">
          <div class="max-width">
            <h1>Prototyping</h1>
            <h4 style="margin-bottom: 16px;">Mobile Journey</h4>
            <iframe width="100%" height="925" style="max-width: 800px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FB7vXKMc10fHIsYhxfRxA1h%2FFreejoas%3Fpage-id%3D1%253A2326%26node-id%3D1-3891%26viewport%3D574%252C246%252C0.2%26t%3D8oUwSFBIHemxZeK6-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A3891&hide-ui=1" allowfullscreen></iframe>
            <h4 style="margin-bottom: 16px; margin-top: 32px;">Desktop Journey</h4>
            <iframe width="100%" height="570" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FB7vXKMc10fHIsYhxfRxA1h%2FFreejoas%3Fpage-id%3D79%253A5305%26node-id%3D79-5340%26viewport%3D1851%252C308%252C0.26%26t%3Disf8U315WfltmViM-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D79%253A5340&hide-ui=1" allowfullscreen></iframe>
            <p>We wanted to </p>
          </div>
        </section>
  
        <section class="max-width">
          <h1>Creating a working version</h1>
          <p>I want Freejoas to be accessible to all walks of life, so I created a Webapp. I worked closesly with a Junior Backend Developer; <a target="_blank" href="https://github.com/wsking233">William Wang</a> - who needed work experience for his Portfolio.</p>
          <p>I began by building a simple Front End using <a target="_blank" href="https://react.dev">React</a></p>
          <p>I chose React as it is something I am still learning and wanted to learn while also creating.</p>
          <p>I also chose to use <a target="_blank" href="https://sass-lang.com">Sass</a> - a preprocessor for CSS which makes it easier to:</p>
          <ul>
            <li>Create stylesheets and control the cascading effect of CSS.</li>
            <li>Easier to create hover states and animations.</li>
            <li>Scalable for future development - incase I want to branch out to more types of fruit.</li>
          </ul>
          <p>You can checkout the working version by visiting <a target="_blank" href="https://www.freejoas.com">www.freejoas.com</a>. I recommend you use your mobile phone to open the app for a cleaner experience. The project is still a work in progress.</p>
        </section>
  
        <section class="bg">
          <div class="max-width">
            <h1>Project results</h1>
            <p>This is an on-going project. The release relys heavily on the season. I plan on releasing it to the public in January 2025.</p>
            <p>So far, I have had plenty of positive feedback from colleagues, friends, family and perspective employers. I welcome the feedback, be it positive or negative. I have a growth mindset, I want my app to perform at it's best when it is released.</p>
          </div>
        </section>
  
      </main>
    </div>
  </template>
  
  
  <script>
  import Landing from "@/assets/freejoas/landing.png";
  import Sketches from "@/assets/freejoas/illustrations.png";
  import Logo1 from "@/assets/freejoas/logo-1.png";
  import Logo2 from "@/assets/freejoas/logo-2.png";
  import Logo3 from "@/assets/freejoas/logo-3.png";
  import Logo4 from "@/assets/freejoas/logo-4.png";
  import Logo5 from "@/assets/freejoas/logo-5.png";
  import Logo6 from "@/assets/freejoas/logo-6.png";
  import Logo7 from "@/assets/freejoas/logo-7.png";
  import Logo8 from "@/assets/freejoas/logo-8.png";
  import Logo9 from "@/assets/freejoas/logo-9.png";
  import OptionA from "@/assets/freejoas/option-a.png";
  import OptionB from "@/assets/freejoas/option-b.png";
  import OptionC from "@/assets/freejoas/option-c.png";
  import ColourPaletteA from "@/assets/freejoas/primary-colour.png";
  import ColourPaletteB from "@/assets/freejoas/secondary-colour.png";
  import LogoOptionA from "@/assets/freejoas/logo-option--a.png";
  import LogoOptionB from "@/assets/freejoas/logo-option--b.png";
  import LogoOptionC from "@/assets/freejoas/logo-option--c.png";

  import BackToTop from '../../components/BackToTop.vue';
  
  export default {
    name: "Freejoas Project",
    components: {
      BackToTop,
    },
    data() {
      return {
        landing: Landing,
        sketches: Sketches,
        logo1: Logo1,
        logo2: Logo2,
        logo3: Logo3,
        logo4: Logo4,
        logo5: Logo5,
        logo6: Logo6,
        logo7: Logo7,
        logo8: Logo8,
        logo9: Logo9,
        optionA: OptionA,
        optionB: OptionB,
        optionC: OptionC,
        colourPaletteA: ColourPaletteA,
        colourPaletteB: ColourPaletteB,
        logoOptionA: LogoOptionA,
        logoOptionB: LogoOptionB,
        logoOptionC: LogoOptionC,
      };
    },
  };
  </script>