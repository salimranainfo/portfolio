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
            <!-- Previous Button -->

            <button
              class="ml-4 absolute left-0 font-mono font-bold border border-solid border-black rounded-full w-5 h-5 md:w-8 md:h-8 flex justify-center items-center p-1 focus:outline-none z-10"
              style="top: 25%"
              @click="goToPrevProject"
            >
              &lt;
            </button>

            <!-- Loop through the projects -->

            <div class="relative h-full w-full xl:flex xl:space-x-2">
              <div
                v-for="(project, index) in activeProjects"
                :key="index"
                class="h-full w-full"
              >
                <!-- Implement Animation for slider items -->

                <transition
                  name="fade"
                  :enter-active-class="
                    clickedSliderButton === 'right'
                      ? 'animated slideInLeft slow'
                      : 'animated slideInRight slow'
                  "
                  :leave-active-class="
                    clickedSliderButton === 'left'
                      ? 'animated slideOutLeft slow'
                      : 'animated slideOutRight slow'
                  "
                >
                  <div
                    v-show="activeIndexes.includes(index)"
                    class="absolute top-0 left-0 h-full w-full xl:static"
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
                      class="relative flex justify-center items-center"
                      style="height: 47%"
                    >
                      <!-- Images in below Div -->

                      <div
                        class="relative flex justify-center items-center w-3/4 overflow-hidden"
                      >
                        <img
                          :src="project.image[0]"
                          alt="Alt Description"
                          class="absolute left-0 top-0 block border-2 border-solid border-gray-600 rounded-lg w-9/12 z-10 shadow-lg mt-2"
                        />

                        <img
                          :src="project.image[1]"
                          alt="Alt Description"
                          class="block border-2 border-solid border-gray-600 rounded-lg w-10/12 z-30 shadow-lg"
                        />
                        <img
                          :src="project.image[2]"
                          alt="Alt Description"
                          class="absolute top-0 right-0 block border-2 border-solid border-gray-600 rounded-lg w-9/12 z-20 shadow-lg mt-2"
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
                </transition>
              </div>
            </div>

            <!-- Next Button -->

            <button
              class="mr-4 absolute right-0 font-mono font-bold border border-solid border-black rounded-full w-5 h-5 md:w-8 md:h-8 flex justify-center items-center p-1 focus:outline-none"
              style="top: 25%"
              @click="goToNextProject"
            >
              &gt;
            </button>
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
// import img from '../assets/jrm.jpg'
export default {
  name: 'Projects',
  data() {
    return {
      slideIn: false,
      activeIndexes: [],
      activeProjects: [],
      clickedSliderButton: 'right',
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
  watch: {
    activeIndexes: {
      deep: true,
      handler(val) {
        const projectsArray = []
        val.forEach((el) => {
          this.projects.forEach((project) => {
            if (el === this.projects.indexOf(project)) {
              projectsArray.push(project)
            }
          })
        })
        this.activeProjects = projectsArray
      },
    },
  },
  mounted() {
    // Handle scroll event to perform animation on scroll only

    window.addEventListener('scroll', () => {
      const aboutHeading = this.$refs.projects
      if (aboutHeading) {
        const marginTopHeading = aboutHeading.getBoundingClientRect().top
        const innerHeight = window.innerHeight

        if (marginTopHeading < innerHeight / 2) {
          this.slideIn = true
        }
      }
    })

    // Populate slider project array

    const width = window.innerWidth
    if (width < 1025) {
      this.activeIndexes.push(0)
    } else {
      this.activeIndexes.push(0, 1)
    }
  },
  methods: {
    goToNextProject() {
      const firstIndex = Math.min(...this.activeIndexes)
      if (firstIndex !== 0) {
        this.activeIndexes = []
        this.activeIndexes.push(firstIndex - 1, firstIndex)
        this.clickedSliderButton = 'right'
        console.log(this.activeProjects)
      }
    },
    goToPrevProject() {
      const lastIndex = Math.max(...this.activeIndexes)
      if (lastIndex !== this.projects.length - 1) {
        this.activeIndexes = []
        this.activeIndexes.push(lastIndex, lastIndex + 1)
        this.clickedSliderButton = 'left'
        console.log(this.activeIndexes)
      }
    },
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
</style>
