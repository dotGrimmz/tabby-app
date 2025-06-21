<!-- components/CompactRelatedStories.vue -->
<template>
  <div v-if="stories?.length" class="compact-list">
    <h3 class="section-title">More in this category</h3>
    <ul class="story-list">
      <li v-for="(story, i) in stories" :key="i" class="story-item">
        <a :href="story.source" target="_blank" class="story-link">
          <span class="title">{{ story.title }}</span>
          <span class="timestamp">· {{ story.timestamp }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  stories: Array,
});
</script>

<style scoped>
.compact-list {
  margin-top: 2rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.story-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.story-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.story-link {
  text-decoration: none;
  font-size: 0.95rem;
  color: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.story-link:hover {
  color: #10b981; /* emerald-500 */
}

.timestamp {
  font-size: 0.75rem;
  color: #6b7280;
  margin-left: 0.5rem;
}
</style>
