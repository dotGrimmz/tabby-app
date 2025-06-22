import { ref, watch, onMounted, onBeforeUnmount } from "vue";

export function usePersistedState<T>(
  keyTab: string,
  defaultTab: T,
  keyScroll: string,
  scrollThrottleMs = 150
) {
  // Persisted tab
  const tab = ref<T>(defaultTab);
  const hydrated = ref(false);

  // Load tab from localStorage on mount
  onMounted(() => {
    const storedTab = localStorage.getItem(keyTab);
    if (storedTab !== null) {
      tab.value = JSON.parse(storedTab);
    }
    hydrated.value = true;

    // Watch tab and persist on changes
    watch(
      tab,
      (newVal) => {
        localStorage.setItem(keyTab, JSON.stringify(newVal));
      },
      { deep: true }
    );

    // Restore scroll position
    const savedScroll = localStorage.getItem(keyScroll);
    if (savedScroll) {
      window.scrollTo({ top: parseInt(savedScroll, 10), behavior: "smooth" });
    }

    // Throttled scroll save
    const saveScroll = throttle(() => {
      localStorage.setItem(keyScroll, window.scrollY.toString());
    }, scrollThrottleMs);

    window.addEventListener("scroll", saveScroll);

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", saveScroll);
      saveScroll.cancel?.();
    });
  });

  return { tab, hydrated };
}

function throttle(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  const throttled = function (...args: any[]) {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
    }
  };
  throttled.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return throttled;
}
