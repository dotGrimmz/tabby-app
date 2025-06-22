// /composables/useIsMobile.ts
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useIsMobile() {
  const isMobile = ref(false)
  let mediaQuery: MediaQueryList | null = null

  const updateIsMobile = (e?: MediaQueryListEvent) => {
    if (e) {
      isMobile.value = e.matches
    } else if (mediaQuery) {
      isMobile.value = mediaQuery.matches
    }
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(max-width: 640px)')
    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', updateIsMobile)
  })

  return { isMobile }
}
