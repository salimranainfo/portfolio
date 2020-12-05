<template>
  <div>
    <Introduction></Introduction>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Introduction,
    About,
    Projects,
    Contact,
  },
  data() {
    return {}
  },
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

.font-roboto-slab {
  font-family: 'Roboto Slab', serif;
}
</style>
