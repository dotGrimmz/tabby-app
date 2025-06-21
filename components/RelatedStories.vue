<template>
  <aside v-if="stories?.length" class="related-stories">
    <h3 class="heading">Related Stories</h3>
    <ul class="story-list">
      <li v-for="(story, i) in stories" :key="i" class="story-item">
        <a :href="story.source" target="_blank" class="story-link">
          <img
            v-if="story.image"
            :src="story.image"
            :alt="story.title"
            class="thumbnail"
          />
          <div class="text-content">
            <p class="title">{{ story.title }}</p>
            <p class="meta">{{ story.source }} · {{ story.timestamp }}</p>
          </div>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
defineProps({
  stories: Array,
});
</script>

<style scoped>
.related-stories {
  padding-left: 1.5rem;
  border-left: 1px solid #eee;
}

.heading {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.story-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.story-item {
  margin-bottom: 1rem;
}

.story-link {
  display: flex;
  text-decoration: none;
  color: #111;
  gap: 0.75rem;
}

.story-link:hover .title {
  color: #10b981;
}

.thumbnail {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
}

.text-content {
  flex: 1;
}

.title {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.meta {
  font-size: 0.75rem;
  color: #6b7280;
}
</style>
