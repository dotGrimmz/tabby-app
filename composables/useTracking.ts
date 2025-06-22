import { onMounted } from 'vue';

export function useTracking(elRef: globalThis.Ref<null, null>, title: string | undefined) {
  const trackTileShown = () => {
    console.log('tile_shown', title);
  };

  const trackClick = () => {
    console.log('tile_clicked', title);
  };

  onMounted(() => {
    if (!elRef.value) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackTileShown();
          observer.disconnect(); // Ensures only tracked once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(elRef.value);
  });

return { trackTileShown, trackClick };
}
