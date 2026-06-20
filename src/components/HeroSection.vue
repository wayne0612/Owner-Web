<script setup>
import { ArrowDownRight, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="relative pt-32 pb-20 md:pt-40 md:pb-28">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- LEFT: 文字 -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <div class="font-mono text-xs uppercase tracking-[0.25em] text-[#a1a1aa] mb-6">
            01 / Portfolio — 2026
          </div>

          <h1 class="font-display font-semibold tracking-tight leading-[0.95] text-[2.5rem] sm:text-[3rem] md:text-[4rem]">
            以<span class="text-[#ff4d2e]">镜头</span>之名,<br />
            书写光与<br />
            时间的故事。
          </h1>

          <p class="mt-8 max-w-xl text-base md:text-lg text-[#a1a1aa] leading-relaxed">
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
          <div class="mt-14 grid grid-cols-3 gap-4 md:gap-6">
            <div class="card !p-5 text-center">
              <div class="font-display text-3xl md:text-4xl font-bold text-[#f5f5f5]">8<span class="text-[#ff4d2e]">+</span></div>
              <div class="mt-1 font-mono text-[11px] uppercase tracking-widest text-[#a1a1aa]">从业年数</div>
            </div>
            <div class="card !p-5 text-center">
              <div class="font-display text-3xl md:text-4xl font-bold text-[#f5f5f5]">120<span class="text-[#ff4d2e]">+</span></div>
              <div class="mt-1 font-mono text-[11px] uppercase tracking-widest text-[#a1a1aa]">拍摄项目</div>
            </div>
            <div class="card !p-5 text-center">
              <div class="font-display text-3xl md:text-4xl font-bold text-[#f5f5f5]">40<span class="text-[#ff4d2e]">+</span></div>
              <div class="mt-1 font-mono text-[11px] uppercase tracking-widest text-[#a1a1aa]">合作品牌</div>
            </div>
          </div>
        </div>

        <!-- RIGHT: 人像卡片 -->
        <div class="lg:col-span-5 order-1 lg:order-2">
          <div class="relative rounded-3xl overflow-hidden border border-[#262626] aspect-[4/5]">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20photographer%20cinematic%20dark%20studio%20film&image_size=portrait_4_3"
              alt="Lumen Portrait"
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <!-- 渐变遮罩 -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
            <!-- 元数据 -->
            <div class="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e4e4e7]">
              Shot — 01
            </div>
            <div class="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e4e4e7]">
              31.2°N / 121.4°E
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-[#f5f5f5]">
              <div class="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa] mb-1">Photographer · Director</div>
              <div class="font-display text-2xl font-semibold">Lumen Chen</div>
              <div class="mt-1 text-sm text-[#a1a1aa]">f/1.8 · 1/125s · ISO 400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
