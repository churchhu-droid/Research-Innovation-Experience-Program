const BOOKMARKS_STORAGE_KEY = 'su_pharmacy_bookmarks_v1';

export function getStoredBookmarks(): string[] {
  try {
    const data = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to load bookmarks', e);
    return [];
  }
}

export function toggleStoredBookmark(profId: string): string[] {
  try {
    const bookmarks = getStoredBookmarks();
    let updated: string[];
    if (bookmarks.includes(profId)) {
      updated = bookmarks.filter((id) => id !== profId);
    } else {
      updated = [...bookmarks, profId];
    }
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to toggle bookmark', e);
    return [];
  }
}
