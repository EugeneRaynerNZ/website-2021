<template>
  <div class="paragraph-image-block" ref="block" :class="reverse ? 'reverse' : ''">
     <div class="paragraph-image-block--text">
        <h3 ref="blockTitle">{{title}}</h3>
        <p v-for="(paragraph, index) in paragraphs" :key="'paragraph-' + index" v-html="paragraph"></p>
        <template v-if="link">
          <router-link :to="link" class="main-button">
            <span class="main-button--text">{{linkText}}</span> 
            <span class="main-button--icon">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 7.4 12" style="enable-background:new 0 0 7.4 12;" xml:space="preserve">
                <path class="st0" d="M1.4,0L0,1.4L4.6,6L0,10.6L1.4,12l6-6L1.4,0z"/>
              </svg>
            </span>
          </router-link>
        </template>
      </div>
      <Icon :name="image"/>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Paragraph',
  components: {
    Icon
  },
  props: {
      title: String,
      paragraphs: Array, 
      image: String,
      reverse: Boolean,
      link: String,
      linkText: String,
  },
  mounted() {
    // fix was to get the block ref and then get it's elements
      const { block } = this.$refs
      
      //element
      const whole = block.getElementsByClassName("paragraph-image-block--text")
      const h3 = block.getElementsByTagName("h3")
      const p = block.getElementsByTagName("p")
      const link = block.getElementsByTagName("a")

      gsap.timeline({
        scrollTrigger: {
          trigger: whole,
          // start: "top top",
          // markers: true
        },
      })
      // multiple elements
      .set([...h3, ...p, ...link], {y: 20, opacity: 0})
      // single elements
      .to(h3, { opacity:1, y: 0, duration: 0.6 })
      .to(p, { opacity:1, y: 0, duration: 0.6 })
      .to(link, { opacity:1, y: 0, duration: 0.6 })

      // .to([...block.getElementsByTagName('p'), ...block.getElementsByTagName('h3')], { opacity: 1, duration: 2 })
  },
}
</script>