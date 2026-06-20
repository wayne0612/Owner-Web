<script setup>
import { blogItems } from '../data/site.js'
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="journal" class="border-t border-[#1f1f1f]">
    <div class="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
      <!-- Head -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
        <div class="md:col-span-3">
          <div class="label">05 / Journal</div>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display font-medium text-h2 text-[#f5f5f5]">
            Notes, process, light.
          </h2>
        </div>
      </div>

      <!-- Editorial list: alternating image + text rows -->
      <div class="border-t border-[#1f1f1f]">
        <a
          v-for="(item, idx) in blogItems"
          :key="item.title"
          href="#"
          class="group block border-b border-[#1f1f1f]"
        >
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-6 md:py-10 transition hover:bg-[#0d0d0d] px-2 -mx-2">
            <!-- Date / index -->
            <div class="md:col-span-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[#8a8a8a]">
              {{ String(idx + 1).padStart(2, '0') }}
            </div>

            <!-- Thumbnail -->
            <div class="md:col-span-3">
              <div class="aspect-[4/3] w-full overflow-hidden">
                <img
                  :src="item.cover"
                  :alt="item.title"
                  loading="lazy"
                  class="w-full h-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <!-- Title -->
            <div class="md:col-span-5">
              <h3 class="font-display text-[18px] md:text-[22px] font-medium text-[#f5f5f5] leading-tight">
                {{ item.title }}
              </h3>
            </div>

            <!-- Category + duration -->
            <div class="md:col-span-2 text-[11px] md:text-[12px] font-mono uppercase tracking-[0.16em] text-[#8a8a8a]">
              {{ item.category }}
            </div>

            <!-- Arrow -->
            <div class="md:col-span-1 hidden md:flex justify-end">
              <span class="inline-flex h-8 w-8 items-center justify-center text-[#8a8a8a] transition group-hover:text-[#ff4d2e] group-hover:translate-x-0.5">
                <ArrowUpRight :size="16" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
