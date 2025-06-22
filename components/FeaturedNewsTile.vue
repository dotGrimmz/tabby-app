<template>
  <a
    :href="source"
    target="_blank"
    rel="noopener noreferrer"
    class="featured-news-tile"
    @click="trackClick"
    ref="tileRef"
  >
    <img v-if="image" :src="image" alt="featured image" class="featured-img" />
    <div class="text-content">
      <p class="tag" v-if="tag">{{ tag }}</p>
      <h2 class="title">{{ title }}</h2>
      <p class="meta">{{ source }} — {{ timestamp }}</p>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  title: String,
  source: String,
  timestamp: String,
  tag: String,
  image: String,
  id: Number,
});

const tileRef = ref(null);
const { trackClick } = useTracking(tileRef, props.title, props.id);
</script>

<style scoped>
.featured-news-tile {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  height: 330px;
}

.featured-news-tile:hover {
  transform: scale(1.01);
}

.featured-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.text-content {
  padding: 1rem;
}

.tag {
  font-size: 0.75rem;
  font-weight: bold;
  color: #10b981; /* Tailwind green-500 */
  margin-bottom: 0.25rem;
  padding-top: 0;
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.meta {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 2rem;
}
</style>
