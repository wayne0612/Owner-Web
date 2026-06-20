<script setup>
import { blogItems } from '../data/site.js'
import { ArrowUpRight, Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="blog" class="py-20 md:py-28 border-t border-[#262626]/40">
    <div class="container mx-auto px-4 md:px-8">
      <!-- 标题 -->
      <div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div class="eyebrow mb-3">05 / Journal</div>
          <h2 class="font-display text-3xl md:text-5xl font-semibold tracking-tight text-[#f5f5f5]">
            最新<span class="text-[#ff4d2e]">手记</span>
          </h2>
          <p class="mt-4 text-[#a1a1aa] max-w-xl">
            摄影背后的故事、器材心得、旅行记录与创作思考。
          </p>
        </div>
      </div>

      <!-- 卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in blogItems"
          :key="item.title"
          class="card !p-0 overflow-hidden cursor-pointer group"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="item.cover"
              :alt="item.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa] mb-3">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#ff4d2e]"></span>
              {{ item.category }}
            </div>
            <h3 class="font-display text-lg font-semibold text-[#f5f5f5] leading-snug mb-4 group-hover:text-[#ff4d2e] transition">
              {{ item.title }}
            </h3>
            <div class="flex items-center justify-between pt-4 border-t border-[#262626]/60 text-xs text-[#a1a1aa] font-mono">
              <span>{{ item.date }}</span>
              <span class="flex items-center gap-1.5">
                <Clock :size="11" />
                {{ item.readTime }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
