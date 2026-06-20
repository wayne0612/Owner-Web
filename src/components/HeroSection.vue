<script setup>
import { ref, onMounted } from 'vue'
import { ArrowDown } from 'lucide-vue-next'

const loaded = ref(false)
onMounted(() => {
  setTimeout(() => loaded.value = true, 50)
})
</script>

<template>
  <section id="home" class="relative overflow-hidden">
    <!-- Full-bleed hero — edge to edge, no container -->
    <div class="relative h-[100svh] min-h-[640px] w-full">
      <!-- Background image (Ken Burns) -->
      <div class="absolute inset-0">
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cinematic%20dark%20portrait%20photography%20studio%20lighting%20film%20grain&image_size=landscape_16_9"
          alt="Lumen — featured work"
          class="w-full h-full object-cover opacity-80"
          :class="loaded ? '' : 'opacity-0'"
          style="transition: opacity 1.4s ease; animation: slow-ken-burns 18s ease-out both;"
        />
        <!-- Gradient wash: keep bottom readable for headline -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/20 to-[#0a0a0a]"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-transparent"></div>
      </div>

      <!-- Top meta row (outside grid for full-bleed treatment) -->
      <div class="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-28 md:pt-32 flex items-start justify-between">
        <div class="label">Portfolio · 2026 / 01</div>
        <div class="label hidden md:block">Shanghai · 31.2°N 121.4°E</div>
      </div>

      <!-- Hero composition: brand first, headline second, body third, CTA fourth -->
      <div class="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 mt-14 md:mt-20">
        <div
          class="max-w-[1050px]"
          :style="{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 1.1s cubic-bezier(.22,1,.36,1), transform 1.1s cubic-bezier(.22,1,.36,1)' }"
        >
          <!-- Brand statement (tiny, quiet) -->
          <p class="text-[#8a8a8a] text-[15px] md:text-base max-w-xl mb-6 md:mb-10 leading-relaxed">
            Photography & moving image — by Lumen Chen
          </p>

          <!-- The headline is the loudest thing on the page -->
          <h1
            class="font-display font-medium text-hero text-[#f5f5f5] leading-[0.92] tracking-tightest"
          >
            Still frames,
            <br class="hidden md:block" />
            <span class="text-[#8a8a8a]">stilled</span> time.
          </h1>

          <!-- Support line -->
          <div class="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <p class="text-[#c9c9c9] text-[15px] md:text-base max-w-md leading-relaxed">
              Selected work from commercial, editorial, and personal projects — made between studio and street.
            </p>
            <a href="#portfolio" class="link-arrow group">
              <span>View selected work</span>
              <ArrowDown :size="14" class="transition group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom info row -->
      <div class="absolute bottom-0 left-0 right-0 z-10">
        <div class="mx-auto max-w-[1400px] px-6 md:px-10 pb-8 md:pb-10">
          <div class="border-t border-[#1f1f1f]/70 pt-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-[11px] md:text-[12px] text-[#8a8a8a] font-mono uppercase tracking-[0.18em]">
            <div>Portrait</div>
            <div>Editorial</div>
            <div class="hidden md:block">Commercial</div>
            <div>Moving image</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marquee band -->
    <div class="relative overflow-hidden border-t border-b border-[#1f1f1f] bg-[#0a0a0a] py-5">
      <div class="flex whitespace-nowrap will-change-transform" style="animation: marquee 32s linear infinite;">
        <template v-for="i in 2" :key="i">
          <span class="font-display text-[32px] md:text-[44px] font-medium text-[#f5f5f5] px-8 tracking-tight">Available for 2026 commissions</span>
          <span class="font-display text-[32px] md:text-[44px] font-medium text-[#ff4d2e] px-8 tracking-tight">✦</span>
          <span class="font-display text-[32px] md:text-[44px] font-medium text-[#8a8a8a] px-8 tracking-tight italic">Portrait · Editorial · Motion</span>
          <span class="font-display text-[32px] md:text-[44px] font-medium text-[#ff4d2e] px-8 tracking-tight">✦</span>
        </template>
      </div>
    </div>
  </section>
</template>
