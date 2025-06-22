<template>
  <div class="page-wrapper">
    <SearchBar />
    <AppIconRow />

    <div class="content-panel">
      <TabNav v-model="selectedTab" />

      <div class="news-grid">
        <FeaturedNewsTile class="featured" v-bind="featuredStory" />
        <NewsTile
          v-for="(story, index) in secondStories"
          :key="index"
          v-bind="story"
        />

        />
        <RelatedStories
          v-if="otherStories.length"
          :stories="otherStories"
          class="related-stories"
        />
        <NewsTile
          v-for="(story, index) in otherStories"
          :key="index"
          v-bind="story"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedTab = ref("Home");

const { data: newsData } = await useFetch("/api/newsData");

const featuredStory = computed(
  () => newsData.value?.[selectedTab.value]?.[0] || {}
);
const secondStories = computed(
  () => newsData.value?.[selectedTab.value]?.slice(1, 2) || []
);

const otherStories = computed(
  () => newsData.value?.[selectedTab.value]?.slice(3) || []
);
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid red;
  padding: 1rem;
}

.content-panel {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-top: 2rem;
}

.grid-layout {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.featured {
  grid-column: span 2;
}
.related-stories {
  margin-top: 2rem;
}

/* Responsive layout */
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .content-panel {
    padding: 1rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .featured {
    grid-column: span 1;
  }

  .page-wrapper {
    padding: 1rem 0.5rem;
  }
}
</style>
