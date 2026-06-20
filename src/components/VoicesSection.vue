<script setup>
import { testimonialItems } from '../data/site.js'
</script>

<template>
  <section id="voices" class="border-t border-[#1f1f1f]">
    <div class="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
      <!-- Head -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
        <div class="md:col-span-3">
          <div class="label">06 / Voices</div>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display font-medium text-h2 text-[#f5f5f5]">
            A few words from collaborators.
          </h2>
        </div>
      </div>

      <!-- Quotes: stacked, no cards. Large pull-quote style -->
      <div class="space-y-16 md:space-y-24">
        <blockquote
          v-for="(item, idx) in testimonialItems"
          :key="item.name"
          class="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div class="md:col-span-3 flex md:justify-start items-start">
            <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a]">
              0{{ idx + 1 }} — Words
            </div>
          </div>
          <div class="md:col-span-7">
            <p class="font-display font-light text-[26px] md:text-[38px] leading-[1.25] text-[#e4e4e7]">
              "{{ item.quote }}"
            </p>
          </div>
          <div class="md:col-span-2 flex md:justify-end items-start">
            <div class="text-right">
              <div class="font-display text-[15px] font-medium text-[#f5f5f5]">{{ item.name }}</div>
              <div class="mt-1 text-[11px] font-mono uppercase tracking-[0.16em] text-[#8a8a8a]">{{ item.company }}</div>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
</template>
