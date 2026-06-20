<script setup>
import { serviceItems } from '../data/site.js'
</script>

<template>
  <section id="services" class="border-t border-[#1f1f1f] bg-[#0a0a0a]">
    <div class="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
      <!-- Section head -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
        <div class="md:col-span-3">
          <div class="label">04 / Approach</div>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display font-medium text-h2 text-[#f5f5f5]">
            How we work together.
          </h2>
        </div>
      </div>

      <!-- Numbered list style — not cards -->
      <div class="divide-y divide-[#1f1f1f] border-t border-[#1f1f1f]">
        <div
          v-for="(item, idx) in serviceItems"
          :key="item.title"
          class="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 transition group hover:bg-[#0d0d0d] px-2 -mx-2 rounded-sm"
        >
          <div class="md:col-span-1">
            <div class="font-mono text-[12px] text-[#8a8a8a] tracking-widest">
              0{{ idx + 1 }}
            </div>
          </div>
          <div class="md:col-span-4">
            <h3 class="font-display text-[22px] md:text-[26px] font-medium text-[#f5f5f5] leading-tight">
              {{ item.title }}
            </h3>
          </div>
          <div class="md:col-span-5">
            <p class="text-[15px] md:text-[16px] leading-relaxed text-[#c9c9c9]">
              {{ item.description }}
            </p>
          </div>
          <div class="md:col-span-2">
            <ul class="text-[12px] md:text-[13px] text-[#8a8a8a] space-y-1.5">
              <li v-for="f in item.features" :key="f" class="font-mono uppercase tracking-[0.14em]">{{ f }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Closing line -->
      <div class="mt-16 md:mt-24 border-t border-[#1f1f1f] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p class="text-[#8a8a8a] text-[15px]">Every engagement begins with a conversation.</p>
        <a href="#contact" class="link-arrow">
          <span>Start a project</span>
          <span class="inline-block w-10 h-px bg-[#f5f5f5] ml-2 align-middle"></span>
        </a>
      </div>
    </div>
  </section>
</template>
