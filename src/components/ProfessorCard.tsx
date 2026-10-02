import React from 'react';
import { Star, Bookmark, Scale, ArrowRight, Check, ExternalLink, MessageSquare, Clock, MapPin, DollarSign, Users } from 'lucide-react';
import { Professor } from '../types';

interface ProfessorCardProps {
  professor: Professor;
  isBookmarked: boolean;
  isComparing: boolean;
  onToggleBookmark: () => void;
  onToggleCompare: () => void;
  onSelect: () => void;
  onWriteReview: () => void;
}

export const ProfessorCard: React.FC<ProfessorCardProps> = ({
  professor,
  isBookmarked,
  isComparing,
  onToggleBookmark,
  onToggleCompare,
  onSelect,
  onWriteReview,
}) => {
  return (
    <article className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div className="p-6">
        {/* Top Header: Unboxed metadata kicker & Bookmark button */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="text-emerald-800 font-semibold">{professor.departmentNameTh}</span>
            <span aria-hidden="true">·</span>
            <span>{professor.participationFormat}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-700 font-semibold">รับ {professor.capacityText}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onToggleBookmark}
              aria-label={isBookmarked ? 'ยกเลิกการบันทึก' : 'บันทึกอาจารย์'}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                  : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-emerald-700 text-emerald-700' : ''}`} />
            </button>
          </div>
        </div>

        {/* Professor Name & Title */}
        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-900 text-amber-200 font-serif font-bold text-lg flex items-center justify-center shrink-0 shadow-xs">
            {professor.avatarInitial}
          </div>
          <div className="min-w-0 flex-1">
            <h3
              onClick={onSelect}
              className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors cursor-pointer leading-snug line-clamp-1"
            >
              {professor.name}
            </h3>
            <p className="text-xs text-slate-500 truncate">{professor.nameEn}</p>
            
            {/* Rating and review counter */}
            <div className="flex items-center gap-2 mt-1.5 text-xs">
              <div className="flex items-center text-amber-500 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                <span>{professor.ratingSummary.average.toFixed(1)}</span>
              </div>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <button
                onClick={onSelect}
                className="text-slate-500 hover:text-emerald-800 transition-colors cursor-pointer"
              >
                {professor.ratingSummary.reviewCount} รีวิวจากรุ่นพี่
              </button>
            </div>
          </div>
        </div>

        {/* Project Title and Type */}
        <div className="mb-4 pb-4 border-b border-slate-100">
          <div className="text-xs font-semibold text-slate-500 mb-1">หัวข้อโครงงานวิจัย:</div>
          <h4
            onClick={onSelect}
            className="text-sm font-semibold text-slate-800 hover:text-emerald-800 transition-colors cursor-pointer line-clamp-2 leading-relaxed"
          >
            {professor.projectTitle}
          </h4>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
            <span className="font-medium text-emerald-900">{professor.projectType}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">{professor.expectedOutput}</span>
          </div>
        </div>

        {/* Core Sheet Metadata: Attendance & Prerequisites */}
        <div className="space-y-2.5 text-xs text-slate-600 mb-4">
          <div className="flex items-start gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 font-medium">ความถี่เข้าคณะ: </span>
              <span className="text-slate-700">{professor.attendanceFrequency}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 font-medium">พื้นฐานที่ต้องการ: </span>
              <span className="text-slate-700 font-medium">{professor.prerequisites}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <DollarSign className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 font-medium">ค่าใช้จ่าย: </span>
              <span className={professor.hasExtraCost ? 'text-amber-700 font-medium' : 'text-emerald-700 font-medium'}>
                {professor.hasExtraCost ? professor.extraCostDetails : 'ไม่มีค่าใช้จ่ายเพิ่มเติม (มีงบสนับสนุน)'}
              </span>
            </div>
          </div>
        </div>

        {/* Recent Review Quote Snippet */}
        {professor.reviews.length > 0 && (
          <div className="p-3 bg-slate-50 rounded-lg text-xs border border-slate-100 mb-2">
            <div className="flex items-center gap-1.5 text-slate-700 font-semibold mb-1">
              <MessageSquare className="w-3 h-3 text-emerald-700" />
              <span className="line-clamp-1">"{professor.reviews[0].headline}"</span>
            </div>
            <p className="text-slate-500 line-clamp-2 italic leading-relaxed">
              {professor.reviews[0].comment}
            </p>
          </div>
        )}
      </div>

      {/* Card Footer: Single-line controls & actions */}
      <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isComparing}
            onChange={onToggleCompare}
            className="w-4 h-4 rounded text-emerald-800 focus:ring-emerald-700 border-slate-300"
          />
          <span>เปรียบเทียบ</span>
        </label>

        <div className="flex items-center gap-2">
          <button
            onClick={onWriteReview}
            className="px-2.5 py-1.5 text-xs text-slate-600 hover:text-emerald-800 hover:bg-slate-100 rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            เขียนรีวิว
          </button>
          <button
            onClick={onSelect}
            className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1 shadow-2xs whitespace-nowrap cursor-pointer"
          >
            <span>ดูข้อมูล & รีวิว</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
