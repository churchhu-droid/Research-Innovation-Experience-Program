import React, { useState } from 'react';
import {
  X,
  Star,
  Mail,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Sparkles,
  MessageSquare,
  Users,
  Clock,
  Calendar,
  Layers,
  Award,
  DollarSign,
  AlertCircle,
  Bookmark,
  Share2,
  ChevronRight,
  ThumbsUp,
} from 'lucide-react';
import { Professor, Review } from '../types';

interface ProfessorDetailModalProps {
  professor: Professor | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onOpenWriteReview: (profId: string) => void;
}

export const ProfessorDetailModal: React.FC<ProfessorDetailModalProps> = ({
  professor,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onOpenWriteReview,
}) => {
  const [activeTab, setActiveTab] = useState<'project' | 'academic' | 'reviews'>('project');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!professor) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(professor.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: professor.name,
        text: `อาจารย์ที่ปรึกษา ${professor.name} - คณะเภสัชศาสตร์ ม.ศิลปากร: ${professor.projectTitle}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative border-b border-emerald-900/40">
          <div className="absolute right-4 top-4 flex items-center gap-2">
            <button
              onClick={handleShare}
              title="แชร์ลิงก์"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onToggleBookmark}
              title={isBookmarked ? 'ลบออกจากรายการบันทึก' : 'บันทึกอาจารย์'}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              aria-label="ปิดหน้าต่าง"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subtitle / Dept */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            <span>{professor.departmentNameTh}</span>
            <span aria-hidden="true">·</span>
            <span>{professor.academicTitle}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-300">รับนิสิต {professor.capacityText}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-1">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-emerald-800 text-amber-200 font-serif font-bold text-2xl flex items-center justify-center shrink-0 border-2 border-emerald-600/40 shadow-md">
              {professor.imageUrl ? (
                <img
                  src={professor.imageUrl}
                  alt={professor.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                professor.avatarInitial
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif">
                {professor.name}
              </h2>
              <p className="text-sm text-slate-300 mt-0.5">{professor.nameEn}</p>
              
              {/* Email & Rating */}
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono text-slate-200">{professor.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-1 text-slate-300 hover:text-white cursor-pointer"
                    title="คัดลอกอีเมล"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  {copiedEmail && <span className="text-emerald-300 font-medium text-2xs ml-1">คัดลอกแล้ว</span>}
                </div>

                <div className="flex items-center gap-1.5 text-slate-200">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-sm tabular-nums">{professor.ratingSummary.average.toFixed(1)}</span>
                  <span className="text-slate-400">({professor.ratingSummary.reviewCount} รีวิวจากนิสิต)</span>
                </div>

                {professor.officialUrl && (
                  <a
                    href={professor.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-emerald-200 flex items-center gap-1 hover:underline ml-auto"
                  >
                    <span>หน้าอาจารย์บนเว็บคณะเภสัชฯ</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 px-6 gap-2 text-sm font-medium overflow-x-auto">
          <button
            onClick={() => setActiveTab('project')}
            className={`py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'project'
                ? 'border-emerald-800 text-emerald-900 font-semibold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>1. ข้อมูลโครงงาน & แบบฟอร์มวิจัย (B1-R1)</span>
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={`py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'academic'
                ? 'border-emerald-800 text-emerald-900 font-semibold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>2. ประวัติการศึกษา & ความเชี่ยวชาญ</span>
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'reviews'
                ? 'border-emerald-800 text-emerald-900 font-semibold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>3. รีวิวการสอน & สไตล์อาจารย์ ({professor.reviews.length})</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 flex-1 text-slate-700">
          {/* TAB 1: Google Sheet Form Columns B1 to R1 */}
          {activeTab === 'project' && (
            <div className="space-y-6">
              {/* Project Headline Card */}
              <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-100">
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-1">
                  ชื่อหัวข้อโครงงานวิจัย (Project Title - Column F):
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {professor.projectTitle}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-emerald-900">Research Area (Col G):</span>
                  <span>{professor.researchArea}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-emerald-900">Project Type (Col H):</span>
                  <span>{professor.projectType}</span>
                </div>
              </div>

              {/* Grid of Google Sheets Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* สิ่งที่นักเรียนจะได้เรียนรู้ (Column I) */}
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-2">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>สิ่งที่นักเรียนจะได้เรียนรู้ (Column I)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {professor.learningOutcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Output (Column J) & ศักยภาพการต่อยอด (Column P) */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                      <Award className="w-4 h-4 text-emerald-700" />
                      <span>ผลผลิตที่คาดหวัง (Expected Output - Column J)</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {professor.expectedOutput}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                      <Layers className="w-4 h-4 text-emerald-700" />
                      <span>ศักยภาพในการต่อยอด (Column P)</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {professor.extensionPotential}
                    </p>
                  </div>
                </div>

                {/* รูปแบบการเข้าร่วม & ความถี่ (Columns K & L) */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    <span>รูปแบบการเข้าร่วม & ความถี่ (Columns K & L)</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-500">รูปแบบการเข้าร่วม (Col K): </span>
                      <strong className="text-emerald-900 font-semibold">{professor.participationFormat}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">ความถี่ในการเข้าคณะโดยประมาณ (Col L): </span>
                      <p className="text-slate-700 mt-0.5 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        {professor.attendanceFrequency}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">จำนวนที่รับได้ (Col E): </span>
                      <strong className="text-slate-800">{professor.capacityText}</strong>
                    </div>
                  </div>
                </div>

                {/* คุณสมบัติและความเหมาะสม (Columns M, N, O) */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                    <Users className="w-4 h-4 text-emerald-700" />
                    <span>คุณสมบัติและความเหมาะสมของผู้เรียน (Columns M-O)</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-500">ความสนใจที่เหมาะสม (Col M): </span>
                      <span className="text-slate-800 font-medium">{professor.targetInterests}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">พื้นฐานเฉพาะที่ต้องมี (Col N): </span>
                      <span className="text-slate-800 font-medium">{professor.prerequisites}</span>
                    </div>
                    {professor.constraints && professor.constraints !== '-' && (
                      <div>
                        <span className="text-slate-500">ข้อจำกัดหรือคุณสมบัติเฉพาะ (Col O): </span>
                        <span className="text-slate-800">{professor.constraints}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ค่าใช้จ่ายเพิ่มเติม (Columns Q & R) */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-700" />
                  <span>ค่าใช้จ่ายและงบประมาณ (Columns Q & R)</span>
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p>
                    <span className="text-slate-500">มีค่าใช้จ่ายเพิ่มเติมหรือไม่ (Col Q): </span>
                    <strong className={professor.hasExtraCost ? 'text-amber-800' : 'text-emerald-800'}>
                      {professor.hasExtraCost ? 'มีค่าใช้จ่ายเพิ่มเติม' : 'ไม่มีค่าใช้จ่ายเพิ่มเติม'}
                    </strong>
                  </p>
                  {professor.extraCostDetails && (
                    <p className="mt-1 bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="text-slate-500">รายละเอียดงบประมาณ (Col R): </span>
                      <span className="text-slate-800 font-medium">{professor.extraCostDetails}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Timestamp of form entry */}
              <div className="text-right text-2xs text-slate-400">
                ประทับเวลาการส่งข้อมูล: {professor.timestamp}
              </div>
            </div>
          )}

          {/* TAB 2: Academic Profile from SU Pharmacy Website */}
          {activeTab === 'academic' && (
            <div className="space-y-6">
              {/* Summary Bio */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-1">สรุปประวัติสังเขป:</strong>
                {professor.summaryBio}
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-800" />
                  <span>ประวัติการศึกษา</span>
                </h4>
                <div className="space-y-2">
                  {professor.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0" />
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-800" />
                  <span>ความเชี่ยวชาญเฉพาะด้าน</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {professor.expertise.map((exp, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 text-slate-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable Research & Patents */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-800" />
                  <span>ผลงานวิจัยเด่น / ผลงานทางวิชาการ</span>
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {professor.notableResearch.map((res, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="leading-relaxed font-medium">{res}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advising Style */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-800" />
                  <span>สไตล์การดูแลและให้คำปรึกษานิสิต</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                    <span className="font-semibold text-emerald-900 block mb-1">การให้คำปรึกษา</span>
                    <p className="text-slate-600">{professor.advisingStyle.mentorship}</p>
                  </div>
                  <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                    <span className="font-semibold text-emerald-900 block mb-1">ตารางเวลา & การเข้าแล็บ</span>
                    <p className="text-slate-600">{professor.advisingStyle.workSchedule}</p>
                  </div>
                  <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                    <span className="font-semibold text-emerald-900 block mb-1">นิสิตที่เข้ากันได้ดี</span>
                    <p className="text-slate-600">{professor.advisingStyle.idealStudent}</p>
                  </div>
                </div>
              </div>

              {professor.officialUrl && (
                <div className="pt-2">
                  <a
                    href={professor.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    <span>อ่านข้อมูลประวัติทางการฉบับเต็มบนเว็บไซต์คณะเภสัชศาสตร์ ม.ศิลปากร</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Student Reviews & Mentorship Ratings */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Rating Overview Card */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4 text-center sm:text-left sm:border-r border-slate-200 sm:pr-6">
                  <div className="text-4xl font-bold text-slate-900 font-serif tabular-nums">
                    {professor.ratingSummary.average.toFixed(1)}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 my-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(professor.ratingSummary.average) ? 'fill-amber-400' : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-slate-500">
                    จาก {professor.ratingSummary.reviewCount} รีวิวของนิสิต
                  </div>
                  <button
                    onClick={() => onOpenWriteReview(professor.id)}
                    className="mt-3 w-full py-2 px-3 bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer shadow-2xs"
                  >
                    เขียนรีวิวให้อาจารย์
                  </button>
                </div>

                {/* Aspect Ratings Breakdown */}
                <div className="sm:col-span-8 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">การให้คำปรึกษา & ชี้แนะ (Mentorship)</span>
                    <span className="font-semibold text-slate-800 tabular-nums">
                      {professor.ratingSummary.mentorship.toFixed(1)} / 5.0
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-700 h-full rounded-full"
                      style={{ width: `${(professor.ratingSummary.mentorship / 5) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-600">ความยืดหยุ่น & การจัดสรรเวลา (Flexibility)</span>
                    <span className="font-semibold text-slate-800 tabular-nums">
                      {professor.ratingSummary.flexibility.toFixed(1)} / 5.0
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-700 h-full rounded-full"
                      style={{ width: `${(professor.ratingSummary.flexibility / 5) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-600">ความรู้และประสบการณ์ที่ได้รับ (Learning)</span>
                    <span className="font-semibold text-slate-800 tabular-nums">
                      {professor.ratingSummary.learning.toFixed(1)} / 5.0
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-700 h-full rounded-full"
                      style={{ width: `${(professor.ratingSummary.learning / 5) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-600">ความเป็นกันเอง เข้าถึงง่าย (Approachability)</span>
                    <span className="font-semibold text-slate-800 tabular-nums">
                      {professor.ratingSummary.approachability.toFixed(1)} / 5.0
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-700 h-full rounded-full"
                      style={{ width: `${(professor.ratingSummary.approachability / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">
                    ความคิดเห็นและคำแนะนำจากรุ่นพี่ ({professor.reviews.length})
                  </h4>
                  <button
                    onClick={() => onOpenWriteReview(professor.id)}
                    className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold cursor-pointer"
                  >
                    + เพิ่มรีวิวของคุณ
                  </button>
                </div>

                {professor.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 bg-white rounded-xl border border-slate-200 space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                          <span>{rev.studentName}</span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="text-slate-500 font-normal">{rev.studentYear}</span>
                          {rev.verifiedStudent && (
                            <span className="text-2xs text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                              นิสิตเภสัชฯ ม.ศิลปากร
                            </span>
                          )}
                        </div>
                        <div className="text-2xs text-slate-400 mt-0.5">{rev.date}</div>
                      </div>

                      <div className="flex items-center text-amber-500 text-xs font-bold bg-amber-50 px-2 py-1 rounded-md">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                        <span>{rev.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <h5 className="text-xs sm:text-sm font-bold text-slate-800">
                      "{rev.headline}"
                    </h5>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {rev.comment}
                    </p>

                    {rev.pros && (
                      <div className="text-xs text-emerald-900 bg-emerald-50/60 p-2 rounded-lg">
                        <strong>จุดเด่น: </strong> {rev.pros}
                      </div>
                    )}

                    {rev.adviceForJuniors && (
                      <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
                        <strong>คำแนะนำสำหรับรุ่นน้อง: </strong> {rev.adviceForJuniors}
                      </div>
                    )}

                    <div className="pt-1 flex items-center justify-between text-2xs text-slate-400">
                      <div className="flex items-center gap-1 text-slate-500">
                        <ThumbsUp className="w-3 h-3" />
                        <span>เป็นประโยชน์ ({rev.likes})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <span>สนใจสมัครหรือสอบถาม: </span>
            <strong className="text-slate-800 font-mono">{professor.email}</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 border border-slate-200 rounded-lg hover:bg-white text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'คัดลอกอีเมลแล้ว' : 'คัดลอกอีเมล'}</span>
            </button>

            <a
              href={`mailto:${professor.email}?subject=ขอสอบถามข้อมูลและแสดงความจำนงเข้าร่วมโครงงานวิจัย (${professor.projectTitle})`}
              className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>ส่งอีเมลติดต่ออาจารย์</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
