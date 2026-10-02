import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, Star } from 'lucide-react';
import { Professor } from '../types';

interface AdvisorQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  professors: Professor[];
  onSelectProfessor: (prof: Professor) => void;
}

export const AdvisorQuizModal: React.FC<AdvisorQuizModalProps> = ({
  isOpen,
  onClose,
  professors,
  onSelectProfessor,
}) => {
  const [step, setStep] = useState<number>(1);
  const [interest, setInterest] = useState<string>('');
  const [format, setFormat] = useState<string>('');
  const [groupSize, setGroupSize] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setInterest('');
    setFormat('');
    setGroupSize('');
  };

  // Calculate matches
  const calculateMatches = () => {
    return professors
      .map((prof) => {
        let score = 50; // base score

        // Interest scoring
        if (interest === 'natural_formulation') {
          if (prof.id === 'chutima' || prof.id === 'samawadee' || prof.id === 'sontaya') score += 30;
          if (prof.id === 'korranat' || prof.id === 'thawatchai') score += 20;
        } else if (interest === 'literature_review') {
          if (prof.id === 'waranee') score += 40;
          if (prof.id === 'sirikanlaya') score += 15;
        } else if (interest === 'ai_informatics') {
          if (prof.id === 'sirikanlaya') score += 40;
          if (prof.id === 'waranee') score += 20;
        } else if (interest === 'delivery_systems') {
          if (prof.id === 'thawatchai' || prof.id === 'korranat' || prof.id === 'sontaya') score += 35;
        }

        // Format scoring
        if (format === 'onsite') {
          if (prof.participationFormat === 'Onsite') score += 20;
          if (prof.participationFormat === 'Hybrid') score += 10;
        } else if (format === 'hybrid') {
          if (prof.participationFormat === 'Hybrid') score += 25;
          if (prof.participationFormat === 'Flexible') score += 15;
        } else if (format === 'flexible') {
          if (prof.participationFormat === 'Flexible') score += 25;
          if (prof.id === 'chutima' || prof.id === 'sontaya') score += 15; // flexible attendance schedule
        }

        // Group size scoring
        if (groupSize === 'solo' && (prof.capacityNumber === 1 || prof.id === 'chutima' || prof.id === 'samawadee')) {
          score += 20;
        } else if (groupSize === 'pair' && (prof.capacityNumber === 2 || prof.id === 'waranee' || prof.id === 'sontaya')) {
          score += 20;
        } else if (groupSize === 'team' && (prof.capacityNumber >= 4 || prof.id === 'korranat' || prof.id === 'sirikanlaya' || prof.id === 'thawatchai')) {
          score += 25;
        }

        const matchPercent = Math.min(98, Math.max(65, score));
        return { professor: prof, matchPercent };
      })
      .sort((a, b) => b.matchPercent - a.matchPercent);
  };

  const matches = calculateMatches();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-200">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif">แบบประเมินแนะนำอาจารย์ที่ปรึกษา</h2>
              <p className="text-xs text-slate-300">ค้นหาโปรเจกต์ที่ตรงกับความชอบ สไตล์การเรียน และตารางเวลาของคุณ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Steps */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                คำถามที่ 1 จาก 3: ความสนใจด้านงานวิจัย
              </div>
              <h3 className="text-base font-bold text-slate-900">
                คุณมีความสนใจหรืออยากเรียนรู้งานวิจัยด้านใดมากที่สุด?
              </h3>

              <div className="space-y-2.5 pt-2">
                {[
                  {
                    id: 'natural_formulation',
                    title: 'สารสกัดสมุนไพร & นวัตกรรมผลิตภัณฑ์ธรรมชาติ',
                    desc: 'การสกัดสารจากพืช, การทดสอบฤทธิ์ต้านอนุมูลอิสระ, การพัฒนาสูตรตำรับสุขภาพ',
                  },
                  {
                    id: 'delivery_systems',
                    title: 'ระบบนำส่งยาขั้นสูง & พอลิเมอร์ (Hydrogel / Shellac / In situ)',
                    desc: 'แผ่นแปะผิวหนัง, เจลรักษาแผลในช่องปาก, สารเคลือบเม็ดยาจากธรรมชาติ',
                  },
                  {
                    id: 'literature_review',
                    title: 'Systematic Review & Telemedicine (การแพทย์ทางไกล)',
                    desc: 'การทบทวนวรรณกรรมระดับโลก, Meta-analysis, การวิเคราะห์หลักฐานเชิงประจักษ์',
                  },
                  {
                    id: 'ai_informatics',
                    title: 'Digital Health, AI & การบริหารคลังยา (ABC-VEN)',
                    desc: 'ประยุกต์ใช้ Machine Learning ในการตัดสินใจคลังยาโรงพยาบาลและเทคโนโลยีสุขภาพ',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setInterest(opt.id);
                      setStep(2);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      interest === opt.id
                        ? 'border-emerald-700 bg-emerald-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                คำถามที่ 2 จาก 3: รูปแบบและการจัดสรรเวลา
              </div>
              <h3 className="text-base font-bold text-slate-900">
                รูปแบบการเข้าคณะหรือทำแล็บแบบใดที่สะดวกกับคุณมากที่สุด?
              </h3>

              <div className="space-y-2.5 pt-2">
                {[
                  {
                    id: 'onsite',
                    title: 'Onsite เข้าแล็บจริงสม่ำเสมอ (3-4 วัน/สัปดาห์)',
                    desc: 'เน้นการลงมือปฏิบัติการในแล็บเคมี เทคโนโลยีเภสัชกรรม สัมผัสเครื่องมือจริง',
                  },
                  {
                    id: 'hybrid',
                    title: 'Hybrid ผสมผสาน (1-2 วัน/สัปดาห์)',
                    desc: 'เข้าแล็บเพื่อทดลองเป็นช่วง ๆ และนำข้อมูลมาวิเคราะห์ต่อที่บ้าน/หอพัก',
                  },
                  {
                    id: 'flexible',
                    title: 'Flexible ยืดหยุ่นสูง หรือทำงานแบบ Remote ได้',
                    desc: 'ประชุมติดตามงานสัปดาห์ละ 1 ครั้ง หรือตามสะดวก เน้นงานคอมพิวเตอร์/วิเคราะห์ข้อมูล',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setFormat(opt.id);
                      setStep(3);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      format === opt.id
                        ? 'border-emerald-700 bg-emerald-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-800 cursor-pointer pt-2"
              >
                ← ย้อนกลับไปข้อก่อนหน้า
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                คำถามที่ 3 จาก 3: ลักษณะการทำงานร่วมกับผู้อื่น
              </div>
              <h3 className="text-base font-bold text-slate-900">
                คุณต้องการทำโปรเจกต์ในรูปแบบเดี่ยวหรือแบบเป็นกลุ่ม?
              </h3>

              <div className="space-y-2.5 pt-2">
                {[
                  {
                    id: 'solo',
                    title: 'ชอบทำงานเดี่ยว (รับ 1 คน)',
                    desc: 'โฟกัสกับงานวิจัยของตนเองอย่างเต็มที่ รับผิดชอบแล็บเดี่ยว ดูแลใกล้ชิด 1 ต่อ 1',
                  },
                  {
                    id: 'pair',
                    title: 'ชอบทำงานคู่ (รับ 1-2 คน)',
                    desc: 'ช่วยกันคิดกับคู่หู มีเพื่อนแชร์งานและร่วมแก้ปัญหาแล็บ',
                  },
                  {
                    id: 'team',
                    title: 'ชอบทำงานเป็นทีมกลุ่มใหญ่ (รับ 4-10 คน)',
                    desc: 'มีเพื่อนในกลุ่มหลายคน บรรยากาศสนุกสนาน ไม่เหงา แบ่งหน้าที่กันได้ดี',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setGroupSize(opt.id);
                      setStep(4);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      groupSize === opt.id
                        ? 'border-emerald-700 bg-emerald-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="text-xs text-slate-500 hover:text-slate-800 cursor-pointer pt-2"
              >
                ← ย้อนกลับไปข้อก่อนหน้า
              </button>
            </div>
          )}

          {/* STEP 4: Results */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center pb-2">
                <div className="inline-flex p-2 bg-emerald-100 text-emerald-800 rounded-full mb-2">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  อาจารย์ที่ปรึกษาที่เหมาะสมกับคุณมากที่สุด
                </h3>
                <p className="text-xs text-slate-500">
                  ประมวลผลจากความสนใจด้านวิจัย รูปแบบเวลา และขนาดของกลุ่มผู้เรียน
                </p>
              </div>

              <div className="space-y-3">
                {matches.slice(0, 3).map(({ professor, matchPercent }, idx) => (
                  <div
                    key={professor.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-600 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-emerald-800 text-amber-200 font-serif font-bold text-lg flex items-center justify-center shrink-0 border border-slate-200">
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
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900">{professor.name}</span>
                          <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                            ตรงใจ {matchPercent}%
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{professor.departmentNameTh}</p>
                        <p className="text-xs text-slate-700 font-semibold mt-1 line-clamp-1">
                          {professor.projectTitle}
                        </p>
                        <div className="flex items-center gap-2 text-2xs text-slate-500 mt-1">
                          <span>{professor.participationFormat}</span>
                          <span aria-hidden="true">·</span>
                          <span>รับ {professor.capacityText}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-amber-600 font-medium">★ {professor.ratingSummary.average}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectProfessor(professor);
                      }}
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer shrink-0 whitespace-nowrap"
                    >
                      <span>ดูรายละเอียด</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 cursor-pointer font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>ทำแบบประเมินใหม่อีกครั้ง</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  ดูอาจารย์ทั้งหมด 7 ท่าน
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
