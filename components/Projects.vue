<template>
  <div id="projects" ref="projects" class="overflow-hidden">
    <!-- Container for large screens -->

    <div class="w-screen h-screen p-4 md:p-10">
      <div class="h-full w-full xl:w-4/6 xl:mx-auto">
        <!-- Headline of the section -->

        <transition
          name="slide"
          enter-active-class="animated bounceInLeft slow"
        >
          <div
            v-if="slideIn"
            class="flex justify-center items-center"
            style="height: 15%"
          >
            <h2
              class="text-xl md:text-3xl font-semibold text-center border-b-2 border-dashed border-gray-700"
            >
              PROJECTS I HAVE MADE
            </h2>
          </div>
        </transition>

        <!-- Portfolio Slider Section -->

        <transition
          name="slide"
          enter-active-class="animated bounceInRight slow"
        >
          <div
            v-if="slideIn"
            class="bg-white shadow-md rounded-lg p-4 relative overflow-hidden"
            style="height: 70%"
          >
            <!-- Loop through the projects -->

            <div v-swiper="swiperOptions" class="swiper">
              <div class="swiper-wrapper">
                <div
                  v-for="(project, index) in projects"
                  :key="index"
                  class="swiper-slide"
                >
                  <!-- Single Project Headline -->

                  <h3
                    class="text-center font-semibold text-xl md:text-3xl pt-2 md:mb-4"
                    style="height: 3%"
                  >
                    {{ project.title }}
                  </h3>

                  <!-- Single Project Images and Next/Prev Buttons -->

                  <div
                    class="flex justify-center items-center"
                    style="height: 47%"
                  >
                    <!-- Images in below Div -->

                    <div
                      class="relative flex justify-center items-center w-3/4 h-full overflow-hidden"
                    >
                      <img
                        :src="project.image[0]"
                        alt="Alt Description"
                        class="absolute left-0 top-0 block border-2 border-solid border-gray-600 rounded-lg h-full z-10 shadow-lg mt-2"
                      />

                      <img
                        :src="project.image[1]"
                        alt="Alt Description"
                        class="block border-2 border-solid border-gray-600 rounded-lg h-full z-30 shadow-lg"
                      />
                      <img
                        :src="project.image[2]"
                        alt="Alt Description"
                        class="absolute top-0 right-0 block border-2 border-solid border-gray-600 rounded-lg h-full z-20 shadow-lg mt-2"
                      />
                    </div>
                  </div>

                  <!-- Single Project Headline and Details -->

                  <div
                    class="flex flex-col justify-start items-start xl:pl-10"
                    style="height: 40%"
                  >
                    <h4 class="text-lg md:text-2xl font-semibold">
                      {{ project.subTitle }}
                    </h4>
                    <p class="text-md md:text-xl mt-1">
                      {{ project.details }}
                    </p>
                  </div>

                  <!-- Single Project Demo and Code Buttons -->

                  <div
                    class="flex justify-start items-center md:items-start space-x-2 xl:pl-10"
                    style="height: 10%"
                  >
                    <button
                      class="inline-block bg-indigo-800 text-white px-4 py-1 rounded-md shadow-lg font-semibold focus:outline-none transition duration-150 ease-in hover:bg-indigo-700 text-sm md:text-xl text-center"
                    >
                      DEMO
                    </button>
                    <button
                      class="inline-block bg-indigo-600 text-white px-4 py-1 rounded-md shadow-lg font-semibold focus:outline-none transition duration-150 ease-in hover:bg-indigo-500 text-sm md:text-xl text-center"
                    >
                      CODE
                    </button>
                  </div>
                </div>
              </div>
              <div class="swiper-button-next">&gt;</div>
              <div class="swiper-button-prev">&lt;</div>
            </div>
          </div>
        </transition>
        <!-- Go Down Arrow Sign -->

        <div
          style="height: 15%"
          class="flex flex-col justify-center items-center overflow-hidden"
        >
          <transition
            name="project-arrow"
            enter-active-class="bounce-In-arrow"
            leave-active-class="bounce-Out-arrow"
          >
            <div v-if="slideIn && isMenuActive" class="animate-bounce-custom">
              <a href="#contact" class="block w-12 md:w-16">
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
import { directive } from 'vue-awesome-swiper'
import Swiper, { Navigation } from 'swiper'

import 'swiper/swiper-bundle.css'

Swiper.use([Navigation])

export default {
  name: 'Projects',
  directives: {
    swiper: directive,
  },
  data() {
    return {
      slideIn: false,
      clickedSliderButton: 'right',
      swiperOptions: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      projects: [
        {
          id: 1,
          title: 'Project 1',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Project sub heading',
          details: 'Project details',
        },
        {
          id: 2,
          title: 'Project 2',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Project two sub heading',
          details: 'Project details',
        },
        {
          id: 3,
          title: 'Project 3',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Project three sub heading',
          details: 'Project details',
        },
      ],
    }
  },
  computed: {
    isMenuActive() {
      return !this.$store.state.isMenuActive
    },
  },
  mounted() {
    // Handle scroll event to perform animation on scroll only

    window.addEventListener('scroll', () => {
      const projectsHeadingTop = this.$refs.projects
      if (projectsHeadingTop) {
        const marginTopHeading = projectsHeadingTop.getBoundingClientRect().top
        const innerHeight = window.innerHeight

        if (marginTopHeading < innerHeight / 2) {
          this.slideIn = true
        }
      }
    })
  },
}
</script>

<style scoped>
.bounce-In-arrow {
  animation: bounceInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

.bounce-Out-arrow {
  animation: bounceOutDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.1s; /* don't forget to set a duration! */
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

.swiper-button-next,
.swiper-button-prev {
  @apply border-2 border-solid border-gray-600 rounded-full h-6 w-6 font-mono flex justify-center items-center text-gray-600;
}

.swiper {
  @apply h-full w-full;
}

.swiper::after {
  @apply hidden;
}

.swiper-wrapper {
  @apply h-full w-full p-4;
}

.swiper-wrapper::after {
  @apply hidden;
}

.swiper-slide {
  @apply h-full w-full bg-gray-200;
}

.swiper-slide::after {
  @apply hidden;
}
</style>
