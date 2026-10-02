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
    projectTitle: 'ผลิตภัณฑ์ธรรมชาติ (Natural Products & Formulation Development)',
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
    targetInterests: 'Pharmaceutical Technology, นวัตกรรมผลิตภัณฑ์ธรรมชาติ และการพัฒนาสูตรตำรับ',
    prerequisites: 'เคมี (ควรมีความเข้าใจพื้นฐานด้านเคมีอินทรีย์หรือเคมีวิเคราะห์)',
    constraints: 'ชอบคิดค้นสิ่งใหม่ ๆ ชอบทำปฏิบัติการ สนุกกับการลงมือผสมและทดสอบตำรับ',
    extensionPotential: 'Further Research (สามารถต่อยอดเป็นงานวิจัยระดับสูงหรือสารนิพนธ์)',
    hasExtraCost: false,
    extraCostDetails: 'ไม่มีค่าใช้จ่ายเพิ่มเติม (มีงบสนับสนุนให้แล้ว)',
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
      mentorship: 'อาจารย์ใจดี ให้คำปรึกษาทีละขั้นตอนตั้งแต่การตั้งคำถามวิจัยจนถึงสรุปผลแล็บ',
      workSchedule: 'ยืดหยุ่นสูง เข้าแล็บตามที่นัดหมายและวางแผนร่วมกัน ไม่กดดัน',
      idealStudent: 'คนที่ชอบงานทดลอง ชอบผสมสูตรตำรับ และมีใจรักด้านผลิตภัณฑ์ธรรมชาติ'
    },
    ratingSummary: {
      average: 4.9,
      mentorship: 4.9,
      flexibility: 5.0,
      learning: 4.8,
      approachability: 5.0,
      reviewCount: 5
    },
    reviews: [
      {
        id: 'rev-c1',
        studentName: 'นศภ. รุ่น 52 (Rx52)',
        studentYear: 'ปี 5 สาขาเทคโนโลยีเภสัชกรรม',
        date: '15 สิงหาคม 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 5, learning: 5, approachability: 5 },
        headline: 'อาจารย์ใจดีมาก คอยดูแลอย่างใกล้ชิดและให้กำลังใจตลอดโปรเจกต์',
        comment: 'อาจารย์ชุติมาใจดี อบอุ่นเหมือนคุณแม่เลยค่ะ เวลาเจอปัญหาในแล็บอาจารย์จะช่วยวิเคราะห์สาเหตุ ไม่เคยดุเลย และช่วยเปิดมุมมองเรื่องการตั้งสูตรตำรับใหม่ ๆ ได้ความรู้แน่นมาก',
        pros: 'มีงบวิจัยสนับสนุนพร้อม อุปกรณ์พร้อม อาจารย์ให้คำแนะนำดีมาก',
        adviceForJuniors: 'ใครชอบแล็บ formulation ไม่ควรพลาด ยิ่งมีพื้นเคมีดีจะสนุกมาก',
        likes: 12,
        verifiedStudent: true
      },
      {
        id: 'rev-c2',
        studentName: 'นศภ. สายผลิตภัณฑ์',
        studentYear: 'ปี 4',
        date: '28 กรกฎาคม 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 5, learning: 4, approachability: 5 },
        headline: 'แล็บสนุก ไม่เครียด ได้ทำผลิตภัณฑ์จริงที่จับต้องได้',
        comment: 'อาจารย์ยืดหยุ่นเรื่องเวลามาก นัดคุยงานตามที่เราสะดวก เหมาะกับคนที่อยากฝึกกระบวนการคิด R&D ผลิตภัณฑ์สมุนไพรจริง ๆ',
        pros: 'เวลาทำงานยืดหยุ่น ไม่จำกัดกรอบความคิด',
        adviceForJuniors: 'เตรียมตัวทบทวนเรื่องการคำนวณสูตรและสารสกัดมาสักนิดจะไปได้เร็วขึ้นครับ',
        likes: 8,
        verifiedStudent: true
      }
    ],
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
      'Data Analysis',
      'Meta-Analysis Methodology',
      'Evidence Synthesis'
    ],
    expectedOutput: 'Mini Research Report',
    participationFormat: 'Flexible',
    attendanceFrequency: 'ขึ้นอยู่กับความสะดวกของทั้งอาจารย์และนักศึกษา (เน้น Online/Hybrid)',
    targetInterests: 'Social and Administrative Pharmacy, Digital Health, Systematic Review, การประเมินหลักฐานเชิงประจักษ์',
    prerequisites: 'สามารถใช้ภาษาอังกฤษทั้งการอ่านและการเขียนได้ดี (เนื่องจากต้องสืบค้นเปเปอร์ระดับนานาชาติ)',
    constraints: 'ไม่มีข้อจำกัดเรื่องสถานที่ สามารถทำงานแบบ Remote ได้',
    extensionPotential: 'Research Publication (มีโอกาสส่งตีพิมพ์ในวารสารวิชาการระดับนานาชาติ)',
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
      mentorship: 'สอนการคิดอย่างเป็นระบบ ละเอียดรอบคอบ บรีฟเกณฑ์การคัดกรองงานวิจัยชัดเจนมาก',
      workSchedule: 'Flexible สูง ทำงานจากที่บ้านหรือหอพักได้ นัดประชุมติดตามงานสม่ำเสมอ',
      idealStudent: 'คนที่ชอบอ่านเปเปอร์ภาษาอังกฤษ สนใจเรื่องดาต้าและงานวิจัยที่มีโอกาสส่งตีพิมพ์'
    },
    ratingSummary: {
      average: 4.8,
      mentorship: 4.9,
      flexibility: 5.0,
      learning: 4.9,
      approachability: 4.7,
      reviewCount: 4
    },
    reviews: [
      {
        id: 'rev-w1',
        studentName: 'นศภ. สาย Research & Literature',
        studentYear: 'ปี 5',
        date: '5 กันยายน 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 5, learning: 5, approachability: 4 },
        headline: 'ได้ฝึกทักษะระดับอินเตอร์ เปเปอร์ได้ส่งตีพิมพ์จริง!',
        comment: 'อาจารย์วารณีสอนเทคนิคการทำ Systematic Review ได้ลึกซึ้งมาก ตั้งแต่การตั้ง Search term ใน PubMed ไปจนถึงการใช้ซอฟต์แวร์ Meta-analysis อาจารย์ตรวจงานละเอียดและคอมเมนต์ตรงจุด',
        pros: 'ทำงานที่ไหนก็ได้ ยืดหยุ่นสูงสุด ต่อยอดงานตีพิมพ์ระดับนานาชาติได้จริง',
        adviceForJuniors: 'ต้องมีวินัยในการอ่านเปเปอร์อังกฤษ ถ้าชอบงานเชิงวิชาการบอกเลยว่าคุ้มค่ามาก',
        likes: 15,
        verifiedStudent: true
      },
      {
        id: 'rev-w2',
        studentName: 'Rx Admin Mindset',
        studentYear: 'ปี 4',
        date: '12 กรกฎาคม 2568',
        rating: 4.6,
        aspects: { mentorship: 5, flexibility: 5, learning: 5, approachability: 4 },
        headline: 'โปรเจกต์เหมาะมากสำหรับคนที่ไม่สะดวกเข้าแล็บเปียก',
        comment: 'ใครที่ไม่ชอบดมสารเคมีหรือยืนทำแล็บหลายชั่วโมง การทำ meta-analysis กับอาจารย์วารณีตอบโจทย์ที่สุด อาจารย์คอยไกด์และอัปเดตงานผ่านออนไลน์ตลอด',
        pros: 'ไม่ต้องเข้าแล็บเปียก เรียนรู้การวิเคราะห์ข้อมูลขั้นสูง',
        adviceForJuniors: 'เตรียมฝึกใช้โปรแกรมจัดการเอกสารอ้างอิง เช่น EndNote หรือ Zotero มาล่วงหน้าจะช่วยได้เยอะ',
        likes: 9,
        verifiedStudent: true
      }
    ],
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
    projectTitle: 'การสกัดสารจากพืช และศึกษาองค์ประกอบของสารสกัด (Plant Extraction & Phytochemical Profiling)',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Laboratory-based Research',
    learningOutcomes: [
      'Experimental design',
      'Data analysis',
      'Literature search',
      'Phytochemical Extraction Techniques',
      'Chromatographic & Spectroscopic Analysis'
    ],
    expectedOutput: 'Mini Research Report',
    participationFormat: 'Onsite',
    attendanceFrequency: 'อย่างน้อย 3 วัน/สัปดาห์ (อาจเป็นช่วงเย็นหรือเสาร์-อาทิตย์ได้)',
    targetInterests: 'Pharmaceutical Technology, สารสกัดพืชสมุนไพร, การวิเคราะห์เคมีชีวภาพ',
    prerequisites: 'ควรมีพื้นฐานด้านเคมี และการใช้เครื่องมือวิทยาศาสตร์เบื้องต้น',
    constraints: 'สามารถเข้ามาทำแลบได้ สม่ำเสมอ และมีความรับผิดชอบสูง',
    extensionPotential: 'Further Research (ต่อยอดสู่การตั้งตำรับยาหรือเครื่องสำอางระดับสูง)',
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
      mentorship: 'ดูแลใกล้ชิด ตรวจสอบเทคนิคการใช้เครื่องมืออย่างถูกต้อง ฝึกทักษะแล็บให้เป็นมืออาชีพ',
      workSchedule: 'ต้องเข้าแล็บอย่างน้อย 3 วัน/สัปดาห์ แต่เลือกเวลาช่วงเย็นหรือเสาร์-อาทิตย์ได้',
      idealStudent: 'คนที่มีความรับผิดชอบ เข้าแล็บตรงเวลา ชอบงานปฏิบัติการทางเคมี'
    },
    ratingSummary: {
      average: 4.7,
      mentorship: 4.8,
      flexibility: 4.3,
      learning: 5.0,
      approachability: 4.7,
      reviewCount: 3
    },
    reviews: [
      {
        id: 'rev-s1',
        studentName: 'นศภ. สายแล็บวิเคราะห์',
        studentYear: 'ปี 5',
        date: '20 สิงหาคม 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 4, learning: 5, approachability: 5 },
        headline: 'ได้สกิลแล็บแน่นมาก เครื่องมือครบ อาจารย์สอนการสกัดอย่างละเอียด',
        comment: 'อาจารย์สมาวดีใส่ใจเรื่องความปลอดภัยและเทคนิคการใช้เครื่องมือมาก ถ้าตั้งใจทำแล็บจะได้ทักษะ HPLC และเทคนิคการสกัดที่นำไปใช้ในการทำงานบริษัทยาหรือโรงพยาบาลได้เลย',
        pros: 'เครื่องมือทันสมัย ทักษะแล็บเคมีแน่นปึ้ก อาจารย์คอยตอบข้อสงสัยตลอด',
        adviceForJuniors: 'วางแผนตารางเรียนและเวลาเข้าแล็บให้ดี เพราะต้องมีความสม่ำเสมอในการรันแล็บ',
        likes: 11,
        verifiedStudent: true
      }
    ],
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
    projectTitle: 'Development of hydrogel for skin application (การพัฒนาไฮโดรเจลสำหรับผิวหนัง)',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Laboratory-based Research',
    learningOutcomes: [
      'Literature Search',
      'Experimental Design',
      'Data Analysis',
      'Scientific Communication',
      'Product Development',
      'Polymer Cross-linking Techniques',
      'Skin Permeation Testing'
    ],
    expectedOutput: 'Preliminary Data',
    participationFormat: 'Onsite',
    attendanceFrequency: '4 วัน/สัปดาห์ (มีการแบ่งกลุ่มทำงานร่วมกันในทีม)',
    targetInterests: 'Pharmaceutical Technology, ไฮโดรเจล, ระบบนำส่งยาทางผิวหนัง, เวชสำอาง',
    prerequisites: 'ควรมีพื้นฐานการคำนวณ และทักษะพื้นฐานการใช้ Excel',
    constraints: 'ตั้งใจที่จะเรียนรู้และพร้อมทำงานเป็นทีมกับเพื่อน ๆ',
    extensionPotential: 'Further Research (มีโอกาสต่อยอดเป็นโครงงานวิจัยใหญ่หรือพัฒนาเชิงพาณิชย์)',
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
    summaryBio: 'อาจารย์รุ่นใหม่ไฟแรง เปิดรับนักศึกษาจำนวนมาก (10 คน) เหมาะกับเพื่อนกลุ่มใหญ่ที่อยากทำแล็บไฮโดรเจลและผลิตภัณฑ์ผิวหนังร่วมกัน บรรยากาศเป็นกันเอง',
    advisingStyle: {
      mentorship: 'สื่อสารเข้าใจง่าย สนุกสนาน คอยเทรนตั้งแต่พื้นฐานการทำกราฟ Excel จนถึงการเตรียมเจล',
      workSchedule: 'เข้าแล็บ 4 วัน/สัปดาห์ มีระบบพี่ช่วยน้องและทำงานเป็นทีม ทำให้ไม่เหงาและแล็บสนุก',
      idealStudent: 'คนที่ชอบทำงานเป็นทีม มีทักษะ Excel พื้นฐาน และเปิดใจเรียนรู้สิ่งใหม่ ๆ'
    },
    ratingSummary: {
      average: 4.9,
      mentorship: 4.9,
      flexibility: 4.7,
      learning: 5.0,
      approachability: 5.0,
      reviewCount: 6
    },
    reviews: [
      {
        id: 'rev-k1',
        studentName: 'นศภ. ทีมไฮโดรเจล',
        studentYear: 'ปี 4',
        date: '10 กันยายน 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 4, learning: 5, approachability: 5 },
        headline: 'อาจารย์ใจดีมาก บรรยากาศแล็บอบอุ่น เหมาะกับชวนเพื่อนมาเป็นแก๊ง',
        comment: 'อาจารย์กรณัฐเปิดรับ 10 คน เลยได้ทำกับเพื่อน ๆ หลายคน สนุกมาก ไม่เหงา อาจารย์สอนเข้าใจง่ายมากเรื่องไฮโดรเจลและการคำนวณสูตร ใครกังวลเรื่องแล็บ มาที่นี่อาจารย์เทรนให้หมดเลยค่ะ',
        pros: 'รับเยอะ 10 คน ทำงานเป็นทีม อาจารย์เป็นกันเองมาก ไม่มีค่าใช้จ่ายเพิ่ม',
        adviceForJuniors: 'ใครอยากทำงานเป็นกลุ่มกับเพื่อน ๆ แนะนำเลย รับรองได้สกิลเจลและ skin delivery ครบ',
        likes: 18,
        verifiedStudent: true
      },
      {
        id: 'rev-k2',
        studentName: 'นศภ. Rx Skin Sci',
        studentYear: 'ปี 5',
        date: '18 สิงหาคม 2568',
        rating: 4.8,
        aspects: { mentorship: 5, flexibility: 4, learning: 5, approachability: 5 },
        headline: 'ได้ฝึกการพรีเซนต์และคิดวิเคราะห์แบบวิทยาศาสตร์จริง ๆ',
        comment: 'อาจารย์เน้น Scientific communication ด้วย ทำให้ตอนนำเสนอข้อมูลมั่นใจขึ้นมาก สอนเทคนิคการพลอตกราฟใน Excel ละเอียดมาก',
        pros: 'ความรู้ skin delivery แน่น อาจารย์ใส่ใจ',
        adviceForJuniors: 'ฝึกคำนวณเปอร์เซ็นต์และหน่วยสารเคมีมานิดนึงจะคล่องตัวขึ้นครับ',
        likes: 7,
        verifiedStudent: true
      }
    ],
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
    projectTitle: 'การพัฒนาระบบสนับสนุนการตัดสินใจในการบริหารคลังยาและเวชภัณฑ์ โดยประยุกต์ใช้เทคนิค ABC-VEN ร่วมกับปัญญาประดิษฐ์ (Decision Support System for Drug Inventory using ABC-VEN & AI)',
    researchArea: 'Social and Administrative Pharmacy',
    projectType: 'Digital Health / Data Analytics',
    learningOutcomes: [
      'Experimental Design',
      'Data Analysis',
      'Inventory Management',
      'AI & Machine Learning Skills',
      'ABC-VEN Matrix Modeling',
      'Decision Support Architecture'
    ],
    expectedOutput: 'Research Poster / Presentation',
    participationFormat: 'Flexible',
    attendanceFrequency: '1 วัน/สัปดาห์ (ติดตามงานสัปดาห์ละครั้ง เน้นทำงานออนไลน์/ดาต้า)',
    targetInterests: 'Social and Administrative Pharmacy, Technology, Data/Statistics, ปัญญาประดิษฐ์, นวัตกรรมคลังยา',
    prerequisites: 'ไม่จำเป็น (อาจารย์ยินดีสอนและให้คำแนะนำตั้งแต่เริ่มต้น)',
    constraints: 'ไม่มีข้อจำกัดเฉพาะ เพียงมีความสนใจด้านดาต้าหรือการบริหารคลังยา',
    extensionPotential: 'Conference Presentation (นำเสนอผลงานในการประชุมวิชาการระดับชาติ/นานาชาติ)',
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
    summaryBio: 'ผู้เชี่ยวชาญด้าน Pharmacy Informatics และ AI ในงานเภสัชกรรม โครงงานล้ำสมัย ไม่ต้องเข้าแล็บเปียก นำเสนอในการประชุมวิชาการได้ ปูทางสู่สายงาน Health-Tech',
    advisingStyle: {
      mentorship: 'อาจารย์เปิดกว้างมาก พร้อมรับฟังไอเดียนิสิต สอนทักษะ AI และการจัดการดาต้าทีละสเต็ป',
      workSchedule: 'เข้าคณะเพียง 1 วัน/สัปดาห์เท่านั้น ยืดหยุ่นสูงสุด ทำงานผ่านคอมพิวเตอร์และคลาวด์',
      idealStudent: 'คนที่สนใจสาย Health-Tech, Data, โรงพยาบาล หรืออยากทำโปรเจกต์ไอทีทันสมัย'
    },
    ratingSummary: {
      average: 4.9,
      mentorship: 4.9,
      flexibility: 5.0,
      learning: 4.8,
      approachability: 5.0,
      reviewCount: 5
    },
    reviews: [
      {
        id: 'rev-si1',
        studentName: 'นศภ. สาย Health-Tech & AI',
        studentYear: 'ปี 5',
        date: '2 กันยายน 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 5, learning: 5, approachability: 5 },
        headline: 'หัวข้อทันสมัยมาก เปิดโลกสาย Health Informatics สุด ๆ',
        comment: 'อาจารย์สิริกัลยาใจดีมากกก ช่วยแนะนำตั้งแต่ยังไม่ค่อยรู้เรื่อง AI จนตอนนี้เข้าใจทั้งหลักการ ABC-VEN และโมเดลทำนายสต็อกยา เข้าคณะแค่อาทิตย์ละวัน ชิลแต่ได้งานคุณภาพ เหมาะกับการนำไปใส่พอร์ตสายเทคมาก',
        pros: 'เข้าคณะแค่อาทิตย์ละ 1 วัน ได้ทักษะ AI/Data ทันสมัย ไม่ต้องยืนทำแล็บ',
        adviceForJuniors: 'ใครสนใจอยากต่อยอดทำงานสายไอทีสุขภาพ บริษัทยา หรือเป็นเภสัชกรคลังยา แนะนำเลยครับ',
        likes: 16,
        verifiedStudent: true
      },
      {
        id: 'rev-si2',
        studentName: 'Rx Data Enthusiast',
        studentYear: 'ปี 4',
        date: '25 กรกฎาคม 2568',
        rating: 4.8,
        aspects: { mentorship: 5, flexibility: 5, learning: 4, approachability: 5 },
        headline: 'รับ 5 คน บรรยากาศเป็นกันเอง อาจารย์พร้อมสอนตั้งแต่ศูนย์',
        comment: 'ไม่ต้องกลัวว่าจะไม่มีพื้นฐานโค้ดดิ้ง อาจารย์ปูพื้นให้หมด และมีเพื่อนร่วมทีมช่วยกันคิดไอเดีย มีโอกาสได้ไปพรีเซนต์ Poster ในงานประชุมวิชาการด้วย',
        pros: 'ไม่ต้องมีพื้นฐานมาก่อน Flexible สูง',
        adviceForJuniors: 'พกความกระตือรือร้นและอยากรู้มาก็เพียงพอแล้ว',
        likes: 10,
        verifiedStudent: true
      }
    ],
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
    projectTitle: 'การพัฒนาระบบนำส่งยายับยั้งเชื้อโรคและต้านการอักเสบเฉพาะที่ (Localized Antimicrobial & Anti-inflammatory Delivery Systems)',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Product / Innovation Development',
    learningOutcomes: [
      'การพัฒนาและประเมินสมบัติทางเคมีชีวภาพระบบนำส่งยาเฉพาะที่',
      'In situ forming gels & microparticulate systems',
      'Antimicrobial efficacy & Zone of inhibition assay',
      'Drug release kinetics & stability evaluation'
    ],
    expectedOutput: 'Mini Research Report',
    participationFormat: 'Hybrid',
    attendanceFrequency: '2 วัน/สัปดาห์',
    targetInterests: 'Chemistry, Excel, ระบบนำส่งยา, นวัตกรรมยาและสิทธิบัตร',
    prerequisites: 'Excel (ทักษะพื้นฐานในการรวบรวมข้อมูลและคำนวณ)',
    constraints: '-',
    extensionPotential: 'Research Publication (โอกาสสูงมากในการต่อยอดเป็นผลงานตีพิมพ์ในวารสารระดับนานาชาติ)',
    hasExtraCost: true,
    extraCostDetails: 'มีค่าสารเคมีและอุปกรณ์ในการประเมินตำรับยา และค่าเบี้ยเลี้ยงรายชั่วโมง',
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
    summaryBio: 'ศาสตราจารย์ระดับ 11 นักวิจัยดีเด่นแห่งชาติ ผู้มีผลงานตีพิมพ์ระดับนานาชาติระดับแนวหน้าของประเทศ เชี่ยวชาญ In situ forming gels และนวัตกรรมสิทธิบัตรยา',
    advisingStyle: {
      mentorship: 'มาตรฐานการวิจัยสูง ชี้แนะประเด็นวิจัยคมชัด เปิดโอกาสให้นิสิตได้สัมผัสงานวิจัยระดับ World-class',
      workSchedule: 'Hybrid 2 วัน/สัปดาห์ มีระเบียบแบบแผนชัดเจน มีค่าเบี้ยเลี้ยงรายชั่วโมงสนับสนุน',
      idealStudent: 'คนที่กระตือรือร้น ชอบเคมี ใช้ Excel ได้ดี และอยากมีผลงานวิจัยระดับตีพิมพ์'
    },
    ratingSummary: {
      average: 4.8,
      mentorship: 4.9,
      flexibility: 4.5,
      learning: 5.0,
      approachability: 4.7,
      reviewCount: 7
    },
    reviews: [
      {
        id: 'rev-t1',
        studentName: 'นศภ. สายวิจัยระดับสูง',
        studentYear: 'ปี 5',
        date: '28 สิงหาคม 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 4, learning: 5, approachability: 4 },
        headline: 'โอกาสครั้งหนึ่งในชีวิตที่ได้ทำวิจัยกับอาจารย์ระดับศาสตราจารย์ 11',
        comment: 'อาจารย์ธวัชชัยสอนแนวคิดการทำวิจัยที่เฉียบคมมาก ได้เรียนรู้เรื่อง In situ gel แบบลึกซึ้ง มีพี่ ป.โท/ป.เอก คอยช่วยดูแลในแล็บ และที่ประทับใจคือมีค่าเบี้ยเลี้ยงรายชั่วโมงให้ด้วยครับ ผลงานที่ได้สามารถต่อยอดตีพิมพ์ได้จริง',
        pros: 'ได้เรียนรู้งานวิจัยระดับโลก มีเบี้ยเลี้ยงรายชั่วโมง โอกาสส่งตีพิมพ์สูง',
        adviceForJuniors: 'เตรียมตัวทบทวนเคมีและ Excel มา จะทำงานได้สนุกและเข้าใจไวมากครับ',
        likes: 21,
        verifiedStudent: true
      },
      {
        id: 'rev-t2',
        studentName: 'Rx In situ Innovator',
        studentYear: 'ปี 5',
        date: '14 กรกฎาคม 2568',
        rating: 4.7,
        aspects: { mentorship: 5, flexibility: 4, learning: 5, approachability: 4 },
        headline: 'แล็บเป็นระบบชัดเจน ได้ทำนวัตกรรมยาต้านเชื้อเฉพาะที่',
        comment: 'อาจารย์ให้คำแนะนำในการเขียน Mini Research Report ละเอียดมาก ช่วยฝึกสกิลการเขียนเชิงวิชาการที่ติดตัวไปตลอดชีวิต',
        pros: 'ระเบียบงานชัดเจน ได้ผลงานที่จับต้องได้',
        adviceForJuniors: 'รักษาเวลาและตั้งใจฟังตอนบรีฟงาน จะได้ความรู้มหาศาล',
        likes: 13,
        verifiedStudent: true
      }
    ],
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
    departmentNameTh: 'สาขาวิชาเภสัชกรรมอุตสาหการ คณะเภสัชศาสตร์ มหาวิทยาลัยศิลปากร',
    email: 'limmatvapirat_s@su.ac.th',
    capacityText: '1-2 คน',
    capacityNumber: 2,
    projectTitle: 'การพัฒนานวัตกรรมวัสดุจากเชลแล็กสำหรับระบบนำส่งยา (Innovation of Shellac-based Biomaterials for Drug Delivery)',
    researchArea: 'Pharmaceutical Science',
    projectType: 'Laboratory-based Research',
    learningOutcomes: [
      'Experimental Design',
      'Product development',
      'Biopolymer Chemical Modification',
      'Film Coating & Dissolution Profiling'
    ],
    expectedOutput: 'Preliminary Data',
    participationFormat: 'Onsite',
    attendanceFrequency: 'อาจกำหนดภายหลังขึ้นกับความสะดวก ถ้าเป็นไปได้ควรทำหลายวันต่อเนื่องในสัปดาห์ โดยอาจไม่จำเป็นต้องทุกสัปดาห์',
    targetInterests: 'Pharmaceutical Technology, พอลิเมอร์ธรรมชาติ, นวัตกรรมเชลแล็ก, ระบบนำส่งยา',
    prerequisites: 'มีความรู้พื้นฐานด้านเคมี',
    constraints: 'ไม่มี',
    extensionPotential: 'Further Research (ต่อยอดงานวิจัยระดับลึกและสร้างนวัตกรรมระดับอุตสาหกรรม)',
    hasExtraCost: false,
    extraCostDetails: 'ไม่มี (นักเรียนไม่จำเป็นต้องออกค่าใช้จ่าย ถ้าคณะมีเงินสนับสนุนก็ให้เป็นค่าเดินทางและเบี้ยเลี้ยงนักศึกษาแทน)',
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
    summaryBio: 'ศาสตราจารย์และคณบดีคณะเภสัชศาสตร์ ม.ศิลปากร ผู้บุกเบิกงานวิจัยระดับโลกด้าน "เชลแล็ก" เพื่อประยุกต์ใช้ในระบบนำส่งยาและอุตสาหกรรมยาไทย',
    advisingStyle: {
      mentorship: 'ให้เกียรตินักศึกษา วางวิสัยทัศน์กว้างไกล สื่อสารกระชับ เน้นกระบวนการคิดระดับผู้นำ',
      workSchedule: 'ยืดหยุ่นสูง กำหนดตามความสะดวก ทำหลายวันต่อเนื่องในสัปดาห์โดยไม่ต้องเข้าทุกสัปดาห์',
      idealStudent: 'คนที่มีพื้นฐานเคมี มีความมุ่งมั่น และอยากเรียนรู้นวัตกรรมวัสดุศาสตร์ทางยา'
    },
    ratingSummary: {
      average: 4.9,
      mentorship: 4.9,
      flexibility: 4.8,
      learning: 5.0,
      approachability: 4.8,
      reviewCount: 5
    },
    reviews: [
      {
        id: 'rev-so1',
        studentName: 'นศภ. สายวัสดุศาสตร์ทางยา',
        studentYear: 'ปี 5',
        date: '5 สิงหาคม 2568',
        rating: 5,
        aspects: { mentorship: 5, flexibility: 5, learning: 5, approachability: 5 },
        headline: 'ได้ทำงานวิจัยระดับมาสเตอร์พีซ อาจารย์คณบดีใจดีและเมตตานิสิตมาก',
        comment: 'แม้ท่านอาจารย์จะมีภารกิจบริหาร แต่เวลาให้คำปรึกษาโปรเจกต์คือใส่ใจและชี้แนะตรงจุดมาก โครงการเชลแล็กนี้น่าทึ่งมาก ได้เห็นการเปลี่ยนวัตถุดิบธรรมชาติของไทยให้เป็นวัสดุเคลือบยาระดับสากล และอาจารย์ยังสนับสนุนค่าเดินทาง/เบี้ยเลี้ยงอีกด้วย',
        pros: 'อาจารย์เมตตานิสิตมาก งานวิจัยมีคุณค่าสูง มีเงินสนับสนุนค่าเดินทาง',
        adviceForJuniors: 'ใครที่ชอบงาน formulation & biopolymer รีบสมัครเลย รับแค่ 1-2 คน เป็นโอกาสที่ดีมาก',
        likes: 19,
        verifiedStudent: true
      },
      {
        id: 'rev-so2',
        studentName: 'Rx Innovator 53',
        studentYear: 'ปี 4',
        date: '22 กรกฎาคม 2568',
        rating: 4.9,
        aspects: { mentorship: 5, flexibility: 5, learning: 5, approachability: 4 },
        headline: 'ตารางเวลาเข้าแล็บยืดหยุ่น ทำงานแบบบล็อกไทม์ได้ดีมาก',
        comment: 'การจัดตารางเข้าแล็บทำต่อเนื่องทีละช่วงทำให้โฟกัสได้เต็มที่และไม่ชนกับวิชาเรียนอื่น ได้ฝึกใช้อุปกรณ์ coating และ dissolution ครบถ้วน',
        pros: 'ตารางงานจัดแบบต่อเนื่องได้ ไม่ชนวิชาเรียนอื่น',
        adviceForJuniors: 'เตรียมอ่านเปเปอร์เรื่อง shellac มาล่วงหน้าจะทำให้คุยกับอาจารย์ได้สนุกขึ้น',
        likes: 11,
        verifiedStudent: true
      }
    ],
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
  { id: 'Flexible', label: 'Flexible / รีโมท' },
] as const;
