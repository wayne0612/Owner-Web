<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Instagram, ArrowUpRight } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { name: 'Work', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Approach', href: '#services' },
  { name: 'Journal', href: '#journal' },
  { name: 'Contact', href: '#contact' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 24
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
    :class="isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f]' : ''"
  >
    <div class="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between">
      <!-- Brand -->
      <a href="#home" class="font-display text-[17px] font-medium tracking-tight">
        LUMEN <span class="text-[#ff4d2e]">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navLinks" :key="item.name"
          :href="item.href"
          class="text-[13px] text-[#c9c9c9] transition hover:text-[#f5f5f5]"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- CTA -->
      <div class="hidden md:flex items-center gap-4">
        <a href="#" class="text-[13px] text-[#8a8a8a] hover:text-[#f5f5f5] transition inline-flex items-center gap-1.5">
          <Instagram :size="14" />
          <span>Instagram</span>
        </a>
        <a href="#contact" class="cta-solid !py-2.5 !px-4 text-[12px]">
          Get in touch
          <ArrowUpRight :size="13" />
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1f1f1f] text-[#c9c9c9]"
        aria-label="Menu"
      >
        <Menu v-if="!mobileOpen" :size="16" />
        <X v-else :size="16" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden border-t border-[#1f1f1f] bg-[#0a0a0a]/95 backdrop-blur-md"
    >
      <div class="mx-auto max-w-[1400px] px-6 py-4 flex flex-col">
        <a
          v-for="item in navLinks" :key="item.name"
          :href="item.href" @click="closeMobile"
          class="py-3 text-[15px] text-[#c9c9c9] border-b border-[#1f1f1f] last:border-b-0"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>
