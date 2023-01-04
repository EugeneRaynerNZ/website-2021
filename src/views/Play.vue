<template>
  <div id="play" class="mainContent--mobile">
    <header
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
      "
    >
      <img style="width: 200px" :src="me" />
    </header>

    <main>
      <section class="max-width">
        <h1>Music is in my Blood.</h1>
        <!-- <p>
          I come from a highly creative family. My father is Eddie Rayner,
          Keyboardist from the iconic New Zealand band, Split Enz. My mother is
          a scensory artist. Her name is Raewyn Turner.
        </p> -->
        <p>
          I am a music producer at heart, although recently I have been
          focussing on my career.
        </p>
        <p>
          Below I have linked some of my music that I created on Ableton Live.
        </p>

        <div class="soundcloud--container">
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133672309&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillosophy" title="Chillosophy" target="_blank" style="color: #cccccc; text-decoration: none;">Chillosophy</a> · <a href="https://soundcloud.com/chillosophy/pale-blue" title="Pale Blue" target="_blank" style="color: #cccccc; text-decoration: none;">Pale Blue</a></div>
        </div>

        <div class="soundcloud--container">
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167170422&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillosophy" title="Chillosophy" target="_blank" style="color: #cccccc; text-decoration: none;">Chillosophy</a> · <a href="https://soundcloud.com/chillosophy/bwb-instrumental" title="BwB (instrumental)" target="_blank" style="color: #cccccc; text-decoration: none;">BwB (instrumental)</a></div>
        </div>

        <div class="soundcloud--container">
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/515967585&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillosophy" title="Chillosophy" target="_blank" style="color: #cccccc; text-decoration: none;">Chillosophy</a> · <a href="https://soundcloud.com/chillosophy/what-are-you-ready" title="What are you ready ft. MitSmith" target="_blank" style="color: #cccccc; text-decoration: none;">What are you ready ft. MitSmith</a></div>
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