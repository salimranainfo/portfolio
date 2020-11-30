<template>
  <div class="overflow-hidden">
    <div ref="intro" class="bg-gray-800 text-white h-screen w-screen">
      <!-- Container Div for Big screen sizes -->

      <div class="flex flex-col items-center xl:w-4/6 xl:mx-auto w-full h-full">
        <!-- Main Heading of the Intro Section -->

        <div style="height: 15%" class="flex flex-col justify-end items-center">
          <transition
            name="headline"
            enter-active-class="animated bounceInDown slow"
          >
            <h1
              v-show="slideIn"
              class="text-3xl md:text-5xl font-bold text-gray-100 text-shadow text-center"
            >
              Md Salim Rana
            </h1>
          </transition>
        </div>

        <!-- Image of the Intro Section -->

        <div
          style="height: 40%"
          class="flex flex-col justify-center items-center md:mt-4 lg:mt-10"
        >
          <transition
            name="image"
            enter-active-class="animated bounceInLeft slow"
          >
            <div
              v-show="slideIn"
              class="border border-solid border-gray-700 rounded-full p-1 bg-gradient-to-tr from-blue-700 to-red-600"
            >
              <img
                src="@/assets/picture.jpg"
                alt="Md Salim Rana's picture"
                class="block rounded-full border border-solid border-gray-700 h-40 w-40 md:h-70 md:w-70"
              />
            </div>
          </transition>
          <transition
            name="shadow"
            enter-active-class="animated bounceInLeft slow"
          >
            <div
              v-if="slideIn"
              class="w-32 h-2 img-shadow md:mt-10 lg:mt-20"
            ></div>
          </transition>
        </div>

        <!-- Sub Heading of the Intro Section -->

        <div
          style="height: 30%"
          class="flex flex-col justify-center items-center"
        >
          <transition
            name="sub-heading"
            enter-active-class="animated bounceInRight slow"
          >
            <div v-if="slideIn" class="px-10">
              <h2 class="font-semibold text-center text-lg md:text-3xl">
                Full Stack Web Developer - Vue JS | Nuxt JS | TailwindCSS |
                Vuetify | Animate.css | Node JS | Express | RESTfull API |
                MongoDB
              </h2>

              <div class="flex justify-center items-center mt-4">
                <svg
                  class="w-6 text-orange-800 md:w-10 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="font-bold md:text-2xl">Gazipur, Bangladesh</p>
              </div>
            </div>
          </transition>
        </div>

        <!-- Go Down Arrow Sign -->

        <div
          style="height: 15%"
          class="flex flex-col justify-center items-center"
        >
          <transition
            name="arrow"
            enter-active-class="bounce-In-arrow"
            leave-active-class="bounce-Out-arrow"
          >
            <div v-show="slideIn && isMenuActive" class="animate-bounce-custom">
              <a href="#about" class="block w-12 md:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data() {
    return {
      slideIn: false,
    }
  },
  computed: {
    isMenuActive() {
      return !this.$store.state.isMenuActive
    },
  },
  mounted() {
    // this.$refs.intro.classList.remove('opacity-0')
    this.slideIn = true
  },
}
</script>

<style scoped>
.text-shadow {
  text-shadow: -1px 2px 3px rgba(150, 150, 150, 1);
}

.img-shadow {
  border-radius: 75%;
  box-shadow: 0px 25px 11px 2px rgba(150, 150, 150, 1);
}

.bounce-In-arrow {
  animation: bounceInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

.bounce-Out-arrow {
  animation: bounceOutDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.1s; /* don't forget to set a duration! */
}
</style>
