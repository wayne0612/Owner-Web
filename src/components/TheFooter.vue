<script setup>
import { ArrowUpRight, Instagram, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer id="contact" class="relative border-t border-[#1f1f1f] bg-[#0a0a0a]">
    <div class="mx-auto max-w-[1400px] px-6 md:px-10">
      <!-- Big contact block -->
      <div class="py-24 md:py-40">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          <div class="md:col-span-3">
            <div class="label">Contact / 07</div>
          </div>
          <div class="md:col-span-9">
            <h2 class="font-display font-medium text-[56px] md:text-[120px] leading-[0.95] tracking-tightest text-[#f5f5f5]">
              Let's make
              <br />
              something
              <span class="text-[#ff4d2e]">together.</span>
            </h2>
          </div>
        </div>

        <div class="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div class="md:col-span-7">
            <a href="mailto:hello@lumen.studio" class="inline-flex items-center gap-3 text-[20px] md:text-[24px] font-display font-medium text-[#f5f5f5] hover:text-[#ff4d2e] transition">
              hello@lumen.studio
              <ArrowUpRight :size="18" class="translate-y-px" />
            </a>
            <p class="mt-4 text-[#8a8a8a] text-[14px] max-w-md leading-relaxed">
              For portrait sessions, editorial commissions, commercial projects, and collaborations. Replies within 48 hours.
            </p>
          </div>
          <div class="md:col-span-5 md:text-right space-y-2 text-[13px] text-[#8a8a8a] font-mono uppercase tracking-[0.18em]">
            <div>Based in Shanghai</div>
            <div>Working globally</div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[#1f1f1f] py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#8a8a8a] font-mono uppercase tracking-[0.16em]">
        <div>© 2026 Lumen Chen · All rights reserved</div>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-[#f5f5f5] transition inline-flex items-center gap-1.5">
            <Instagram :size="12" /> Instagram
          </a>
          <a href="mailto:hello@lumen.studio" class="hover:text-[#f5f5f5] transition inline-flex items-center gap-1.5">
            <Mail :size="12" /> Email
          </a>
          <span>31.2°N 121.4°E</span>
        </div>
      </div>
    </div>
  </footer>
</template>
