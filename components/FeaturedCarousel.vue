<!-- components/FeaturedCarousel.vue -->
<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="carousel-slide"
        :class="{ active: index === currentSlide }"
      >
        <a :href="story.source" target="_blank" class="slide-content">
          <img :src="story.image" alt="featured" class="carousel-image" />
          <div class="slide-text">
            <p v-if="story.tag" class="tag">{{ story.tag }}</p>
            <h2 class="title">{{ story.title }}</h2>
            <p class="meta">{{ story.source }} — {{ story.timestamp }}</p>
          </div>
        </a>
      </div>
    </div>

    <div class="carousel-controls">
      <button @click="prevSlide">‹</button>
      <button @click="nextSlide">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  stories: {
    type: Array,
    required: true,
  },
});

const currentSlide = ref(0);

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % 3;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + 3) % 3;
}
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  position: relative;
}

.carousel-slide {
  flex: 0 0 100%;
  display: none;
  transition: opacity 0.3s ease;
}

.carousel-slide.active {
  display: block;
}

.slide-content {
  display: block;
  text-decoration: none;
  color: inherit;
}

.carousel-image {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.slide-text {
  padding: 1rem;
  background: white;
}

.title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  color: #f97316;
  font-weight: 600;
}

.meta {
  font-size: 0.875rem;
  color: #6b7280;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.carousel-controls button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
