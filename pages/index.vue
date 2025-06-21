<template>
  <div class="page-wrapper">
    <SearchBar />
    <AppIconRow />

    <div class="content-panel">
      <TabNav v-model="selectedTab" />

      <FeaturedNewsTile v-bind="featuredStory" />

      <div class="news-grid">
        <NewsTile
          v-for="(story, index) in otherStories"
          :key="index"
          v-bind="story"
        />
      </div>

      <RelatedStories :stories="relatedStories" />
    </div>
  </div>
</template>

<script setup>
const selectedTab = ref("Home");

// ✅ Fetch SSR API endpoint — will render on server and hydrate on client
const { data: newsData } = await useFetch("/api/newsData");

const featuredStory = computed(() => newsData.value?.[selectedTab.value]?.[0]);
const otherStories = computed(() =>
  newsData.value?.[selectedTab.value]?.slice(1, 4)
);
const relatedStories = computed(() =>
  newsData.value?.[selectedTab.value]?.slice(4)
);
</script>
<style scoped>
.page-wrapper {
  /* max-width: 960px; */
  width: 1060px;
  outline: 2px solid red;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-panel {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-top: 2rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
