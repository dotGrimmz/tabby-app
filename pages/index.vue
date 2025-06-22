<template>
  <div class="page-wrapper">
    <SearchBar />
    <div>
      <AppIconRow v-if="icons" :icons="icons" />
      <div v-else>Loading icons...</div>
    </div>

    <div class="content-panel">
      <TabNav v-model="selectedTab" />

      <div v-if="!newsData || !newsData[selectedTab]" class="news-grid loading">
        <SkeletonLoader class="featured" />
        <SkeletonLoader v-for="n in 3" :key="n" />
      </div>

      <div v-else class="news-grid">
        <FeaturedNewsTile class="featured" v-bind="featuredStory" />

        <NewsTile
          v-for="(story, index) in secondStories"
          :key="index"
          v-bind="story"
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
const { data: icons } = await useFetch("/api/icons");

const { data: newsData } = await useFetch("/api/newsData");

const featuredStory = computed(
  () => newsData.value?.[selectedTab.value]?.[0] || []
);
const secondStories = computed(
  () => newsData.value?.[selectedTab.value]?.slice(0, 2) || []
);

const otherStories = computed(
  () => newsData.value?.[selectedTab.value]?.slice(4) || []
);
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-items: start;
}

.featured {
  grid-column: span 2;
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
