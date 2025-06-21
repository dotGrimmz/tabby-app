<script setup>
const props = defineProps({
  name: String,
  icon: String,
  link: String,
});
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="app-icon">
    <div class="app-icon-wrapper">
      <img :src="icon" :alt="name" />
    </div>
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
  text-decoration: none;
}

.app-icon-wrapper {
  background-color: white;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); /* Subtle shadow for "raised" effect */
  padding-top: 8px; /* Adds spacing inside the element */
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  width: 60px; /* Fixed width for consistency */
  height: 60px; /* Fixed height for consistency */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px; /* Space between icon and text */
  border: 1px solid #e5e7eb; /* Light border for better visibility */
}

.app-icon-wrapper:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  transform: translateY(-2px); /* Slight lift on hover */
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
  color: lightgreen;
}
</style>
