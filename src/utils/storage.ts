import { Review, Professor } from '../types';
import { PROFESSORS_DATA } from '../data/professorsData';

const REVIEWS_STORAGE_KEY = 'su_pharmacy_reviews_v1';
const BOOKMARKS_STORAGE_KEY = 'su_pharmacy_bookmarks_v1';

export function getStoredReviews(): Record<string, Review[]> {
  try {
    const data = localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (!data) return {};
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to load reviews from localStorage', e);
    return {};
  }
}

export function saveReviewToStorage(profId: string, review: Review): void {
  try {
    const stored = getStoredReviews();
    const existing = stored[profId] || [];
    stored[profId] = [review, ...existing];
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(stored));
  } catch (e) {
    console.error('Failed to save review to localStorage', e);
  }
}

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

export function mergeProfessorsWithUserReviews(): Professor[] {
  const userReviews = getStoredReviews();
  return PROFESSORS_DATA.map((prof) => {
    const userProfReviews = userReviews[prof.id] || [];
    const allReviews = [...userProfReviews, ...prof.reviews];
    
    if (allReviews.length === 0) return prof;

    const totalRatings = allReviews.reduce((sum, r) => sum + r.rating, 0);
    const avgOverall = Math.round((totalRatings / allReviews.length) * 10) / 10;

    const totalMentorship = allReviews.reduce((sum, r) => sum + (r.aspects?.mentorship || r.rating), 0);
    const totalFlex = allReviews.reduce((sum, r) => sum + (r.aspects?.flexibility || r.rating), 0);
    const totalLearn = allReviews.reduce((sum, r) => sum + (r.aspects?.learning || r.rating), 0);
    const totalAppr = allReviews.reduce((sum, r) => sum + (r.aspects?.approachability || r.rating), 0);

    return {
      ...prof,
      reviews: allReviews,
      ratingSummary: {
        average: avgOverall,
        mentorship: Math.round((totalMentorship / allReviews.length) * 10) / 10,
        flexibility: Math.round((totalFlex / allReviews.length) * 10) / 10,
        learning: Math.round((totalLearn / allReviews.length) * 10) / 10,
        approachability: Math.round((totalAppr / allReviews.length) * 10) / 10,
        reviewCount: allReviews.length,
      },
    };
  });
}
