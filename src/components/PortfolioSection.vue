<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioItems } from '../data/site.js'
import { ArrowUpRight } from 'lucide-vue-next'

// IntersectionObserver reveal for work items
const observer = ref(null)
const visibleIds = ref(new Set())

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleIds.value.add(entry.target.dataset.idx)
          observer.value.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  )
  document.querySelectorAll('.work-item').forEach((el) => observer.value.observe(el))
})

onUnmounted(() => observer.value && observer.value.disconnect())
</script>

<template>
  <section id="portfolio" class="border-t border-[#1f1f1f]">
    <div class="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
      <!-- Head -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
        <div class="md:col-span-3">
          <div class="label">03 / Selected Work</div>
        </div>
        <div class="md:col-span-9">
          <h2 class="font-display font-medium text-h2 text-[#f5f5f5]">
            Frames from recent projects.
          </h2>
          <p class="mt-6 text-[#8a8a8a] text-[15px] max-w-lg leading-relaxed">
            A curated selection — portrait, editorial, and personal. Each project is documented with a short note below.
          </p>
        </div>
      </div>

      <!-- Works grid: mix of large and small pieces (editorial layout) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 md:gap-y-20">
        <article
          v-for="(item, idx) in portfolioItems"
          :key="item.title"
          :data-idx="idx"
          class="work-item group"
          :class="[
            // Varied spans for an editorial rhythm
            idx % 6 === 0 ? 'md:col-span-7' : '',
            idx % 6 === 1 ? 'md:col-span-5' : '',
            idx % 6 === 2 ? 'md:col-span-5' : '',
            idx % 6 === 3 ? 'md:col-span-7' : '',
            idx % 6 === 4 ? 'md:col-span-6' : '',
            idx % 6 === 5 ? 'md:col-span-6' : '',
          ]"
          :style="{
            opacity: visibleIds.has(String(idx)) ? 1 : 0,
            transform: visibleIds.has(String(idx)) ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1)',
            transitionDelay: `${(idx % 3) * 80}ms`,
          }"
        >
          <!-- Image stack (no rounded corners, no card frame) -->
          <div class="relative overflow-hidden aspect-[4/5] md:aspect-[4/5] bg-[#111]">
            <img
              :src="item.image"
              :alt="item.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <!-- Hover caption (subtle, not obstructing) -->
            <div class="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between pointer-events-none">
              <div class="opacity-0 translate-y-2 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div class="text-[#f5f5f5] font-display text-lg font-medium">{{ item.title }}</div>
                <div class="mt-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[#c9c9c9]">{{ item.category }} · {{ item.year }}</div>
              </div>
              <span class="inline-flex h-9 w-9 items-center justify-center bg-[#f5f5f5] text-[#0a0a0a] opacity-0 transition duration-500 group-hover:opacity-100">
                <ArrowUpRight :size="16" />
              </span>
            </div>
          </div>

          <!-- Meta info below the image (always visible, plain text) -->
          <div class="mt-4 flex items-baseline justify-between">
            <h3 class="font-display text-[16px] md:text-[17px] font-medium text-[#f5f5f5]">{{ item.title }}</h3>
            <span class="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8a8a8a]">{{ item.year }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
