<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Instagram, Youtube, MonitorPlay, Mail } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { name: '作品', href: '#portfolio' },
  { name: '关于', href: '#about' },
  { name: '服务', href: '#services' },
  { name: '博客', href: '#blog' },
  { name: '联系', href: '#contact' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 40
}
function closeMobile() {
  mobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'backdrop-blur-md bg-[#0a0a0a]/85 border-b border-line/60' : ''"
  >
    <div class="container mx-auto flex items-center justify-between py-4">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 group">
        <span class="font-display text-xl font-semibold tracking-tight text-fg">
          LUMEN<span class="text-accent">.</span>
        </span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-10">
        <a
          v-for="item in navLinks"
          :key="item.name"
          :href="item.href"
          class="font-mono text-xs uppercase tracking-[0.22em] text-fg-muted transition-colors duration-300 hover:text-accent"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Desktop social -->
      <div class="hidden md:flex items-center gap-2.5">
        <a href="#" class="icon-btn" aria-label="Instagram">
          <Instagram :size="15" />
        </a>
        <a href="#" class="icon-btn" aria-label="YouTube">
          <Youtube :size="15" />
        </a>
        <a href="#" class="icon-btn" aria-label="Bilibili">
          <MonitorPlay :size="15" />
        </a>
        <a href="mailto:hello@lumen.studio" class="icon-btn" aria-label="Email">
          <Mail :size="15" />
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden icon-btn"
        aria-label="菜单"
      >
        <Menu v-if="!mobileOpen" :size="18" />
        <X v-else :size="18" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden border-t border-line/60 bg-bg/95 backdrop-blur-md"
    >
      <div class="container mx-auto py-4 flex flex-col">
        <a
          v-for="item in navLinks"
          :key="item.name"
          :href="item.href"
          @click="closeMobile"
          class="py-3 font-mono text-sm uppercase tracking-[0.2em] text-fg-muted border-b border-line/40 last:border-b-0 transition-colors duration-300 hover:text-accent"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>
