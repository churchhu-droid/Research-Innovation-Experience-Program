import React from 'react';
import { X, Bookmark, ArrowRight, Trash2, Mail, ExternalLink, Star } from 'lucide-react';
import { Professor } from '../types';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedProfessors: Professor[];
  onRemoveBookmark: (id: string) => void;
  onSelectProfessor: (prof: Professor) => void;
  onOpenComparison: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  bookmarkedProfessors,
  onRemoveBookmark,
  onSelectProfessor,
  onOpenComparison,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-200">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-amber-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif">
                รายการอาจารย์ที่บันทึกไว้ ({bookmarkedProfessors.length} ท่าน)
              </h2>
              <p className="text-xs text-slate-300">
                บันทึกไว้สำหรับพิจารณา หรือปรึกษากับเพื่อนร่วมรุ่น
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {bookmarkedProfessors.length === 0 ? (
            <div className="p-10 text-center text-slate-500 space-y-3">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-medium">ยังไม่มีอาจารย์ที่บันทึกไว้</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                กดที่ไอคอนบันทึก <Bookmark className="w-3.5 h-3.5 inline text-slate-400" /> บนการ์ดอาจารย์เพื่อเพิ่มเข้ามาในรายการโปรดของคุณ
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                ค้นหาอาจารย์
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {bookmarkedProfessors.map((prof) => (
                <div
                  key={prof.id}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-800 text-amber-200 font-serif font-bold text-base flex items-center justify-center shrink-0">
                      {prof.avatarInitial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{prof.name}</span>
                        <div className="flex items-center text-amber-500 text-xs font-bold">
                          <Star className="w-3 h-3 fill-amber-400 mr-0.5" />
                          <span>{prof.ratingSummary.average}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500">{prof.departmentNameTh}</p>
                      <p className="text-xs text-slate-700 font-medium line-clamp-1 mt-1">
                        {prof.projectTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <button
                      onClick={() => onRemoveBookmark(prof.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-slate-50 rounded-lg cursor-pointer"
                      title="ลบออกจากรายการบันทึก"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProfessor(prof);
                      }}
                      className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>ดูข้อมูล</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {bookmarkedProfessors.length > 1 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              บันทึกไว้ {bookmarkedProfessors.length} ท่าน
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenComparison();
              }}
              className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg font-semibold cursor-pointer"
            >
              เปิดหน้าเปรียบเทียบอาจารย์เหล่านี้
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
