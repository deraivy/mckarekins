<template>
  <div>
    <section
      class="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-32 pb-20"
    >
      <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span
          class="inline-block text-xs font-bold tracking-[0.3em] text-moss-600 uppercase mb-6 scroll-reveal"
          >About Us</span
        >
        <h1
          class="font-serif text-5xl lg:text-7xl font-semibold leading-[1.1] mb-8 text-balance scroll-reveal"
          style="transition-delay: 100ms"
        >
          Rooted in Passion,<br />
          <span class="italic text-moss-700">Grown with Purpose</span>
        </h1>
        <p
          class="text-xl text-earth-600 leading-relaxed max-w-3xl mx-auto text-balance scroll-reveal"
          style="transition-delay: 200ms"
        >
          From a single pond to an integrated agricultural ecosystem, our
          journey reflects a commitment to sustainable farming and community
          prosperity.
        </p>
      </div>
    </section>

    <section class="py-24 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-12 gap-16 items-center">
          <!-- Image Grid -->
          <div class="lg:col-span-5 relative">
            <div class="relative z-10 scroll-reveal">
              <div
                class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=1000&fit=crop"
                  alt="Young plant in hands"
                  class="w-full h-full object-cover image-hover border rounded-3xl"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-moss-900/90 via-moss-900/50 to-transparent p-8"
                >
                  <p class="text-white font-serif text-xl italic">
                    "The beginning of everything"
                  </p>
                  <p class="text-moss-200 text-sm mt-2">2018</p>
                </div>
              </div>
            </div>
            <div
              class="absolute -bottom-8 -right-8 w-48 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white scroll-reveal z-20"
              style="transition-delay: 200ms"
            >
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&h=500&fit=crop"
                alt="Farmer working"
                class="w-full h-full object-cover image-hover"
              />
            </div>
            <div
              class="absolute -top-4 -left-4 w-32 h-32 bg-clay-500/20 rounded-full blur-2xl"
            ></div>
          </div>

          <!-- Content -->
          <div
            class="lg:col-span-7 space-y-8 scroll-reveal"
            style="transition-delay: 100ms"
          >
            <div>
              <span
                class="text-xs font-bold tracking-[0.2em] text-clay-600 uppercase mb-4 block"
                >Our Story</span
              >
              <h2
                class="font-serif text-4xl lg:text-5xl font-semibold mb-6 text-balance"
              >
                Six Years of Cultivating Excellence
              </h2>
            </div>

            <div class="prose prose-lg text-earth-600 space-y-6">
              <p class="leading-relaxed">
                Green Valley Farm began in 2018 when founder Adebayo Johnson
                returned to his ancestral lands with a vision: to create a farm
                that honors traditional wisdom while embracing modern
                sustainable practices. What started as a modest catfish pond has
                blossomed into a 50-acre integrated agricultural operation.
              </p>
              <p class="leading-relaxed">
                Our philosophy centers on the interconnectedness of all farming
                activities. The poultry provides manure for the cassava fields;
                the fish ponds irrigate crops during dry seasons; and every
                harvest strengthens our local community through employment and
                food security.
              </p>
              <p class="leading-relaxed">
                Today, we stand as a model for integrated farming in the region,
                proving that environmental stewardship and commercial success
                can grow hand in hand.
              </p>
            </div>

            <div class="flex items-center gap-6 pt-6 border-t border-earth-200">
              <div class="text-center">
                <div class="font-serif text-3xl font-semibold text-moss-800">
                  2018
                </div>
                <div
                  class="text-xs text-earth-500 uppercase tracking-wider mt-1"
                >
                  Founded
                </div>
              </div>
              <div class="w-px h-12 bg-earth-200"></div>
              <div class="text-center">
                <div class="font-serif text-3xl font-semibold text-moss-800">
                  50
                </div>
                <div
                  class="text-xs text-earth-500 uppercase tracking-wider mt-1"
                >
                  Acres
                </div>
              </div>
              <div class="w-px h-12 bg-earth-200"></div>
              <div class="text-center">
                <div class="font-serif text-3xl font-semibold text-moss-800">
                  25+
                </div>
                <div
                  class="text-xs text-earth-500 uppercase tracking-wider mt-1"
                >
                  Team Members
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Farm Showcase Gallery -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 scroll-reveal">
          <span
            class="text-xs font-bold tracking-[0.2em] text-moss-600 uppercase mb-4 block"
            >Our Operations</span
          >
          <h2 class="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Life on the Farm
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div
            class="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group scroll-reveal"
          >
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=800&fit=crop"
              alt="Aerial view of farmland"
              class="w-full h-full object-cover image-hover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-moss-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
            >
              <span class="text-white font-medium"
                >Aerial View of Our 50-Acre Farm</span
              >
            </div>
          </div>
          <div
            class="rounded-2xl overflow-hidden relative group scroll-reveal"
            style="transition-delay: 100ms"
          >
            <img
              src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop"
              alt="Catfish farming"
              class="w-full h-full object-cover image-hover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-moss-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
            >
              <span class="text-white text-sm font-medium">Aquaculture</span>
            </div>
          </div>
          <div
            class="rounded-2xl overflow-hidden relative group scroll-reveal"
            style="transition-delay: 150ms"
          >
            <img
              src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop"
              alt="Free range chickens"
              class="w-full h-full object-cover image-hover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-moss-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
            >
              <span class="text-white text-sm font-medium">Poultry</span>
            </div>
          </div>
          <div
            class="col-span-2 rounded-2xl overflow-hidden relative group scroll-reveal"
            style="transition-delay: 200ms"
          >
            <img
              src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop"
              alt="Cassava field"
              class="w-full h-full object-cover image-hover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-moss-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
            >
              <span class="text-white text-sm font-medium"
                >Cassava Cultivation</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-24 bg-[#ede3ce] text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-button"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid md:grid-cols-2 gap-16">
          <div class="scroll-reveal" style="transition-delay: 150ms">
            <div
              class="p-6 bg-[#f6efdf] shadow-xl border border-border-amber-600 rounded-2xl"
            >
              <div
                class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6"
              >
                <Icon
                  name="gravity-ui:target-dart"
                  class="w-10 h-10 text-secondary"
                />
              </div>

              <h3 class="text-black font-serif text-3xl font-semibold mb-4">
                Our Mission
              </h3>
              <p class="text-black text-lg leading-relaxed mb-6">
                To produce high-quality agricultural products through
                sustainable, integrated farming practices that enrich the soil,
                support our community, and provide nutritious food for
                generations to come.
              </p>
            </div>
          </div>

          <div class="scroll-reveal" style="transition-delay: 150ms">
            <div
              class="p-6 bg-[#f6efdf] shadow-xl border border-border-amber-600 rounded-2xl"
            >
              <div
                class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6"
              >
                <Icon
                  name="gravity-ui:target-dart"
                  class="w-10 h-10 text-secondary"
                />
              </div>

              <h3 class="text-black font-serif text-3xl font-semibold mb-4">
                Our Vision
              </h3>
              <p class="text-black text-lg leading-relaxed mb-6">
                To become the leading model of sustainable integrated
                agriculture in West Africa, demonstrating that farming can heal
                the land while creating prosperity for farmers and consumers
                alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
