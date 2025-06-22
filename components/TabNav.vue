<template>
  <nav class="tab-nav">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: tab === modelValue }"
        @click="$emit('update:modelValue', tab)"
      >
        {{ tab }}
      </li>
    </ul>
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
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.tab-nav ul {
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.tab-nav li {
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  transition: color 0.3s ease;
}

.tab-nav li.active {
  color: #0096e6;
  font-weight: 600;
}

.tab-nav li.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 3px;
  background-color: #0096e6;
  border-radius: 2px;
}
</style>
