<template>
  <transition name="fade">
    <div v-if="isModalOpen" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-content">
        <slot />
        <button @click="closeModal" class="modal-close">Close</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { isModalOpen, closeModal } = useModal();
const ModalData = [
  {
    name: "Pintrest",
    url: "https://pintrest.com",
    src: "/icons/pintrest.svg",
  },
  {
    name: "Twitter X",
    url: "https://x.com",
    src: "/icons/twitter.svg",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    src: "/icons/instagram.svg",
  },
];
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
