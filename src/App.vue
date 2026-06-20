<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import BlogSection from './components/BlogSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-bg text-fg">
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <BlogSection />
      <TestimonialsSection />
    </main>
    <TheFooter />
  </div>
</template>
