<script setup>
import { profile, skills } from '../data/site.js'
import { MapPin, Mail, Camera, Film, Users } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-20 md:py-28 border-t border-[#262626]/40">
    <div class="container mx-auto px-4 md:px-8">
      <!-- 标题 -->
      <div class="mb-12 text-center">
        <div class="eyebrow mb-4">02 / About</div>
        <h2 class="font-display text-3xl md:text-5xl font-semibold tracking-tight text-[#f5f5f5]">
          关于<span class="text-[#ff4d2e]">我</span>
        </h2>
      </div>

      <!-- 主内容 -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- 介绍 -->
        <div class="md:col-span-8">
          <div class="card h-full">
            <h3 class="font-display text-xl md:text-2xl font-semibold text-[#f5f5f5] mb-4">
              {{ profile.title }}
            </h3>
            <p class="text-[#e4e4e7] leading-relaxed mb-4">
              {{ profile.bio }}
            </p>
            <p class="text-[#a1a1aa] leading-relaxed mb-6">
              我相信每一张照片都是一次时间的凝固。拍摄对我而言不仅是职业,
              更是一场持续进行的对世界的观察练习。从街头到山川,从商业拍摄到个人纪实,
              我希望用影像留住那些转瞬即逝却又无比珍贵的瞬间。
            </p>

            <div class="flex flex-wrap items-center gap-5 text-sm text-[#a1a1aa] mb-6">
              <div class="flex items-center gap-2">
                <MapPin :size="14" />
                <span>{{ profile.location }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Mail :size="14" />
                <span>{{ profile.email }}</span>
              </div>
            </div>

            <!-- 技能标签 -->
            <div class="pt-5 border-t border-[#262626]/60">
              <div class="eyebrow mb-4">专长领域</div>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in skills" :key="skill" class="tag-chip">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 统计卡 -->
        <div class="md:col-span-4 flex flex-col gap-6">
          <div class="card text-center bg-gradient-to-br from-[#141414] to-[#ff4d2e]/10 border-[#ff4d2e]/30">
            <Camera :size="28" class="mx-auto mb-3 text-[#ff4d2e]" />
            <div class="font-display text-4xl font-bold text-[#f5f5f5]">120+</div>
            <div class="mt-1 text-sm text-[#a1a1aa]">摄影项目</div>
          </div>
          <div class="card text-center">
            <Film :size="28" class="mx-auto mb-3 text-[#ff4d2e]" />
            <div class="font-display text-4xl font-bold text-[#f5f5f5]">35+</div>
            <div class="mt-1 text-sm text-[#a1a1aa]">视频短片</div>
          </div>
          <div class="card text-center">
            <Users :size="28" class="mx-auto mb-3 text-[#ff4d2e]" />
            <div class="font-display text-4xl font-bold text-[#f5f5f5]">40+</div>
            <div class="mt-1 text-sm text-[#a1a1aa]">品牌合作</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
