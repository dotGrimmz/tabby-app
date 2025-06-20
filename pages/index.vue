<template>
  <div class="container space-y-8">
    <h1>News Portal</h1>
    <SearchBar />

    <AppIconRow />

    <TabNav v-model="selectedTab" />

    <section class="news-section">
      <FeaturedNewsTile v-bind="featuredStory" />

      <div class="news-grid">
        <NewsTile
          v-for="(story, index) in otherStories"
          :key="index"
          v-bind="story"
        />
      </div>

      <RelatedStories :stories="relatedStories" />
    </section>
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
.news-section {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;
}

.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
