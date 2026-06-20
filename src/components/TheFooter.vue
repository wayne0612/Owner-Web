<script setup>
import { Instagram, Youtube, MonitorPlay, Mail, MapPin } from 'lucide-vue-next'
</script>

<template>
  <footer id="contact" class="relative border-t border-line/80 bg-bg mt-12">
    <!-- CTA -->
    <div class="container mx-auto py-16 md:py-20">
      <div class="card card-accent text-center">
        <div class="eyebrow mb-4">Contact / Get in touch</div>
        <h2 class="font-display text-h2 text-fg leading-[1.05]">
          有故事,想<span class="text-accent">合作</span>?
        </h2>
        <p class="mt-5 text-fg-dim max-w-xl mx-auto leading-[1.75]">
          无论是品牌商业拍摄、短片合作、个人写真或其他项目,欢迎来信沟通。我们会在 48 小时内回复。
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:hello@lumen.studio" class="btn-primary">
            <Mail :size="14" />
            hello@lumen.studio
          </a>
          <a href="#" class="btn-ghost">
            <MapPin :size="14" />
            中国 · 上海
          </a>
        </div>
      </div>
    </div>

    <!-- 主 footer -->
    <div class="container mx-auto pb-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10">
        <div class="md:col-span-5">
          <div class="font-display text-2xl font-semibold text-fg mb-4">
            LUMEN<span class="text-accent">.</span>
          </div>
          <p class="text-sm text-fg-dim leading-[1.75] max-w-sm">
            摄影摄像博主。独立摄影师与影像创作者。我们用镜头记录光与时间,为品牌与人留下有温度的影像。
          </p>
        </div>

        <div class="md:col-span-2">
          <div class="eyebrow mb-4">导航</div>
          <ul class="space-y-3 text-sm text-fg-muted">
            <li><a href="#home" class="link-text transition-colors">首页</a></li>
            <li><a href="#portfolio" class="link-text transition-colors">作品</a></li>
            <li><a href="#about" class="link-text transition-colors">关于</a></li>
            <li><a href="#services" class="link-text transition-colors">服务</a></li>
            <li><a href="#blog" class="link-text transition-colors">博客</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <div class="eyebrow mb-4">服务</div>
          <ul class="space-y-3 text-sm text-fg-muted">
            <li>品牌商业拍摄</li>
            <li>短片与视频制作</li>
            <li>人像写真</li>
            <li>活动纪实</li>
          </ul>
        </div>

        <div class="md:col-span-3">
          <div class="eyebrow mb-4">关注</div>
          <div class="flex flex-wrap items-center gap-2.5">
            <a href="#" class="icon-btn" aria-label="Instagram">
              <Instagram :size="15" />
            </a>
            <a href="#" class="icon-btn" aria-label="YouTube">
              <Youtube :size="15" />
            </a>
            <a href="#" class="icon-btn" aria-label="Bilibili">
              <MonitorPlay :size="15" />
            </a>
          </div>
          <a href="mailto:hello@lumen.studio" class="mt-5 inline-flex items-center gap-2 font-display font-medium text-fg text-sm link-text transition-colors">
            hello@lumen.studio
          </a>
        </div>
      </div>

      <!-- 版权栏 -->
      <div class="pt-6 border-t border-line/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-fg-dim font-mono tracking-widest">
        <div>© 2026 Lumen Chen · All rights reserved.</div>
        <div>Shanghai · 31.2°N / 121.4°E · Photography · Videography</div>
      </div>
    </div>
  </footer>
</template>
