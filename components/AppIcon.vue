<script setup>
const props = defineProps({
  name: String,
  icon: String,
  link: String,
});
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="app-icon">
    <img :src="icon" :alt="name" />
    <p class="icon-text">{{ name }}</p>
  </a>
</template>

<style scoped>
.app-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}

.app-icon img {
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin-bottom: 4px;
}

.icon-text {
  color: #333;
  font-weight: bold;
}
</style>
