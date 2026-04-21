<template>
  <div class="min-h-screen">
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
            learn more about sustainable farming — fill out the form and our
            team will get back to you within 24 hours.
          </p>

          <div class="mt-10 space-y-6">
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
                <p class="mt-1 text-gray-800">Ogun State, Nigeria</p>
              </div>
            </div>

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
                <!-- ← replace with real number -->
              </div>
            </div>

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
                <p class="mt-1 text-gray-800">hello@yourfarm.ng</p>
                <!-- ← replace with real email -->
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Form -->
        <div
          class="flex-1 bg-accentTint p-8 md:p-10 rounded-2xl border border-divider shadow-xl"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-primary mb-8">
            Send us a message
          </h3>

          <form @submit.prevent="sendEmail" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col">
                <label
                  for="firstName"
                  class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  placeholder="Olamilekan"
                  class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition"
                />
              </div>

              <div class="flex flex-col">
                <label
                  for="lastName"
                  class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Igwe"
                  class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition"
                />
              </div>
            </div>

            <div class="flex flex-col">
              <label
                for="email"
                class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
              >
                Email address
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="yourname@example.com"
                class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>

            <div class="flex flex-col">
              <label
                for="message"
                class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us what you need... (e.g. bulk eggs, partnership, farm tour, etc.)"
                class="border border-divider rounded-lg outline-none px-4 py-3 bg-[#f0ead6] focus:border-primary focus:ring-1 focus:ring-primary transition resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-secondary transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  emailjs
    .sendForm(
      "service_xvzybgx",
      "template_innunhh",
      e.target,
      "I8fMlw0D6mDUp6zcj",
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message");
    });
};
</script>
