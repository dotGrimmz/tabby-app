<template>
  <section v-if="stories?.length" class="related-stories">
    <h3 class="heading">Related Stories</h3>
    <div class="story-list">
      <NewsTile v-for="(story, index) in stories" :key="index" v-bind="story" />
    </div>
  </section>
</template>

<script setup>
import NewsTile from "./NewsTile.vue";

defineProps({
  stories: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.related-stories {
  margin-top: 2rem;
  padding: 1rem 0;
}

.heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.story-list {
  display: grid;
  gap: 1rem;
}

/* Optional: For wider screens, use a multi-column layout */
@media (min-width: 768px) {
  .story-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
