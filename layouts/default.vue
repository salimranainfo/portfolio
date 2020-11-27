<template>
  <div>
    <!-- Navigation Menu -->
    <div class="fixed top-0 right-0 p-4">
      <button
        class="block h-10 w-10 focus:outline-none"
        @click="showMenuMethod"
      >
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <transition
        name="menu"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <div
          v-if="showMenu"
          class="fixed rounded-lg top-0 right-0 bg-white w-screen h-screen"
        >
          <!-- Close Menu Icon/Button -->
          <button
            class="inline-block w-16 h-16 fixed top-0 right-0 mr-1 mt-2 focus:outline-none"
            @click="hideMenuMethod"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <!-- Menu Items -->
          <ul
            class="text-center font-semibold flex flex-col justify-center items-center w-full h-full"
          >
            <li class="menu-item">
              <a href="#" @click="hideMenuMethod">INTRODUCTION</a>
            </li>
            <li class="menu-item">
              <a href="#about" @click="hideMenuMethod">ABOUT ME</a>
            </li>
            <li class="menu-item">
              <a href="#" @click="hideMenuMethod">PROJECTS</a>
            </li>
            <li class="menu-item rounded-lg hover:rounded-lg">
              <a href="#" @click="hideMenuMethod">CONTACT</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- Nuxt Router Vuew -->

    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    showMenu: {
      get() {
        return this.$store.state.isMenuActive
      },
      set(value) {
        this.$store.commit('SET_MENU_ACTIVE_STATUS', value)
      },
    },
  },
  methods: {
    showMenuMethod() {
      this.showMenu = true
    },
    hideMenuMethod() {
      this.showMenu = false
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-200;
}

.menu-item {
  @apply w-full border-b-2 border-solid border-gray-200 transition ease-in duration-150;
}

.menu-item:hover {
  @apply bg-gray-200;
}

.menu-item a {
  @apply inline-block w-full px-16 py-4 text-lg;
}
</style>
