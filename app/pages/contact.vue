<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div
      class="relative h-48 md:h-64 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#1c3d27] via-[#234d32] to-[#2a4a35]"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent"
      ></div>
      <div
        class="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]"
      ></div>
      <div class="relative z-10 text-center">
        <h2
          class="text-3xl md:text-4xl font-serif font-bold text-accent tracking-tight"
        >
          Contact Us
        </h2>
        <div class="mt-2 flex items-center justify-center gap-2">
          <div class="h-px w-8 bg-accent/40"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
          <div class="h-px w-8 bg-accent/40"></div>
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      ></div>
    </div>

    <!-- Body -->
    <div class="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-20">
      <div class="flex flex-col md:flex-row justify-between gap-12 lg:gap-16">
        <!-- Left - Info -->
        <div class="flex-1">
          <div class="flex items-center space-x-3 mb-4">
            <div class="border-t-2 border-primary w-12" />
            <small class="uppercase tracking-wider text-primary font-medium"
              >Get Started</small
            >
          </div>

          <h2
            class="text-4xl md:text-5xl font-bold leading-tight max-w-md capitalize text-primary"
          >
            Let's grow
            <em class="text-amber-600 font-normal italic">together</em>
          </h2>

          <p class="mt-6 text-gray-700 leading-relaxed">
            Whether you're looking to buy fresh produce, become a partner, or
            learn more about sustainable farming. Fill out the form and our team
            will get back to you within 24 hours.
          </p>

          <div class="mt-10 space-y-6">
            <!-- Location -->
            <div class="flex items-start gap-4">
              <div
                class="w-11 h-11 bg-[#1c3d27] rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-[#e8cfa0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"
                  />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <h3
                  class="uppercase font-semibold text-primary tracking-wide text-sm"
                >
                  Location
                </h3>
                <p class="mt-1 text-gray-800">Owu-Ikosi, Epe, Lagos, Nigeria</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div
                class="w-11 h-11 bg-[#1c3d27] rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-[#e8cfa0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.9.5 2.9.7a2 2 0 011.6 2z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  class="uppercase font-semibold text-primary tracking-wide text-sm"
                >
                  Phone
                </h3>
                <p class="mt-1 text-gray-800">+234 704 264 1446</p>
                <p class="mt-1 text-gray-800">+234 707 765 3223</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <div
                class="w-11 h-11 bg-[#1c3d27] rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-[#e8cfa0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div>
                <h3
                  class="uppercase font-semibold text-primary tracking-wide text-sm"
                >
                  Email
                </h3>
                <p class="mt-1 text-gray-800">hello@mckarekinsfarm.ng</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Form or Success -->
        <div
          class="flex-1 bg-accentTint p-8 md:p-10 rounded-2xl border border-divider shadow-xl"
        >
          <!-- Success State -->
          <Transition name="fade" mode="out-in">
            <div
              v-if="submitted"
              class="flex flex-col items-center justify-center h-full py-10 text-center gap-5"
            >
              <div
                class="w-16 h-16 rounded-full bg-[#1c3d27] flex items-center justify-center"
              >
                <svg
                  class="w-8 h-8 text-[#e8cfa0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary">Message Sent!</h3>
              <p class="text-gray-600 max-w-xs leading-relaxed">
                Thank you for reaching out. Our team will get back to you within
                24 hours.
              </p>
              <button
                @click="submitted = false"
                class="mt-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition duration-300"
              >
                Send another message
              </button>
            </div>

            <!-- Form State -->
            <div v-else>
              <h3 class="text-2xl md:text-3xl font-bold text-primary mb-8">
                Send us a message
              </h3>

              <form @submit.prevent="sendEmail" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col">
                    <label
                      for="firstName"
                      class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                      >First name</label
                    >
                    <input
                      id="firstName"
                      name="first_name"
                      type="text"
                      placeholder="Olamilekan"
                      required
                      class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label
                      for="lastName"
                      class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                      >Last name</label
                    >
                    <input
                      id="lastName"
                      name="last_name"
                      type="text"
                      placeholder="Igwe"
                      required
                      class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label
                    for="email"
                    class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                    >Email address</label
                  >
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="yourname@example.com"
                    required
                    class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>

                <div class="flex flex-col">
                  <label
                    for="message"
                    class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us what you need... (e.g. bulk eggs, partnership, farm tour, etc.)"
                    required
                    class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition resize-y"
                  ></textarea>
                </div>

                <!-- Error message -->
                <p v-if="error" class="text-red-600 text-sm font-medium">
                  Something went wrong. Please try again.
                </p>

                <button
                  type="submit"
                  :disabled="sending"
                  class="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-secondary transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span v-if="sending">Sending...</span>
                  <span v-else>Send Message</span>
                </button>
              </form>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

useSeoMeta({
  title: "Contact Us | Mckarekins Farm Nigeria",
  description:
    "Get in touch with Mckarekins Farm. Buy fresh catfish, broiler chicken, eggs, goats, cattle or cassava directly from our farm in Owu-Ikosi, Epe, Lagos.",
  ogTitle: "Contact Mckarekins Farm | Owu-Ikosi, Epe, Lagos",
  ogDescription:
    "Reach out to us for bulk orders, farm partnerships, or general enquiries. We respond within 24 hours.",
  ogImage: "/images/about.jpg",
  ogUrl: "https://mckarekinsfarm.ng/contact",
  twitterCard: "summary_large_image",
  twitterTitle: "Contact Mckarekins Farm",
  twitterDescription:
    "Fresh produce direct from our farm in Epe, Lagos. Reach out for orders, partnerships or farm tours.",
  twitterImage: "/images/about.jpg",
});

const submitted = ref(false);
const sending = ref(false);
const error = ref(false);

const sendEmail = (e) => {
  sending.value = true;
  error.value = false;

  emailjs
    .sendForm(
      "service_xvzybgx",
      "template_innunhh",
      e.target,
      "I8fMlw0D6mDUp6zcj",
    )
    .then(() => {
      submitted.value = true;
      e.target.reset();
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      sending.value = false;
    });
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
