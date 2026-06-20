<script setup>
import { profile, skills } from '../data/site.js'
import { MapPin, Mail, Camera, Film, Users } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-20 md:py-28 border-t border-line/60">
    <div class="container mx-auto">
      <!-- 标题 -->
      <div class="mb-14 text-center">
        <div class="eyebrow mb-4">02 / About</div>
        <h2 class="font-display text-h2 text-fg">
          关于<span class="text-accent">我</span>
        </h2>
      </div>

      <!-- 主内容 -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- 介绍 -->
        <div class="md:col-span-8">
          <div class="card h-full">
            <h3 class="font-display text-h3 text-fg mb-4">
              {{ profile.title }}
            </h3>
            <p class="text-fg-dim leading-[1.75]">
              {{ profile.bio }}
            </p>
            <p class="text-fg-dim leading-[1.75]">
              我相信每一张照片都是一次时间的凝固。拍摄对我而言不仅是职业,
              更是一场持续进行的对世界的观察练习。从街头到山川,从商业拍摄到个人纪实,
              我希望用影像留住那些转瞬即逝却又无比珍贵的瞬间。
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-6 text-sm text-fg-dim">
              <div class="flex items-center gap-2">
                <MapPin :size="14" class="text-accent" />
                <span>{{ profile.location }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Mail :size="14" class="text-accent" />
                <span>{{ profile.email }}</span>
              </div>
            </div>

            <!-- 技能标签 -->
            <div class="mt-10 pt-6 border-t border-line">
              <div class="eyebrow mb-4">专长领域</div>
              <div class="flex flex-wrap gap-2.5">
                <span v-for="skill in skills" :key="skill" class="tag-chip">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 统计卡 -->
        <div class="md:col-span-4 flex flex-col gap-4">
          <div class="card card-accent text-center flex-1 flex flex-col justify-center">
            <Camera :size="26" class="mx-auto mb-3 text-accent" />
            <div class="font-display text-4xl font-semibold text-fg">120+</div>
            <div class="mt-2 eyebrow">摄影项目</div>
          </div>
          <div class="card text-center flex-1 flex flex-col justify-center">
            <Film :size="26" class="mx-auto mb-3 text-accent" />
            <div class="font-display text-4xl font-semibold text-fg">35+</div>
            <div class="mt-2 eyebrow">视频短片</div>
          </div>
          <div class="card text-center flex-1 flex flex-col justify-center">
            <Users :size="26" class="mx-auto mb-3 text-accent" />
            <div class="font-display text-4xl font-semibold text-fg">40+</div>
            <div class="mt-2 eyebrow">品牌合作</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
