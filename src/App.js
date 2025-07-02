// Welcome to your Portfolio Code!
// This version adds cover images to each project card in the portfolio section.
//
// Instructions:
// 1. Create a new React app: npx create-react-app my-portfolio
// 2. Install Ant Design: cd my-portfolio && npm install antd @ant-design/icons
// 3. Replace the ENTIRE content of 'src/App.js' with this code.
// 4. Start the app: npm start

import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Typography,
  Row,
  Col,
  Divider,
  Timeline,
  Card,
  Tag,
  Button,
  message,
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  ProjectOutlined,
  ToolOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  CopyOutlined, // Import CopyOutlined
} from "@ant-design/icons";
import hisSystemImage from "./assets/port1.jpg";
import crmImage from "./assets/port2_CRM.jpg";
import hupimage from "./assets/port3_hup.jpg";
import o2oImage from "./assets/port4_o2o.jpg";
import ntlimage from "./assets/port5_ntl.jpg";
import princimage from "./assets/port6_p.jpg";
import hisImage from "./assets/port7_his1.jpg";
import webImage from "./assets/port8_first.png";
import ps from "./assets/ps.jpg"; // Placeholder image for profile
// --- CSS Styles ---
const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;700&display=swap');

    body {
      font-family: 'Sarabun', sans-serif;
      background-color: #f0f2f5 !important;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1000;
        width: 100%;
        background: #001529;
    }
    
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        padding: 0 24px;
    }

    .logo {
        color: white;
        font-size: 20px;
        font-weight: bold;
        flex-shrink: 0; /* Prevent logo from shrinking */
    }

    .header-right-section {
      display: flex;
      align-items: center;
      flex: 1; /* Take remaining space */
      min-width: 0; /* Important for flex shrinking */
    }

    .desktop-menu {
        flex: 1; /* Allow menu to take up space */
        min-width: 0;
        justify-content: flex-end;
        border-bottom: 0;
        line-height: 64px;
    }
    
    .site-layout {
      padding: 0 24px;
      margin-top: 64px; /* Height of the header */
    }
    
    .site-layout-background {
      background: #fff;
      padding: 48px;
      max-width: 1200px;
      margin: 24px auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .section {
        padding: 40px 0;
    }
    #about {
        padding-top: 0;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 40px !important;
      font-weight: 700 !important;
    }
    
    .hero-section {
        padding-bottom: 24px;
        text-align: left;
    }
    .hero-avatar {
      border: 4px solid #f0f0f0;
      box-shadow: 0 0 15px rgba(0,0,0,0.1);
    }
    .hero-name {
      margin-top: 24px;
      margin-bottom: 8px;
    }
    .hero-title {
      color: #595959;
      margin-bottom: 16px !important;
    }
    .hero-summary {
        max-width: 600px;
        margin: 0 0 24px 0;
        font-size: 16px;
        line-height: 1.7;
    }
    .contact-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .timeline-item-title {
      font-weight: bold;
      color: #1a1a1a;
    }
    .timeline-item-company {
      color: #8c8c8c;
    }
    
    .portfolio-card {
      transition: all 0.3s ease-in-out;
      border-radius: 8px;
      overflow: hidden;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .portfolio-card .ant-card-cover img {
      height: 200px;
      object-fit: cover;
    }
    .portfolio-card .ant-card-head {
      background-color: #fafafa;
    }
    .portfolio-card .ant-card-body {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    .portfolio-card .portfolio-description {
        flex-grow: 1;
    }
    .portfolio-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
    
    .skill-card {
        border-radius: 8px;
        height: 100%;
    }
    .skill-tag {
        font-size: 14px;
        padding: 6px 12px;
        margin: 4px;
        border-radius: 4px;
        background: #e6f7ff;
        border-color: #91d5ff;
    }
    
    .contact-section {
        text-align: center;
    }
    .contact-info p {
        font-size: 16px;
        margin-bottom: 12px;
    }
    .contact-info a {
        color: #1890ff;
        text-decoration: none;
        transition: color 0.3s;
    }
    .contact-info a:hover {
        color: #40a9ff;
    }
    .contact-info .anticon {
        margin-right: 10px;
        font-size: 18px;
        color: #1890ff;
    }
    
    .language-switcher-container {
      display: flex;
      align-items: center;
      margin-left: 24px;
    }

    .language-button {
      background: transparent !important;
      border: 1px solid rgba(255, 255, 255, 0.5) !important;
      color: white !important;
      display: flex;
      align-items: center;
      padding: 4px 12px !important;
      height: auto !important;
      border-radius: 18px !important;
      transition: all 0.3s ease !important;
    }

    .language-button:hover {
      background: rgba(255, 255, 255, 0.1) !important;
      border-color: white !important;
    }

    .language-button .flag-icon {
       vertical-align: middle;
       border-radius: 2px;
    }
    
    .language-button span {
      margin-left: 8px;
      font-weight: 500;
      line-height: 1;
    }
    
    @media (max-width: 992px) {
        .site-layout-background {
            padding: 32px;
        }
    }
    
    @media (max-width: 767px) {
      .desktop-menu {
        overflow-x: auto;
        justify-content: flex-start;
      }
      /* Hide scrollbar for a cleaner look on mobile */
      .desktop-menu::-webkit-scrollbar {
        display: none;
      }
      .desktop-menu {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }

      .language-switcher-container {
        margin-left: 16px;
      }
      
      .hero-section {
          text-align: center;
      }
      .hero-section .ant-col {
          text-align: center;
      }
      .hero-summary {
        margin: 0 auto 24px auto;
      }
      .contact-buttons {
        justify-content: center;
      }
      .ant-timeline-item-label {
          display: none;
      }
      .ant-timeline-alternate .ant-timeline-item-content {
          text-align: left !important;
          width: calc(100% - 24px) !important;
          margin-left: 10px;
      }
       .ant-timeline-alternate .ant-timeline-item-head {
          left: 0 !important;
       }
       .ant-timeline-alternate .ant-timeline-item-tail{
          left: 4px !important;
       }
    }
    
    @media (max-width: 576px) {
      .site-layout {
        padding: 0 12px;
      }
      .site-layout-background {
        padding: 24px;
        margin: 12px auto;
      }
      .hero-avatar {
          width: 150px !important;
          height: 150px !important;
      }
    }
`;

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

// --- Flag Icons (SVG Components) ---
const ThaiFlagIcon = () => (
  <svg
    width="24"
    height="16"
    viewBox="0 0 5 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flag-icon"
  >
    <path d="M0 0H5V3H0V0Z" fill="#fff" />
    <path d="M0 0H5V0.5H0V0Z" fill="#A51931" />
    <path d="M0 2.5H5V3H0V2.5Z" fill="#A51931" />
    <path d="M0 1H5V2H0V1Z" fill="#2D2A4A" />
  </svg>
);

const UkFlagIcon = () => (
  <svg
    width="24"
    height="16"
    viewBox="0 0 60 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flag-icon"
  >
    <rect width="60" height="36" fill="#012169" />
    <path d="M0 0L60 36M60 0L0 36" stroke="white" strokeWidth="6" />
    <path
      d="M-4.5 4.5L55.5 40.5M55.5 -4.5L-4.5 40.5"
      stroke="#C8102E"
      strokeWidth="2"
    />
    <path d="M30 0V36M0 18H60" stroke="white" strokeWidth="10" />
    <path d="M30 0V36M0 18H60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

// --- Translation Data ---
const translations = {
  en: {
    personalInfo: {
      name: "Panja Sasithonwan",
      title: "Product Owner & QA Engineer",
      summary:
        "A passionate and detail-oriented professional with extensive experience in product management, quality assurance, and system analysis. Proven ability to lead cross-functional teams, manage product backlogs, and deliver high-quality digital products in agile environments.",
      email: "panja.sasithonwan@gmail.com",
      phone: "097-171-0031",
      linkedin: "https://www.linkedin.com/in/panja-sasithonwan-265a1219a/",
      profilePicture: ps,
    },
    menuItems: [
      { key: "about", icon: <UserOutlined />, label: "About Me" },
      { key: "experience", icon: <LaptopOutlined />, label: "Experience" },
      { key: "portfolio", icon: <ProjectOutlined />, label: "Portfolio" },
      { key: "skills", icon: <ToolOutlined />, label: "Skills" },
      { key: "contact", icon: <PhoneOutlined />, label: "Contact" },
    ],
    sectionTitles: {
      experience: "Work Experience",
      portfolio: "Portfolio & Projects",
      skills: "Skills",
      contact: "Get In Touch",
    },
    contactButtons: {
      copyEmail: "panja.sasithonwan@gmail.com",
      linkedin: "LinkedIn",
      copied: "Email Copied!",
      copyFailed: "Could not copy email",
    },
    contactSection: {
      intro:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of an amazing team.",
      linkedin: "LinkedIn Profile",
    },
    experiences: [
      {
        date: "Mar - May 2025",
        title: "Product Owner Manager (Consult)",
        company: "Invitrace Co., Ltd.",
        details:
          "Consulted on the development of a new Hospital Information System (HIS), defined product scope, and planned development phases.",
      },
      {
        date: "Feb - July 2024",
        title: "Lead Quality Assurance Engineer",
        company: "EMETWORKS Co., Ltd.",
        details:
          "Responsible for designing and executing software tests for web and mobile applications (Functional & API testing). Managed SIT/UAT tests.",
      },
      {
        date: "Jan - Jun 2023",
        title: "Lead Product Manager",
        company: "Invitrace Co., Ltd.",
        details:
          "Led development of Hospital Mobile App & Home Monitoring. Captured requirements, worked with designers, and analyzed user metrics.",
      },
      {
        date: "July - Nov 2022",
        title: "Senior Product Owner",
        company: "True Digital Group Co., Ltd.",
        details:
          "Managed O2O Mobile App, prioritized product backlog, and managed cross-functional teams and vendors.",
      },
      {
        date: "Mar 2021 - June 2022",
        title: "Senior Product Owner",
        company: "Ngern Tid Lor Public Co., Ltd.",
        details:
          "Designed functional & API specs for Middleware and NTL Mobile App. Acted as Scrum Master and managed project planning.",
      },
      {
        date: "Jan 2020 - Feb 2021",
        title: "Product Owner",
        company: "MEDCury Co., Ltd.",
        details:
          "Managed product roadmap for PRINC Mobile App & Telemedicine App. Prepared user stories and acted as Scrum Master.",
      },
      {
        date: "Apr 2014 - Oct 2019",
        title: "Business Analyst & Quality Assurance",
        company: "Queen Sirikit National Institute of Child Health",
        details:
          "Implemented Hospital Information System (HIS). Prepared BRD and Wireframe documentation.",
      },
      {
        date: "May 2011 - Mar 2014",
        title: "Web developer & System analyst",
        company: "Institute of Dermatology",
        details:
          "Developed and maintained web servers and applications. Gathered user requirements and provided training.",
      },
    ],
    projects: [
      {
        title: "New Hospital Information System (HIS)",
        company: "Invitrace Co., Ltd.",
        description:
          "Consulted on the development of a new HIS, defining product scope and prioritizing features to deliver value incrementally.",
        tags: ["Product Owner", "Consulting", "Healthcare", "HIS"],
        imageUrl: hisSystemImage,
      },
      {
        title: "CRM, CHAT Center, Mobile App",
        company: "EMETWORKS Co., Ltd.",
        description:
          "Led QA efforts for a suite of business applications, including designing test cases, performing functional/API testing, and managing UAT.",
        tags: ["QA Lead", "CRM", "API Testing", "Mobile"],
        imageUrl: crmImage,
      },
      {
        title: "Hospital & Wellness Mobile Apps",
        company: "Invitrace Co., Ltd.",
        description:
          "Managed the end-to-end development process for a Hospital Mobile App, Home Monitoring, and a Wellness app.",
        tags: ["Product Management", "Mobile App", "Healthcare"],
        imageUrl: hupimage,
      },
      {
        title: "O2O Mobile App",
        company: "True Digital Group Co., Ltd.",
        description:
          "Served as Senior Product Owner, prioritizing the backlog and managing cross-functional teams to deliver an Online-to-Offline mobile application.",
        tags: ["Product Owner", "E-commerce", "Agile"],
        imageUrl: o2oImage,
      },
      {
        title: "NTL Mobile App & Middleware",
        company: "Ngern Tid Lor PCL",
        description:
          "Drove the delivery of a mobile application and middleware services. Acted as Scrum Master and designed API specifications.",
        tags: ["Product Owner", "Fintech", "Scrum Master", "API Design"],
        imageUrl: ntlimage,
      },
      {
        title: "PRINC Mobile & Telemedicine App",
        company: "MEDCury Co., Ltd.",
        description:
          "Developed product roadmap, worked with UX/UI designers, and facilitated scrum activities for telemedicine and hospital apps.",
        tags: ["Product Owner", "Telemedicine", "UX/UI"],
        imageUrl: princimage,
      },
      {
        title: "Hospital Information System (HIS) Implementation",
        company: "Queen Sirikit National Institute of Child Health",
        description:
          "Implemented a Hospital Information System (HIS) and prepared key software development documentation like BRD and Wireframes.",
        tags: ["Business Analyst", "QA", "HIS", "Healthcare"],
        imageUrl: hisImage,
      },
      {
        title: "Web Development & Server Management",
        company: "Institute of Dermatology",
        description:
          "Developed web applications (CRUD & Reports) and managed web server installation, customization, and maintenance on Windows & Ubuntu.",
        tags: ["Web Developer", "System Analyst", "Web Server"],
        imageUrl: webImage,
      },
    ],
    skills: {
      "Product & Management": "Product & Management",
      "Technical & QA": "Technical & QA",
      skillList: {
        "Product & Management": [
          "UX Research",
          "Jira",
          "Product Management",
          "Test Management",
          "Defect Reporting",
          "Communication",
          "Teamwork",
          "Agile",
          "Scrum",
        ],
        "Technical & QA": [
          "Robot Framework",
          "Playwright",
          "Postman",
          "API Testing",
          "Node.js",
          "React",
          "Functional Testing",
          "System Analysis",
        ],
      },
    },
    footer: "Built with React & Ant Design",
    langButton: "ENG",
  },
  th: {
    personalInfo: {
      name: "ปัญจะ ศศิธรวัณณ์",
      title: "Product Owner & QA Engineer",
      summary:
        "มืออาชีพผู้มีความมุ่งมั่นและใส่ใจในรายละเอียด มีประสบการณ์กว้างขวางด้านการจัดการผลิตภัณฑ์ การประกันคุณภาพซอฟต์แวร์ และการวิเคราะห์ระบบ มีความสามารถในการนำทีมแบบ cross-functional, จัดการ product backlog และส่งมอบผลิตภัณฑ์ดิจิทัลคุณภาพสูงในสภาพแวดล้อมแบบ Agile",
      email: "panja.sasithonwan@gmail.com",
      phone: "097-171-0031",
      linkedin: "https://www.linkedin.com/in/panja-sasithonwan-265a1219a/",
      profilePicture: ps, // Placeholder image for profile
    },
    menuItems: [
      { key: "about", icon: <UserOutlined />, label: "เกี่ยวกับฉัน" },
      { key: "experience", icon: <LaptopOutlined />, label: "ประสบการณ์" },
      { key: "portfolio", icon: <ProjectOutlined />, label: "ผลงาน" },
      { key: "skills", icon: <ToolOutlined />, label: "ทักษะ" },
      { key: "contact", icon: <PhoneOutlined />, label: "ติดต่อ" },
    ],
    sectionTitles: {
      experience: "ประสบการณ์ทำงาน",
      portfolio: "ผลงานและโปรเจกต์",
      skills: "ทักษะ",
      contact: "ติดต่อฉัน",
    },
    contactButtons: {
      copyEmail: "panja.sasithonwan@gmail.com",
      linkedin: "ลิงก์ดอิน",
      copied: "คัดลอกอีเมลแล้ว!",
      copyFailed: "ไม่สามารถคัดลอกอีเมลได้",
    },
    contactSection: {
      intro:
        "ผมพร้อมเสมอที่จะพูดคุยเกี่ยวกับโปรเจกต์ใหม่ๆ, ไอเดียสร้างสรรค์ หรือโอกาสในการร่วมงานกับทีมที่ยอดเยี่ยม",
      linkedin: "โปรไฟล์ลิงก์ดอิน",
    },
    experiences: [
      {
        date: "มี.ค. - พ.ค. 2568",
        title: "Product Owner Manager (Consult)",
        company: "บริษัท อินวิเทรซ จำกัด",
        details:
          "ให้คำปรึกษาในการพัฒนาระบบสารสนเทศโรงพยาบาล (HIS) ใหม่, กำหนดขอบเขตของผลิตภัณฑ์ และวางแผนการพัฒนาเป็นระยะ",
      },
      {
        date: "ก.พ. - ก.ค. 2567",
        title: "Lead Quality Assurance Engineer",
        company: "บริษัท อีเมทเวิร์คส์ จำกัด",
        details:
          "รับผิดชอบการออกแบบและดำเนินการทดสอบซอฟต์แวร์สำหรับเว็บและแอปพลิเคชันมือถือ (Functional & API testing) และจัดการทดสอบ SIT/UAT",
      },
      {
        date: "ม.ค. - มิ.ย. 2566",
        title: "Lead Product Manager",
        company: "บริษัท อินวิเทรซ จำกัด",
        details:
          "นำการพัฒนาแอปพลิเคชันมือถือสำหรับโรงพยาบาลและระบบติดตามผู้ป่วยที่บ้าน รวบรวมความต้องการ ทำงานร่วมกับดีไซเนอร์ และวิเคราะห์ข้อมูลผู้ใช้",
      },
      {
        date: "ก.ค. - พ.ย. 2565",
        title: "Senior Product Owner",
        company: "บริษัท ทรู ดิจิทัล กรุ๊ป จำกัด",
        details:
          "บริหารจัดการแอปพลิเคชัน O2O, จัดลำดับความสำคัญของ product backlog และบริหารทีม cross-functional และ vendor",
      },
      {
        date: "มี.ค. 2564 - มิ.ย. 2565",
        title: "Senior Product Owner",
        company: "บริษัท เงินติดล้อ จำกัด (มหาชน)",
        details:
          "ออกแบบ functional และ API spec สำหรับ Middleware และแอป NTL Mobile, ทำหน้าที่ Scrum Master และจัดการการวางแผนโปรเจกต์",
      },
      {
        date: "ม.ค. 2563 - ก.พ. 2564",
        title: "Product Owner",
        company: "บริษัท เมดเคอรี่ จำกัด",
        details:
          "จัดการ product roadmap สำหรับแอป PRINC Mobile และแอป Telemedicine, จัดทำ user stories และทำหน้าที่ Scrum Master",
      },
      {
        date: "เม.ย. 2557 - ต.ค. 2562",
        title: "Business Analyst & Quality Assurance",
        company: "สถาบันสุขภาพเด็กแห่งชาติมหาราชินี",
        details:
          "ติดตั้งและดูแลระบบสารสนเทศโรงพยาบาล (HIS) และจัดทำเอกสาร BRD และ Wireframe",
      },
      {
        date: "พ.ค. 2554 - มี.ค. 2557",
        title: "Web developer & System analyst",
        company: "สถาบันโรคผิวหนัง",
        details:
          "พัฒนาและบำรุงรักษาเว็บเซิร์ฟเวอร์และแอปพลิเคชัน, รวบรวมความต้องการของผู้ใช้ และจัดอบรม",
      },
    ],
    projects: [
      {
        title: "ระบบสารสนเทศโรงพยาบาล (HIS) ใหม่",
        company: "บริษัท อินวิเทรซ จำกัด",
        description:
          "ให้คำปรึกษาในการพัฒนาระบบ HIS ใหม่, กำหนดขอบเขตผลิตภัณฑ์ และจัดลำดับความสำคัญของฟีเจอร์เพื่อส่งมอบคุณค่าอย่างต่อเนื่อง",
        tags: ["Product Owner", "ที่ปรึกษา", "Healthcare", "HIS"],
        imageUrl: hisSystemImage,
      },
      {
        title: "CRM, CHAT Center, Mobile App",
        company: "บริษัท อีเมทเวิร์คส์ จำกัด",
        description:
          "นำทีม QA สำหรับชุดแอปพลิเคชันธุรกิจ, รวมถึงการออกแบบ test cases, การทดสอบ functional/API และการจัดการ UAT",
        tags: ["QA Lead", "CRM", "API Testing", "Mobile"],
        imageUrl: crmImage,
      },
      {
        title: "แอปพลิเคชันโรงพยาบาลและสุขภาพ",
        company: "บริษัท อินวิเทรซ จำกัด",
        description:
          "จัดการกระบวนการพัฒนาตั้งแต่ต้นจนจบสำหรับแอปโรงพยาบาล, ระบบติดตามผู้ป่วยที่บ้าน และแอปสุขภาพ",
        tags: ["Product Management", "Mobile App", "Healthcare"],
        imageUrl: hupimage,
      },
      {
        title: "แอปพลิเคชัน O2O",
        company: "บริษัท ทรู ดิจิทัล กรุ๊ป จำกัด",
        description:
          "ทำหน้าที่ Senior Product Owner, จัดลำดับความสำคัญของ backlog และจัดการทีม cross-functional เพื่อส่งมอบแอปพลิเคชัน Online-to-Offline",
        tags: ["Product Owner", "E-commerce", "Agile"],
        imageUrl: o2oImage,
      },
      {
        title: "แอป NTL และ Middleware",
        company: "บมจ. เงินติดล้อ",
        description:
          "ขับเคลื่อนการส่งมอบแอปพลิเคชันมือถือและบริการ middleware, ทำหน้าที่ Scrum Master และออกแบบ API specifications",
        tags: ["Product Owner", "Fintech", "Scrum Master", "API Design"],
        imageUrl: ntlimage,
      },
      {
        title: "แอป PRINC และ Telemedicine",
        company: "บริษัท เมดเคอรี่ จำกัด",
        description:
          "พัฒนา product roadmap, ทำงานร่วมกับนักออกแบบ UX/UI และอำนวยความสะดวกในกิจกรรม scrum สำหรับแอป telemedicine และโรงพยาบาล",
        tags: ["Product Owner", "Telemedicine", "UX/UI"],
        imageUrl: princimage,
      },
      {
        title: "การติดตั้งระบบสารสนเทศโรงพยาบาล (HIS)",
        company: "สถาบันสุขภาพเด็กแห่งชาติมหาราชินี",
        description:
          "ติดตั้งระบบสารสนเทศของโรงพยาบาล (HIS) และจัดทำเอกสารสำคัญสำหรับการพัฒนาซอฟต์แวร์ เช่น BRD และ Wireframes",
        tags: ["Business Analyst", "QA", "HIS", "Healthcare"],
        imageUrl: hisImage,
      },
      {
        title: "การพัฒนาเว็บและจัดการเซิร์ฟเวอร์",
        company: "สถาบันโรคผิวหนัง",
        description:
          "พัฒนาเว็บแอปพลิเคชัน (CRUD & Reports) และจัดการการติดตั้ง, ปรับแต่ง, และบำรุงรักษาเว็บเซิร์ฟเวอร์บน Windows & Ubuntu",
        tags: ["Web Developer", "System Analyst", "Web Server"],
        imageUrl: webImage,
      },
    ],
    skills: {
      "Product & Management": "การจัดการผลิตภัณฑ์และบริหาร",
      "Technical & QA": "ทักษะทางเทคนิคและคุณภาพ",
      skillList: {
        "Product & Management": [
          "UX Research",
          "Jira",
          "Product Management",
          "Test Management",
          "Defect Reporting",
          "Communication",
          "Teamwork",
          "Agile",
          "Scrum",
        ],
        "Technical & QA": [
          "Robot Framework",
          "Playwright",
          "Postman",
          "API Testing",
          "Node.js",
          "React",
          "Functional Testing",
          "System Analysis",
        ],
      },
    },
    footer: "สร้างสรรค์ด้วย React & Ant Design",
    langButton: "ไทย",
  },
};

// --- Reusable Components ---
const HeroSection = ({ t, lang }) => {
  // Function to handle copying email to clipboard
  const handleCopyEmail = () => {
    const textToCopy = t.email;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Make the textarea invisible
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        message.success(translations[lang].contactButtons.copied);
      } else {
        message.error(translations[lang].contactButtons.copyFailed);
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
      message.error(translations[lang].contactButtons.copyFailed);
    }

    document.body.removeChild(textArea);
  };

  return (
    <Row align="middle" className="hero-section" id="about">
      <Col xs={24} md={8} style={{ textAlign: "center" }}>
        <Avatar
          size={180}
          src={t.profilePicture}
          alt={t.name}
          className="hero-avatar"
        />
      </Col>
      <Col xs={24} md={16}>
        <Title level={2} className="hero-name">
          {t.name}
        </Title>
        <Title level={4} className="hero-title">
          {t.title}
        </Title>
        <Paragraph className="hero-summary">{t.summary}</Paragraph>
        <div className="contact-buttons">
          <Button
            type="primary"
            icon={<CopyOutlined />}
            onClick={handleCopyEmail}
          >
            {translations[lang].contactButtons.copyEmail}
          </Button>
          <Button icon={<LinkedinOutlined />} href={t.linkedin} target="_blank">
            {translations[lang].contactButtons.linkedin}
          </Button>
          {/* <Button icon={<PhoneOutlined />}>{t.phone}</Button> */}
        </div>
      </Col>
    </Row>
  );
};

const ExperienceSection = ({ t }) => (
  <div className="section" id="experience">
    <Title level={2} className="section-title">
      {t.sectionTitles.experience}
    </Title>
    <Timeline mode="alternate">
      {t.experiences.map((exp, index) => (
        <Timeline.Item key={index} label={<Text strong>{exp.date}</Text>}>
          <Title level={5} className="timeline-item-title">
            {exp.title}
          </Title>
          <Text strong className="timeline-item-company">
            {exp.company}
          </Text>
          <Paragraph>{exp.details}</Paragraph>
        </Timeline.Item>
      ))}
    </Timeline>
  </div>
);

const PortfolioSection = ({ t }) => {
  const cardTitle = (project) => (
    <div>
      <Title
        level={5}
        style={{
          margin: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {project.title}
      </Title>
      <Text type="secondary">{project.company}</Text>
    </div>
  );

  return (
    <div className="section" id="portfolio">
      <Title level={2} className="section-title">
        {t.sectionTitles.portfolio}
      </Title>
      <Row gutter={[24, 24]}>
        {t.projects.map((project, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              className="portfolio-card"
              cover={<img alt={project.title} src={project.imageUrl} />}
            >
              <Card.Meta
                title={cardTitle(project)}
                description={
                  <>
                    <Paragraph
                      className="portfolio-description"
                      style={{ marginTop: "12px" }}
                    >
                      {project.description}
                    </Paragraph>
                    <div>
                      {project.tags.map((tag) => (
                        <Tag color="blue" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const SkillsSection = ({ t }) => (
  <div className="section" id="skills">
    <Title level={2} className="section-title">
      {t.sectionTitles.skills}
    </Title>
    <Row gutter={[24, 24]}>
      {Object.entries(t.skills.skillList).map(([categoryKey, skillList]) => (
        <Col xs={24} md={12} key={categoryKey}>
          <Card title={t.skills[categoryKey]} className="skill-card">
            {skillList.map((skill) => (
              <Tag className="skill-tag" key={skill}>
                {skill}
              </Tag>
            ))}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

const ContactSection = ({ t, lang }) => {
  const handleCopy = (textToCopy) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        message.success(translations[lang].contactButtons.copied);
      } else {
        message.error(translations[lang].contactButtons.copyFailed);
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
      message.error(translations[lang].contactButtons.copyFailed);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="section contact-section" id="contact">
      <Title level={2} className="section-title">
        {t.sectionTitles.contact}
      </Title>
      <Paragraph>{t.contactSection.intro}</Paragraph>
      <div className="contact-info">
        {/* <Paragraph>
          <PhoneOutlined /> {t.personalInfo.phone}
        </Paragraph> */}
        <Paragraph>
          <CopyOutlined />{" "}
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              handleCopy(t.personalInfo.email);
            }}
          >
            {t.personalInfo.email}
          </a>
        </Paragraph>
        <Paragraph>
          <LinkedinOutlined />{" "}
          <a
            href={t.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contactSection.linkedin}
          </a>
        </Paragraph>
      </div>
    </div>
  );
};

// --- Main App Component ---
const App = () => {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleMenuClick = ({ key }) => {
    const element = document.getElementById(key);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const LanguageSwitcher = () => (
    <div className="language-switcher-container">
      <Button
        className="language-button"
        onClick={() => setLanguage((lang) => (lang === "en" ? "th" : "en"))}
      >
        {language === "en" ? <UkFlagIcon /> : <ThaiFlagIcon />}
        <span>{t.langButton}</span>
      </Button>
    </div>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="header-content">
          <div className="logo">
            <Text strong style={{ color: "white" }}>
              P.S. Portfolio
            </Text>
          </div>
          <div className="header-right-section">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["about"]}
              onClick={handleMenuClick}
              className="desktop-menu"
              items={t.menuItems}
            />
            <LanguageSwitcher />
          </div>
        </div>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">
          <HeroSection t={t.personalInfo} lang={language} />
          <Divider />
          <ExperienceSection t={t} />
          <Divider />
          <PortfolioSection t={t} />
          <Divider />
          <SkillsSection t={t} />
          <Divider />
          <ContactSection t={t} lang={language} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {t.personalInfo.name} ©{new Date().getFullYear()} | {t.footer}
      </Footer>
    </Layout>
  );
};

export default App;
