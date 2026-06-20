<script setup>
import { serviceItems } from '../data/site.js'
import { Camera, Video, User, Calendar, Check } from 'lucide-vue-next'

const iconMap = { Camera, Video, User, Calendar }
</script>

<template>
  <section id="services" class="py-20 md:py-28 border-t border-line/60">
    <div class="container mx-auto">
      <!-- 标题 -->
      <div class="mb-14 text-center">
        <div class="eyebrow mb-4">04 / Services</div>
        <h2 class="font-display text-h2 text-fg">
          可提供的<span class="text-accent">服务</span>
        </h2>
        <p class="mt-5 text-fg-dim max-w-xl mx-auto leading-[1.75]">
          我们提供从前期策划、拍摄执行到后期交付的完整服务。
        </p>
      </div>

      <!-- 服务卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        <article
          v-for="(item, idx) in serviceItems"
          :key="item.title"
          class="card h-full flex flex-col"
          :class="idx === 0 ? 'card-accent' : ''"
        >
          <div class="inline-flex items-center justify-center rounded-xl border border-line text-accent mb-5"
               style="width: 46px; height: 46px; background: rgba(10, 10, 10, 0.7);">
            <component :is="iconMap[item.icon]" :size="22" />
          </div>
          <h3 class="font-display text-h3 text-fg mb-3">{{ item.title }}</h3>
          <p class="text-sm text-fg-dim leading-[1.75] mb-5 flex-1">{{ item.description }}</p>
          <ul class="space-y-2.5 pt-5 border-t border-line">
            <li v-for="f in item.features" :key="f" class="flex items-start gap-2.5 text-sm text-fg-dim">
              <Check :size="14" class="mt-1 text-accent shrink-0" />
              <span>{{ f }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
