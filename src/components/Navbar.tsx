import React from 'react';
import { Bookmark, Compass, Scale } from 'lucide-react';

interface NavbarProps {
  bookmarksCount: number;
  comparisonCount: number;
  onOpenBookmarks: () => void;
  onOpenComparison: () => void;
  onOpenQuiz: () => void;
  onScrollToExplore: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  bookmarksCount,
  comparisonCount,
  onOpenBookmarks,
  onOpenComparison,
  onOpenQuiz,
  onScrollToExplore,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 font-serif font-bold text-base flex items-center justify-center shadow-xs">
            ภ
          </span>
          <span className="font-semibold text-slate-900">
            SU Pharmacy <span className="text-emerald-800 font-normal">Advisor Hub</span>
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={onScrollToExplore}
            className="hover:text-emerald-800 transition-colors cursor-pointer"
          >
            รายชื่ออาจารย์ (7 ท่าน)
          </button>
          <button
            onClick={onOpenQuiz}
            className="hover:text-emerald-800 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-emerald-700" />
            แบบประเมินค้นหาอาจารย์
          </button>
          <button
            onClick={onOpenComparison}
            className="hover:text-emerald-800 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Scale className="w-4 h-4 text-emerald-700" />
            เปรียบเทียบ ({comparisonCount})
          </button>
          <a
            href="https://www.pharmacy.su.ac.th"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-800 transition-colors"
          >
            เว็บคณะเภสัชฯ ม.ศิลปากร ↗
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenComparison}
            className={`md:hidden px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1 ${
              comparisonCount > 0
                ? 'border-emerald-700 text-emerald-800 bg-emerald-50'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>เทียบ ({comparisonCount})</span>
          </button>

          <button
            onClick={onOpenBookmarks}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
              bookmarksCount > 0
                ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
            title="อาจารย์ที่บันทึกไว้"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarksCount > 0 ? 'fill-emerald-700 text-emerald-700' : ''}`} />
            <span className="whitespace-nowrap">บันทึกไว้ ({bookmarksCount})</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            ค้นหาโปรเจกต์ที่ใช่
          </button>
        </div>
      </div>
    </header>
  );
};
