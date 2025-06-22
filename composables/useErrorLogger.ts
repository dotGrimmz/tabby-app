
const STORAGE_KEY = 'tabbyErrorLogs';

interface ErrorLogEntry {
  type: 'error' | 'interaction' | 'info' | 'warn';
  message: string;
  extra?: Record<string, unknown>;
  id?: string;
  timestamp: string;
}

const logs: Ref<ErrorLogEntry[]> = ref([]);

onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      logs.value = JSON.parse(stored);
    } catch (e) {
      console.warn('Failed to parse stored logs', e);
      logs.value = [];
    }
  }
});

watch(
  logs,
  (newLogs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newLogs));
  },
  { deep: true }
);

export function useErrorLogger() {
  const addLog = (
    type: ErrorLogEntry['type'],
    message: string,
    extra?: Record<string, unknown>,
    id: string | undefined = undefined
  ) => {
    logs.value.push({
      type,
      message,
      extra,
      id,
      timestamp: new Date().toISOString(),
    });
  };

  const clearLogs = () => {
    logs.value = [];
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    logs,
    addLog,
    clearLogs,
  };
}
