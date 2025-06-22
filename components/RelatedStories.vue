<template>
  <div v-if="stories?.length" class="related-stories">
    <h3 class="heading">Related Stories</h3>
    <ul class="story-list">
      <li v-for="(story, i) in stories" :key="i" class="story-item">
        <a :href="story.source" target="_blank" class="story-link">
          <span class="row">
            <aside>⚠️Warning</aside>
            <p>
              {{ story.timestamp }}
            </p>
          </span>

          <div class="text-content">
            <p class="title">{{ story.title }}</p>
          </div>
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
.related-stories {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 330px;
  overflow-y: scroll; /* always reserve space */
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9fafb;
  direction: rtl;

  scrollbar-width: none; /* Firefox: visually hidden */
}

.related-stories:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

/* Flip content back to normal direction */
.related-stories > * {
  direction: ltr;
}

/* WebKit browsers: keep space reserved, hide scrollbar by default */
.related-stories::-webkit-scrollbar {
  width: 8px;
}

.related-stories::-webkit-scrollbar-thumb {
  background-color: transparent; /* hidden initially */
}

/* Show scrollbar on hover */
.related-stories:hover::-webkit-scrollbar-thumb {
  background-color: #ccc;
}

.heading {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2563eb;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  background-color: #f9fafb; /* Matches .related-stories background */
  padding: 0.75rem 0;
  z-index: 1;
  border-bottom: 1px solid #e5e7eb;
}

.row {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6rem;
  max-height: 1.5rem;
  justify-content: space-between;
  & > aside {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
.story-list {
  list-style: none;
  border: 1px solid #eee;
  border-radius: 8px;
  display: block;
  padding: 0.5rem 0.75rem;
}

.story-item {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
}

.story-link {
  display: flex;
  text-decoration: none;
  color: #111;
  flex-direction: column;
  margin-bottom: 0.5rem;
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
  padding-top: 0;
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
