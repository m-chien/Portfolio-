"use client";

import Image, { type StaticImageData } from "next/image";
import {
  ArrowDownRight, ArrowUpRight, CirclePlay, Code2, ExternalLink, FileDown, Github, Globe2, Languages,
  Mail, Maximize2, Menu, Moon, MoveUpRight, Sparkles, Sun, Terminal, X,
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
    nav: ["Work", "Story", "Awards", "Contact"], talk: "Let's talk", menu: "Open menu", light: "Use light mode", dark: "Use dark mode", switchLanguage: "Chuyển sang tiếng Việt",
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
    storyKicker: "The person behind the pixels", storyTitle: "Technology feels most powerful when it makes people feel", storyHighlight: "understood.", storyText: "I'm an Information Technology student at The University of Danang – University of Technology and Education, focused on software and web development. I enjoy taking an idea from interface decisions through backend logic and database design, then refining it into a product that feels clear and useful.", portraitLabel: "Tran Minh Chien", portraitNote: "Information Technology · UTE, Da Nang", aboutTags: ["Seeking Internship", "Next.js + Java", "SQL Server / PostgreSQL", "Full-stack Development"],
    awardsKicker: "Competition logbook", awardsTitle: "Building, learning,", awardsHighlight: "showing up.", awardsText: "Moments from hackathons, innovation festivals, and research competitions that shaped how I collaborate and create.", awards: [["SURF 2026", "First Prize · Student category"], ["Sinh Vien The He Moi", "Top 8 Nationwide · VTV3"], ["Agents, Everywhere", "Global Hackathon · Team podium"], ["Agents, Everywhere", "Global Hackathon · Runner up"], ["SURF 2026", "Innovation Startup Festival"], ["Student Research", "Special Prize · 2025–2026"]],
    footerStatus: "Available for internships & collaborations", footerTitle: "Let's make the next", footerHighlight: "frame", footerEnd: "count.", start: "Start a conversation", built: "Built in motion", close: "Close image preview",
  },
  vi: {
    nav: ["Dự án", "Câu chuyện", "Thành tích", "Liên hệ"], talk: "Liên hệ", menu: "Mở menu", light: "Chuyển sang giao diện sáng", dark: "Chuyển sang giao diện tối", switchLanguage: "Switch to English",
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

function Nav({ language, setLanguage, theme, setTheme }: { language: Language; setLanguage: (language: Language) => void; theme: Theme; setTheme: (theme: Theme) => void }) {
  const [open, setOpen] = useState(false);
  const t = copy[language];
  const links = [[t.nav[0], "#projects"], [t.nav[1], "#about"], [t.nav[2], "#awards"], [t.nav[3], "#contact"]] as const;
  return <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"><nav className="surface nav-glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-3 py-2.5 sm:px-5"><a href="#top" className="group flex items-center gap-2 text-sm font-semibold tracking-[.18em] text-[var(--text)]"><span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-400 text-[10px] font-black text-[#022013] shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-transform group-hover:scale-105">TC</span><span className="hidden sm:block">CHIEN / 26</span></a><div className="hidden items-center gap-6 lg:flex">{links.map(([label, href]) => <a key={label} href={href} className="muted text-[11px] font-semibold uppercase tracking-[.14em] transition hover:text-[var(--text)]">{label}</a>)}</div><div className="flex items-center gap-1 sm:gap-2"><IconButton label={theme === "dark" ? t.light : t.dark} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</IconButton><button type="button" aria-label={t.switchLanguage} onClick={() => setLanguage(language === "en" ? "vi" : "en")} className="control-button flex h-9 items-center gap-1 rounded-lg px-2 text-[11px] font-bold"><Languages size={15} /><span>{language === "en" ? "VI" : "EN"}</span></button><a href="#contact" className="emerald-link hidden items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold sm:flex transition hover:-translate-y-0.5">{t.talk}<ArrowUpRight size={14} /></a><IconButton label={t.menu} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={20} />}</IconButton></div></nav><AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="surface nav-glass mx-auto mt-2 flex max-w-7xl flex-col rounded-2xl p-3 lg:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href} className="muted rounded-lg px-3 py-3 text-sm transition hover:bg-black/[.06] hover:text-[var(--text)]">{label}</a>)}</motion.div>}</AnimatePresence></header>;
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

function Hero({ language, theme }: { language: Language; theme: Theme }) {
  const t = copy[language];
  const isVi = language === "vi";
  return (
    <section id="top" className="relative mx-auto grid min-h-[850px] max-w-7xl items-center gap-10 px-5 pb-24 pt-32 sm:px-7 lg:min-h-screen lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:px-10">
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          {t.availability}
        </motion.div>
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
          <a href="#contact" className="surface inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-emerald-400/40">
            <Mail size={17} />{t.contact}
          </a>
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

function Footer({ language }: { language: Language }) {
  const t = copy[language];
  return <footer id="contact" className="relative mt-20 overflow-hidden border-t border-[var(--border)] px-5 pb-8 pt-20 sm:px-7 lg:px-10">
    <div className="footer-glow absolute inset-0" />
    <div className="relative mx-auto max-w-7xl">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div><div className="accent flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em]"><span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />{t.footerStatus}</div><h2 className="mt-5 max-w-3xl text-[clamp(2.75rem,6.8vw,6.2rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">{t.footerTitle} <span className="gradient-text">{t.footerHighlight}</span> {t.footerEnd}</h2></div>
          <div className="flex flex-wrap gap-3"><a href="mailto:chientranminh355@gmail.com" className="surface group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-white/5">{t.start}<ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a><a href="/Tran-Minh-Chien-CV.pdf" download className="primary-link inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"><FileDown size={17} />{t.downloadCV}</a></div>
        </div>
      </Reveal>
      <div className="muted mt-20 flex flex-col gap-5 border-t border-[var(--border)] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} TRAN MINH CHIEN</p><div className="flex flex-wrap items-center gap-5"><a href="https://github.com/m-chien" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition hover:text-[var(--text)]"><Github size={14} />m-chien</a><a href="mailto:chientranminh355@gmail.com" className="flex items-center gap-1.5 transition hover:text-[var(--text)]"><Mail size={14} />chientranminh355@gmail.com</a><a href="/Tran-Minh-Chien-CV.pdf" download className="flex items-center gap-1.5 transition hover:text-[var(--text)]"><FileDown size={14} />CV</a><span className="flex items-center gap-1.5"><Globe2 size={14} />{t.built}</span></div></div>
    </div>
  </footer>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("vi");
  const [theme, setTheme] = useState<Theme>("dark");
  const [selectedCompetition, setSelectedCompetition] = useState<number | null>(null);

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
      <div className="background-orbs pointer-events-none absolute inset-0 -z-10" />
      <div className="noise pointer-events-none absolute inset-0 -z-10 opacity-[.035]" />
      <div className="grid-lines pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] opacity-[.15] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Nav language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      <Hero language={language} theme={theme} />
      <TechMarquee />
      <Projects language={language} />
      <About language={language} />
      <CompetitionGallery language={language} onSelect={setSelectedCompetition} />
      <Footer language={language} />
      <PhotoLightbox index={selectedCompetition} language={language} close={() => setSelectedCompetition(null)} />
    </main>
  );
}
