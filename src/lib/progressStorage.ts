const STORAGE_KEY = 'gsp_academy_progress_v1';

export type ProgressMap = Record<string, string[]>;

export function readProgressMap(): ProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return {};
    const cleaned: ProgressMap = {};
    for (const [key, val] of Object.entries(parsed as Record<string, unknown>)) {
      if (Array.isArray(val)) {
        cleaned[key] = val.filter((item): item is string => typeof item === 'string');
      }
    }
    return cleaned;
  } catch {
    return {};
  }
}

export function writeProgressMap(map: ProgressMap): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // Ignore storage quota or private-mode restrictions gracefully
  }
}

export function getCompletedLessonIds(pathwayId: string): string[] {
  const map = readProgressMap();
  return map[pathwayId] ?? [];
}

export function toggleLessonCompletion(
  pathwayId: string,
  lessonId: string
): string[] {
  const map = readProgressMap();
  const current = new Set(map[pathwayId] ?? []);
  if (current.has(lessonId)) {
    current.delete(lessonId);
  } else {
    current.add(lessonId);
  }
  const updated = Array.from(current);
  map[pathwayId] = updated;
  writeProgressMap(map);
  return updated;
}

export function resetPathwayProgress(pathwayId: string): void {
  const map = readProgressMap();
  delete map[pathwayId];
  writeProgressMap(map);
}
