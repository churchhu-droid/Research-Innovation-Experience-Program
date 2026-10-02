import React from 'react';
import { Building2, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-emerald-950/60 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Col 1: About Portal */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 font-serif font-bold text-sm flex items-center justify-center">
                ภ
              </span>
              <span>SU Pharmacy Advisor & Research Hub</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              ระบบแนะนำอาจารย์ที่ปรึกษาและโครงงานวิจัย คณะเภสัชศาสตร์ มหาวิทยาลัยศิลปากร
              จัดทำขึ้นเพื่อให้นิสิตในคณะสามารถค้นหาหัวข้อวิจัยที่ตรงกับความสนใจ ตรวจสอบข้อกำหนด
              และดูรีวิวสไตล์การดูแลและบรรยากาศการเรียนจากรุ่นพี่ได้อย่างสะดวก รวดเร็ว และครบถ้วน
            </p>
            <div className="text-2xs text-slate-500 pt-1">
              ข้อมูลอ้างอิงจากแบบฟอร์มเปิดรับหัวข้อวิจัย (Columns B1-R1) และเว็บไซต์ทางการคณะเภสัชศาสตร์ ม.ศิลปากร
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-2xs">
              ภาควิชา / สาขาวิชา
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.pharmacy.su.ac.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>สาขาวิชาเภสัชกรรมอุตสาหการ</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pharmacy.su.ac.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>สาขาวิชาเภสัชศาสตร์สังคมและการบริหาร</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pharmacy.su.ac.th/main/personnel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>ทําเนียบอาจารย์และบุคลากร</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Faculty */}
          <div className="space-y-3">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-2xs">
              ติดต่อคณะเภสัชศาสตร์
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>มหาวิทยาลัยศิลปากร วิทยาเขตพระราชวังสนามจันทร์ เลขที่ 6 ถนนราชมรรคาใน อ.เมือง จ.นครปฐม 73000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>034-255-800 ต่อหน่วยงานวิจัย</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>pharmacy@su.ac.th</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-2xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Faculty of Pharmacy, Silpakorn University. สงวนลิขสิทธิ์
          </div>
          <div className="flex items-center gap-4">
            <span>สำหรับนิสิตและบุคลากรคณะเภสัชศาสตร์</span>
            <span aria-hidden="true">·</span>
            <a href="https://www.pharmacy.su.ac.th" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              pharmacy.su.ac.th
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
