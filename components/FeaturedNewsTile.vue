<template>
  <a
    :href="source.startsWith('http') ? source : `https://${source}`"
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
      <p class="meta">{{ displaySource }} — {{ timestamp }}</p>
    </div>
  </a>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTracking } from "@/composables/useTracking";

const props = defineProps({
  title: String,
  source: String,
  timestamp: String,
  tag: String,
  image: String,
});

const tileRef = ref(null);
const { trackClick } = useTracking(tileRef, props.title);

const displaySource = computed(() => {
  try {
    return new URL(props.source).hostname.replace("www.", "");
  } catch {
    return props.source;
  }
});
</script>

<style scoped>
.featured-news-tile {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  min-width: 25%;
  color: inherit;
  text-decoration: none;
}
.featured-news-tile:hover {
  transform: scale(1.02);
}
.featured-img {
  width: 100%;
  height: 28rem;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.text-content {
  padding: 1rem;
}
.tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: #f97316;
}
.title {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.5rem 0;
}
.meta {
  font-size: 0.875rem;
  color: #6b7280;
}
</style>
