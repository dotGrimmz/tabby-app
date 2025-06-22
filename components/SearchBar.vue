<template>
  <form @submit.prevent="onSubmit" class="search-bar">
    <div class="search-wrapper">
      <span class="search-icon"> 🔍 </span>
      <input
        v-model="query"
        type="text"
        placeholder="Search the web or type a URL"
      />
    </div>
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
  width: 100%;
  margin-bottom: 4rem;
}

.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  width: 60%;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.search-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: #888;
}

input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
}
</style>
