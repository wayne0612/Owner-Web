<script setup>
import { testimonialItems } from '../data/site.js'
import { Star } from 'lucide-vue-next'
</script>

<template>
  <section id="testimonials" class="py-20 md:py-28 border-t border-line/60">
    <div class="container mx-auto">
      <!-- 标题 -->
      <div class="mb-14 text-center">
        <div class="eyebrow mb-4">06 / Voices</div>
        <h2 class="font-display text-h2 text-fg">
          合作<span class="text-accent">评价</span>
        </h2>
      </div>

      <!-- 评价卡 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <article
          v-for="item in testimonialItems"
          :key="item.name"
          class="card h-full flex flex-col"
        >
          <!-- 引号 -->
          <div class="font-display text-6xl leading-none text-accent/60 mb-2">&ldquo;</div>
          <!-- 评价 -->
          <p class="text-fg-dim text-[15px] leading-[1.8] mb-6 flex-1">{{ item.quote }}</p>
          <!-- 星级 -->
          <div class="flex gap-1.5 text-accent mb-5">
            <Star v-for="i in 5" :key="i" :size="15" fill="currentColor" />
          </div>
          <!-- 用户 -->
          <div class="flex items-center gap-3 pt-5 border-t border-line">
            <div class="h-10 w-10 rounded-full overflow-hidden border border-line shrink-0">
              <img :src="item.avatar" :alt="item.name" loading="lazy" class="w-full h-full object-cover" />
            </div>
            <div class="min-w-0">
              <div class="font-display font-medium text-fg text-sm truncate">{{ item.name }}</div>
              <div class="font-mono text-[11px] text-fg-dim tracking-widest truncate">{{ item.company }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
