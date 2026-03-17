<template>
  <div class="bg-[#ede3cf] min-h-screen">
    <div class="max-w-xl md:container mx-auto px-12 py-12">
      <div class="flex flex-col md:flex-row justify-between gap-12">
        <div class="flex-1">
          <div class="flex items-center space-x-2 mb-2">
            <div class="border border-amber-700 w-12" />
            <small class="uppercase text-amber-700">get started</small>
          </div>

          <h2 class="text-4xl md:text-5xl leading-loose max-w-xs capitalize">
            Let's grow <span class="text-amber-700">together</span>
          </h2>
          <p class="my-6">
            Whether you want to buy fresh produce, partner with us, or learn
            farming — fill out the form and we'll get back to you within 24
            hours.
          </p>

          <div class="flex gap-4 items-center">
            <div class="bg-[#e8d8bc] w-fit h-fit p-2 rounded-lg">
              <Icon name="carbon:location" class="w-8 h-8" />
            </div>
            <div>
              <h2 class="uppercase font-semibold text-[#8b6c43]">Location</h2>
              <p>Ogun State, Nigeria</p>
            </div>
          </div>

          <div class="mt-5 flex items-center gap-4">
            <div class="bg-[#e8d8bc] w-fit h-fit p-2 rounded-lg">
              <Icon name="mage:phone" class="w-8 h-8" />
            </div>
            <div>
              <h2 class="uppercase font-semibold text-[#8b6c43]">Phone</h2>
              <p>Ogun State, Nigeria</p>
            </div>
          </div>

          <div class="mt-5 flex items-center gap-4">
            <div class="bg-[#e8d8bc] w-fit h-fit p-2 rounded-lg">
              <Icon name="mynaui:mail" class="w-8 h-8" />
            </div>
            <div>
              <h2 class="uppercase font-semibold text-[#8b6c43]">Email</h2>
              <p>Ogun State, Nigeria</p>
            </div>
          </div>
        </div>

        <div class="bg-[#f6efdf] p-6 flex-1 rounded-xl border shadow-md">
          <h3 class="text-2xl mb-6 font-semibold">Send us a message</h3>

          <form action="" class="space-y-6">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex flex-col w-full">
                <label
                  for="firstname"
                  class="mb-1 uppercase font-bold text-sm text-[#8b6c43]"
                  >First name</label
                >
                <input
                  type="text"
                  placeholder="Amara"
                  class="border border-[#dcd6c5] rounded-lg outline-none p-3 bg-[#f6efdf] placeholder:text-black placeholder:text-sm"
                />
              </div>

              <div class="flex flex-col w-full">
                <label
                  for="firstname"
                  class="mb-1 uppercase font-bold text-sm text-[#8b6c43]"
                  >First name</label
                >
                <input
                  type="text"
                  placeholder="Igwe"
                  class="border border-[#dcd6c5] rounded-lg outline-none p-3 bg-[#f6efdf] placeholder:text-black placeholder:text-sm"
                />
              </div>
            </div>
            <div class="flex flex-col w-full">
              <label
                for="firstname"
                class="mb-1 uppercase font-bold text-sm text-[#8b6c43]"
                >First name</label
              >
              <input
                type="text"
                placeholder="Amara"
                class="border border-[#dcd6c5] rounded-lg outline-none p-3 bg-[#f6efdf] placeholder:text-black placeholder:text-sm"
              />
            </div>

            <div class="flex flex-col w-full">
              <label
                for="firstname"
                class="mb-1 uppercase font-bold text-sm text-[#8b6c43]"
                >First name</label
              >
              <textarea
                name="message"
                id=""
                cols="25"
                rows="7"
                placeholder="Tell us what you need...."
                class="border border-[#dcd6c5] rounded-lg outline-none p-3 bg-[#f6efdf] placeholder:text-black placeholder:text-sm"
              ></textarea>
            </div>

            <div class="bg-button p-3 rounded-full text-white text-center">
              Send Message
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
