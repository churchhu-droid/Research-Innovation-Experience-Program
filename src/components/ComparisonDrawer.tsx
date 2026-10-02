import React from 'react';
import { X, Star, Check, AlertCircle, ArrowRight, Trash2, Mail } from 'lucide-react';
import { Professor } from '../types';

interface ComparisonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  professors: Professor[];
  onRemoveProfessor: (id: string) => void;
  onClearAll: () => void;
  onSelectProfessor: (prof: Professor) => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  isOpen,
  onClose,
  professors,
  onRemoveProfessor,
  onClearAll,
  onSelectProfessor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-emerald-900/30">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif">
              เปรียบเทียบข้อมูลอาจารย์ที่ปรึกษา ({professors.length} ท่าน)
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              เปรียบเทียบรายละเอียดโครงงานวิจัย รูปแบบการเข้าคณะ และเกณฑ์การรับนิสิตแบบเคียงข้างกัน
            </p>
          </div>

          <div className="flex items-center gap-3">
            {professors.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-300 hover:text-rose-100 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>ล้างทั้งหมด</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        {professors.length === 0 ? (
          <div className="p-12 text-center text-slate-500 space-y-3">
            <p className="text-base font-medium">ยังไม่มีอาจารย์ที่เลือกเปรียบเทียบ</p>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              คุณสามารถติ๊กเลือกช่อง "เปรียบเทียบ" ที่การ์ดอาจารย์แต่ละท่าน (สูงสุด 3-4 ท่าน) เพื่อนำมาดูความต่างแบบเคียงข้างกันได้ที่นี่
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              กลับไปเลือกอาจารย์
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto flex-1 p-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="p-3 w-40 font-semibold text-slate-500 uppercase bg-slate-50">หัวข้อเปรียบเทียบ</th>
                  {professors.map((prof) => (
                    <th key={prof.id} className="p-4 min-w-[260px] max-w-[320px] align-top bg-emerald-50/40 border-l border-slate-200">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-emerald-800 text-amber-200 font-serif font-bold text-sm flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                            {prof.imageUrl ? (
                              <img
                                src={prof.imageUrl}
                                alt={prof.name}
                                className="w-full h-full object-cover object-top"
                              />
                            ) : (
                              prof.avatarInitial
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm leading-tight">{prof.name}</div>
                            <div className="text-2xs text-slate-500 mt-0.5">{prof.departmentNameTh}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveProfessor(prof.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                          title="ลบออกจากการเปรียบเทียบ"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                          <span>{prof.ratingSummary.average.toFixed(1)}</span>
                        </div>
                        <span className="text-slate-400" aria-hidden="true">·</span>
                        <span className="text-slate-500">{prof.ratingSummary.reviewCount} รีวิว</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Project Title */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">หัวข้อโครงงานวิจัย</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 font-semibold text-slate-900 border-l border-slate-200 align-top">
                      {p.projectTitle}
                    </td>
                  ))}
                </tr>

                {/* Project Type */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">ประเภทโครงงาน</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 text-emerald-900 font-medium border-l border-slate-200 align-top">
                      {p.projectType}
                    </td>
                  ))}
                </tr>

                {/* Capacity */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">จำนวนรับนิสิต</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 font-bold text-slate-900 border-l border-slate-200 align-top">
                      {p.capacityText}
                    </td>
                  ))}
                </tr>

                {/* Participation Format */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">รูปแบบการเข้าร่วม</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 align-top">
                      <span className="font-semibold text-slate-800">{p.participationFormat}</span>
                      <p className="text-2xs text-slate-500 mt-1">{p.attendanceFrequency}</p>
                    </td>
                  ))}
                </tr>

                {/* Expected Output */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">ผลผลิตที่คาดหวัง</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 font-medium text-slate-800 border-l border-slate-200 align-top">
                      {p.expectedOutput}
                    </td>
                  ))}
                </tr>

                {/* Prerequisites */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">พื้นฐานเฉพาะที่ต้องการ</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 text-slate-700 border-l border-slate-200 align-top">
                      {p.prerequisites}
                    </td>
                  ))}
                </tr>

                {/* Cost */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">ค่าใช้จ่ายเพิ่มเติม</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 align-top">
                      {p.hasExtraCost ? (
                        <span className="text-amber-800 font-semibold">{p.extraCostDetails}</span>
                      ) : (
                        <span className="text-emerald-700 font-semibold">ไม่มี (มีงบสนับสนุน)</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Extension Potential */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">โอกาสต่อยอด</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 text-slate-700 border-l border-slate-200 align-top">
                      {p.extensionPotential}
                    </td>
                  ))}
                </tr>

                {/* Actions */}
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50">การดำเนินการ</td>
                  {professors.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 align-top">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProfessor(p);
                        }}
                        className="w-full py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>ดูข้อมูลเต็ม & รีวิว</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
