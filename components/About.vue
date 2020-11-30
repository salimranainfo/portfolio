<template>
  <div id="about" class="overflow-hidden">
    <div ref="about" class="h-screen w-screen bg-white">
      <!-- container div for large screens -->

      <div class="xl:w-4/6 xl:mx-auto h-full w-full">
        <!-- Headline -->

        <transition
          name="about-heading"
          enter-active-class="animated bounceInLeft slow"
        >
          <div
            v-if="slideIn"
            class="flex justify-center items-end w-full"
            style="height: 13%"
          >
            <h2
              ref="about-heading"
              class="text-xl md:text-3xl font-semibold text-center border-b-2 border-dashed border-gray-700"
            >
              ABOUT ME AND MY SKILLS
            </h2>
          </div>
        </transition>

        <!-- About Me -->

        <transition
          name="about-me-section"
          enter-active-class="animated bounceInRight slow"
        >
          <div
            v-show="slideIn"
            class="text-center px-2 md:px-6 pt-4 lg:pt-10 w-full"
            style="height: 20%"
          >
            <h3 class="text-lg md:text-3xl font-semibold">
              A little bit about me
            </h3>
            <p class="pt-2 text-sm md:text-lg lg:text-xl lg:pt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              qui rerum est hic ad harum necessitatibus iste? Ipsam voluptatibus
              deleniti maxime et impedit veniam dolorem, ipsa eaque odit?
              Laudantium, sed!
            </p>
          </div>
        </transition>

        <!-- Skill Showcase -->

        <transition
          name="about-skills-section"
          enter-active-class="animated bounceInLeft slow"
        >
          <div
            v-show="slideIn"
            class="px-2 md:px-6 lg:px-10 pt-2 overflow-hidden w-full"
            style="height: 55%"
          >
            <h3 class="text-lg md:text-3xl font-semibold pb-4 text-center">
              Skills and Expertise
            </h3>

            <!-- Tab Menu Items -->

            <div
              class="bg-gray-100 flex flex-wrap border border-solid border-gray-600 w-full"
              style="height: 88%"
            >
              <button
                :class="
                  selectedSkillsTab !== 'core'
                    ? 'border border-r-0 border-l-0 border-t-0 border-solid border-gray-600 bg-gray-400'
                    : 'font-semibold'
                "
                class="w-1/3 text-center py-1 px-1 text-md focus:outline-none text-sm md:text-xl"
                @click="onSkillsTabChange($event)"
              >
                Core Language Skill
              </button>
              <button
                :class="
                  selectedSkillsTab !== 'library'
                    ? 'border border-r-0 border-t-0 border-solid border-gray-600 bg-gray-400'
                    : 'border border-r-0 border-t-0 border-b-0 border-gray-600 font-semibold'
                "
                class="w-1/3 text-center py-1 px-1 text-md focus:outline-none text-sm md:text-xl"
                @click="onSkillsTabChange($event)"
              >
                Library & Frameworks
              </button>
              <button
                :class="
                  selectedSkillsTab !== 'others'
                    ? 'border border-r-0 border-t-0 border-solid border-gray-600 bg-gray-400'
                    : 'border border-r-0 border-t-0 border-b-0 border-gray-600 font-semibold'
                "
                class="w-1/3 text-center py-1 px-1 text-md focus:outline-none text-sm md:text-xl"
                @click="onSkillsTabChange($event)"
              >
                Other Skills
              </button>

              <!-- First Set of Skills - Core Languages -->

              <div
                class="w-full p-2 overflow-hidden relative w-full"
                style="height: 80%"
              >
                <transition
                  name="skills-showcase"
                  enter-active-class="animated fadeInLeft slow"
                  leave-active-class="animated fadeOutLeft slow"
                >
                  <div
                    v-if="skills.coreLanguages.isActive"
                    class="absolute h-full w-full overflow-auto lg:pl-10"
                  >
                    <ul
                      class="py-1 text-sm md:text-xl flex flex-col justify-center h-full w-full space-y-1"
                    >
                      <li
                        v-for="(skill, index) in skills.coreLanguages.skills"
                        :key="index"
                        class="flex flex-wrap items-center"
                      >
                        <span class="arrow-icon">&gt;</span
                        ><span>{{ skill.skill }}</span>
                        <ul
                          v-if="skill.details.length > 0"
                          class="w-full pl-10 space-y-1"
                        >
                          <li
                            v-for="(detail, i) in skill.details"
                            :key="i"
                            class="flex items-center"
                          >
                            <span class="arrow-icon-second">+</span
                            ><span>{{ detail }}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </transition>

                <!-- Second Set of Skills - Libraries -->

                <transition
                  name="skills-showcase"
                  enter-active-class="animated fadeInLeft slow"
                  leave-active-class="animated fadeOutLeft slow"
                >
                  <div
                    v-if="skills.libraries.isActive"
                    class="absolute h-full w-full overflow-auto lg:pl-10"
                  >
                    <ul
                      class="py-1 text-sm md:text-xl flex flex-col justify-center h-full w-full space-y-1"
                    >
                      <li
                        v-for="(skill, index) in skills.libraries.skills"
                        :key="index"
                        class="flex flex-wrap items-center"
                      >
                        <span class="arrow-icon">&gt;</span
                        ><span>{{ skill.skill }}</span>
                        <ul
                          v-if="skill.details.length > 0"
                          class="w-full pl-10 space-y-1"
                        >
                          <li
                            v-for="(detail, i) in skill.details"
                            :key="i"
                            class="flex items-center"
                          >
                            <span class="arrow-icon-second">+</span
                            ><span>{{ detail }}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </transition>

                <!-- Third Set of Skills - Other Skills -->

                <transition
                  name="skills-showcase"
                  enter-active-class="animated fadeInLeft slow"
                  leave-active-class="animated fadeOutLeft slow"
                >
                  <div
                    v-if="skills.otherSkills.isActive"
                    class="absolute h-full overflow-auto w-full lg:pl-10"
                  >
                    <ul
                      class="py-1 text-sm md:text-xl flex flex-col justify-center h-full w-full space-y-1"
                    >
                      <li
                        v-for="(skill, index) in skills.otherSkills.skills"
                        :key="index"
                        class="flex flex-wrap items-center mt-1"
                      >
                        <span class="arrow-icon">&gt;</span
                        ><span>{{ skill.skill }}</span>
                        <ul
                          v-if="skill.details.length > 0"
                          class="w-full pl-10 space-y-1"
                        >
                          <li
                            v-for="(detail, i) in skill.details"
                            :key="i"
                            class="flex items-center mt-1"
                          >
                            <span class="arrow-icon-second">+</span
                            ><span>{{ detail }}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </transition>

        <!-- Go Down Arrow Sign -->

        <div
          style="height: 12%"
          class="flex flex-col justify-center items-center w-full"
        >
          <transition
            name="about-arrow"
            enter-active-class="bounce-In-arrow"
            leave-active-class="bounce-Out-arrow"
          >
            <div v-show="slideIn && isMenuActive" class="animate-bounce-custom">
              <a href="#projects" class="block w-12 md:w-16">
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
  data() {
    return {
      slideIn: false,
      selectedSkillsTab: 'core',
      selectedSkillsArray: [],
      skills: {
        coreLanguages: {
          isActive: true,
          skills: [
            {
              skill: 'HTML 5',
              details: ['Semantic HTML', 'Audio & Video', 'Geolocation API'],
            },
            {
              skill: 'CSS 3',
              details: ['Basic Usage', 'Flexbox Layout', 'Grid Layout'],
            },
            {
              skill: 'JavaScript',
              details: [],
            },
          ],
        },
        libraries: {
          isActive: false,
          skills: [
            {
              skill: 'Vue JS',
              details: ['Semantic HTML', 'Audio & Video', 'Geolocation API'],
            },
          ],
        },
        otherSkills: {
          isActive: false,
          skills: [
            {
              skill: 'Vue JS',
              details: ['Semantic HTML', 'Audio & Video', 'Geolocation API'],
            },
          ],
        },
      },
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
      const aboutHeading = this.$refs.about
      if (aboutHeading) {
        const marginTopHeading = aboutHeading.getBoundingClientRect().top
        const innerHeight = window.innerHeight

        if (marginTopHeading < innerHeight / 2) {
          this.slideIn = true
          // Set initial value of skills array to display
          this.selectedSkillsArray = this.skills.coreLanguages
          this.skillsAnimation = true
        }
      }
    })
  },
  methods: {
    onSkillsTabChange(e) {
      this.skillsAnimation = false

      const text = e.target.textContent.toLowerCase()

      if (text.includes('core')) {
        this.selectedSkillsTab = 'core'
        this.skills.coreLanguages.isActive = true
        this.skills.libraries.isActive = false
        this.skills.otherSkills.isActive = false
      }

      if (text.includes('library')) {
        this.selectedSkillsTab = 'library'
        this.skills.coreLanguages.isActive = false
        this.skills.libraries.isActive = true
        this.skills.otherSkills.isActive = false
      }

      if (text.includes('other')) {
        this.selectedSkillsTab = 'others'
        this.skills.coreLanguages.isActive = false
        this.skills.libraries.isActive = false
        this.skills.otherSkills.isActive = true
      }
    },
  },
}
</script>

<style scoped>
.arrow-icon {
  @apply rounded-full p-2 border border-solid border-orange-600 w-3 h-3 font-mono flex justify-center items-center mx-2 bg-green-500 text-white;
}

.arrow-icon-second {
  @apply rounded-md p-2 border border-solid border-red-600 w-3 h-3 font-mono flex justify-center items-center mx-2 bg-blue-700 text-white;
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
