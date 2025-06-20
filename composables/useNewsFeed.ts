export function useNewsFeed(selectedTab: Ref<string>) {
  const data = ref([]);

  watchEffect(async () => {
    const response = await fetch(`/mock/newsData.js?category=${selectedTab.value}`);
    data.value = await response.json();
  });

  return { data };
}
