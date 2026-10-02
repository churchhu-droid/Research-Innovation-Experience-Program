import React from 'react';
import { Bookmark, ArrowRight, Clock, MapPin, DollarSign, Users } from 'lucide-react';
import { Professor } from '../types';

interface ProfessorCardProps {
  professor: Professor;
  isBookmarked: boolean;
  isComparing: boolean;
  onToggleBookmark: () => void;
  onToggleCompare: () => void;
  onSelect: () => void;
}

export const ProfessorCard: React.FC<ProfessorCardProps> = ({
  professor,
  isBookmarked,
  isComparing,
  onToggleBookmark,
  onToggleCompare,
  onSelect,
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
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-emerald-900 text-amber-200 font-serif font-bold text-lg flex items-center justify-center shrink-0 shadow-xs border border-slate-200/90">
            {professor.imageUrl ? (
              <img
                src={professor.imageUrl}
                alt={professor.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            ) : (
              professor.avatarInitial
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3
              onClick={onSelect}
              className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors cursor-pointer leading-snug line-clamp-1"
            >
              {professor.name}
            </h3>
            <p className="text-xs text-slate-500 truncate">{professor.nameEn}</p>
            <p className="text-xs text-emerald-800 font-medium mt-1">{professor.academicTitle}</p>
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
        <div className="space-y-2.5 text-xs text-slate-600 mb-2">
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
                {professor.hasExtraCost ? professor.extraCostDetails : 'ไม่มีค่าใช้จ่ายเพิ่มเติม'}
              </span>
            </div>
          </div>
        </div>
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

        <button
          onClick={onSelect}
          className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs whitespace-nowrap cursor-pointer ml-auto"
        >
          <span>ดูรายละเอียดโครงงาน</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
