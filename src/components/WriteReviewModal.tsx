import React, { useState } from 'react';
import { X, Star, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { Professor, Review } from '../types';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  professors: Professor[];
  defaultProfessorId?: string;
  onSubmitReview: (profId: string, review: Review) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  professors,
  defaultProfessorId,
  onSubmitReview,
}) => {
  const [selectedProfId, setSelectedProfId] = useState<string>(
    defaultProfessorId || professors[0]?.id || ''
  );
  const [studentName, setStudentName] = useState<string>('');
  const [studentYear, setStudentYear] = useState<string>('นศภ. ปี 5');
  const [overallRating, setOverallRating] = useState<number>(5);
  const [mentorship, setMentorship] = useState<number>(5);
  const [flexibility, setFlexibility] = useState<number>(5);
  const [learning, setLearning] = useState<number>(5);
  const [approachability, setApproachability] = useState<number>(5);
  const [headline, setHeadline] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [pros, setPros] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !headline.trim()) {
      setError('กรุณากรอกหัวข้อรีวิวและรายละเอียดความคิดเห็น');
      return;
    }

    const newReview: Review = {
      id: `rev-user-${Date.now()}`,
      studentName: studentName.trim() || 'นิสิตเภสัชฯ ม.ศิลปากร',
      studentYear: studentYear || 'นิสิตเภสัชฯ',
      date: new Date().toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      rating: overallRating,
      aspects: {
        mentorship,
        flexibility,
        learning,
        approachability,
      },
      headline: headline.trim(),
      comment: comment.trim(),
      pros: pros.trim(),
      adviceForJuniors: advice.trim(),
      likes: 1,
      verifiedStudent: true,
    };

    onSubmitReview(selectedProfId, newReview);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-200">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif">เขียนรีวิวการสอน & สไตล์อาจารย์</h2>
              <p className="text-xs text-slate-300">แบ่งปันประสบการณ์จริงเพื่อเป็นประโยชน์แก่น้อง ๆ นิสิตรุ่นถัดไป</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">บันทึกรีวิวของคุณเรียบร้อยแล้ว!</h3>
            <p className="text-xs text-slate-500">ขอบคุณที่ร่วมแบ่งปันข้อมูลที่มีคุณค่าแก่นิสิตคณะเภสัชฯ ทุกคน</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
            {error && (
              <div className="p-3 bg-rose-50 text-rose-800 rounded-lg flex items-center gap-2 border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Choose Professor */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                เลือกอาจารย์ที่ต้องการรีวิว:
              </label>
              <select
                value={selectedProfId}
                onChange={(e) => setSelectedProfId(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              >
                {professors.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.departmentNameTh})
                  </option>
                ))}
              </select>
            </div>

            {/* Nickname & Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  ชื่อเล่น / นามแฝง (ไม่จำเป็น):
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="เช่น นศภ. สายแล็บ, รุ่น 53"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  ระดับชั้นปี / สาขา:
                </label>
                <select
                  value={studentYear}
                  onChange={(e) => setStudentYear(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-emerald-700 focus:outline-none"
                >
                  <option value="นศภ. ปี 5">นศภ. ปี 5</option>
                  <option value="นศภ. ปี 4">นศภ. ปี 4</option>
                  <option value="นศภ. ปี 6">นศภ. ปี 6</option>
                  <option value="บัณฑิตจบใหม่ (Alumni)">บัณฑิตจบใหม่ (Alumni)</option>
                  <option value="นิสิตระดับบัณฑิตศึกษา (ป.โท/ป.เอก)">นิสิต ป.โท / ป.เอก</option>
                </select>
              </div>
            </div>

            {/* Overall Rating */}
            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 block">คะแนนความพึงพอใจโดยรวม:</span>
                <span className="text-2xs text-slate-500">คลิกที่ดาวเพื่อให้คะแนน 1 - 5 ดาว</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setOverallRating(star)}
                    className="p-1 cursor-pointer"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= overallRating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Aspect Ratings */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <span className="font-bold text-slate-800 block">ประเมินด้านต่าง ๆ (1-5):</span>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">การให้คำปรึกษา & ชี้แนะ (Mentorship):</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setMentorship(s)}
                      className={`w-6 h-6 rounded text-xs font-bold cursor-pointer ${
                        s <= mentorship ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">ความยืดหยุ่น & เวลา (Flexibility):</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setFlexibility(s)}
                      className={`w-6 h-6 rounded text-xs font-bold cursor-pointer ${
                        s <= flexibility ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">ความรู้และประสบการณ์ (Learning):</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setLearning(s)}
                      className={`w-6 h-6 rounded text-xs font-bold cursor-pointer ${
                        s <= learning ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">ความเป็นกันเอง (Approachability):</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setApproachability(s)}
                      className={`w-6 h-6 rounded text-xs font-bold cursor-pointer ${
                        s <= approachability ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Headline */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                สรุปประโยคสั้น ๆ (Headline) * :
              </label>
              <input
                type="text"
                required
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="เช่น อาจารย์ใจดีมาก ให้คำปรึกษาละเอียด / ได้ความรู้เรื่อง In situ gel แน่นมาก"
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                ความคิดเห็นและประสบการณ์การเรียน/ทำแล็บ * :
              </label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="เล่าถึงสไตล์การให้คำปรึกษา บรรยากาศแล็บ การนัดหมาย หรือความช่วยเหลือที่ได้รับจากอาจารย์..."
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            {/* Pros & Advice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  จุดเด่นของโครงงาน/อาจารย์:
                </label>
                <input
                  type="text"
                  value={pros}
                  onChange={(e) => setPros(e.target.value)}
                  placeholder="เช่น ยืดหยุ่นเรื่องเวลา, มีงบสนับสนุน"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  คำแนะนำในการเตรียมตัวสำหรับรุ่นน้อง:
                </label>
                <input
                  type="text"
                  value={advice}
                  onChange={(e) => setAdvice(e.target.value)}
                  placeholder="เช่น ทบทวนเคมี, ฝึกใช้ Excel หรือสืบค้นเปเปอร์"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit buttons */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium cursor-pointer"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                ส่งรีวิว
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
