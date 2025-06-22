

export function useTracking(elRef: Ref<HTMLElement | null>, title: string | undefined, id: number | undefined) {
  const { addLog } = useErrorLogger();

  const trackTileShown = () => {
    console.log('Tile shown:', title, id);
    addLog('info', 'tile_shown', { title, id });
  };

  const trackClick = () => {
    addLog('info', 'tile_clicked', { title, id });
  };

  onMounted(() => {
    if (!elRef.value) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackTileShown();
          observer.disconnect(); // Ensures event fires only once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(elRef.value);
  });

  return { trackClick };
}
