import { Professor } from '../types';
import chutimaImg from '../assets/professors/chutima.png';
import waraneeImg from '../assets/professors/waranee.png';
import samawadeeImg from '../assets/professors/samawadee.png';
import korranatImg from '../assets/professors/korranat.png';
import sirikanlayaImg from '../assets/professors/sirikanlaya.png';
import thawatchaiImg from '../assets/professors/thawatchai.png';
import sontayaImg from '../assets/professors/sontaya.png';

export const PROFESSORS_DATA: Professor[] = [
  {
    id: 'chutima',
    name: 'รศ. ดร. ภญ.ชุติมา ลิ้มมัทวาภิรัติ์',
    nameEn: 'Assoc. Prof. Dr. Chutima Limmatvapirat',
    academicTitle: 'รองศาสตราจารย์ ดร.',
    department: 'เภสัชกรรมอุตสาหการ',
    departmentCategory: 'industrial',
    departmentNameTh: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    email: 'limmatvapirat_c@su.ac.th',
    capacityText: '1 คน',
    capacityNumber: 1,
    projectTitle: 'ผลิตภัณฑ์ธรรมชาติ',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Product / Innovation Development',
    learningOutcomes: [
      'Research Question',
      'Literature Search',
      'Experimental Design',
      'Data Analysis',
      'Product Development'
    ],
    expectedOutput: 'Mini Research Report',
    participationFormat: 'Onsite',
    attendanceFrequency: 'ตามความสะดวกของนักเรียน',
    targetInterests: 'Pharmaceutical Technology',
    prerequisites: 'เคมี',
    constraints: 'ชอบคิดค้นสิ่งใหม่ ๆ ชอบทำปฏิบัติการ',
    extensionPotential: 'Further Research',
    hasExtraCost: false,
    extraCostDetails: 'ไม่มีค่าใช้จ่ายเพิ่มเติม',
    timestamp: '24/9/2026, 19:50:01',
    officialUrl: 'https://www.pharmacy.su.ac.th/main/personnel/5428/',
    education: [
      'ปร.ด. (เทคโนโลยีเภสัชกรรม) มหาวิทยาลัยศิลปากร',
      'ภ.ม. (เทคโนโลยีเภสัชกรรม) จุฬาลงกรณ์มหาวิทยาลัย',
      'ภ.บ. (เภสัชศาสตร์) จุฬาลงกรณ์มหาวิทยาลัย'
    ],
    expertise: [
      'เทคโนโลยีเภสัชกรรม (Pharmaceutical Technology)',
      'สารสกัดและผลิตภัณฑ์ธรรมชาติ (Natural Products Formulation)',
      'พอลิเมอร์ชีวภาพและการนำส่งสารสำคัญ (Biopolymer & Delivery)',
      'การพัฒนาและควบคุมคุณภาพผลิตภัณฑ์เครื่องสำอางและสมุนไพร'
    ],
    notableResearch: [
      'การพัฒนาสูตรตำรับและผลิตภัณฑ์นวัตกรรมจากสารสกัดพืชสมุนไพรไทย',
      'การประยุกต์ใช้พอลิเมอร์ธรรมชาติในระบบนำส่งสารสำคัญทางผิวหนังและเครื่องสำอาง',
      'การประเมินความคงตัวและฤทธิ์ต้านอนุมูลอิสระของสารสกัดธรรมชาติในรูปแบบตำรับต่าง ๆ'
    ],
    summaryBio: 'ผู้เชี่ยวชาญด้านเทคโนโลยีเภสัชกรรมและการพัฒนาผลิตภัณฑ์ธรรมชาติ มุ่งเน้นการเปลี่ยนสารสกัดสมุนไพรไทยสู่ผลิตภัณฑ์ยาและเวชสำอางที่มีมาตรฐานสากล',
    advisingStyle: {
      mentorship: 'อาจารย์ให้คำปรึกษาทีละขั้นตอนตั้งแต่การตั้งคำถามวิจัยจนถึงสรุปผลแล็บ',
      workSchedule: 'ยืดหยุ่นสูง เข้าแล็บตามความสะดวกของนักเรียนและวางแผนร่วมกัน',
      idealStudent: 'คนที่ชอบงานทดลอง ชอบคิดค้นสิ่งใหม่ ๆ ชอบทำปฏิบัติการ และมีพื้นฐานเคมี'
    },
    avatarInitial: 'ช',
    imageUrl: chutimaImg,
    badgeTag: 'ผลิตภัณฑ์ธรรมชาติ & นวัตกรรม'
  },
  {
    id: 'waranee',
    name: 'ผศ.ดร.วารณี บุญช่วยเหลือ',
    nameEn: 'Asst. Prof. Dr. Waranee Bunchuailua',
    academicTitle: 'ผู้ช่วยศาสตราจารย์ ดร.',
    department: 'เภสัชศาสตร์สังคมและการบริหาร',
    departmentCategory: 'social_admin',
    departmentNameTh: 'สาขาวิชาเภสัชศาสตร์สังคมและการบริหาร',
    email: 'Bunchuailua_w@su.ac.th',
    capacityText: '1-2 คน',
    capacityNumber: 2,
    projectTitle: 'Systematic review and meta-analysis of effectiveness of telemedicines for secondary prevention in patients with acute coronary syndrome',
    researchArea: 'Social and Administrative Pharmacy',
    projectType: 'Literature-based Research',
    learningOutcomes: [
      'Research Question',
      'Literature Search',
      'Data Analysis'
    ],
    expectedOutput: 'Mini Research Report',
    participationFormat: 'Flexible',
    attendanceFrequency: 'ขึ้นอยู่กับความสะดวกของทั้งอาจารย์และนักศึกษา',
    targetInterests: 'Social and Administrative Pharmacy',
    prerequisites: 'สามารถใช้ภาษาอังกฤษทั้งการอ่านและการเขียนได้ดี',
    constraints: '-',
    extensionPotential: 'Research Publication',
    hasExtraCost: false,
    extraCostDetails: 'ไม่มีค่าใช้จ่ายเพิ่มเติม',
    timestamp: '27/9/2026, 22:44:10',
    officialUrl: 'https://www.pharmacy.su.ac.th/main/personnel/5517/',
    education: [
      'ปร.ด. (เภสัชศาสตร์สังคมและการบริหาร) จุฬาลงกรณ์มหาวิทยาลัย / Ph.D. in Social and Administrative Pharmacy',
      'ภ.ม. (เภสัชศาสตร์สังคมและการบริหาร) จุฬาลงกรณ์มหาวิทยาลัย',
      'ภ.บ. (เภสัชศาสตร์) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'การทบทวนวรรณกรรมอย่างเป็นระบบและการวิเคราะห์อภิมาน (Systematic Review & Meta-analysis)',
      'เภสัชระบาดวิทยาและการประเมินความปลอดภัยของยา (Pharmacoepidemiology)',
      'การแพทย์ทางไกลและการบริบาลสุขภาพดิจิทัล (Telemedicine & Digital Health Interventions)',
      'การประเมินผลลัพธ์การบริบาลทางเภสัชกรรมและเศรษฐศาสตร์สาธารณสุข (Health Outcomes Research)'
    ],
    notableResearch: [
      'Systematic review and meta-analysis of effectiveness of telemedicines for secondary prevention in patients with acute coronary syndrome',
      'Outcomes of Pharmacist Intervention in Schizophrenic Patients: A Systematic Review and Meta-Analysis of Randomized Controlled Trials',
      'การทบทวนวรรณกรรมอย่างเป็นระบบและการวิเคราะห์อภิมานประสิทธิผลของการรักษาด้วยออกซิเจนความกดบรรยากาศสูง (HBOT) ร่วมกับ HITAP',
      'ภาวะทุพโภชนาการและผลกระทบในผู้ป่วยที่รักษาในโรงพยาบาล: การทบทวนวรรณกรรมอย่างเป็นระบบ'
    ],
    summaryBio: 'ผู้เชี่ยวชาญด้านเภสัชศาสตร์สังคมและการวิจัยเชิงระบบ นำเทคนิค Systematic Review & Meta-analysis มาตอบคำถามการแพทย์ทางไกลและระบบสุขภาพยุคใหม่',
    advisingStyle: {
      mentorship: 'สอนกระบวนการสืบค้นวรรณกรรมและวิเคราะห์ข้อมูลอย่างเป็นระบบ',
      workSchedule: 'ยืดหยุ่นสูง ขึ้นอยู่กับความสะดวกของทั้งอาจารย์และนักเรียน',
      idealStudent: 'นักเรียนที่มีทักษะภาษาอังกฤษที่ดีทั้งการอ่านและการเขียน'
    },
    avatarInitial: 'ว',
    imageUrl: waraneeImg,
    badgeTag: 'Systematic Review & Telemedicine'
  },
  {
    id: 'samawadee',
    name: 'รศ. ดร. ภญ.สมาวดี เปลี่ยนวงษ์',
    nameEn: 'Assoc. Prof. Dr. Samawadee Plianwong',
    academicTitle: 'รองศาสตราจารย์ ดร.',
    department: 'สาขาเภสัชอุตสาหการ',
    departmentCategory: 'industrial',
    departmentNameTh: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    email: 'plianwong_s@su.ac.th',
    capacityText: '1 คน',
    capacityNumber: 1,
    projectTitle: 'การสกัดสารจากพืช และศึกษาองค์ประกอบของสารสกัด',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Laboratory-based Research',
    learningOutcomes: [
      'Experimental design',
      'Data analysis',
      'Literature search'
    ],
    expectedOutput: 'Mini Research Report',
    participationFormat: 'Onsite',
    attendanceFrequency: 'อย่างน้อย 3 วัน/สัปดาห์ (อาจเป็นช่วงเย็นหรือเสาร์-อาทิตย์ได้)',
    targetInterests: 'Pharmaceutical Technology',
    prerequisites: 'ควรมีพื้นฐานด้านเคมี และการใช้เครื่องมือวิทยาศาสตร์เบื้องต้น',
    constraints: 'สามารถเข้ามาทำแลบได้ มีความรับผิดชอบ',
    extensionPotential: 'Further Research',
    hasExtraCost: true,
    extraCostDetails: 'ค่าสารเคมีและอุปกรณ์ประมาณ 10,000 - 20,000 บาท',
    timestamp: '29/9/2026, 10:58:09',
    officialUrl: 'https://www.pharmacy.su.ac.th/main/personnel/7867/',
    education: [
      'ปร.ด. (เทคโนโลยีเภสัชกรรม) มหาวิทยาลัยศิลปากร',
      'ภ.ม. (เทคโนโลยีเภสัชกรรม) จุฬาลงกรณ์มหาวิทยาลัย',
      'ภ.บ. (เภสัชศาสตร์) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'การสกัดและวิเคราะห์สารออกฤทธิ์จากสมุนไพร (Extraction & Isolation)',
      'โครมาโทกราฟีและการวิเคราะห์สารไฟโตเคมิคอล (HPLC / TLC Profiling)',
      'การประเมินฤทธิ์ทางชีวภาพและสารต้านอนุมูลอิสระ (Biological Activity Assays)',
      'เทคโนโลยีเภสัชกรรมและการควบคุมคุณภาพสารสกัด'
    ],
    notableResearch: [
      'การสกัดสารสำคัญจากพืชพื้นบ้านไทยด้วยเทคนิคที่เป็นมิตรต่อสิ่งแวดล้อม',
      'การศึกษาองค์ประกอบทางเคมีและฤทธิ์ต้านจุลชีพของน้ำมันหอมระเหยและสารสกัดพืชสมุนไพร',
      'การพัฒนาและตรวจสอบวิธีวิเคราะห์สารออกฤทธิ์ทางชีวภาพด้วย HPLC'
    ],
    summaryBio: 'ผู้เชี่ยวชาญด้านการสกัดพืชสมุนไพรและการวิเคราะห์องค์ประกอบสารไฟโตเคมิคอล อุปกรณ์แล็บครบครัน เน้นการลงมือปฏิบัติจริงอย่างมีมาตรฐาน',
    advisingStyle: {
      mentorship: 'ดูแลแนะนำการใช้เครื่องมือวิทยาศาสตร์และการสกัดสารเคมีอย่างถูกต้อง',
      workSchedule: 'อย่างน้อย 3 วัน/สัปดาห์ (สามารถเป็นช่วงเย็นหรือวันเสาร์-อาทิตย์ได้)',
      idealStudent: 'นักเรียนที่เข้ามาทำแล็บได้ มีความรับผิดชอบ และมีพื้นฐานด้านเคมี'
    },
    avatarInitial: 'ส',
    imageUrl: samawadeeImg,
    badgeTag: 'การสกัดสมุนไพร & สารเคมีวิเคราะห์'
  },
  {
    id: 'korranat',
    name: 'ดร. ภญ.กรณัฐ เดชศรี',
    nameEn: 'Dr. Korranat Dechsri',
    academicTitle: 'อาจารย์ ดร.',
    department: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    departmentCategory: 'industrial',
    departmentNameTh: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    email: 'Dechsri_K@su.ac.th',
    capacityText: '10 คน',
    capacityNumber: 10,
    projectTitle: 'Development of hydrogel for skin application',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Laboratory-based Research',
    learningOutcomes: [
      'Literature Search',
      'Experimental Design',
      'Data Analysis',
      'Scientific Communication',
      'Product Development'
    ],
    expectedOutput: 'Preliminary Data',
    participationFormat: 'Onsite',
    attendanceFrequency: '4 วัน/สัปดาห์',
    targetInterests: 'Pharmaceutical Technology',
    prerequisites: 'ควรมีพื้นฐานการคำนวณ และทักษาพื้นฐานการใช้ excel',
    constraints: 'ตั้งใจที่จะเรียนรู้',
    extensionPotential: 'Further Research',
    hasExtraCost: false,
    extraCostDetails: 'ไม่มีค่าใช้จ่ายเพิ่มเติม',
    timestamp: '29/9/2026, 14:07:32',
    officialUrl: 'https://www.pharmacy.su.ac.th/main/personnel/7858/',
    education: [
      'ปร.ด. (เทคโนโลยีเภสัชกรรม) มหาวิทยาลัยศิลปากร',
      'ภ.บ. (เภสัชศาสตร์) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'ไฮโดรเจลและพอลิเมอร์อัจฉริยะ (Hydrogels & Smart Polymeric Systems)',
      'ระบบนำส่งยาทางผิวหนัง (Transdermal & Topical Delivery)',
      'การทดสอบสมบัติทางรีโอโลยีและการยึดเกาะเยื่อเมือก (Rheological & Mucoadhesive Properties)',
      'การประเมินการปลดปล่อยและซึมผ่านของยา (In vitro release & permeation)'
    ],
    notableResearch: [
      'การพัฒนาไฮโดรเจลชีวภาพสำหรับรักษาแผลและต้านการติดเชื้อที่ผิวหนัง',
      'การออกแบบระบบนำส่งสารสำคัญทางผิวหนังด้วยพอลิเมอร์ธรรมชาติผสมผสาน',
      'การประเมินการปลดปล่อยตัวยาและการทดสอบการระคายเคืองของเจลสูตรใหม่'
    ],
    summaryBio: 'อาจารย์ผู้เชี่ยวชาญด้านไฮโดรเจลสำหรับผิวหนัง เปิดรับนักเรียนจำนวน 10 คน เหมาะสำหรับผู้ที่ต้องการเรียนรู้การเตรียมเจลและการสื่อสารทางวิทยาศาสตร์',
    advisingStyle: {
      mentorship: 'แนะนำการออกแบบการทดลอง การใช้ Excel ในการคำนวณ และการสื่อสารทางวิทยาศาสตร์',
      workSchedule: 'เข้าทำปฏิบัติการ Onsite 4 วัน/สัปดาห์ ร่วมกันเป็นกลุ่ม',
      idealStudent: 'นักเรียนที่มีความตั้งใจที่จะเรียนรู้ มีพื้นฐานการคำนวณและ Excel เบื้องต้น'
    },
    avatarInitial: 'ก',
    imageUrl: korranatImg,
    badgeTag: 'Hydrogel & Skin Application (รับ 10 คน)'
  },
  {
    id: 'sirikanlaya',
    name: 'อ. ดร. ภญ.สิริกัลยา เบ็ญจวรรณ์',
    nameEn: 'Dr. Sirikanlaya Benjawan',
    academicTitle: 'อาจารย์ ดร.',
    department: 'เภสัชศาสตร์สังคมและการบริหาร',
    departmentCategory: 'social_admin',
    departmentNameTh: 'สาขาวิชาเภสัชศาสตร์สังคมและการบริหาร',
    email: 'benjawan_s3@su.ac.th',
    capacityText: '5 คน',
    capacityNumber: 5,
    projectTitle: 'การพัฒนาระบบสนับสนุนการตัดสินใจในการบริหารคลังยาและเวชภัณฑ์ โดยประยุกต์ใช้เทคนิค ABC-VEN ร่วมกับปัญญาประดิษฐ์',
    researchArea: 'Social and Administrative Pharmacy',
    projectType: 'Digital Health / Data Analytics',
    learningOutcomes: [
      'Experimental Design',
      'Data Analysis',
      'Inventory Management',
      'and AI skills'
    ],
    expectedOutput: 'Research Poster / Presentation',
    participationFormat: 'Flexible',
    attendanceFrequency: '1 วัน/สัปดาห์',
    targetInterests: 'Social and Administrative Pharmacy, Technology, and Data/ Statistics',
    prerequisites: 'ไม่จำเป็น',
    constraints: '-',
    extensionPotential: 'Conference Presentation',
    hasExtraCost: false,
    extraCostDetails: 'ไม่มีค่าใช้จ่ายเพิ่มเติม',
    timestamp: '29/9/2026, 18:07:21',
    officialUrl: 'https://www.pharmacy.su.ac.th/main/personnel/5540/',
    education: [
      'ปร.ด. (เภสัชศาสตร์สังคมและการบริหาร)',
      'ภ.บ. (เภสัชศาสตร์)'
    ],
    expertise: [
      'ระบบสารสนเทศทางเภสัชกรรม (Pharmacy Informatics)',
      'การบริหารจัดการคลังยาและโลจิสติกส์สาธารณสุข (Health Inventory & Supply Chain)',
      'การประยุกต์ใช้ AI / Machine Learning ในการตัดสินใจทางเภสัชกรรม',
      'การวิเคราะห์เมทริกซ์ ABC-VEN และการจัดการทรัพยากรโรงพยาบาล'
    ],
    notableResearch: [
      'การพัฒนาระบบพยากรณ์ปริมาณการใช้ยาและเวชภัณฑ์ในโรงพยาบาลด้วยโมเดล Machine Learning',
      'การบูรณาการเทคนิค ABC-VEN กับอัลกอริทึมอัจฉริยะเพื่อลดต้นทุนการถือครองยา',
      'ระบบสนับสนุนการตัดสินใจในการคัดเลือกยาเข้าสู่บัญชียาโรงพยาบาล'
    ],
    summaryBio: 'ผู้เชี่ยวชาญด้าน Pharmacy Informatics และ AI ในงานเภสัชกรรม โครงงานเน้น Digital Health และทักษะ AI สำหรับการบริหารคลังยา',
    advisingStyle: {
      mentorship: 'แนะนำทักษะการวิเคราะห์ข้อมูล คลังยา และเทคนิค AI ตั้งแต่เริ่มต้น ไม่จำเป็นต้องมีพื้นฐานมาก่อน',
      workSchedule: 'Flexible เข้าคณะเพียง 1 วัน/สัปดาห์ ติดตามงานสม่ำเสมอ',
      idealStudent: 'นักเรียนที่สนใจด้านเทคโนโลยี ดาต้า สถิติ หรือการบริหารคลังยา'
    },
    avatarInitial: 'สิ',
    imageUrl: sirikanlayaImg,
    badgeTag: 'AI & Data Analytics ในคลังยา'
  },
  {
    id: 'thawatchai',
    name: 'ศ. ดร. ภก.ธวัชชัย แพชมัด',
    nameEn: 'Prof. Dr. Thawatchai Phaechamud',
    academicTitle: 'ศาสตราจารย์ ดร.',
    department: 'เภสัชกรรมอุตสาหการ',
    departmentCategory: 'industrial',
    departmentNameTh: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    email: 'phaechamud_t@su.ac.th',
    capacityText: '4 คน',
    capacityNumber: 4,
    projectTitle: 'การพัฒนาระบบนำส่งยายับยั้งเชื้อโรคและต้านการอักเสบเฉพาะที่',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Product / Innovation Development',
    learningOutcomes: [
      'การพัฒนาและประเมินสมบัติทางเคมีชีวภาพระบบนำส่งยาเฉพาะที่'
    ],
    expectedOutput: 'Mini Research Report',
    participationFormat: 'Hybrid',
    attendanceFrequency: '2 วัน/สัปดาห์',
    targetInterests: 'Chemistry, excel',
    prerequisites: 'excel',
    constraints: '-',
    extensionPotential: 'Research Publication',
    hasExtraCost: true,
    extraCostDetails: 'มีค่าสารเคมีและอุปกรณ์ในการประเมินตำรับยา',
    timestamp: '30/9/2026, 9:55:56',
    officialUrl: 'https://www.pharmacy.su.ac.th/main/personnel/5448/',
    education: [
      'ศาสตราจารย์ ระดับ 11, นักวิจัยดีเด่นแห่งชาติ',
      'Ph.D. in Pharmaceutical Technology, Chulalongkorn University',
      'ภ.ม. (เภสัชกรรมอุตสาหการ) จุฬาลงกรณ์มหาวิทยาลัย',
      'ภ.บ. (เภสัชศาสตร์) จุฬาลงกรณ์มหาวิทยาลัย'
    ],
    expertise: [
      'ระบบเจลก่อตัว ณ จุดออกฤทธิ์ (In situ forming gels)',
      'ระบบนำส่งยาเฉพาะที่และทางช่องปาก (Local & Oral Drug Delivery Systems)',
      'การออกแบบนวัตกรรมยาและการจดสิทธิบัตร (Pharmaceutical Patents & IP)',
      'การพัฒนาตำรับยาต้านจุลชีพและต้านการอักเสบ (Antimicrobial Formulations)'
    ],
    notableResearch: [
      'นวัตกรรม In situ forming gels เพื่อการรักษาโรคปริทันต์และการติดเชื้อในช่องปาก (ตีพิมพ์นานาชาติระดับ Q1)',
      'ระบบนำส่งสารสกัดธรรมชาติและยาปฏิชีวนะด้วยพอลิเมอร์ชนิดละลายและไม่ละลายน้ำ',
      'สิทธิบัตรและอนุสิทธิบัตรด้านระบบนำส่งยาต้านจุลชีพเฉพาะที่กว่า 20 รายการ'
    ],
    summaryBio: 'ศาสตราจารย์ระดับ 11 นักวิจัยดีเด่นแห่งชาติ เชี่ยวชาญ In situ forming gels และนวัตกรรมระบบนำส่งยาเฉพาะที่เพื่อยับยั้งเชื้อโรค',
    advisingStyle: {
      mentorship: 'แนะนำการประเมินสมบัติทางเคมีชีวภาพของระบบนำส่งยาและทักษะการวิจัยอย่างมีมาตรฐาน',
      workSchedule: 'Hybrid 2 วัน/สัปดาห์',
      idealStudent: 'นักเรียนที่มีความสนใจด้าน Chemistry และมีทักษะการใช้งาน Excel'
    },
    avatarInitial: 'ธ',
    imageUrl: thawatchaiImg,
    badgeTag: 'In Situ Forming Gel & นวัตกรรมสิทธิบัตร'
  },
  {
    id: 'sontaya',
    name: 'ศ. ดร. ภก.สนทยา ลิ้มมัทวาภิรัติ์',
    nameEn: 'Prof. Dr. Sontaya Limmatvapirat',
    academicTitle: 'ศาสตราจารย์ ดร.',
    department: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    departmentCategory: 'industrial',
    departmentNameTh: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    email: 'limmatvapirat_s@su.ac.th',
    capacityText: '1-2 คน',
    capacityNumber: 2,
    projectTitle: 'การพัฒนานวัตกรรมวัสดุจากเชลแล็กสำหรับระบบนำส่งยา',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Laboratory-based Research',
    learningOutcomes: [
      'Experimental Design',
      'Product development'
    ],
    expectedOutput: 'Preliminary Data',
    participationFormat: 'Onsite',
    attendanceFrequency: 'อาจกำหนดภายหลังขึ้นกับความสะดวก ถ้าเป็นไปได้ควรทำหลายวันต่อเนื่องในสัปดาห์ โดยอาจไม่จำเป็นต้องทุกสัปดาห์',
    targetInterests: 'Pharmaceutical Technology',
    prerequisites: 'มีความรู้พื้นฐานด้านเคมี',
    constraints: 'ไม่มี',
    extensionPotential: 'Further Research',
    hasExtraCost: false,
    extraCostDetails: 'ไม่มีค่าใช้จ่ายเพิ่มเติม',
    timestamp: '30/9/2026, 10:33:38',
    officialUrl: 'https://www.pharmacy.su.ac.th/main/personnel/5445/',
    education: [
      'ศาสตราจารย์, คณบดีคณะเภสัชศาสตร์ มหาวิทยาลัยศิลปากร',
      'Ph.D. in Pharmaceutical Sciences, Chiba University, Japan',
      'ภ.บ. (เกียรตินิยม) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'พอลิเมอร์ธรรมชาติและเชลแล็กดัดแปลง (Modified Shellac for Drug Delivery)',
      'การเคลือบเม็ดยาและระบบควบคุมการปลดปล่อยยา (Coating & Controlled Release)',
      'วัสดุชีวภาพทางเภสัชกรรม (Pharmaceutical Biomaterials)',
      'การพัฒนายาและนวัตกรรมสู่ภาคอุตสาหกรรม (Pharmaceutical R&D & Industry Translation)'
    ],
    notableResearch: [
      'การพัฒนาสารเคลือบเม็ดยาจากเชลแล็กที่ดัดแปลงโครงสร้างเพื่อทดแทนพอลิเมอร์นำเข้า',
      'ระบบนำส่งยารับประทานเพื่อปลดปล่อยยาจำเพาะเจาะจงในลำไส้ใหญ่ด้วยอนุพันธ์เชลแล็ก',
      'การเพิ่มความคงตัวและประสิทธิภาพของสารสกัดสมุนไพรด้วยการห่อหุ้มในอนุภาคระดับไมโคร'
    ],
    summaryBio: 'ศาสตราจารย์และคณบดีคณะเภสัชศาสตร์ ม.ศิลปากร ผู้บุกเบิกงานวิจัยด้านเชลแล็กสำหรับประยุกต์ใช้ในระบบนำส่งยาและวัสดุชีวภาพ',
    advisingStyle: {
      mentorship: 'แนะนำการออกแบบการทดลองและการพัฒนาผลิตภัณฑ์วัสดุจากเชลแล็ก',
      workSchedule: 'Onsite จัดเวลาทำต่อเนื่องในสัปดาห์ตามความสะดวก โดยอาจไม่จำเป็นต้องมาทุกสัปดาห์',
      idealStudent: 'นักเรียนที่มีความสนใจด้าน Pharmaceutical Technology และมีความรู้พื้นฐานด้านเคมี'
    },
    avatarInitial: 'สน',
    imageUrl: sontayaImg,
    badgeTag: 'เชลแล็ก & วัสดุชีวภาพระบบนำส่งยา'
  }
];

export const DEPARTMENT_OPTIONS = [
  { id: 'all', label: 'ทุกสาขาวิชา (7 ท่าน)', count: 7 },
  { id: 'industrial', label: 'เภสัชกรรมอุตสาหการ (5 ท่าน)', count: 5 },
  { id: 'social_admin', label: 'เภสัชศาสตร์สังคมและการบริหาร (2 ท่าน)', count: 2 },
];

export const PROJECT_TYPE_OPTIONS = [
  'all',
  'Product / Innovation Development',
  'Laboratory-based Research',
  'Literature-based Research',
  'Digital Health / Data Analytics',
] as const;

export const PARTICIPATION_OPTIONS = [
  { id: 'all', label: 'ทุกรูปแบบ' },
  { id: 'Onsite', label: 'Onsite เข้าแล็บ' },
  { id: 'Hybrid', label: 'Hybrid ผสมผสาน' },
  { id: 'Flexible', label: 'Flexible / ยืดหยุ่น' },
] as const;
