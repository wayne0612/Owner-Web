<script setup>
import { ArrowDownRight, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="relative pt-32 pb-20 md:pt-40 md:pb-28">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- LEFT: 文字 -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <div class="eyebrow mb-6">01 / Portfolio — 2026</div>

          <h1 class="font-display text-hero tracking-tight leading-[0.92] text-fg">
            以<span class="text-accent">镜头</span>之名,<br />
            书写光与<br />
            时间的故事。
          </h1>

          <p class="mt-8 max-w-xl text-base md:text-lg text-fg-dim leading-[1.75]">
            我是 Lumen,一位独立摄影师与影像创作者。过去八年,穿梭于城市与自然之间,
            用镜头记录那些转瞬即逝、却又值得被永远记住的瞬间。
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-4">
            <a href="#portfolio" class="btn-primary">
              浏览作品
              <ArrowUpRight :size="16" />
            </a>
            <a href="#contact" class="btn-ghost">
              联系合作
              <ArrowDownRight :size="16" />
            </a>
          </div>

          <!-- 数据 -->
          <div class="mt-14 grid grid-cols-3 gap-3 md:gap-4">
            <div class="card-stat">
              <div class="font-display text-3xl md:text-4xl font-semibold text-fg">8<span class="text-accent">+</span></div>
              <div class="mt-2 eyebrow">从业年数</div>
            </div>
            <div class="card-stat">
              <div class="font-display text-3xl md:text-4xl font-semibold text-fg">120<span class="text-accent">+</span></div>
              <div class="mt-2 eyebrow">拍摄项目</div>
            </div>
            <div class="card-stat">
              <div class="font-display text-3xl md:text-4xl font-semibold text-fg">40<span class="text-accent">+</span></div>
              <div class="mt-2 eyebrow">合作品牌</div>
            </div>
          </div>
        </div>

        <!-- RIGHT: 人像卡片 -->
        <div class="lg:col-span-5 order-1 lg:order-2">
          <div class="card-media aspect-[4/5]">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20photographer%20cinematic%20dark%20studio%20film&image_size=portrait_4_3"
              alt="Lumen Portrait"
              class="w-full h-full object-cover"
            />
            <!-- 渐变遮罩 -->
            <div class="absolute inset-0 bg-gradient-to-t from-bg/92 via-bg/10 to-transparent pointer-events-none"></div>
            <!-- 元数据 -->
            <div class="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-fg/90">
              Shot — 01
            </div>
            <div class="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-[0.22em] text-fg/90">
              31.2°N / 121.4°E
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-7 text-fg">
              <div class="eyebrow mb-2">Photographer · Director</div>
              <div class="font-display text-[1.75rem] md:text-[2rem] font-semibold leading-tight">Lumen Chen</div>
              <div class="mt-2 font-mono text-[11px] text-fg-dim tracking-widest">f/1.8 · 1/125s · ISO 400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
