<template>
  <div class="news-tile" @click="trackClick" ref="tileRef">
    <p class="tag" v-if="tag">{{ tag }}</p>
    <h3 class="title">{{ title }}</h3>
    <p class="meta">{{ source }} - {{ timestamp }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTracking } from "@/composables/useTracking";

const props = defineProps({
  title: String,
  source: String,
  tag: String,
  timestamp: String,
});

const tileRef = ref(null);
const { trackClick } = useTracking(tileRef, props.title);
</script>

<style scoped>
.news-tile {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}
.news-tile:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.tag {
  font-size: 0.75rem;
  color: #f97316;
  font-weight: 600;
}
.title {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.5rem 0;
}
.meta {
  font-size: 0.85rem;
  color: #666;
}
</style>
