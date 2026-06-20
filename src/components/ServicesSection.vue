<script setup>
import { serviceItems } from '../data/site.js'
import { Camera, Video, User, Calendar, Check } from 'lucide-vue-next'

const iconMap = { Camera, Video, User, Calendar }
</script>

<template>
  <section id="services" class="py-20 md:py-28 border-t border-[#262626]/40">
    <div class="container mx-auto px-4 md:px-8">
      <!-- 标题 -->
      <div class="mb-12 text-center">
        <div class="eyebrow mb-3">04 / Services</div>
        <h2 class="font-display text-3xl md:text-5xl font-semibold tracking-tight text-[#f5f5f5]">
          可提供的<span class="text-[#ff4d2e]">服务</span>
        </h2>
        <p class="mt-4 text-[#a1a1aa] max-w-xl mx-auto">
          我们提供从前期策划、拍摄执行到后期交付的完整服务。
        </p>
      </div>

      <!-- 服务卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(item, idx) in serviceItems"
          :key="item.title"
          class="card group flex flex-col h-full"
          :class="idx === 0 ? 'border-[#ff4d2e]/40 bg-gradient-to-br from-[#141414] to-[#ff4d2e]/10' : ''"
        >
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0a0a] border border-[#262626] text-[#ff4d2e] mb-5 transition group-hover:border-[#ff4d2e]/60">
            <component :is="iconMap[item.icon]" :size="22" />
          </div>
          <h3 class="font-display text-xl font-semibold text-[#f5f5f5] mb-3">{{ item.title }}</h3>
          <p class="text-sm text-[#a1a1aa] leading-relaxed mb-5 flex-1">{{ item.description }}</p>
          <ul class="space-y-2 pt-4 border-t border-[#262626]/60">
            <li v-for="f in item.features" :key="f" class="flex items-start gap-2 text-sm text-[#e4e4e7]">
              <Check :size="14" class="mt-1 text-[#ff4d2e] shrink-0" />
              <span>{{ f }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
