<template>
  <a :href="url" class="app-icon" target="_blank" rel="noopener noreferrer">
    <div class="app-icon-wrapper">
      <img :src="src" :alt="name" width="48" height="48" />
    </div>

    <span class="icon-text">{{ name }}</span>
  </a>
</template>

<script setup>
const props = defineProps({
  name: String,
  url: String,
  src: String,
});
</script>

<style scoped>
.app-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.app-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: black;
}

.app-icon-wrapper {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding-top: 8px;
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
}

.app-icon-wrapper:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
.app-icon img {
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin-bottom: 4px;
}

.icon-text {
  color: #333;
  transition: color 0.3s ease;
}
.app-icon:hover .icon-text {
  color: var(--color-primary);
}
</style>
