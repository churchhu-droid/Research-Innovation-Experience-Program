import React from 'react';
import { Filter, RotateCcw, Building2, FlaskConical, Laptop, Layers } from 'lucide-react';
import { DepartmentCategory, ParticipationFormat, ProjectType } from '../types';
import { DEPARTMENT_OPTIONS, PARTICIPATION_OPTIONS, PROJECT_TYPE_OPTIONS } from '../data/professorsData';

interface FilterBarProps {
  selectedDept: DepartmentCategory;
  onSelectDept: (dept: DepartmentCategory) => void;
  selectedType: ProjectType;
  onSelectType: (type: ProjectType) => void;
  selectedFormat: ParticipationFormat;
  onSelectFormat: (format: ParticipationFormat) => void;
  costFilter: 'all' | 'free' | 'has_cost';
  onCostFilterChange: (cost: 'all' | 'free' | 'has_cost') => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  filteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedDept,
  onSelectDept,
  selectedType,
  onSelectType,
  selectedFormat,
  onSelectFormat,
  costFilter,
  onCostFilterChange,
  onResetFilters,
  hasActiveFilters,
  filteredCount,
}) => {
  return (
    <div className="bg-white border-y border-slate-200 py-4 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Row 1: Primary Department Segmented Control */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-emerald-800" />
            <span>สาขาวิชา / ภาควิชา:</span>
          </div>

          <div className="inline-flex p-1 bg-slate-100 rounded-lg max-w-full overflow-x-auto">
            {DEPARTMENT_OPTIONS.map((dept) => {
              const isActive = selectedDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => onSelectDept(dept.id as DepartmentCategory)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {dept.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: Secondary Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 text-xs">
          {/* Project Type */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium whitespace-nowrap">ประเภทโครงงาน:</span>
            <select
              value={selectedType}
              onChange={(e) => onSelectType(e.target.value as ProjectType)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-700 text-xs focus:ring-1 focus:ring-emerald-700 focus:outline-none"
            >
              <option value="all">ทุกประเภทงานวิจัย</option>
              <option value="Product / Innovation Development">Product / Innovation</option>
              <option value="Laboratory-based Research">Laboratory-based (แล็บเปียก)</option>
              <option value="Literature-based Research">Literature-based (Meta-analysis)</option>
              <option value="Digital Health / Data Analytics">Digital Health / AI</option>
            </select>
          </div>

          {/* Participation Format */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium whitespace-nowrap">รูปแบบการเข้าคณะ:</span>
            <select
              value={selectedFormat}
              onChange={(e) => onSelectFormat(e.target.value as ParticipationFormat)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-700 text-xs focus:ring-1 focus:ring-emerald-700 focus:outline-none"
            >
              {PARTICIPATION_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Cost Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium whitespace-nowrap">ค่าใช้จ่าย:</span>
            <select
              value={costFilter}
              onChange={(e) => onCostFilterChange(e.target.value as 'all' | 'free' | 'has_cost')}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-700 text-xs focus:ring-1 focus:ring-emerald-700 focus:outline-none"
            >
              <option value="all">ทั้งหมด</option>
              <option value="free">ฟรี / มีงบสนับสนุน (5 ท่าน)</option>
              <option value="has_cost">มีค่าสารเคมี/อุปกรณ์ (2 ท่าน)</option>
            </select>
          </div>

          {/* Results count & reset */}
          <div className="ml-auto flex items-center gap-3">
            <span className="text-slate-500">
              พบอาจารย์ <strong className="text-emerald-900 font-semibold">{filteredCount}</strong> ท่าน
            </span>
            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>รีเซ็ตตัวกรอง</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
