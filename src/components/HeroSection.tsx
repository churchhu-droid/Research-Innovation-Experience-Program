import React from 'react';
import { Search, Sparkles, BookOpen, Users, Award, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/images/hero_pharmacy_research_1790908936189.jpg';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenQuiz: () => void;
  totalProfessors: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  onOpenQuiz,
  totalProfessors,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="คณะเภสัชศาสตร์ มหาวิทยาลัยศิลปากร ห้องปฏิบัติการวิจัย"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-slate-950/85 to-emerald-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Natural human editorial kicker */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            <span>Faculty of Pharmacy · Silpakorn University</span>
            <span aria-hidden="true">·</span>
            <span>ปีการศึกษา 2568 - 2569</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
            ระบบแนะนำอาจารย์ที่ปรึกษา & โครงงานวิจัยสำหรับนักเรียน
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            ค้นหาข้อมูลหัวข้อวิจัย รูปแบบการเข้าคณะ เกณฑ์การรับสมัคร และความเชี่ยวชาญเฉพาะด้าน
            เพื่อช่วยให้นักเรียนตัดสินใจเลือกอาจารย์ที่ปรึกษาและโครงงานที่ตรงกับความสนใจมากที่สุด
          </p>

          {/* Search bar inside Hero */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="ค้นหาชื่ออาจารย์, สาขาวิชา, หัวข้อวิจัย (เช่น ไฮโดรเจล, เชลแล็ก, AI, Meta-analysis)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-300 hover:text-white px-2 py-1 bg-white/10 rounded cursor-pointer"
                >
                  ล้าง
                </button>
              )}
            </div>

            <button
              onClick={onOpenQuiz}
              className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>ทำแบบประเมินแนะนำอาจารย์</span>
            </button>
          </div>

          {/* Quick Quantitative Facts */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-slate-300">
            <div>
              <div className="text-2xl font-bold text-white font-serif tabular-nums">{totalProfessors} ท่าน</div>
              <div className="text-xs text-slate-400 mt-0.5">อาจารย์ผู้เปิดรับโครงงาน</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-serif tabular-nums">2 สาขาวิชา</div>
              <div className="text-xs text-slate-400 mt-0.5">อุตสาหการ & บริหาร</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-serif tabular-nums">24–25 คน</div>
              <div className="text-xs text-slate-400 mt-0.5">จำนวนรับนักเรียนรวมทั้งหมด</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
