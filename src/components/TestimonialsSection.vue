<script setup>
import { testimonialItems } from '../data/site.js'
import { Star } from 'lucide-vue-next'
</script>

<template>
  <section id="testimonials" class="py-20 md:py-28 border-t border-[#262626]/40">
    <div class="container mx-auto px-4 md:px-8">
      <!-- 标题 -->
      <div class="mb-12 text-center">
        <div class="eyebrow mb-3">06 / Voices</div>
        <h2 class="font-display text-3xl md:text-5xl font-semibold tracking-tight text-[#f5f5f5]">
          合作<span class="text-[#ff4d2e]">评价</span>
        </h2>
      </div>

      <!-- 评价卡 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in testimonialItems"
          :key="item.name"
          class="card h-full flex flex-col"
        >
          <!-- 引号 -->
          <div class="font-display text-6xl leading-none text-[#ff4d2e]/50 mb-2">&ldquo;</div>
          <!-- 评价 -->
          <p class="text-[#e4e4e7] text-base leading-relaxed mb-6 flex-1">{{ item.quote }}</p>
          <!-- 星级 -->
          <div class="flex gap-1 text-[#ff4d2e] mb-5">
            <Star v-for="i in 5" :key="i" :size="14" fill="currentColor" />
          </div>
          <!-- 用户 -->
          <div class="flex items-center gap-3 pt-5 border-t border-[#262626]/60">
            <div class="h-10 w-10 rounded-full overflow-hidden border border-[#262626] shrink-0">
              <img :src="item.avatar" :alt="item.name" loading="lazy" class="w-full h-full object-cover" />
            </div>
            <div class="min-w-0">
              <div class="font-display font-medium text-[#f5f5f5] text-sm truncate">{{ item.name }}</div>
              <div class="font-mono text-[11px] text-[#a1a1aa] tracking-wider truncate">{{ item.company }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
