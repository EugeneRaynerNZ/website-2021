<template>
  <div id="play" class="mainContent--mobile">
    <!-- <header
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
      "
    >
      <img style="width: 200px" :src="me" />
    </header> -->

    <main>
      <section class="max-width">

        <h1 style="margin-bottom: 16px">I like to think outside of the box.</h1>
        <p>I like to create things that others have not created.</p>

        <h2 style="margin-top: 48px">Figma Piano (can take a second to load properly)</h2>
        <iframe width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWxm6FWxjXIl70biNNEu2FX%2FPortfolio%3Fpage-id%3D122%253A26431%26node-id%3D122-26666%26viewport%3D491%252C449%252C0.68%26t%3DD34vlomGliON0mTg-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D122%253A26666" allowfullscreen></iframe>

        <h2 style="margin-top: 48px">Auto generated double sided confetti</h2>
        <iframe height="300" style="width: 100%;" scrolling="no" title="Confetti (GSAP)" src="https://codepen.io/erayner/embed/ExYEByL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/erayner/pen/ExYEByL">
          Confetti (GSAP)</a> by Eugene (<a href="https://codepen.io/erayner">@erayner</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        
      </section>

      <section class="bg">
        <div class="max-width">
          <h1>Music is in my Blood.</h1>
          <!-- <p>
            I come from a highly creative family. My father is Eddie Rayner,
            Keyboardist from the iconic New Zealand band, Split Enz. My mother is
            a scensory artist. Her name is Raewyn Turner.
          </p> -->
          <p>I am a music producer at heart, although recently I have been focussing on my career.</p>
          <p>Below is a sample of what I create in my spare time.</p>

          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/515967585&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillosophy" title="Chillosophy" target="_blank" style="color: #cccccc; text-decoration: none;">Chillosophy</a> · <a href="https://soundcloud.com/chillosophy/what-are-you-ready" title="What are you ready ft. MitSmith" target="_blank" style="color: #cccccc; text-decoration: none;">What are you ready ft. MitSmith</a></div>

          <!-- <div class="soundcloud--container">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133672309&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillosophy" title="Chillosophy" target="_blank" style="color: #cccccc; text-decoration: none;">Chillosophy</a> · <a href="https://soundcloud.com/chillosophy/pale-blue" title="Pale Blue" target="_blank" style="color: #cccccc; text-decoration: none;">Pale Blue</a></div>
          </div>

          <div class="soundcloud--container">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167170422&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillosophy" title="Chillosophy" target="_blank" style="color: #cccccc; text-decoration: none;">Chillosophy</a> · <a href="https://soundcloud.com/chillosophy/bwb-instrumental" title="BwB (instrumental)" target="_blank" style="color: #cccccc; text-decoration: none;">BwB (instrumental)</a></div>
          </div> -->
        </div>
      </section>

      <section class="max-width">
        <h1>This website was built using Javascript</h1>
        <p>
          I love coding. Coming from a front end background, I can't help but
          create custom components when I want to.
        </p>
        <p>
          This website is built using
          <a href="https://vuejs.org/">Vue.js</a> which is a Javascript
          framework similar to React.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
import Me from "@/assets/me.svg";

export default {
  name: "Play",
  data() {
    return {
      me: Me,
      soundclouds: [
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133672309&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      ],
    };
  },
};
</script>

<style scoped>
.soundcloud--container {
  margin: 32px 0;
}
</style>