<template>
  <a
    class="news-tile"
    @click="trackClick"
    ref="tileRef"
    :href="source"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="tile-content">
      <p class="tag" v-if="tag">{{ tag }}</p>
      <h3 class="title">{{ title }}</h3>
      <p class="meta">{{ cleanSource }} — {{ timestamp }}</p>
    </div>
  </a>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTracking } from "@/composables/useTracking";

const props = defineProps(["title", "source", "tag", "timestamp"]);
const tileRef = ref(null);
const { trackTileShown, trackClick } = useTracking(tileRef, props.title);

const cleanSource = computed(() => {
  try {
    const url = new URL(props.source);
    return url.hostname.replace("www.", "");
  } catch {
    return props.source;
  }
});
</script>

<style scoped>
.news-tile {
  display: block;
  padding: 1rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.tile-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: #16a34a; /* light green */
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
}

.meta {
  font-size: 0.85rem;
  color: #6b7280;
}
</style>
