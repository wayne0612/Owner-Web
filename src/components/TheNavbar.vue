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
    :class="isScrolled ? 'backdrop-blur-md bg-[#0a0a0a]/85 border-b border-[#262626]/60' : ''"
  >
    <div class="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 group">
        <span class="font-display text-xl font-bold tracking-tight">
          LUMEN<span class="text-[#ff4d2e]">.</span>
        </span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navLinks" :key="item.name"
          :href="item.href"
          class="font-mono text-xs uppercase tracking-[0.15em] text-[#a1a1aa] transition duration-200 hover:text-[#ff4d2e]"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Desktop social -->
      <div class="hidden md:flex items-center gap-3">
        <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#262626] text-[#a1a1aa] transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
          <Instagram :size="15" />
        </a>
        <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#262626] text-[#a1a1aa] transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
          <Youtube :size="15" />
        </a>
        <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#262626] text-[#a1a1aa] transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
          <MonitorPlay :size="15" />
        </a>
        <a href="mailto:hello@lumen.studio" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#262626] text-[#a1a1aa] transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]">
          <Mail :size="15" />
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#262626] text-[#a1a1aa]"
        aria-label="菜单"
      >
        <Menu v-if="!mobileOpen" :size="18" />
        <X v-else :size="18" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden border-t border-[#262626]/60 bg-[#0a0a0a]/95 backdrop-blur-md"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col">
        <a
          v-for="item in navLinks" :key="item.name"
          :href="item.href" @click="closeMobile"
          class="py-3 font-mono text-sm uppercase tracking-[0.15em] text-[#a1a1aa] border-b border-[#262626]/40 last:border-b-0"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>
