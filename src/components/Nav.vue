<template>
  <div class="nav">
    <div class="nav--container">
      <nav>
        <ul>
          <li>Eugene Rayner</li>
          <li v-for="item in navLinks" :key="'nav-link-' + item.name"><a :href="item.link">{{item.name}}</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navLinks: [
        {name: 'Creations', link: 'hello'},
        {name: 'Design', link: 'hello'},
        {name: 'Code', link: 'hello'},
        {name: 'Blog', link: 'hello'},
        {name: 'About', link: 'hello'},
        {name: 'Contact', link: 'hello'},
      ]
    }
  }
}
</script>