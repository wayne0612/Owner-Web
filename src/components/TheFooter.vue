<script setup>
import { Instagram, Youtube, MonitorPlay, Mail, ArrowUpRight, MapPin } from 'lucide-vue-next'
</script>

<template>
  <footer id="contact" class="relative border-t border-[#262626]/80 bg-[#0a0a0a] mt-12">
    <!-- CTA -->
    <div class="container mx-auto px-4 md:px-8 py-16 md:py-20">
      <div class="card !p-8 md:!p-12 text-center bg-gradient-to-br from-[#141414] to-[#ff4d2e]/10 border-[#ff4d2e]/30">
        <div class="eyebrow mb-4">Contact / Get in touch</div>
        <h2 class="font-display text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-tight">
          有故事,想<span class="text-[#ff4d2e]">合作</span>?
        </h2>
        <p class="mt-5 text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
          无论是品牌商业拍摄、短片合作、个人写真或其他项目,欢迎来信沟通。我们会在 48 小时内回复。
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:hello@lumen.studio" class="btn-primary">
            <Mail :size="14" />
            hello@lumen.studio
          </a>
          <a href="#" class="btn-ghost">
            <MapPin :size="14" />
            {{ profile?.location || '上海 / Shanghai' }}
          </a>
        </div>
      </div>
    </div>

    <!-- 主 footer -->
    <div class="container mx-auto px-4 md:px-8 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
        <div class="md:col-span-4">
          <div class="font-display text-2xl font-bold text-[#f5f5f5] mb-4">
            LUMEN<span class="text-[#ff4d2e]">.</span>
          </div>
          <p class="text-sm text-[#a1a1aa] leading-relaxed max-w-sm">
            摄影摄像博主。独立摄影师与影像创作者。我们用镜头记录光与时间,为品牌与人留下有温度的影像。
          </p>
        </div>

        <div class="md:col-span-2">
          <div class="eyebrow mb-4">导航</div>
          <ul class="space-y-2 text-sm text-[#e4e4e7]">
            <li><a href="#home" class="hover:text-[#ff4d2e] transition">首页</a></li>
            <li><a href="#portfolio" class="hover:text-[#ff4d2e] transition">作品</a></li>
            <li><a href="#about" class="hover:text-[#ff4d2e] transition">关于</a></li>
            <li><a href="#services" class="hover:text-[#ff4d2e] transition">服务</a></li>
            <li><a href="#blog" class="hover:text-[#ff4d2e] transition">博客</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <div class="eyebrow mb-4">服务</div>
          <ul class="space-y-2 text-sm text-[#e4e4e7]">
            <li>品牌商业拍摄</li>
            <li>短片与视频制作</li>
            <li>人像写真</li>
            <li>活动纪实</li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <div class="eyebrow mb-4">关注</div>
          <div class="flex flex-wrap items-center gap-2">
            <a href="#" class="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#141414] px-4 py-2 text-sm text-[#a1a1aa] transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
              <Instagram :size="14" /> Instagram
            </a>
            <a href="#" class="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#141414] px-4 py-2 text-sm text-[#a1a1aa] transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
              <Youtube :size="14" /> YouTube
            </a>
            <a href="#" class="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#141414] px-4 py-2 text-sm text-[#a1a1aa] transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
              <MonitorPlay :size="14" /> Bilibili
            </a>
          </div>
          <a href="mailto:hello@lumen.studio" class="mt-5 inline-flex items-center gap-2 font-display font-medium text-[#f5f5f5] hover:text-[#ff4d2e] transition">
            hello@lumen.studio <ArrowUpRight :size="16" />
          </a>
        </div>
      </div>

      <!-- 版权栏 -->
      <div class="pt-6 border-t border-[#262626]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#71717a] font-mono tracking-wider">
        <div>© 2026 Lumen Chen · All rights reserved.</div>
        <div>Shanghai · 31.2°N / 121.4°E · Photography · Videography</div>
      </div>
    </div>
  </footer>
</template>
