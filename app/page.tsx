"use client";

import Image, { type StaticImageData } from "next/image";
import {
  ArrowDownRight, ArrowUpRight, Check, CirclePlay, Clock, Code2, Command, Copy, ExternalLink,
  FileDown, Github, Globe2, GraduationCap, Languages, Mail, MapPin, Maximize2, Menu, Moon,
  MoveUpRight, Search, Sparkles, Sun, Terminal, Trophy, X,
} from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import avatar from "./Image/avatar.jpg";
import surfPrize from "./Image/cuộc thi (1).jpg";
import agentsTeam from "./Image/cuộc thi 2.jpg";
import agentsStage from "./Image/cuộc thi 3.jpg";
import surfTeam from "./Image/cuộc thi 4.jpg";
import researchPrize from "./Image/cuộc thi 5.jpg";
import svTheHeMoi from "./Image/Sinh viên thé hệ trẻ.jpg";
import signsoundShot from "./Image/Signsound.jpg";
import cinemaShot from "./Image/Ảnh web/Ảnh chụp màn hình 2025-12-01 163811.png";
import plantsShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-06-03 232448.png";
import sportsShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-10-08 202931.png";
import connectShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-10-08 203502.png";
import analystShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-10-08 203549.png";

type Language = "en" | "vi";
type Theme = "dark" | "light";

const techList = [
  {
    name: "Next.js",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="currentColor" />
        <path d="M149.508 157.438L69.1055 54.0001H54V125.992H66.0759V69.4589L139.99 164.849C143.342 162.603 146.524 160.124 149.508 157.438Z" fill="var(--page)" />
        <rect x="115" y="54" width="12" height="72" fill="var(--page)" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M11.914 2C6.98 2 7.28 4.14 7.28 4.14L7.29 6.36H12v.74H4.57S2 6.8 2 11.75c0 4.95 2.24 4.77 2.24 4.77h1.34v-2.26s-.07-2.69 2.65-2.69h4.58s2.57.04 2.57-2.52V4.57S15.93 2 11.914 2zM9.5 3.65a.77.77 0 1 1 0 1.54.77.77 0 0 1 0-1.54z" fill="#387EB8" />
        <path d="M12.086 22c4.934 0 4.634-2.14 4.634-2.14l-.01-2.22H12v-.74h7.43s2.57.3 2.57-4.65c0-4.95-2.24-4.77-2.24-4.77h-1.34v2.26s.07 2.69-2.65 2.69h-4.58s-2.57-.04-2.57 2.52v4.48s-.55 2.57 3.466 2.57zm2.414-1.65a.77.77 0 1 1 0-1.54.77.77 0 0 1 0 1.54z" fill="#FFE052" />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M8.8 19.3c3.2.3 6.1-.2 8.3-1.4 0 0-.8.6-2.4 1-3.6 1-8.5.7-10.3-.2 0 0 1.2.4 4.4.6z" fill="#E76F00"/>
        <path d="M7.7 17c2.8.3 5.4-.1 7.4-1.2 0 0-.7.5-2.1.9-3.2.9-7.5.6-9.1-.1 0 0 1.1.3 3.8.4z" fill="#E76F00"/>
        <path d="M12.6 12.3c1.6 1.7.4 3.3.4 3.3s1.2-.7 1-2.2c-.3-1.6-2.1-2.4-1.4-4 0 0-2.3 1-1.3 2.9h1.3z" fill="#5382A1"/>
        <path d="M15.5 14.8c2.6-1.5 1.4-4.1.6-4.9 0 0 .5.7.1 1.7-.5 1.1-1.7 1.8-2 2.7-.2.6.1 1 .5 1.3 0 0-.2-.3.8-.8z" fill="#5382A1"/>
        <path d="M6.2 21.6c4.6.4 9.1-.2 12.4-1.8 0 0-1.3.8-3.7 1.4-5.3 1.3-12.7.9-15.3-.3 0 0 1.8.5 6.6.7z" fill="#E76F00"/>
      </svg>
    ),
  },
  {
    name: "Data Analysis",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" stroke="#34D399" />
        <path d="m19 9-5 5-4-4-3 3" stroke="#38BDF8" />
        <circle cx="19" cy="9" r="1.5" fill="#38BDF8" />
        <circle cx="14" cy="14" r="1.5" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#F43F5E" />
      </svg>
    ),
  },
];
const projectMedia = { signsound: signsoundShot, cinema: cinemaShot, plants: plantsShot, sports: sportsShot, connect: connectShot, analyst: analystShot } satisfies Record<string, StaticImageData>;
const competitionMedia = [surfPrize, svTheHeMoi, agentsTeam, agentsStage, surfTeam, researchPrize];
const projectMeta = {
  signsound: { category: "ai", stack: ["Assistive AI", "AR Glasses", "WebRTC", "Python"], links: [] },
  cinema: { category: "product", stack: ["Next.js", "Cinema OS", "Booking flow"], links: [] },
  plants: { category: "fullstack", stack: ["Next.js", "Java Spring", "SQL Server"], links: [{ label: "GitHub", href: "https://github.com/m-chien/TreeAffiliateWebsite", kind: "github" }] },
  sports: { category: "product", stack: ["React", "E-commerce", "Tailwind CSS"], links: [] },
  connect: { category: "fullstack", stack: ["Next.js", "WebSockets", "Java"], links: [{ label: "GitHub", href: "https://github.com/m-chien/messenger-web", kind: "github" }] },
  analyst: { category: "ai", stack: ["Next.js", "AI Workspace", "PostgreSQL"], links: [{ label: "GitHub", href: "https://github.com/m-chien/AI-Requirements-Analyst", kind: "github" }, { label: "Live demo", href: "https://ai-requirements-analyst-sqyt.vercel.app/", kind: "demo" }] },
} as const;

const projectFilters = {
  en: [
    { key: "all", label: "All Projects" },
    { key: "ai", label: "AI & Innovation" },
    { key: "fullstack", label: "Full-stack Systems" },
    { key: "product", label: "Web Experiences" },
  ],
  vi: [
    { key: "all", label: "Tất cả dự án" },
    { key: "ai", label: "AI & Đổi mới sáng tạo" },
    { key: "fullstack", label: "Full-stack & Hệ thống" },
    { key: "product", label: "Trải nghiệm Web" },
  ],
} as const;

