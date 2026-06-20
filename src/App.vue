<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import JournalSection from './components/JournalSection.vue'
import VoicesSection from './components/VoicesSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <JournalSection />
      <VoicesSection />
    </main>
    <TheFooter />
  </div>
</template>
