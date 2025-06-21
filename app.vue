<!-- app.vue -->
<template>
  <div class="app-background">
    <NuxtPage />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: sans-serif;
}

.app-background {
  min-height: 100vh;
  background: radial-gradient(circle at center, #e5f0ff, #cbd5e1);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 40px;
}
</style>
