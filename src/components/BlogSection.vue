<script setup>
import { blogItems } from '../data/site.js'
import { ArrowUpRight, Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="blog" class="relative py-24 md:py-32 border-t border-[#262626]/40">
    <div class="container mx-auto px-4 md:px-8">
      <!-- Header -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <div class="md:col-span-4">
          <div class="eyebrow-label">05 / Journal</div>
        </div>
        <div class="md:col-span-8">
          <h2 class="section-title text-4xl md:text-6xl">
            最新<span class="text-[#ff4d2e]">手记</span>
          </h2>
          <p class="mt-4 text-[#a1a1aa] max-w-xl">
            摄影背后的故事、器材心得、旅行记录与创作思考。
          </p>
        </div>
      </div>

      <!-- Blog cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in blogItems"
          :key="item.title"
          class="card group !p-0 overflow-hidden cursor-pointer">
          <!-- Cover -->
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="item.cover"
              :alt="item.title"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute top-4 left-4">
              <span class="tag-chip !text-[10px] !py-0.5 !px-2.5 !bg-[#0a0a0a]/80 !border-[#262626]/80 backdrop-blur-sm">
                {{ item.category }}
              </span>
            </div>
          </div>
          <!-- Content -->
          <div class="p-6">
            <h3 class="font-display text-lg font-semibold text-[#f5f5f5] leading-snug group-hover:text-[#ff4d2e] transition">
              {{ item.title }}
            </h3>
            <div class="mt-4 flex items-center justify-between text-xs text-[#71717a] font-mono">
              <span>{{ item.date }}</span>
              <span class="flex items-center gap-1">
                <Clock :size="11" />
                {{ item.readTime }}
              </span>
            </div>
            <div class="mt-5 pt-4 border-t border-[#262626]/80 flex items-center justify-between">
              <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa]">Read</span>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#262626] text-[#a1a1aa] transition group-hover:border-[#ff4d2e] group-hover:text-[#ff4d2e] group-hover:bg-[#ff4d2e]/10">
                <ArrowUpRight :size="14" />
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
