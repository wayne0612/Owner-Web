<script setup>
import { testimonialItems } from '../data/site.js'
</script>

<template>
  <section id="testimonials" class="relative py-24 md:py-32 border-t border-[#262626]/40">
    <div class="container mx-auto px-4 md:px-8">
      <!-- Header -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <div class="md:col-span-4">
          <div class="eyebrow-label">06 / Voices</div>
        </div>
        <div class="md:col-span-8">
          <h2 class="section-title text-4xl md:text-6xl">
            合作<span class="text-[#ff4d2e]">评价</span>
          </h2>
          <p class="mt-4 text-[#a1a1aa] max-w-xl">
            一些来自合作方与客户的真实反馈。
          </p>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in testimonialItems"
          :key="item.name"
          class="card relative flex flex-col">
          <!-- Quote mark -->
          <div class="font-display text-7xl leading-none text-[#ff4d2e]/40 mb-2 select-none">
            &ldquo;
          </div>
          <!-- Quote -->
          <p class="flex-1 text-[#e4e4e7] text-[15px] leading-relaxed mb-6">
            {{ item.quote }}
          </p>
          <!-- Author -->
          <div class="flex items-center gap-3 pt-5 border-t border-[#262626]/80">
            <div class="h-10 w-10 rounded-full overflow-hidden border border-[#262626] shrink-0">
              <img :src="item.avatar" :alt="item.name" loading="lazy"
                class="w-full h-full object-cover" />
            </div>
            <div class="min-w-0">
              <div class="font-display font-medium text-[#f5f5f5] text-sm truncate">
                {{ item.name }}
              </div>
              <div class="text-xs text-[#71717a] font-mono truncate">
                {{ item.company }}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
