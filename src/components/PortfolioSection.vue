<script setup>
import { portfolioItems } from '../data/site.js'
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="portfolio" class="py-20 md:py-28 border-t border-line/60">
    <div class="container mx-auto">
      <!-- 标题 -->
      <div class="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div class="eyebrow mb-3">03 / Works</div>
          <h2 class="font-display text-h2 text-fg">
            精选<span class="text-accent">作品</span>
          </h2>
          <p class="mt-5 text-fg-dim max-w-xl leading-[1.75]">
            从品牌商业拍摄到个人纪实项目,这里精选了过去几年中我最喜欢的作品。
          </p>
        </div>
        <a href="#" class="btn-ghost self-start md:self-auto">
          查看全部
          <ArrowUpRight :size="14" />
        </a>
      </div>

      <!-- 网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <article
          v-for="(item, idx) in portfolioItems"
          :key="item.title"
          class="card-media aspect-[4/5]"
        >
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent opacity-95 pointer-events-none"></div>

          <div class="absolute top-5 left-5 font-mono text-[10px] tracking-widest text-fg/90">
            {{ String(idx + 1).padStart(2, '0') }}
          </div>
          <div class="absolute top-5 right-5 font-mono text-[10px] tracking-widest text-fg/90">
            {{ item.year }}
          </div>

          <div class="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <div class="eyebrow mb-2.5">{{ item.category }}</div>
            <h3 class="font-display text-[1.35rem] md:text-[1.5rem] font-semibold text-fg leading-tight">{{ item.title }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
