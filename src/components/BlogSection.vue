<script setup>
import { blogItems } from '../data/site.js'
import { Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="blog" class="py-20 md:py-28 border-t border-line/60">
    <div class="container mx-auto">
      <!-- 标题 -->
      <div class="mb-14">
        <div class="eyebrow mb-3">05 / Journal</div>
        <h2 class="font-display text-h2 text-fg">
          最新<span class="text-accent">手记</span>
        </h2>
        <p class="mt-5 text-fg-dim max-w-xl leading-[1.75]">
          摄影背后的故事、器材心得、旅行记录与创作思考。
        </p>
      </div>

      <!-- 卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <article
          v-for="item in blogItems"
          :key="item.title"
          class="card p-0 overflow-hidden cursor-pointer flex flex-col group"
        >
          <div class="aspect-video overflow-hidden relative">
            <img
              :src="item.cover"
              :alt="item.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-[520ms] ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent pointer-events-none"></div>
          </div>
          <div class="p-7 flex-1 flex flex-col">
            <div class="inline-flex items-center gap-2 eyebrow mb-4">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-accent"></span>
              {{ item.category }}
            </div>
            <h3 class="font-display text-h3 text-fg leading-snug mb-5 transition-colors duration-300 group-hover:text-accent">
              {{ item.title }}
            </h3>
            <div class="mt-auto pt-5 border-t border-line flex items-center justify-between text-xs text-fg-dim font-mono">
              <span>{{ item.date }}</span>
              <span class="flex items-center gap-1.5">
                <Clock :size="12" />
                {{ item.readTime }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