const copy = {
  en: {
    nav: ["Work", "Roadmap", "Story", "Awards", "Contact"], talk: "Let's talk", menu: "Open menu", light: "Use light mode", dark: "Use dark mode", switchLanguage: "Chuyển sang tiếng Việt",
    availability: "Seeking Software / Web Dev Internship", heroTitle: "THINK DEEP.", heroHighlight: "BUILD SMART.", heroEnd: "SCALE FURTHER.",
    intro: "Tran Minh Chien — an Information Technology student at The University of Danang – University of Technology and Education, building reliable web experiences and intelligent systems.", play: "Play projects", contact: "Contact me", downloadCV: "Download CV", scroll: "Scroll to explore",
    profileRole: "IT Student · UTE, Da Nang", profileStatus: "Building with intent", dashboardLabel: "DIGITAL PROFILE / LIVE", dashboardTitle: "Experience score", dashboardSystem: "Systems", dashboardSignals: ["Interface", "Data", "Motion"], dashboardSignal: "Signal", optimal: "Optimal", dashboardPulse: "PROJECT PULSE", dashboardBuild: "BUILD STATUS", dashboardDeploy: "Deploying ideas",
    selectedKicker: "Selected transmissions", selectedTitle: "Ideas with a", selectedHighlight: "pulse.", selectedText: "A selection of systems that turn emerging technology into more intuitive human experiences.",
    projects: [
      { type: "Assistive AI · Extended Reality", name: "SignSound", badge: "SURF 2026 First Prize", description: "An assistive communication ecosystem pairing AR glasses with AI-powered video meetings, designed to make conversations more inclusive." },
      { type: "Web platform · Product systems", name: "ChienCINEMA", badge: "Cinema OS", description: "A complete cinema ticket-booking experience with streamlined discovery, reservations, and management." },
      { type: "Full-stack · Team project", name: "TreeAffiliate Website", badge: "Full-stack contribution", description: "A team affiliate platform where I contributed across the Next.js frontend and Java backend, from interface flow to data-backed features." },
      { type: "E-commerce · Responsive web", name: "SuperSports", badge: "Retail experience", description: "A high-energy sports retail storefront built around clear navigation and quick product discovery." },
      { type: "Personal project · Real-time web", name: "Real-time Connect", badge: "Personal project", description: "A personal real-time messaging and video-calling application built to make conversations immediate, clear, and seamless." },
      { type: "Personal project · AI workspace", name: "AI Requirements Analyst", badge: "Personal project", description: "A personal AI-powered workspace for organizing requirements, clarifying questions, and keeping project work moving." },
    ],
    journeyKicker: "Career & Academic Roadmap", journeyTitle: "From Curiosity to", journeyHighlight: "Breakthroughs.", journeyText: "Key milestones in software engineering, competitive hackathons, and high-impact innovation.",
    milestones: [
      { period: "2023 – 2024", role: "Core Foundations & Algorithmic Thinking", organization: "The University of Danang – UTE", description: "Deep-dived into Data Structures & Algorithms, Object-Oriented Programming (Java), and Database Design (SQL Server / PostgreSQL). Built foundational web systems and developed clean architectural habits.", tags: ["Java", "OOP", "SQL Server", "Algorithms"], highlight: "Academic Core" },
      { period: "2024 – 2025", role: "Full-stack Systems & Competitive Podiums", organization: "Global Hackathon & National Competitions", description: "Competed in the global 'Agents, Everywhere' Hackathon securing both Team Podium and Runner-up. Contributed Full-stack Next.js and Java logic for TreeAffiliate, ChienCINEMA, and advanced to the Top 8 nationwide in VTV3's 'New Generation Students'.", tags: ["Next.js", "Java Spring", "Full-stack", "VTV3 Top 8"], highlight: "Top 8 Nationwide" },
      { period: "2025 – 2026", role: "Deep Tech Research & Ecosystem Innovation", organization: "SignSound Ecosystem · Assistive AI", description: "Co-created SignSound — an assistive communication ecosystem pairing AR smart glasses with AI-powered video conferencing. Won First Prize at the SURF 2026 Startup Innovation Festival and the Special Prize in Student Scientific Research.", tags: ["Assistive AI", "AR Glasses", "SURF First Prize", "Research"], highlight: "SURF 2026 Champion" },
      { period: "Present & Target", role: "Software / Web Developer Internship", organization: "Ready for High-Impact Industry Teams", description: "Seeking a Software / Web Development internship to contribute clean, reliable code, build production-ready systems, and push intelligent digital products further.", tags: ["Seeking Internship", "Full-stack Ready", "Fast Learner"], highlight: "Available Now" },
    ],
    storyKicker: "The person behind the pixels", storyTitle: "Technology feels most powerful when it makes people feel", storyHighlight: "understood.", storyText: "I'm an Information Technology student at The University of Danang – University of Technology and Education, focused on software and web development. I enjoy taking an idea from interface decisions through backend logic and database design, then refining it into a product that feels clear and useful.", portraitLabel: "Tran Minh Chien", portraitNote: "Information Technology · UTE, Da Nang", aboutTags: ["Seeking Internship", "Next.js + Java", "SQL Server / PostgreSQL", "Full-stack Development"],
    awardsKicker: "Competition logbook", awardsTitle: "Building, learning,", awardsHighlight: "showing up.", awardsText: "Moments from hackathons, innovation festivals, and research competitions that shaped how I collaborate and create.", awards: [["SURF 2026", "First Prize · Student category"], ["Sinh Vien The He Moi", "Top 8 Nationwide · VTV3"], ["Agents, Everywhere", "Global Hackathon · Team podium"], ["Agents, Everywhere", "Global Hackathon · Runner up"], ["SURF 2026", "Innovation Startup Festival"], ["Student Research", "Special Prize · 2025–2026"]],
    footerStatus: "Available for internships & collaborations", footerTitle: "Let's make the next", footerHighlight: "frame", footerEnd: "count.", start: "Start a conversation", built: "Built in motion", close: "Close image preview",
  },
  vi: {
    nav: ["Dự án", "Lộ trình", "Câu chuyện", "Thành tích", "Liên hệ"], talk: "Liên hệ", menu: "Mở menu", light: "Chuyển sang giao diện sáng", dark: "Chuyển sang giao diện tối", switchLanguage: "Switch to English",
    availability: "Đang tìm cơ hội thực tập Software / Web Developer", heroTitle: "TƯ DUY SÂU.", heroHighlight: "XÂY DỰNG THÔNG MINH.", heroEnd: "VƯƠN XA HƠN.",
    intro: "Trần Minh Chiến — sinh viên ngành Công nghệ Thông tin tại Đại học Sư phạm Kỹ thuật – Đại học Đà Nẵng, xây dựng những trải nghiệm web đáng tin cậy và hệ thống thông minh.", play: "Xem dự án", contact: "Liên hệ với mình", downloadCV: "Tải CV", scroll: "Cuộn để khám phá",
    profileRole: "Sinh viên CNTT · UTE Đà Nẵng", profileStatus: "Xây dựng có chủ đích", dashboardLabel: "HỒ SƠ SỐ / TRỰC TUYẾN", dashboardTitle: "Điểm trải nghiệm", dashboardSystem: "Năng lực", dashboardSignals: ["Giao diện", "Dữ liệu", "Chuyển động"], dashboardSignal: "Tín hiệu", optimal: "Tối ưu", dashboardPulse: "NHỊP DỰ ÁN", dashboardBuild: "TRẠNG THÁI XÂY DỰNG", dashboardDeploy: "Triển khai ý tưởng",
    selectedKicker: "Dự án tiêu biểu", selectedTitle: "Ý tưởng có", selectedHighlight: "nhịp đập.", selectedText: "Những hệ thống biến công nghệ mới thành trải nghiệm trực quan và gần gũi hơn với con người.",
    projects: [
      { type: "AI hỗ trợ · Thực tế mở rộng", name: "SignSound", badge: "Giải Nhất SURF 2026", description: "Hệ sinh thái giao tiếp hỗ trợ kết hợp kính AR và họp video AI, giúp những cuộc trò chuyện trở nên dễ tiếp cận hơn." },
      { type: "Nền tảng web · Hệ thống sản phẩm", name: "ChienCINEMA", badge: "Cinema OS", description: "Trải nghiệm đặt vé xem phim hoàn chỉnh, tối ưu khám phá phim, đặt chỗ và quản lý." },
      { type: "Full-stack · Dự án nhóm", name: "TreeAffiliate Website", badge: "Đóng góp full-stack", description: "Nền tảng affiliate làm cùng nhóm, nơi mình đóng góp cả Next.js frontend lẫn Java backend — từ luồng giao diện đến các tính năng gắn với dữ liệu." },
      { type: "Thương mại điện tử · Web responsive", name: "SuperSports", badge: "Trải nghiệm bán lẻ", description: "Cửa hàng thể thao giàu năng lượng với điều hướng rõ ràng và tìm kiếm sản phẩm nhanh chóng." },
      { type: "Dự án cá nhân · Web thời gian thực", name: "Real-time Connect", badge: "Dự án cá nhân", description: "Ứng dụng nhắn tin và gọi video thời gian thực cá nhân, tập trung vào trải nghiệm trò chuyện trực quan, liền mạch." },
      { type: "Dự án cá nhân · Không gian AI", name: "AI Requirements Analyst", badge: "Dự án cá nhân", description: "Không gian làm việc hỗ trợ bởi AI do mình phát triển để quản lý yêu cầu, câu hỏi làm rõ và thúc đẩy tiến độ dự án." },
    ],
    journeyKicker: "Lộ trình học tập & Dấu mốc", journeyTitle: "Từ nền tảng kỹ thuật đến", journeyHighlight: "bứt phá thực chiến.", journeyText: "Những dấu mốc định hình tư duy giải quyết vấn đề, kinh nghiệm xây dựng sản phẩm và thành tích thi đấu.",
    milestones: [
      { period: "2023 – 2024", role: "Nền tảng Kỹ thuật & Tư duy Thuật toán", organization: "ĐH Sư phạm Kỹ thuật – ĐH Đà Nẵng (UTE)", description: "Nghiên cứu chuyên sâu Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng (Java), Cơ sở dữ liệu quan hệ (SQL Server, PostgreSQL). Xây dựng ứng dụng web nền tảng và rèn luyện thói quen clean code.", tags: ["Java", "OOP", "SQL Server", "Thuật toán"], highlight: "Nền tảng học thuật" },
      { period: "2024 – 2025", role: "Hệ thống Full-stack & Đấu trường Cuộc thi", organization: "Hackathon Quốc tế & Sân chơi Toàn quốc", description: "Tham gia Hackathon toàn cầu 'Agents, Everywhere' đạt Podium và giải Á quân. Đóng góp full-stack Next.js và Java cho TreeAffiliate, ChienCINEMA, đồng thời xuất sắc lọt vào Top 8 Toàn quốc chương trình 'Sinh viên Thế hệ mới' trên VTV3.", tags: ["Next.js", "Java Spring", "Full-stack", "VTV3 Top 8"], highlight: "Top 8 Toàn quốc" },
      { period: "2025 – 2026", role: "Nghiên cứu Công nghệ cao & Đổi mới Sáng tạo", organization: "Hệ sinh thái SignSound · Assistive AI", description: "Đồng sáng lập & phát triển SignSound — giải pháp hỗ trợ giao tiếp tích hợp kính AR thông minh và họp video AI. Xuất sắc đạt Giải Nhất cuộc thi khởi nghiệp đổi mới sáng tạo SURF 2026 và Giải Đặc biệt Nghiên cứu Khoa học Sinh viên.", tags: ["Assistive AI", "Kính AR", "SURF Giải Nhất", "NCKH"], highlight: "SURF 2026 Quán quân" },
      { period: "Hiện tại & Mục tiêu", role: "Sẵn sàng Thực tập Software / Web Developer", organization: "Đóng góp giá trị thực tế cho Doanh nghiệp", description: "Sẵn sàng gia nhập đội ngũ kỹ thuật với vai trò thực tập sinh Web / Software Developer. Mong muốn đem tư duy giải quyết vấn đề, tinh thần trách nhiệm và tốc độ nắm bắt công nghệ mới vào các sản phẩm thực tế.", tags: ["Tìm kiếm thực tập", "Full-stack", "Học hỏi nhanh"], highlight: "Sẵn sàng ngay" },
    ],
    storyKicker: "Con người phía sau những pixel", storyTitle: "Công nghệ mạnh mẽ nhất khi khiến con người cảm thấy được", storyHighlight: "thấu hiểu.", storyText: "Mình là sinh viên ngành Công nghệ Thông tin tại Đại học Sư phạm Kỹ thuật – Đại học Đà Nẵng, định hướng Software và Web Development. Mình thích đi cùng một ý tưởng từ quyết định giao diện, logic backend và thiết kế cơ sở dữ liệu đến khi nó trở thành một sản phẩm rõ ràng, hữu ích.", portraitLabel: "Trần Minh Chiến", portraitNote: "Công nghệ Thông tin · UTE Đà Nẵng", aboutTags: ["Tìm cơ hội thực tập", "Next.js + Java", "SQL Server / PostgreSQL", "Phát triển Full-stack"],
    awardsKicker: "Dấu ấn cuộc thi", awardsTitle: "Xây dựng, học hỏi,", awardsHighlight: "không ngừng xuất hiện.", awardsText: "Những khoảnh khắc từ hackathon, lễ hội đổi mới sáng tạo và cuộc thi nghiên cứu đã định hình cách mình hợp tác và kiến tạo.", awards: [["SURF 2026", "Giải Nhất · Bảng sinh viên"], ["Sinh viên Thế hệ mới", "Top 8 Sinh viên Thế hệ mới · VTV3"], ["Agents, Everywhere", "Global Hackathon · Giải cùng đội"], ["Agents, Everywhere", "Global Hackathon · Á quân"], ["SURF 2026", "Lễ hội khởi nghiệp đổi mới sáng tạo"], ["Nghiên cứu sinh viên", "Giải Đặc biệt · 2025–2026"]],
    footerStatus: "Sẵn sàng thực tập & hợp tác", footerTitle: "Cùng tạo nên", footerHighlight: "dấu ấn", footerEnd: "tiếp theo.", start: "Bắt đầu trò chuyện", built: "Được tạo nên bằng chuyển động", close: "Đóng xem ảnh",
  },
} as const;

