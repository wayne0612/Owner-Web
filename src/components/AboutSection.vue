<script setup>
import { profile } from '../data/site.js'
</script>

<template>
  <section id="about" class="border-t border-[#1f1f1f]">
    <div class="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
      <!-- Section head -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
        <div class="md:col-span-3">
          <div class="label">02 / About</div>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display font-medium text-h2 text-[#f5f5f5]">
            A quiet observer of light.
          </h2>
        </div>
      </div>

      <!-- Split: image on the right, text on the left, no cards -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        <div class="md:col-span-7 order-2 md:order-1 space-y-6 md:space-y-8">
          <p class="text-[17px] md:text-[19px] leading-[1.65] text-[#e4e4e7] font-light max-w-[620px]">
            {{ profile.bio }}
          </p>
          <p class="text-[15px] md:text-[16px] leading-[1.7] text-[#8a8a8a] max-w-[620px]">
            Based in Shanghai, working globally. Currently accepting commissions for editorial, commercial, and personal portrait work for 2026.
          </p>

          <!-- Stats row (divided, no card boxes) -->
          <div class="pt-10 md:pt-14 grid grid-cols-3 gap-6 border-t border-[#1f1f1f]">
            <div v-for="stat in profile.stats" :key="stat.label" class="pt-6">
              <div class="font-display text-[28px] md:text-[38px] font-medium text-[#f5f5f5] leading-none">{{ stat.number }}</div>
              <div class="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] font-mono">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Portrait image (no card frame, no border) -->
        <div class="md:col-span-5 order-1 md:order-2">
          <div class="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=editorial%20photographer%20portrait%20black%20and%20white%20studio%20cinematic&image_size=portrait_4_3"
              :alt="profile.name"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Small caption, understated -->
          <div class="mt-4 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8a8a8a]">
            {{ profile.name }} · {{ profile.location }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
