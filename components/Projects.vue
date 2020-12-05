<template>
  <div id="projects" ref="projects" class="relative overflow-hidden">
    <!-- Private Code Message Div -->

    <div
      v-if="privateMsg"
      class="absolute w-screen h-screen flex flex-col justify-center items-center bg-gray-600 p-4 bg-opacity-75"
      style="z-index: 1001"
    >
      <p
        class="relative w-full h-64 text-center bg-white flex justify-center items-center text-md font-semibold p-6"
      >
        The code for this project is in a aprivate repo on Github. Kindly send
        me a message or email me to get the code. Thank you.
        <button
          @click="privateMsg = false"
          class="absolute top-0 right-0 m-2 font-mono font-semibold focus:outline-none"
        >
          X
        </button>
      </p>
    </div>

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
              class="font-roboto-slab text-xl md:text-3xl font-semibold text-center border-b-2 border-dashed border-gray-700"
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
            class="bg-white shadow-md rounded-lg overflow-hidden w-full flex justify-center items-center"
            style="height: 70%"
          >
            <!-- Loop through the projects -->

            <div v-swiper="swiperOptions">
              <div class="swiper-wrapper">
                <div
                  v-for="(project, index) in projects"
                  :key="index"
                  class="swiper-slide"
                >
                  <!-- Single Project Headline -->

                  <h3
                    class="text-center font-semibold text-xl md:text-3xl w-full flex justify-center items-start"
                    style="height: 10%"
                  >
                    {{ project.title }}
                  </h3>

                  <!-- Single Project Images and Next/Prev Buttons -->

                  <div
                    class="flex justify-center items-center relative w-10/12 xl:w-8/12"
                    style="height: 40%"
                  >
                    <!-- Images in below Div -->

                    <img
                      :src="project.image[0]"
                      alt="Alt Description"
                      class="absolute left-0 block border-2 border-solid border-gray-600 rounded-lg w-8/12 z-10 shadow-lg mt-2"
                      style="height: 85%"
                    />

                    <img
                      :src="project.image[1]"
                      alt="Alt Description"
                      class="block border-2 border-solid border-gray-600 rounded-lg h-full w-10/12 z-30 shadow-lg"
                    />
                    <img
                      :src="project.image[2]"
                      alt="Alt Description"
                      class="absolute right-0 block border-2 border-solid border-gray-600 rounded-lg h-full w-8/12 z-20 shadow-lg mt-2"
                      style="height: 85%"
                    />
                  </div>

                  <!-- Single Project Headline and Details -->

                  <div
                    class="flex flex-col justify-start items-start w-full pt-4 overflow-hidden"
                    style="height: 40%"
                  >
                    <h4 class="text-md md:text-xl font-semibold">
                      {{ project.subTitle }}
                    </h4>
                    <p class="text-sm md:text-lg mt-1">
                      {{ project.details }}
                    </p>
                  </div>

                  <!-- Single Project Demo and Code Buttons -->

                  <div
                    class="flex justify-start items-center md:items-start space-x-2 xl:pl-10 w-full"
                    style="height: 10%"
                  >
                    <button
                      class="inline-block bg-indigo-800 text-white px-4 py-1 rounded-md shadow-lg font-semibold focus:outline-none transition duration-150 ease-in hover:bg-indigo-700 text-sm md:text-xl text-center"
                    >
                      <a
                        :href="project.demo"
                        target="_blank"
                        class="inline-block w-full h-full"
                        >DEMO</a
                      >
                    </button>
                    <button
                      class="inline-block bg-indigo-600 text-white px-4 py-1 rounded-md shadow-lg font-semibold focus:outline-none transition duration-150 ease-in hover:bg-indigo-500 text-sm md:text-xl text-center"
                    >
                      <a
                        :href="
                          project.code === 'private'
                            ? '#projects'
                            : project.code
                        "
                        :target="project.code === 'private' ? '' : '_blank'"
                        class="inline-block w-full h-full"
                        @click="
                          project.code === 'private'
                            ? (privateMsg = true)
                            : (privateMsg = false)
                        "
                        >CODE</a
                      >
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
      privateMsg: false,
      slideIn: false,
      swiperOptions: {
        loop: false,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      projects: [
        {
          id: 1,
          title: 'JRM Global Sourcing Website',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Made with Vue & Vuetify',
          details:
            'This is my own company website. I made it with Vue and Vuetify only in the early days of my Vue learning. I will refactory the codes for this project soon and will break into smaller components.',
          demo: 'https://jrmglobalsourcing.com',
          code: 'private',
        },
        {
          id: 2,
          title: 'Portfolio Website',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Made with Nuxt and TailwindCSS',
          details:
            'This project is made with Nuxt and TailwindCSS to introduce myself and showcase my skills and expertise. I will add an admin page to this website to be able to update data easily.',
          demo: 'https://srwebstudio.com',
          code: 'https://github.com/salimranainfo/portfolio',
        },
        {
          id: 3,
          title: 'Marketing Web App for SRC',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle:
            'Made with Nuxt, Node, Express, MongoDB, Mongoose and TailwindCSS',
          details:
            'I can manage list of companies and their prospects in this app. I can track status of the prospects, add new, remove, update prospects. I use this app to run our email marketing.',
          demo: 'https://marketing-demo.srwebstudio.com',
          code: 'private',
        },
        {
          id: 4,
          title: 'Email Search and Verify App',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Made with Vue, Node, Express and Vuetify',
          details:
            'I can search emails from name and domain of someone. I use this app to search prospects email for my business. It uses a third party paid API as well as a builtin app made with Node.',
          demo: 'https://email-demo.srwebstudio.com',
          code: 'private',
        },
        {
          id: 5,
          title: 'Todo App - Fun Project',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Made with Vue and TailwindCSS',
          details:
            'I made this project while learning Vue. I am going to refactor this project code as my code has matured a lot since the beginning.',
          demo: 'https://todo-app.srwebstudio.com',
          code: 'https://github.com/salimranainfo/vue-todo-app',
        },
        {
          id: 6,
          title: 'Weather App - Fun Project',
          image: [
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
            require('../assets/jrm.jpg'),
          ],
          subTitle: 'Made with Vue, Thirdparty API and TailwindCSS',
          details:
            'I made this project while learning Vue. I am going to refactor this project code as my code has matured a lot since the beginning.',
          demo: 'https://weather-app.srwebstudio.com',
          code: 'https://github.com/salimranainfo/weather-app',
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
  top: 32%;
}

.swiper-container {
  padding: 2rem;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0.5rem;
}

.swiper-wrapper {
  @apply h-full w-full;
}

.swiper-slide {
  padding: 0.5rem !important;
  @apply bg-gray-200 p-4;
  height: 100% !important;
  width: 100% !important;
  border-radius: 0.5rem;
  @apply flex flex-col justify-center items-center;
}
</style>
