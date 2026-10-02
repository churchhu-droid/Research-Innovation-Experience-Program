import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  PROFESSORS_DATA,
  DEPARTMENT_OPTIONS,
} from './data/professorsData';
import {
  Professor,
  DepartmentCategory,
  ParticipationFormat,
  ProjectType,
  Review,
} from './types';
import {
  getStoredBookmarks,
  toggleStoredBookmark,
  saveReviewToStorage,
  mergeProfessorsWithUserReviews,
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { ProfessorCard } from './components/ProfessorCard';
import { ProfessorDetailModal } from './components/ProfessorDetailModal';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { AdvisorQuizModal } from './components/AdvisorQuizModal';
import { BookmarksModal } from './components/BookmarksModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { Footer } from './components/Footer';
import {
  Sparkles,
  Scale,
  Bookmark,
  CheckCircle2,
  Info,
  Building2,
  ChevronDown,
  ArrowUpDown,
  Compass,
} from 'lucide-react';

export default function App() {
  const [professors, setProfessors] = useState<Professor[]>(() =>
    mergeProfessorsWithUserReviews()
  );
  const [bookmarks, setBookmarks] = useState<string[]>(() => getStoredBookmarks());
  const [comparingIds, setComparingIds] = useState<string[]>([]);

  // Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDept, setSelectedDept] = useState<DepartmentCategory>('all');
  const [selectedType, setSelectedType] = useState<ProjectType>('all');
  const [selectedFormat, setSelectedFormat] = useState<ParticipationFormat>('all');
  const [costFilter, setCostFilter] = useState<'all' | 'free' | 'has_cost'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'capacity_desc' | 'name'>('rating');

  // Modal States
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [writeReviewProfId, setWriteReviewProfId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const exploreRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleBookmark = (id: string) => {
    const updated = toggleStoredBookmark(id);
    setBookmarks(updated);
    if (updated.includes(id)) {
      showToast('บันทึกอาจารย์ในรายการโปรดแล้ว');
    } else {
      showToast('ลบออกจากรายการบันทึกแล้ว');
    }
  };

  const handleToggleCompare = (id: string) => {
    if (comparingIds.includes(id)) {
      setComparingIds(comparingIds.filter((item) => item !== id));
    } else {
      if (comparingIds.length >= 4) {
        showToast('สามารถเปรียบเทียบได้สูงสุด 4 ท่านพร้อมกัน');
        return;
      }
      setComparingIds([...comparingIds, id]);
      showToast('เพิ่มเข้าสู่การเปรียบเทียบแล้ว');
    }
  };

  const handleRemoveCompare = (id: string) => {
    setComparingIds(comparingIds.filter((item) => item !== id));
  };

  const handleClearCompare = () => {
    setComparingIds([]);
  };

  const handleSubmitReview = (profId: string, review: Review) => {
    saveReviewToStorage(profId, review);
    // Reload updated professors with recalculated rating
    const updatedProfs = mergeProfessorsWithUserReviews();
    setProfessors(updatedProfs);

    // If modal open, update selected professor view
    if (selectedProfessor && selectedProfessor.id === profId) {
      const refreshed = updatedProfs.find((p) => p.id === profId);
      if (refreshed) setSelectedProfessor(refreshed);
    }
    showToast('บันทึกรีวิวของคุณเรียบร้อยแล้ว ขอบคุณสำหรับความคิดเห็น!');
  };

  // Filter and Search Logic
  const filteredProfessors = useMemo(() => {
    return professors
      .filter((prof) => {
        // Department Filter
        if (selectedDept !== 'all' && prof.departmentCategory !== selectedDept) {
          return false;
        }

        // Project Type Filter
        if (selectedType !== 'all' && prof.projectType !== selectedType) {
          return false;
        }

        // Format Filter
        if (selectedFormat !== 'all' && prof.participationFormat !== selectedFormat) {
          return false;
        }

        // Cost Filter
        if (costFilter === 'free' && prof.hasExtraCost) {
          return false;
        }
        if (costFilter === 'has_cost' && !prof.hasExtraCost) {
          return false;
        }

        // Search Query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = prof.name.toLowerCase().includes(q);
          const matchEn = prof.nameEn.toLowerCase().includes(q);
          const matchTitle = prof.projectTitle.toLowerCase().includes(q);
          const matchDept = prof.department.toLowerCase().includes(q);
          const matchArea = prof.researchArea.toLowerCase().includes(q);
          const matchExpertise = prof.expertise.some((e) => e.toLowerCase().includes(q));
          const matchKeywords = prof.targetInterests.toLowerCase().includes(q);
          const matchOutcomes = prof.learningOutcomes.some((o) => o.toLowerCase().includes(q));
          const matchPrereq = prof.prerequisites.toLowerCase().includes(q);

          if (
            !matchName &&
            !matchEn &&
            !matchTitle &&
            !matchDept &&
            !matchArea &&
            !matchExpertise &&
            !matchKeywords &&
            !matchOutcomes &&
            !matchPrereq
          ) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') {
          return b.ratingSummary.average - a.ratingSummary.average;
        }
        if (sortBy === 'capacity_desc') {
          return b.capacityNumber - a.capacityNumber;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name, 'th');
        }
        return 0;
      });
  }, [
    professors,
    selectedDept,
    selectedType,
    selectedFormat,
    costFilter,
    searchQuery,
    sortBy,
  ]);

  const hasActiveFilters =
    selectedDept !== 'all' ||
    selectedType !== 'all' ||
    selectedFormat !== 'all' ||
    costFilter !== 'all' ||
    searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSelectedDept('all');
    setSelectedType('all');
    setSelectedFormat('all');
    setCostFilter('all');
    setSearchQuery('');
  };

  const bookmarkedProfessorsList = useMemo(() => {
    return professors.filter((p) => bookmarks.includes(p.id));
  }, [professors, bookmarks]);

  const comparedProfessorsList = useMemo(() => {
    return professors.filter((p) => comparingIds.includes(p.id));
  }, [professors, comparingIds]);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 text-xs font-medium flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <Navbar
        bookmarksCount={bookmarks.length}
        comparisonCount={comparingIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenComparison={() => setIsComparisonOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onScrollToExplore={scrollToExplore}
      />

      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenQuiz={() => setIsQuizOpen(true)}
        totalProfessors={professors.length}
      />

      {/* Main Content Area */}
      <main ref={exploreRef} className="flex-1">
        {/* Multi-parameter Filter Bar */}
        <FilterBar
          selectedDept={selectedDept}
          onSelectDept={setSelectedDept}
          selectedType={selectedType}
          onSelectType={setSelectedType}
          selectedFormat={selectedFormat}
          onSelectFormat={setSelectedFormat}
          costFilter={costFilter}
          onCostFilterChange={setCostFilter}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
          filteredCount={filteredProfessors.length}
        />

        {/* Floating Compare Notification Bar if items selected */}
        {comparingIds.length > 0 && (
          <div className="bg-emerald-800 text-white text-xs py-2.5 px-4 sticky top-16 z-30 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-300" />
                <span>
                  เลือกอาจารย์สำหรับเปรียบเทียบแล้ว <strong>{comparingIds.length}</strong> ท่าน
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsComparisonOpen(true)}
                  className="px-3 py-1 bg-white text-emerald-900 font-bold rounded-md hover:bg-emerald-50 transition-colors cursor-pointer"
                >
                  เปิดตารางเปรียบเทียบ
                </button>
                <button
                  onClick={handleClearCompare}
                  className="text-emerald-200 hover:text-white cursor-pointer underline text-2xs"
                >
                  ยกเลิกทั้งหมด
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Section Subheading & Sorting */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                รายชื่ออาจารย์ที่ปรึกษา ({filteredProfessors.length} ท่าน)
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                <span>คณะเภสัชศาสตร์ มหาวิทยาลัยศิลปากร</span>
                <span aria-hidden="true">·</span>
                <span>อ้างอิงข้อมูลโครงงานตามแบบฟอร์มคอลัมน์ B1 - R1</span>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-slate-500">เรียงตาม:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as 'rating' | 'capacity_desc' | 'name')
                }
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium focus:ring-1 focus:ring-emerald-700 focus:outline-none cursor-pointer"
              >
                <option value="rating">คะแนนรีวิวเฉลี่ยสูงสุด</option>
                <option value="capacity_desc">จำนวนรับนิสิต (มากไปน้อย)</option>
                <option value="name">ชื่ออาจารย์ (ก-ฮ)</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredProfessors.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 shadow-2xs">
              <Info className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">
                ไม่พบข้อมูลอาจารย์ที่ตรงกับเงื่อนไขการค้นหา
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                ลองปรับเปลี่ยนคำค้นหา หรือรีเซ็ตตัวกรองเพื่อดูอาจารย์ทั้ง 7 ท่านในคณะ
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-semibold hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                แสดงอาจารย์ทั้งหมด
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfessors.map((professor) => (
                <ProfessorCard
                  key={professor.id}
                  professor={professor}
                  isBookmarked={bookmarks.includes(professor.id)}
                  isComparing={comparingIds.includes(professor.id)}
                  onToggleBookmark={() => handleToggleBookmark(professor.id)}
                  onToggleCompare={() => handleToggleCompare(professor.id)}
                  onSelect={() => setSelectedProfessor(professor)}
                  onWriteReview={() => setWriteReviewProfId(professor.id)}
                />
              ))}
            </div>
          )}

          {/* Information Banner for Students */}
          <div className="mt-14 p-6 sm:p-8 bg-emerald-900 text-white rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>คำแนะนำสำหรับนิสิตคณะเภสัชศาสตร์ ม.ศิลปากร</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white">
                ยังไม่แน่ใจว่าจะเลือกอาจารย์ท่านใด?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                ทำแบบประเมินสั้น ๆ 3 ข้อ เพื่อค้นหาอาจารย์และโครงงานที่ตรงกับสไตล์การเรียน
                ความถนัด และตารางเวลาที่คุณสะดวกที่สุด หรือเลือกเปรียบเทียบข้อมูลแบบเคียงข้างกันได้ทันที
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
              <button
                onClick={() => setIsQuizOpen(true)}
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-slate-900" />
                <span>เริ่มทำแบบประเมิน (3 ข้อ)</span>
              </button>
              <button
                onClick={() => {
                  setComparingIds(['chutima', 'waranee', 'thawatchai']);
                  setIsComparisonOpen(true);
                }}
                className="px-4 py-2.5 bg-emerald-950/60 hover:bg-emerald-950 text-white text-xs font-medium rounded-xl border border-emerald-700/50 transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>ดูตัวอย่างการเปรียบเทียบ</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProfessorDetailModal
        professor={selectedProfessor}
        onClose={() => setSelectedProfessor(null)}
        isBookmarked={selectedProfessor ? bookmarks.includes(selectedProfessor.id) : false}
        onToggleBookmark={() => {
          if (selectedProfessor) handleToggleBookmark(selectedProfessor.id);
        }}
        onOpenWriteReview={(id) => {
          setWriteReviewProfId(id);
        }}
      />

      <ComparisonDrawer
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        professors={comparedProfessorsList}
        onRemoveProfessor={handleRemoveCompare}
        onClearAll={handleClearCompare}
        onSelectProfessor={(prof) => setSelectedProfessor(prof)}
      />

      <AdvisorQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        professors={professors}
        onSelectProfessor={(prof) => setSelectedProfessor(prof)}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedProfessors={bookmarkedProfessorsList}
        onRemoveBookmark={handleToggleBookmark}
        onSelectProfessor={(prof) => setSelectedProfessor(prof)}
        onOpenComparison={() => {
          setComparingIds(bookmarks);
          setIsComparisonOpen(true);
        }}
      />

      <WriteReviewModal
        isOpen={writeReviewProfId !== null}
        onClose={() => setWriteReviewProfId(null)}
        professors={professors}
        defaultProfessorId={writeReviewProfId || undefined}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  );
}
