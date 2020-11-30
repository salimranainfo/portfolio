<template>
  <div id="contact" class="overflow-hidden">
    <div ref="contact" class="bg-gray-800 w-screen h-screen p-4 text-white">
      <!-- Contact Headline -->

      <transition name="slide" enter-active-class="animated bounceInLeft slow">
        <div
          v-show="slideIn"
          style="height: 15%"
          class="flex justify-center items-center"
        >
          <h2
            class="text-xl md:text-3xl font-semibold border-b-2 border-white border-dashed"
          >
            GET IN TOUCH
          </h2>
        </div>
      </transition>

      <!-- Contact Information -->

      <transition name="slide" enter-active-class="animated bounceInRight slow">
        <div
          v-show="slideIn"
          class="flex flex-col justify-start items-start md:justify-center p-6 mt-4 md:text-xl lg:text-2xl"
          style="height: 55%"
        >
          <p class="mb-4">
            Please send me an email or text/call me to below number in order to
            get in touch. You can also contact me over Skype.
          </p>
          <div class="flex justify-center items-center space-x-2">
            <svg
              class="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <p>
              <strong>Email 1 : </strong
              ><a class="link" href="mailto:rana@srwebstudio.com">
                rana@srwebstudio.com</a
              >
            </p>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <svg
              class="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <p>
              <strong>Email 2 : </strong
              ><a class="link" href="mailto:rana.salim.info@gmail.com"
                >rana.salim.info@gmail.com</a
              >
            </p>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <svg
              class="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <p>
              <strong>Phone : </strong
              ><a class="link" href="tel:+8801715040028">+88 01715 040028</a>
            </p>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <svg
              id="Layer_1"
              class="h-6 w-6"
              data-name="Layer 1"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #48bb78;
                  }
                </style>
              </defs>
              <title />
              <path
                class="cls-1"
                d="M41.75,22.5a19.19,19.19,0,0,1,10.08,2.85L54,26.71l2.54-.54a39,39,0,0,1,46.14,46.72l-.52,2.33,1.11,2.11a19,19,0,0,1,2.19,8.92A19.25,19.25,0,0,1,77,103.15L74.94,102l-2.34.48A39,39,0,0,1,26.44,56.84l.49-2.55-1.4-2.19A19.24,19.24,0,0,1,41.75,22.5m0-6.5A25.74,25.74,0,0,0,20.06,55.61a45.51,45.51,0,0,0,53.86,53.25,25.75,25.75,0,0,0,35.14-34.54,45.49,45.49,0,0,0-53.83-54.5A25.62,25.62,0,0,0,41.75,16Z"
              />
              <path
                class="cls-1"
                d="M41.4,51.58c0-11.52,11.52-15.7,22.27-15.7,16.66,0,20.44,9.84,21.32,12.66.53,1.68-1,6.51-5.6,6s-5.23-7-14.19-9.52c-2.75-.76-11.61.35-11.61,5.52,0,4.6,15,6.86,22.37,9.71,7.72,3,11.23,7.14,11.23,14.18,0,14.28-15.42,17.7-21.8,17.7-20.18,0-24.56-14-24.56-16.37a5.1,5.1,0,0,1,5.23-5.43c6.95,0,4.28,12.28,17.61,12.28,10.47,0,11.52-4.85,11.52-7.23,0-6.85-18.27-9.23-18.27-9.23S41.4,63.71,41.4,51.58Z"
              />
            </svg>
            <p><strong>Skype : </strong>salim.rana@outlook.com</p>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <svg
              class="h-6 w-6"
              version="1.1"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title />
              <desc />
              <defs />
              <g
                id="black"
                fill="none"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
              >
                <g id="slice" transform="translate(-800.000000, -400.000000)" />
                <g
                  id="whatsapp"
                  fill="#48bb78"
                  transform="translate(7.000000, 13.000000)"
                >
                  <path
                    d="M17.0712615,33.2210462 C14.2108308,33.2210462 11.5235692,32.4899692 9.1856,31.2068923 L0.153846154,34.0769231 L3.09809231,25.3918769 C1.61304615,22.9523692 0.757538462,20.0915692 0.757538462,17.0336 C0.757538462,8.09341538 8.06129231,0.846153846 17.0716308,0.846153846 C26.0808615,0.846153846 33.3846154,8.09341538 33.3846154,17.0336 C33.3846154,25.9737846 26.0812308,33.2210462 17.0712615,33.2210462 Z M17.0712615,3.42412308 C9.50793846,3.42412308 3.35581538,9.52935385 3.35581538,17.0336 C3.35581538,20.0114462 4.32652308,22.7692308 5.96812308,25.0130462 L4.25489231,30.0670769 L9.52529231,28.3918769 C11.6912,29.8137846 14.2854154,30.6430769 17.0712615,30.6430769 C24.6334769,30.6430769 30.7867077,24.5382154 30.7867077,17.0339692 C30.7867077,9.52972308 24.6334769,3.42412308 17.0712615,3.42412308 L17.0712615,3.42412308 Z M25.3088,20.7617231 C25.2083692,20.5966769 24.9417846,20.4969846 24.5426462,20.2987077 C24.1424,20.1004308 22.1758769,19.1400615 21.8099692,19.0082462 C21.4429538,18.8760615 21.176,18.8092308 20.9097846,19.2065231 C20.6435692,19.6038154 19.8770462,20.4969846 19.6433231,20.7617231 C19.4099692,21.0268308 19.1769846,21.0600615 18.7771077,20.8614154 C18.3776,20.6631385 17.0889846,20.2440615 15.5611077,18.8923077 C14.3725538,17.8407385 13.5698462,16.5425231 13.3368615,16.1448615 C13.1035077,15.7479385 13.3121231,15.5334154 13.5122462,15.3358769 C13.6920615,15.1579077 13.9121231,14.8724923 14.1122462,14.6409846 C14.3123692,14.4091077 14.3788308,14.2440615 14.5117538,13.9789538 C14.6454154,13.7142154 14.5785846,13.4827077 14.4785231,13.2836923 C14.3784615,13.0854154 13.5783385,11.1329231 13.2452923,10.3383385 C12.9122462,9.54449231 12.5795692,9.67667692 12.3458462,9.67667692 C12.1124923,9.67667692 11.8459077,9.64344615 11.5793231,9.64344615 C11.3127385,9.64344615 10.8792615,9.74276923 10.5126154,10.1396923 C10.1463385,10.5369846 9.1136,11.4969846 9.1136,13.4491077 C9.1136,15.4016 10.5458462,17.288 10.7463385,17.5523692 C10.9460923,17.8167385 13.5118769,21.9536 17.5767385,23.5424 C21.6430769,25.1308308 21.6430769,24.6009846 22.3763692,24.5348923 C23.1085538,24.4688 24.7412923,23.5752615 25.0754462,22.6488615 C25.4081231,21.7217231 25.4081231,20.9271385 25.3088,20.7617231 L25.3088,20.7617231 Z"
                  />
                </g>
              </g>
            </svg>
            <p><strong>WhatsApp : </strong>+88 01715 040028</p>
          </div>
        </div>
      </transition>

      <!-- Social Icons -->

      <transition name="slide" enter-active-class="animated bounceInLeft slow">
        <div
          v-if="slideIn"
          style="height: 20%"
          class="flex justify-center items-center space-x-2"
        >
          <a href="#">
            <svg
              class="h-8 w-8 shadow-md md:h-12 md:w-12"
              style="enable-background: new 0 0 64 64"
              version="1.1"
              viewBox="0 0 64 64"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <style type="text/css">
                .st0 {
                  fill: #4267b2;
                }
                .st1 {
                  fill: url(#SVGID_1_);
                }
                .st2 {
                  fill: #ffffff;
                }
                .st3 {
                  fill: #c2191e;
                }
                .st4 {
                  fill: #1da1f3;
                }
                .st5 {
                  fill: #fefe00;
                }
                .st6 {
                  fill: #25d366;
                  stroke: #ffffff;
                  stroke-width: 5;
                  stroke-miterlimit: 10;
                }
                .st7 {
                  fill: #cb2027;
                }
                .st8 {
                  fill: #0077b5;
                }
                .st9 {
                  fill: url(#SVGID_2_);
                }
                .st10 {
                  fill: url(#SVGID_3_);
                }
                .st11 {
                  fill: #ff004f;
                }
                .st12 {
                  fill: #00f7ef;
                }
                .st13 {
                  fill: #5181b8;
                }
                .st14 {
                  fill: #395976;
                }
                .st15 {
                  fill: #f58220;
                }
                .st16 {
                  fill: #e6162d;
                }
                .st17 {
                  fill: #ff9933;
                }
              </style>
              <g id="guidlines" />
              <g id="FB" />
              <g id="ig" />
              <g id="yt" />
              <g id="twitter" />
              <g id="snapchat" />
              <g id="WA" />
              <g id="Pinterrest" />
              <g id="Layer_9">
                <path
                  class="st8"
                  d="M2,6v52c0,2.2,1.8,4,4,4h52c2.2,0,4-1.8,4-4V6c0-2.2-1.8-4-4-4H6C3.8,2,2,3.8,2,6z M19.1,52H12V24.4h7.1V52z    M15.6,18.9c-2,0-3.6-1.5-3.6-3.4c0-1.9,1.6-3.4,3.6-3.4c2,0,3.6,1.5,3.6,3.4C19.1,17.4,17.5,18.9,15.6,18.9z M52,52h-7.1V38.2   c0-2.9-0.1-4.8-0.4-5.7c-0.3-0.9-0.8-1.5-1.4-2c-0.7-0.5-1.5-0.7-2.4-0.7c-1.2,0-2.3,0.3-3.2,1c-1,0.7-1.6,1.6-2,2.7   c-0.4,1.1-0.5,3.2-0.5,6.2V52h-8.6V24.4h7.1v4.1c2.4-3.1,5.5-4.7,9.2-4.7c1.6,0,3.1,0.3,4.5,0.9c1.3,0.6,2.4,1.3,3.1,2.2   c0.7,0.9,1.2,1.9,1.4,3.1c0.3,1.1,0.4,2.8,0.4,4.9V52z"
                />
              </g>
              <g id="Layer_10" />
              <g id="Layer_11" />
              <g id="Layer_12" />
              <g id="Layer_13" />
              <g id="Layer_14" />
              <g id="Layer_15" />
              <g id="Layer_16" />
              <g id="Layer_17" />
            </svg>
          </a>
          <a href="#">
            <svg
              class="h-8 w-8 md:w-12 md:h-12"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="_x37_1-github">
                <g>
                  <g>
                    <g>
                      <path
                        d="M255.969,21.733c-131.739,0-238.572,107.541-238.572,240.206      c0,106.107,68.362,196.121,163.205,227.91c11.929,2.22,16.285-5.196,16.285-11.567c0-5.713-0.205-20.817-0.33-40.856      c-66.36,14.507-80.375-32.208-80.375-32.208c-10.828-27.756-26.489-35.139-26.489-35.139      c-21.684-14.893,1.613-14.591,1.613-14.591c23.948,1.701,36.534,24.759,36.534,24.759      c21.295,36.694,55.866,26.105,69.465,19.947c2.146-15.521,8.318-26.105,15.154-32.116      c-52.974-6.073-108.69-26.681-108.69-118.699c0-26.229,9.31-47.668,24.576-64.478c-2.475-6.071-10.646-30.507,2.329-63.554      c0,0,20.045-6.455,65.613,24.614c19.031-5.325,39.432-7.982,59.742-8.072c20.25,0.123,40.676,2.747,59.738,8.105      c45.547-31.074,65.559-24.614,65.559-24.614c13.002,33.077,4.832,57.482,2.387,63.549c15.297,16.81,24.516,38.25,24.516,64.482      c0,92.258-55.773,112.563-108.92,118.512c8.559,7.422,16.191,22.069,16.191,44.471c0,32.124-0.297,58.019-0.297,65.888      c0,6.427,4.293,13.903,16.402,11.54c94.697-31.824,162.998-121.805,162.998-227.883      C494.604,129.273,387.771,21.733,255.969,21.733L255.969,21.733z M255.969,21.733"
                        style="fill: #6879d9"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="Layer_1" />
            </svg>
          </a>
        </div>
      </transition>

      <!-- Copyright Info -->
      <transition name="slide" enter-active-class="animated bounceInUp slow">
        <div
          v-if="slideIn"
          class="text-xs md:text-xl flex justify-between items-center"
          style="height: 10%"
        >
          <p>
            Made with
            <span>
              <svg
                class="w-6 h-6 inline-block text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </span>
            by Md Salim Rana
          </p>
          <p>&copy;{{ new Date().getFullYear() }} - Md Salim Rana</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      slideIn: false,
    }
  },
  mounted() {
    // Handle scroll event to perform animation on scroll only

    window.addEventListener('scroll', () => {
      const aboutHeading = this.$refs.contact
      if (aboutHeading) {
        const marginTopHeading = aboutHeading.getBoundingClientRect().top
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
.link {
  @apply text-blue-300 transition ease-in duration-150;
}

.link:hover {
  @apply text-blue-500;
}
</style>
