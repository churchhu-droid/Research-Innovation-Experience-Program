export type DepartmentCategory = 'all' | 'industrial' | 'social_admin';

export type ParticipationFormat = 'all' | 'Onsite' | 'Flexible' | 'Hybrid';

export type ProjectType =
  | 'all'
  | 'Product / Innovation Development'
  | 'Laboratory-based Research'
  | 'Literature-based Research'
  | 'Digital Health / Data Analytics';

export interface Professor {
  id: string;
  name: string;
  nameEn: string;
  academicTitle: string;
  department: string;
  departmentCategory: 'industrial' | 'social_admin';
  departmentNameTh: string;
  email: string;
  capacityText: string;
  capacityNumber: number;
  projectTitle: string;
  researchArea: string;
  projectType: string;
  learningOutcomes: string[];
  expectedOutput: string;
  participationFormat: 'Onsite' | 'Flexible' | 'Hybrid';
  attendanceFrequency: string;
  targetInterests: string;
  prerequisites: string;
  constraints: string;
  extensionPotential: string;
  hasExtraCost: boolean;
  extraCostDetails: string;
  timestamp: string;
  officialUrl?: string;
  education: string[];
  expertise: string[];
  notableResearch: string[];
  summaryBio: string;
  advisingStyle: {
    mentorship: string;
    workSchedule: string;
    idealStudent: string;
  };
  avatarInitial: string;
  imageUrl?: string;
  badgeTag: string;
}

export interface FilterState {
  searchQuery: string;
  department: DepartmentCategory;
  projectType: ProjectType;
  participationFormat: ParticipationFormat;
  extraCostOnly: 'all' | 'free' | 'has_cost';
  hasPublicationPotential: boolean;
  minCapacity: number;
}