const projectKeys = ["signsound", "cinema", "plants", "sports", "connect", "analyst"] as const;
function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  y = 44,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function IconButton({ label, children, onClick }: { label: string; children: ReactNode; onClick: () => void }) {
  return <button type="button" aria-label={label} title={label} onClick={onClick} className="control-button grid h-9 w-9 place-items-center rounded-lg transition hover:-translate-y-0.5">{children}</button>;
}

function Nav({
  language,
  setLanguage,
  theme,
  setTheme,
  onOpenCmd,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  onOpenCmd: () => void;
}) {
  const [open, setOpen] = useState(false);
  const t = copy[language];
  const links = [
    [t.nav[0], "#projects"],
    [t.nav[1], "#journey"],
    [t.nav[2], "#about"],
    [t.nav[3], "#awards"],
    [t.nav[4], "#contact"],
  ] as const;
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="surface nav-glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-3 py-2.5 sm:px-5">
        <a href="#top" className="group flex items-center gap-2 text-sm font-semibold tracking-[.18em] text-[var(--text)]">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-400 text-[10px] font-black text-[#022013] shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-transform group-hover:scale-105">
            TC
          </span>
          <span className="hidden sm:block">CHIEN / 26</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="muted text-[11px] font-semibold uppercase tracking-[.14em] transition hover:text-[var(--text)]"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={onOpenCmd}
            aria-label="Command Palette"
            title={language === "vi" ? "Menu lệnh & Tìm kiếm nhanh (Ctrl + K)" : "Command Palette (Ctrl + K)"}
            className="control-button hidden sm:flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition"
          >
            <Command size={13} className="text-emerald-400" />
            <span className="font-mono text-[10px] font-semibold tracking-wider">Ctrl K</span>
          </button>

          <IconButton
            label={theme === "dark" ? t.light : t.dark}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </IconButton>

          <button
            type="button"
            aria-label={t.switchLanguage}
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="control-button flex h-9 items-center gap-1 rounded-lg px-2 text-[11px] font-bold"
          >
            <Languages size={15} />
            <span>{language === "en" ? "VI" : "EN"}</span>
          </button>

          <a
            href="#contact"
            className="emerald-link hidden items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold sm:flex transition hover:-translate-y-0.5"
          >
            {t.talk}
            <ArrowUpRight size={14} />
          </a>

          <IconButton label={t.menu} onClick={() => setOpen(!open)}>
            {open ? <X size={19} /> : <Menu size={20} />}
          </IconButton>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="surface nav-glass mx-auto mt-2 flex max-w-7xl flex-col rounded-2xl p-3 lg:hidden"
          >
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenCmd();
              }}
              className="mb-2 flex items-center justify-between rounded-lg bg-emerald-500/10 px-3 py-2.5 text-xs font-medium text-emerald-400"
            >
              <span className="flex items-center gap-2">
                <Command size={14} />
                <span>{language === "vi" ? "Menu lệnh & Tìm kiếm" : "Command Palette"}</span>
              </span>
              <span className="font-mono text-[10px] rounded border border-emerald-400/30 px-1.5 py-0.5">Ctrl K</span>
            </button>
            {links.map(([label, href]) => (
              <a
                onClick={() => setOpen(false)}
                key={label}
                href={href}
                className="muted rounded-lg px-3 py-3 text-sm transition hover:bg-black/[.06] hover:text-[var(--text)]"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


interface TechNode3D {
  x: number;
  y: number;
  z: number;
  label: string;
  tag: string;
  color: string;
}

const NODES_DATA: TechNode3D[] = [
  { x: 0, y: -210, z: 0, label: "Next.js 15", tag: "Full-stack Core", color: "#10b981" },
  { x: 175, y: -75, z: 95, label: "React 19", tag: "UI Ecosystem", color: "#38bdf8" },
  { x: -170, y: -70, z: 105, label: "Assistive AI", tag: "SURF 1st Prize", color: "#10b981" },
  { x: 120, y: 110, z: 140, label: "AR Glasses", tag: "SignSound Ecosystem", color: "#a855f7" },
  { x: -125, y: 115, z: 130, label: "Java Backend", tag: "System Logic", color: "#f97316" },
  { x: 185, y: 55, z: -85, label: "SQL Server", tag: "Database", color: "#3b82f6" },
  { x: -170, y: 50, z: -100, label: "PostgreSQL", tag: "Relational DB", color: "#06b6d4" },
  { x: 0, y: 200, z: -65, label: "TypeScript", tag: "Type-Safe", color: "#38bdf8" },
  { x: 105, y: -155, z: -95, label: "Framer Motion", tag: "Smooth 60fps", color: "#ec4899" },
  { x: -105, y: -145, z: -110, label: "WebSockets", tag: "Real-time Chat", color: "#34d399" },
  { x: 135, y: -125, z: 90, label: "Tailwind CSS", tag: "Modern Styling", color: "#38bdf8" },
  { x: -135, y: 130, z: -75, label: "Python AI", tag: "Intelligent Agent", color: "#fbbf24" },
];

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 7], [0, 10],
  [1, 3], [1, 5], [1, 8],
  [2, 3], [2, 4], [2, 9],
  [4, 6], [4, 7], [4, 11],
  [5, 6], [7, 8], [9, 11], [10, 8]
];

function Interactive3DTechSphere({ language, theme }: { language: Language; theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isVi = language === "vi";
  const isDark = theme === "dark";

  const rotRef = useRef({ x: 0.22, y: 0.35 });
  const velRef = useRef({ x: 0, y: 0.0028 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const hoveredNodeRef = useRef<number | null>(null);

  const particlesRef = useRef(
    Array.from({ length: 110 }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 210 + Math.random() * 40;
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        size: Math.random() * 2 + 0.8,
      };
    })
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let pulseT = 0;

    const render = () => {
      pulseT += 0.016;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;
      const fov = 560;

      if (!isDraggingRef.current) {
        velRef.current.x *= 0.94;
        velRef.current.y = velRef.current.y * 0.94 + 0.0028 * 0.06;
      }
      rotRef.current.x += velRef.current.x;
      rotRef.current.y += velRef.current.y;

      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);
      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);

      const project = (x: number, y: number, z: number) => {
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const scale = fov / (fov + z2 + 220);
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          scale,
          depth: z2,
        };
      };

      const ringLatitudes = [-0.72, -0.36, 0, 0.36, 0.72];
      const radius = 215;

      ctx.lineWidth = 1;
      ringLatitudes.forEach((lat) => {
        const ringR = radius * Math.cos(lat);
        const ringY = radius * Math.sin(lat);
        ctx.beginPath();
        for (let i = 0; i <= 44; i++) {
          const a = (i / 44) * Math.PI * 2;
          const rx = ringR * Math.cos(a);
          const rz = ringR * Math.sin(a);
          const pt = project(rx, ringY, rz);
          if (i === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = isDark
          ? `rgba(52, 211, 153, ${lat === 0 ? 0.28 : 0.12})`
          : `rgba(5, 150, 105, ${lat === 0 ? 0.32 : 0.16})`;
        ctx.stroke();
      });

      [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].forEach((lon) => {
        ctx.beginPath();
        for (let i = 0; i <= 44; i++) {
          const a = (i / 44) * Math.PI * 2;
          const rx = radius * Math.sin(a) * Math.cos(lon);
          const ry = radius * Math.cos(a);
          const rz = radius * Math.sin(a) * Math.sin(lon);
          const pt = project(rx, ry, rz);
          if (i === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(15, 23, 42, 0.08)";
        ctx.stroke();
      });

      particlesRef.current.forEach((p) => {
        const pt = project(p.x, p.y, p.z);
        const alpha = Math.max(0.12, (pt.depth + 220) / 440);
        ctx.beginPath();
        ctx.arc(pt.px, pt.py, p.size * pt.scale, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(167, 243, 208, ${alpha * 0.7})`
          : `rgba(5, 150, 105, ${alpha * 0.6})`;
        ctx.fill();
      });

      const projectedNodes = NODES_DATA.map((node, idx) => {
        const pt = project(node.x, node.y, node.z);
        return { ...node, ...pt, idx };
      });

      CONNECTIONS.forEach(([fromIdx, toIdx], cIdx) => {
        const n1 = projectedNodes[fromIdx];
        const n2 = projectedNodes[toIdx];
        if (!n1 || !n2) return;

        const avgDepth = (n1.depth + n2.depth) / 2;
        const lineAlpha = Math.max(0.12, (avgDepth + 220) / 440);

        ctx.beginPath();
        ctx.moveTo(n1.px, n1.py);
        ctx.lineTo(n2.px, n2.py);
        ctx.strokeStyle = isDark
          ? `rgba(52, 211, 153, ${lineAlpha * 0.42})`
          : `rgba(5, 150, 105, ${lineAlpha * 0.42})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        const packetOffset = ((pulseT + cIdx * 0.25) % 1);
        const packetX = n1.px + (n2.px - n1.px) * packetOffset;
        const packetY = n1.py + (n2.py - n1.py) * packetOffset;

        ctx.beginPath();
        ctx.arc(packetX, packetY, 2.6 * n1.scale, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#6ee7b7" : "#047857";
        ctx.shadowColor = isDark ? "#34d399" : "#059669";
        ctx.shadowBlur = isDark ? 9 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const sortedNodes = [...projectedNodes].sort((a, b) => a.depth - b.depth);

      sortedNodes.forEach((node) => {
        const isHovered = hoveredNodeRef.current === node.idx;
        const isFront = node.depth > -50;
        const baseRadius = (isHovered ? 8.5 : 5.8) * node.scale;

        if (isFront || isHovered) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, baseRadius * (isHovered ? 2.5 : 1.9), 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? "rgba(52, 211, 153, 0.16)"
            : "rgba(5, 150, 105, 0.14)";
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.px, node.py, baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isDark ? (isHovered ? 18 : 9) : 5;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (node.depth > -35 || isHovered) {
          ctx.font = `600 ${isHovered ? 12 : 11}px monospace`;
          const textWidth = ctx.measureText(node.label).width;
          const pillPad = 7;
          const pillH = 21;
          const pillX = node.px - textWidth / 2 - pillPad;
          const pillY = node.py - baseRadius - 25;

          ctx.fillStyle = isDark
            ? (isHovered ? "rgba(9, 22, 17, 0.95)" : "rgba(12, 16, 21, 0.9)")
            : (isHovered ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.92)");
          ctx.strokeStyle = isDark
            ? (isHovered ? "rgba(52, 211, 153, 0.85)" : "rgba(52, 211, 153, 0.35)")
            : (isHovered ? "rgba(5, 150, 105, 0.85)" : "rgba(15, 23, 42, 0.18)");
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.roundRect(pillX, pillY, textWidth + pillPad * 2, pillH, 5);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isDark ? "#f8fafc" : "#0f172a";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(node.label, node.px, pillY + pillH / 2);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isDark]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    velRef.current = { x: 0, y: 0 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (isDraggingRef.current) {
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      velRef.current = { x: -dy * 0.004, y: dx * 0.004 };
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    } else {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const fov = 560;
      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);
      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);

      let closestIdx: number | null = null;
      let closestDist = 28;

      NODES_DATA.forEach((node, idx) => {
        const x1 = node.x * cosY + node.z * sinY;
        const z1 = -node.x * sinY + node.z * cosY;
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;
        const scale = fov / (fov + z2 + 220);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;

        const dist = Math.hypot(px - mouseX, py - mouseY);
        if (dist < closestDist && z2 > -50) {
          closestDist = dist;
          closestIdx = idx;
        }
      });
      hoveredNodeRef.current = closestIdx;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex w-full max-w-[660px] lg:max-w-[720px] flex-col items-center justify-center select-none"
    >
      {/* Ambient Emerald Aura Behind the Free-Floating Sphere */}
      <div className="pointer-events-none absolute h-[460px] w-[460px] rounded-full bg-emerald-500/[0.12] blur-[110px] dark:bg-emerald-500/[0.18]" />

      {/* Free-floating 3D Interactive Canvas */}
      <div className="relative flex w-full items-center justify-center">
        <canvas
          ref={canvasRef}
          width={720}
          height={680}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="relative z-10 w-full max-w-[660px] aspect-[720/680] cursor-grab active:cursor-grabbing touch-none"
        />
      </div>

      {/* Sleek Floating Interaction Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-2 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/75 px-4 py-1.5 text-xs font-medium text-[var(--muted)] shadow-sm backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span>{isVi ? "Tương tác 3D Real-time · Kéo chuột hoặc chạm để xoay 360°" : "Live 3D Sphere · Drag or touch to rotate 360°"}</span>
      </motion.div>
    </motion.div>
  );
}

function DaNangClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono tabular-nums tracking-normal">
      {time || "03:00:00"} <span className="text-[9px] opacity-70">UTC+7</span>
    </span>
  );
}

function Hero({
  language,
  theme,
  onCopyEmail,
}: {
  language: Language;
  theme: Theme;
  onCopyEmail: () => void;
}) {
  const t = copy[language];
  const isVi = language === "vi";
  return (
    <section id="top" className="relative mx-auto grid min-h-[850px] max-w-7xl items-center gap-10 px-5 pb-24 pt-32 sm:px-7 lg:min-h-screen lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:px-10">
      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="availability inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
            {t.availability}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="surface inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium text-[var(--muted)]"
            title={isVi ? "Giờ địa phương Đà Nẵng, Việt Nam" : "Da Nang Local Time, Vietnam"}
          >
            <MapPin size={11} className="text-emerald-400" />
            <span>Đà Nẵng</span>
            <span className="text-[var(--border)]">·</span>
            <Clock size={11} className="text-emerald-400" />
            <DaNangClock />
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-[clamp(2.1rem,4.6vw,4.8rem)] font-black leading-[1.04] tracking-[-0.035em]"
        >
          {isVi ? (
            <>
              <span className="block whitespace-nowrap">TƯ DUY SÂU.</span>
              <span className="gradient-text block py-0.5 whitespace-nowrap">XÂY DỰNG</span>
              <span className="gradient-text block py-0.5 whitespace-nowrap">THÔNG MINH.</span>
              <span className="block whitespace-nowrap">VƯƠN XA HƠN.</span>
            </>
          ) : (
            <>
              <span className="block whitespace-nowrap">{t.heroTitle}</span>
              <span className="gradient-text block py-0.5 whitespace-nowrap">{t.heroHighlight}</span>
              <span className="block whitespace-nowrap">{t.heroEnd}</span>
            </>
          )}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .22, ease: [0.22, 1, 0.36, 1] }} className="muted mt-7 max-w-xl text-base leading-7 sm:text-lg">
          {t.intro}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .32, ease: [0.22, 1, 0.36, 1] }} className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="primary-link group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5">
            <CirclePlay size={18} fill="currentColor" />{t.play}
            <ArrowDownRight size={17} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className="surface group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-emerald-400/40"
            title="chientranminh355@gmail.com"
          >
            <Copy size={16} className="text-emerald-400 transition-transform group-hover:scale-110" />
            <span>{isVi ? "Sao chép Email" : "Copy Email"}</span>
          </button>
          <a href="/Tran-Minh-Chien-CV.pdf" download className="surface inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-emerald-400/40">
            <FileDown size={17} />{t.downloadCV}
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} className="muted mt-14 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.16em]">
          <span>{t.scroll}</span>
          <span className="h-px w-12 bg-[var(--border-strong)]" />
          <ArrowDownRight size={15} />
        </motion.div>
      </div>
      <Interactive3DTechSphere language={language} theme={theme} />
    </section>
  );
}

function TechMarquee() {
  return (
    <Reveal y={24} duration={0.65}>
      <section aria-label="Technology stack" className="marquee-section relative z-10 -mx-8 overflow-hidden py-4 sm:py-5">
        <div className="marquee-track flex gap-3 px-3">
          {[...techList, ...techList, ...techList, ...techList].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="tech-pill flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold shadow-sm transition hover:scale-105 hover:border-emerald-400/50"
            >
              {tech.icon}
              <span>{tech.name}</span>
              <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function FlagshipProjectCard({
  project,
  projectKey,
  image,
  language,
}: {
  project: (typeof copy.en.projects)[number] | (typeof copy.vi.projects)[number];
  projectKey: keyof typeof projectMeta;
  image: StaticImageData;
  language: Language;
}) {
  const isVi = language === "vi";
  const meta = projectMeta[projectKey];

  return (
    <Reveal delay={0.06} y={35} className="col-span-full">
      <div className="surface group relative overflow-hidden rounded-3xl border border-[var(--border)] p-5 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.14)] transition-all duration-500 hover:border-emerald-500/40">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/[0.08] blur-3xl" />
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          {/* Image & Showcase Viewport */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--soft)] shadow-inner sm:aspect-[16/9]">
            <Image
              src={image}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="photo-overlay absolute inset-0" />
            <div className="absolute left-3.5 top-3.5 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-[#07130e]/85 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-lg">
              <span className="text-emerald-400">★</span>
              <span>{project.badge}</span>
            </div>
            <div className="absolute right-3.5 top-3.5 font-mono rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
              01 / 06
            </div>
          </div>

          {/* Editorial Content */}
          <div className="flex flex-col justify-between py-1">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <p className="accent font-mono text-[11px] font-bold uppercase tracking-[.2em]">{project.type}</p>
              </div>
              <h3 className="mt-2.5 text-3xl font-extrabold tracking-[-.045em] sm:text-4xl text-[var(--text)]">
                {project.name}
              </h3>
              <p className="muted mt-3.5 text-sm leading-relaxed sm:text-base">{project.description}</p>

              <div className="mt-5 space-y-2 border-y border-[var(--border)] py-3.5 text-xs">
                <div className="flex items-center gap-2 text-[var(--text)]">
                  <span className="text-emerald-400 font-bold">✦</span>
                  <span>{isVi ? "Hệ sinh thái AR Glasses kết hợp AI Video Meeting" : "AR Glasses Ecosystem paired with AI Video Meeting"}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text)]">
                  <span className="text-emerald-400 font-bold">✦</span>
                  <span>{isVi ? "Giải Nhất cuộc thi khởi nghiệp đổi mới sáng tạo SURF 2026" : "First Prize Winner at SURF 2026 Innovation Festival"}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {meta.stack.map((item) => (
                  <span key={item} className="tech-pill rounded-full px-3 py-1 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
              <span className="font-mono text-xs text-[var(--muted)]">
                {isVi ? "Dự án tiêu biểu dẫn đầu · Ecosystem" : "Flagship Transmission · AI Core"}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                {isVi ? "Khám phá kiến trúc" : "Explore Architecture"} <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({
  project,
  projectKey,
  image,
  index,
  className = "",
}: {
  project: (typeof copy.en.projects)[number] | (typeof copy.vi.projects)[number];
  projectKey: keyof typeof projectMeta;
  image: StaticImageData;
  index: number;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const meta = projectMeta[projectKey];
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 18 });
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={(index % 3) * 0.08} y={40} className={className}>
      <motion.article
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="surface group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-4 shadow-[0_20px_70px_rgba(0,0,0,0.1)] transition-colors hover:border-[var(--border-strong)] [perspective:1000px]"
      >
        <div>
          <div className="relative h-52 overflow-hidden rounded-2xl border border-[var(--border)] sm:h-56">
            <Image
              src={image}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="photo-overlay absolute inset-0" />
            <div className="absolute left-3 top-3 font-mono rounded-full border border-white/20 bg-[#0d0e1d]/75 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
              {projectNumber} / 06
            </div>
            {projectKey === "analyst" && (
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-[#071912]/85 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live Demo
              </div>
            )}
            {projectKey === "connect" && (
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-[#081824]/85 px-2.5 py-1 text-[10px] font-semibold text-sky-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                WebSocket
              </div>
            )}
          </div>

          <div className="relative px-1 pt-4">
            <div className="flex items-center justify-between gap-3">
              <span className="project-badge rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.08em]">
                {project.badge}
              </span>
              <MoveUpRight size={17} className="muted transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--text)]" />
            </div>
            <p className="accent mt-3 text-[10px] font-bold uppercase tracking-[.14em]">{project.type}</p>
            <h3 className="mt-1.5 text-xl font-bold tracking-[-.04em] text-[var(--text)] sm:text-2xl">{project.name}</h3>
            <p className="muted mt-2.5 text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>

        <div className="px-1 pb-1 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {meta.stack.map((item) => (
              <span key={item} className="tech-pill rounded-full px-2.5 py-1 text-[10px]">
                {item}
              </span>
            ))}
          </div>
          {meta.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border)] pt-3">
              {meta.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} — ${link.label}`}
                  className="control-button inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold transition hover:-translate-y-0.5"
                >
                  {link.kind === "github" ? <Github size={13} /> : <ExternalLink size={13} />}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}

function Projects({ language }: { language: Language }) {
  const t = copy[language];
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "product">("all");
  const filters = projectFilters[language];

  const filteredKeys = filter === "all"
    ? projectKeys
    : projectKeys.filter((key) => projectMeta[key].category === filter);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-28 sm:px-7 lg:px-10 lg:py-36">
      <Reveal className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
        <div>
          <p className="accent text-[10px] font-bold uppercase tracking-[.22em]">{t.selectedKicker}</p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-[-.065em] sm:text-6xl">
            {t.selectedTitle} <span className="gradient-text">{t.selectedHighlight}</span>
          </h2>
        </div>
        <p className="muted max-w-xs text-sm leading-6">{t.selectedText}</p>
      </Reveal>

      {/* Interactive Category Filter Bar */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key as typeof filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-emerald-400 text-[#022013] shadow-[0_0_16px_rgba(52,211,153,0.35)] scale-105"
                  : "surface muted hover:text-[var(--text)] hover:border-emerald-500/30"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Creative Bento Showcase */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        {filter === "all" ? (
          <>
            {/* 1. Flagship Showcase: SignSound (Full Width) */}
            <FlagshipProjectCard
              project={t.projects[0]}
              projectKey="signsound"
              image={projectMedia.signsound}
              language={language}
            />

            {/* 2. Tier 2: Dual Asymmetric Cards (6 + 6 columns) */}
            <ProjectCard
              project={t.projects[1]}
              projectKey="cinema"
              image={projectMedia.cinema}
              index={1}
              className="lg:col-span-6"
            />
            <ProjectCard
              project={t.projects[2]}
              projectKey="plants"
              image={projectMedia.plants}
              index={2}
              className="lg:col-span-6"
            />

            {/* 3. Tier 3: Triple Product Matrix (4 + 4 + 4 columns) */}
            <ProjectCard
              project={t.projects[3]}
              projectKey="sports"
              image={projectMedia.sports}
              index={3}
              className="lg:col-span-4"
            />
            <ProjectCard
              project={t.projects[4]}
              projectKey="connect"
              image={projectMedia.connect}
              index={4}
              className="lg:col-span-4"
            />
            <ProjectCard
              project={t.projects[5]}
              projectKey="analyst"
              image={projectMedia.analyst}
              index={5}
              className="lg:col-span-4"
            />
          </>
        ) : (
          filteredKeys.map((key) => {
            const originalIndex = projectKeys.indexOf(key);
            if (key === "signsound") {
              return (
                <FlagshipProjectCard
                  key={key}
                  project={t.projects[originalIndex]}
                  projectKey={key}
                  image={projectMedia[key]}
                  language={language}
                />
              );
            }
            return (
              <ProjectCard
                key={key}
                project={t.projects[originalIndex]}
                projectKey={key}
                image={projectMedia[key]}
                index={originalIndex}
                className="lg:col-span-6"
              />
            );
          })
        )}
      </div>
    </section>
  );
}

function Journey({ language }: { language: Language }) {
  const t = copy[language];

  const getMilestoneIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap size={18} className="text-sky-400" />;
      case 1:
        return <Trophy size={18} className="text-amber-400" />;
      case 2:
        return <Sparkles size={18} className="text-emerald-400" />;
      case 3:
      default:
        return <Code2 size={18} className="text-emerald-400" />;
    }
  };

  return (
    <section id="journey" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-7 lg:px-10 lg:py-32">
      <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <p className="accent font-mono text-[10px] font-bold uppercase tracking-[.22em]">
              {t.journeyKicker}
            </p>
          </div>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-.065em] sm:text-6xl text-[var(--text)]">
            {t.journeyTitle} <span className="gradient-text">{t.journeyHighlight}</span>
          </h2>
        </div>
        <p className="muted max-w-xs text-sm leading-6">{t.journeyText}</p>
      </Reveal>

      {/* Timeline spine and milestone cards */}
      <div className="relative mt-16 lg:mt-24">
        {/* Glowing Spine Line */}
        <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-400/80 via-emerald-500/40 to-transparent sm:left-6 lg:left-1/2 lg:-translate-x-1/2" />

        <div className="space-y-10 lg:space-y-16">
          {t.milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Reveal
                key={item.period}
                delay={idx * 0.1}
                y={30}
                className={`relative flex flex-col sm:flex-row ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-start lg:items-center`}
              >
                {/* Center Node / Icon */}
                <div className="absolute left-4 -translate-x-1/2 sm:left-6 lg:left-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/50 bg-[var(--page)] shadow-[0_0_16px_rgba(52,211,153,0.3)] transition-transform duration-300 hover:scale-110">
                  {getMilestoneIcon(idx)}
                </div>

                {/* Milestone Card */}
                <div
                  className={`ml-12 sm:ml-16 lg:ml-0 lg:w-[calc(50%-44px)] ${
                    isEven ? "lg:mr-auto lg:text-left" : "lg:ml-auto lg:text-left"
                  }`}
                >
                  <div className="surface group relative overflow-hidden rounded-2xl border border-[var(--border)] p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                    {/* Subtle Corner Glow */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/[0.08] blur-2xl group-hover:bg-emerald-500/[0.14] transition-all" />

                    {/* Period and Highlight Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                        {item.period}
                      </span>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                        {item.highlight}
                      </span>
                    </div>

                    {/* Role / Milestone Title */}
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-[var(--text)] group-hover:text-emerald-300 transition-colors">
                      {item.role}
                    </h3>

                    {/* Organization / Context */}
                    <p className="mt-1 text-xs font-medium text-[var(--muted)] flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tech-pill rounded-full px-2.5 py-1 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About({ language }: { language: Language }) {
  const t = copy[language];
  return <section id="about" className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:px-10"><Reveal><div className="surface relative overflow-hidden rounded-3xl px-6 py-8 sm:p-12"><div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#9a79ff]/15 blur-3xl" /><div className="relative grid gap-8 md:grid-cols-[.42fr_.58fr] md:items-center"><div className="relative mx-auto aspect-[4/5] w-full max-w-[290px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--soft)]"><Image src={avatar} alt="Tran Minh Chien portrait" fill sizes="290px" className="object-cover object-[50%_28%]" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101426] to-transparent px-5 pb-5 pt-16"><p className="text-xs font-semibold text-white">{t.portraitLabel}</p><p className="mt-1 text-[10px] text-white/60">{t.portraitNote}</p></div></div><div><p className="accent text-[10px] font-bold uppercase tracking-[.2em]">{t.storyKicker}</p><h2 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-.055em] sm:text-5xl">{t.storyTitle} <span className="gradient-text">{t.storyHighlight}</span></h2><p className="muted mt-6 max-w-2xl text-base leading-7">{t.storyText}</p><div className="mt-7 flex flex-wrap gap-2">{t.aboutTags.map((tag) => <span key={tag} className="tech-pill rounded-full px-3 py-1.5 text-[11px]">{tag}</span>)}</div></div></div></div></Reveal></section>;
}

function CompetitionGallery({ language, onSelect }: { language: Language; onSelect: (index: number) => void }) {
  const t = copy[language];
  const classes = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-2 md:row-span-2",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-1",
  ];
  return (
    <section id="awards" className="mx-auto max-w-7xl px-5 py-28 sm:px-7 lg:px-10 lg:py-36">
      <Reveal className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
        <div>
          <p className="accent text-[10px] font-bold uppercase tracking-[.22em]">{t.awardsKicker}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-.065em] sm:text-6xl">
            {t.awardsTitle} <span className="gradient-text">{t.awardsHighlight}</span>
          </h2>
        </div>
        <p className="muted max-w-xs text-sm leading-6">{t.awardsText}</p>
      </Reveal>
      <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4">
        {competitionMedia.map((image, index) => (
          <Reveal key={index} delay={(index % 4) * 0.08} className={classes[index]}>
            <button
              type="button"
              onClick={() => onSelect(index)}
              className="gallery-card group relative h-full w-full overflow-hidden rounded-2xl border border-[var(--border)] text-left"
            >
              <Image
                src={image}
                alt={t.awards[index][0]}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`object-cover ${index === 1 ? "object-[50%_15%]" : "object-center"} transition duration-700 group-hover:scale-105`}
              />
              <div className="gallery-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <div>
                  <p className="text-sm font-semibold text-white">{t.awards[index][0]}</p>
                  <p className="mt-1 text-[10px] text-white/65">{t.awards[index][1]}</p>
                </div>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 bg-black/25 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <Maximize2 size={14} />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PhotoLightbox({ index, language, close }: { index: number | null; language: Language; close: () => void }) {
  const t = copy[language];
  return <AnimatePresence>{index !== null && <motion.div role="dialog" aria-modal="true" aria-label={t.awards[index][0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-[#05060d]/85 p-4 backdrop-blur-sm" onClick={close}><motion.div initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 12 }} transition={{ duration: .25 }} className="relative h-[min(82vh,760px)] w-[min(92vw,1100px)] overflow-hidden rounded-2xl border border-white/15 bg-[#111426] shadow-2xl" onClick={(event) => event.stopPropagation()}><Image src={competitionMedia[index]} alt={t.awards[index][0]} fill sizes="1100px" className="object-contain" /><button type="button" aria-label={t.close} onClick={close} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:bg-black/65"><X size={18} /></button><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-16"><p className="text-lg font-semibold text-white">{t.awards[index][0]}</p><p className="mt-1 text-sm text-white/65">{t.awards[index][1]}</p></div></motion.div></motion.div>}</AnimatePresence>;
}

function Footer({ language, onCopyEmail }: { language: Language; onCopyEmail: () => void }) {
  const t = copy[language];
  return (
    <footer id="contact" className="relative mt-20 overflow-hidden border-t border-[var(--border)] px-5 pb-8 pt-20 sm:px-7 lg:px-10">
      <div className="footer-glow absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="accent flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em]">
                <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
                {t.footerStatus}
              </div>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.75rem,6.8vw,6.2rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
                {t.footerTitle} <span className="gradient-text">{t.footerHighlight}</span> {t.footerEnd}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onCopyEmail}
                className="surface group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-white/5"
              >
                <Copy size={16} className="text-emerald-400 transition-transform group-hover:scale-110" />
                <span>chientranminh355@gmail.com</span>
              </button>
              <a
                href="/Tran-Minh-Chien-CV.pdf"
                download
                className="primary-link inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                <FileDown size={17} />
                {t.downloadCV}
              </a>
            </div>
          </div>
        </Reveal>
        <div className="muted mt-20 flex flex-col gap-5 border-t border-[var(--border)] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TRAN MINH CHIEN</p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/m-chien"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition hover:text-[var(--text)]"
            >
              <Github size={14} />
              m-chien
            </a>
            <button
              type="button"
              onClick={onCopyEmail}
              className="flex items-center gap-1.5 transition hover:text-[var(--text)]"
              title="Click to copy email"
            >
              <Mail size={14} className="text-emerald-400" />
              chientranminh355@gmail.com
            </button>
            <a
              href="/Tran-Minh-Chien-CV.pdf"
              download
              className="flex items-center gap-1.5 transition hover:text-[var(--text)]"
            >
              <FileDown size={14} />
              CV
            </a>
            <span className="flex items-center gap-1.5">
              <Globe2 size={14} />
              {t.built}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface CommandItem {
  id: string;
  category: "navigation" | "projects" | "actions";
  title: string;
  subtitle?: string;
  icon: ReactNode;
  badge?: string;
  action: () => void;
}

function CommandPalette({
  open,
  onClose,
  language,
  setLanguage,
  theme,
  setTheme,
  onCopyEmail,
}: {
  open: boolean;
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  onCopyEmail: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const isVi = language === "vi";

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  const navigateTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = hash;
    }
  };

  const items: CommandItem[] = [
    // Navigation
    {
      id: "nav-projects",
      category: "navigation",
      title: isVi ? "Dự án tiêu biểu" : "Featured Projects",
      subtitle: isVi ? "Khám phá 6 sản phẩm & hệ thống bento" : "Explore 6 flagship systems & bento",
      icon: <Code2 size={16} className="text-emerald-400" />,
      action: () => navigateTo("#projects"),
    },
    {
      id: "nav-journey",
      category: "navigation",
      title: isVi ? "Lộ trình học tập & Dấu mốc" : "Career & Academic Roadmap",
      subtitle: isVi ? "Dấu ấn từ UTE, SURF 2026 đến thực tập" : "Milestones from UTE, SURF 2026 to internship",
      icon: <GraduationCap size={16} className="text-sky-400" />,
      action: () => navigateTo("#journey"),
    },
    {
      id: "nav-about",
      category: "navigation",
      title: isVi ? "Câu chuyện & Định hướng" : "Story & Philosophy",
      subtitle: isVi ? "Hồ sơ cá nhân và tư duy kỹ thuật" : "Profile, background and engineering mindset",
      icon: <Terminal size={16} className="text-purple-400" />,
      action: () => navigateTo("#about"),
    },
    {
      id: "nav-awards",
      category: "navigation",
      title: isVi ? "Dấu ấn & Giải thưởng" : "Awards & Competitions",
      subtitle: isVi ? "SURF Quán quân, Top 8 SV Thế hệ mới VTV3, Hackathon" : "SURF Champion, VTV3 Top 8, Global Hackathons",
      icon: <Trophy size={16} className="text-amber-400" />,
      action: () => navigateTo("#awards"),
    },
    {
      id: "nav-contact",
      category: "navigation",
      title: isVi ? "Thông tin liên hệ" : "Contact & Socials",
      subtitle: isVi ? "Kết nối email, LinkedIn, GitHub" : "Reach out via email, GitHub and networks",
      icon: <Mail size={16} className="text-emerald-400" />,
      action: () => navigateTo("#contact"),
    },

    // Projects Direct Jump
    {
      id: "proj-signsound",
      category: "projects",
      title: "SignSound",
      subtitle: isVi ? "Giải Nhất SURF 2026 · Hệ sinh thái Kính AR & AI Video" : "SURF 2026 Champion · AR Glasses & Assistive AI",
      badge: "Flagship",
      icon: <Sparkles size={16} className="text-emerald-400" />,
      action: () => navigateTo("#projects"),
    },
    {
      id: "proj-cinema",
      category: "projects",
      title: "ChienCINEMA",
      subtitle: isVi ? "Hệ thống đặt vé xem phim hoàn chỉnh (Cinema OS)" : "Full cinema reservation & ticketing OS",
      icon: <ExternalLink size={16} className="text-sky-400" />,
      action: () => navigateTo("#projects"),
    },
    {
      id: "proj-plants",
      category: "projects",
      title: "TreeAffiliate Website",
      subtitle: isVi ? "Nền tảng thương mại Full-stack (Next.js + Java Spring)" : "Full-stack affiliate platform (Next.js + Java)",
      icon: <ExternalLink size={16} className="text-emerald-400" />,
      action: () => navigateTo("#projects"),
    },
    {
      id: "proj-analyst",
      category: "projects",
      title: "AI Requirements Analyst",
      subtitle: isVi ? "Workspace AI phân tích yêu cầu phần mềm · Live Demo" : "AI requirements engineering workspace · Live Demo",
      badge: "Live Demo",
      icon: <Sparkles size={16} className="text-purple-400" />,
      action: () => {
        window.open("https://ai-requirements-analyst-sqyt.vercel.app/", "_blank");
        onClose();
      },
    },

    // Quick Actions
    {
      id: "act-copy-email",
      category: "actions",
      title: isVi ? "Sao chép Email" : "Copy Email",
      subtitle: "chientranminh355@gmail.com",
      badge: "Quick",
      icon: <Copy size={16} className="text-emerald-400" />,
      action: () => {
        onCopyEmail();
        onClose();
      },
    },
    {
      id: "act-download-cv",
      category: "actions",
      title: isVi ? "Tải xuống CV (PDF)" : "Download Resume (PDF)",
      subtitle: "Tran-Minh-Chien-CV.pdf",
      icon: <FileDown size={16} className="text-sky-400" />,
      action: () => {
        const link = document.createElement("a");
        link.href = "/Tran-Minh-Chien-CV.pdf";
        link.download = "Tran-Minh-Chien-CV.pdf";
        link.click();
        onClose();
      },
    },
    {
      id: "act-toggle-theme",
      category: "actions",
      title: isVi
        ? `Đổi sang giao diện ${theme === "dark" ? "Sáng" : "Tối"}`
        : `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      icon: theme === "dark" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-sky-400" />,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        onClose();
      },
    },
    {
      id: "act-toggle-lang",
      category: "actions",
      title: isVi ? "Switch to English" : "Chuyển sang Tiếng Việt",
      icon: <Languages size={16} className="text-emerald-400" />,
      action: () => {
        setLanguage(language === "vi" ? "en" : "vi");
        onClose();
      },
    },
    {
      id: "act-github",
      category: "actions",
      title: "GitHub Profile",
      subtitle: "github.com/m-chien",
      icon: <Github size={16} className="text-white" />,
      action: () => {
        window.open("https://github.com/m-chien", "_blank");
        onClose();
      },
    },
  ];

  const filtered = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      (item.badge && item.badge.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] grid place-items-start sm:place-items-center bg-[#040609]/80 p-4 sm:p-6 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-emerald-500/30 bg-[var(--page)] shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(52,211,153,0.15)] mt-12 sm:mt-0"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3.5">
              <Search size={18} className="text-emerald-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder={
                  isVi
                    ? "Tìm nhanh dự án, lộ trình, sao chép email, phím tắt... (gõ để lọc)"
                    : "Search projects, roadmap, copy email, shortcuts..."
                }
                className="w-full bg-transparent text-sm text-[var(--text)] placeholder-[var(--muted)] outline-none"
              />
              <span className="hidden sm:inline-block rounded border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                ESC
              </span>
            </div>

            {/* Filtered list items */}
            <div className="max-h-[380px] overflow-y-auto p-2 scrollbar-thin">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-sm text-[var(--muted)]">
                  {isVi ? "Không tìm thấy kết quả phù hợp" : "No results found"}
                </div>
              ) : (
                filtered.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-colors duration-150 ${
                        isSelected
                          ? "bg-emerald-500/15 text-[var(--text)] border border-emerald-500/30 shadow-sm"
                          : "text-[var(--text)] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[var(--border)] bg-[var(--soft)]">
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold truncate flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="rounded bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-400 border border-emerald-400/20">
                                {item.badge}
                              </span>
                            )}
                          </p>
                          {item.subtitle && (
                            <p className="text-[11px] text-[var(--muted)] truncate mt-0.5">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className={`shrink-0 text-[var(--muted)] transition-transform ${
                          isSelected ? "translate-x-0.5 -translate-y-0.5 text-emerald-400" : ""
                        }`}
                      />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer guide bar */}
            <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--soft)] px-4 py-2 text-[10px] text-[var(--muted)]">
              <div className="flex items-center gap-3">
                <span>↑↓ {isVi ? "để chọn" : "to navigate"}</span>
                <span>↵ {isVi ? "thực thi" : "to select"}</span>
              </div>
              <span className="font-mono text-emerald-400">Tran Minh Chien Portfolio</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 420 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setMounted(true);

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isCanvas = !!target.closest("canvas");
      const isAwards = !!target.closest(".gallery-card");
      const isInteractive = !!target.closest("a, button, input, textarea, [role='button']");

      if (isCanvas) {
        setCursorText("DRAG 360°");
        setIsHovered(true);
      } else if (isAwards) {
        setCursorText("VIEW");
        setIsHovered(true);
      } else if (isInteractive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!mounted || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] select-none"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className={`flex items-center justify-center rounded-full transition-all duration-200 ease-out ${
          cursorText
            ? "h-16 w-16 bg-emerald-500/90 text-black shadow-[0_0_24px_rgba(52,211,153,0.5)] backdrop-blur-md"
            : isHovered
            ? "h-9 w-9 border border-emerald-400 bg-emerald-400/15 shadow-[0_0_16px_rgba(52,211,153,0.35)]"
            : "h-3.5 w-3.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]"
        }`}
      >
        {cursorText ? (
          <span className="font-mono text-[9px] font-black tracking-wider text-[#022013]">
            {cursorText}
          </span>
        ) : isHovered ? (
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        ) : null}
      </div>
    </motion.div>
  );
}

function ToastNotification({
  message,
  visible,
  onClose,
}: {
  message: string;
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 z-[130] -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-[#091510]/95 px-5 py-3.5 text-sm font-medium text-white shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_24px_rgba(52,211,153,0.25)] backdrop-blur-xl">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400 text-[#022013]">
              <Check size={14} strokeWidth={3} />
            </span>
            <span>{message}</span>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white transition"
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("vi");
  const [theme, setTheme] = useState<Theme>("dark");
  const [selectedCompetition, setSelectedCompetition] = useState<number | null>(null);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chientranminh355@gmail.com");
    setToastMessage(
      language === "vi"
        ? "Đã sao chép Email: chientranminh355@gmail.com"
        : "Copied Email: chientranminh355@gmail.com"
    );
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedLanguage === "en" || storedLanguage === "vi") {
      setLanguage(storedLanguage);
    } else {
      setLanguage("vi");
    }
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <main className={`theme-root theme-${theme} relative isolate min-h-screen overflow-hidden`}>
      <CustomCursor />
      <div className="background-orbs pointer-events-none absolute inset-0 -z-10" />
      <div className="noise pointer-events-none absolute inset-0 -z-10 opacity-[.035]" />
      <div className="grid-lines pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] opacity-[.15] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Nav
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        onOpenCmd={() => setCmdOpen(true)}
      />
      <Hero language={language} theme={theme} onCopyEmail={handleCopyEmail} />
      <TechMarquee />
      <Projects language={language} />
      <Journey language={language} />
      <About language={language} />
      <CompetitionGallery language={language} onSelect={setSelectedCompetition} />
      <Footer language={language} onCopyEmail={handleCopyEmail} />
      <PhotoLightbox index={selectedCompetition} language={language} close={() => setSelectedCompetition(null)} />
      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        onCopyEmail={handleCopyEmail}
      />
      <ToastNotification
        visible={!!toastMessage}
        message={toastMessage || ""}
        onClose={() => setToastMessage(null)}
      />
    </main>
  );
}

