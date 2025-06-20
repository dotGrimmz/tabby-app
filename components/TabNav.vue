<template>
  <nav class="tab-nav">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="{ active: tab === modelValue }"
      @click="$emit('update:modelValue', tab)"
    >
      {{ tab }}
    </button>
  </nav>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
const tabs = [
  "Home",
  "News",
  "Sports",
  "Money",
  "Lifestyle",
  "Politics",
  "Health",
  "Food",
  "Entertainment",
];
</script>
<style scoped>
.tab-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ccc;
}

.tab-nav button {
  padding: 8px 12px;
  border: none;
  background: #eee;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.tab-nav button.active {
  background-color: #0070f3;
  color: white;
}
</style>
