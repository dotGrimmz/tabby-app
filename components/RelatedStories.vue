<template>
  <div v-if="stories?.length" class="mt-10">
    <h3 class="text-xl font-bold mb-4">Related Stories</h3>
    <div class="space-y-4">
      <NewsTile v-for="(story, i) in stories" :key="i" v-bind="story" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  stories: Array,
});
</script>
<style scoped>
div {
  max-width: 700px;
  margin: 2rem auto 0;
  padding: 0 1rem;
  text-align: center;
}

h3 {
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>
