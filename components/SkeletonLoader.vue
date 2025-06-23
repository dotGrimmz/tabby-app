<template>
  <!-- Dot Loader -->
  <div
    v-if="type === 'dot-loader'"
    class="dot-loader"
    :style="{ maxWidth: width, height }"
  >
    <span
      class="dot"
      v-for="n in 3"
      :key="n"
      :style="{ animationDelay: `${n * 0.2}s` }"
    ></span>
  </div>

  <!-- Skeleton Loader -->
  <div v-else class="skeleton-wrapper" :style="{ maxWidth: width, height }">
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text short"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "400px",
  },
  height: {
    type: String,
    default: "fit-content",
  },
  type: {
    type: String,
    default: "skeleton",
    validator: (val) => ["skeleton", "dot-loader"].includes(val),
  },
});
</script>

<style scoped>
/* General Styles */
.skeleton-wrapper {
  margin: 1rem 0;
}

/* Skeleton Loader */
.skeleton {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 37%, #e0e0e0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 12px;
}

.skeleton-title {
  height: 24px;
  width: 70%;
}

.skeleton-text {
  height: 16px;
  width: 100%;
}

.skeleton-text.short {
  width: 50%;
}

@keyframes shimmer {
  0% {
    background-position: -400% 0;
  }
  100% {
    background-position: 400% 0;
  }
}

/* Dot Loader */
.dot-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 40px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  animation: bounce 1s infinite ease-in-out;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
