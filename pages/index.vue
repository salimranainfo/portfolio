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

export default {
  components: {
    Introduction,
    About: () => import('@/components/About.vue'),
    Projects: () => import('@/components/Projects.vue'),
    Contact: () => import('@/components/Contact.vue'),
  },
  data() {
    return {}
  },
}
</script>

<style></style>
