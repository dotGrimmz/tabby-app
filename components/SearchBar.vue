<template>
  <form @submit.prevent="onSubmit" class="search-bar">
    <input
      v-model="query"
      type="text"
      placeholder="Search the web or type a URL"
    />
  </form>
</template>

<script setup>
const query = ref("");
const onSubmit = () => {
  if (query.value.trim()) {
    window.location.href = `https://search.yahoo.com/search?p=${encodeURIComponent(
      query.value
    )}`;
  }
};
</script>

<style scoped>
.search-bar {
  text-align: center;
  margin-top: 2rem;
}
input {
  width: 60%;
  padding: 0.75rem;
  border-radius: 50px;
  border: 1px solid #ccc;
}
</style>
