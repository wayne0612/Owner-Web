<script setup>
import { portfolioItems } from '../data/site.js'
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="portfolio" class="py-20 md:py-28 border-t border-[#262626]/40">
    <div class="container mx-auto px-4 md:px-8">
      <!-- 标题 -->
      <div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div class="eyebrow mb-3">03 / Works</div>
          <h2 class="font-display text-3xl md:text-5xl font-semibold tracking-tight text-[#f5f5f5]">
            精选<span class="text-[#ff4d2e]">作品</span>
          </h2>
          <p class="mt-4 text-[#a1a1aa] max-w-xl">
            从品牌商业拍摄到个人纪实项目,这里精选了过去几年中我最喜欢的作品。
          </p>
        </div>
        <a href="#" class="btn-ghost self-start md:self-auto">
          查看全部
          <ArrowUpRight :size="14" />
        </a>
      </div>

      <!-- 网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(item, idx) in portfolioItems"
          :key="item.title"
          class="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#141414] aspect-[4/5] cursor-pointer transition duration-500 hover:border-[#ff4d2e] hover:-translate-y-1"
        >
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#e4e4e7]">
            {{ String(idx + 1).padStart(2, '0') }}
          </div>
          <div class="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-[#e4e4e7]">
            {{ item.year }}
          </div>

          <div class="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <div class="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa] mb-2">{{ item.category }}</div>
            <h3 class="font-display text-lg md:text-xl font-semibold text-[#f5f5f5] leading-tight">{{ item.title }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
