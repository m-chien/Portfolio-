"use client";

import Image, { type StaticImageData } from "next/image";
import {
  ArrowDownRight, ArrowUpRight, CirclePlay, Code2, ExternalLink, FileDown, Github, Globe2, Languages,
  Mail, Maximize2, Menu, Moon, MoveUpRight, Sparkles, Sun, Terminal, X,
} from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import avatar from "./Image/avatar.jpg";
import surfPrize from "./Image/cuộc thi (1).jpg";
import agentsTeam from "./Image/cuộc thi 2.jpg";
import agentsStage from "./Image/cuộc thi 3.jpg";
import surfTeam from "./Image/cuộc thi 4.jpg";
import researchPrize from "./Image/cuộc thi 5.jpg";
import cinemaShot from "./Image/Ảnh web/Ảnh chụp màn hình 2025-12-01 163811.png";
import plantsShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-06-03 232448.png";
import sportsShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-10-08 202931.png";
import connectShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-10-08 203502.png";
import analystShot from "./Image/Ảnh web/Ảnh chụp màn hình 2026-10-08 203549.png";

type Language = "en" | "vi";
type Theme = "dark" | "light";

const techs = ["Next.js", "Tailwind", "React", "Python", "Data Analysis", "Framer Motion"];
const projectMedia = { signsound: surfPrize, cinema: cinemaShot, plants: plantsShot, sports: sportsShot, connect: connectShot, analyst: analystShot } satisfies Record<string, StaticImageData>;
const competitionMedia = [surfPrize, agentsTeam, agentsStage, surfTeam, researchPrize];
const projectMeta = {
  signsound: { stack: ["AI", "AR", "Accessibility"], links: [] },
  cinema: { stack: ["Web platform", "Booking flow"], links: [] },
  plants: { stack: ["Next.js", "Java", "SQL Server"], links: [{ label: "GitHub", href: "https://github.com/m-chien/TreeAffiliateWebsite", kind: "github" }] },
  sports: { stack: ["E-commerce", "Responsive UI"], links: [] },
  connect: { stack: ["Next.js", "Java", "SQL Server"], links: [{ label: "GitHub", href: "https://github.com/m-chien/messenger-web", kind: "github" }] },
  analyst: { stack: ["Next.js", "Java", "PostgreSQL"], links: [{ label: "GitHub", href: "https://github.com/m-chien/AI-Requirements-Analyst", kind: "github" }, { label: "Live demo", href: "https://ai-requirements-analyst-sqyt.vercel.app/", kind: "demo" }] },
} as const;

const copy = {
  en: {
    nav: ["Work", "Story", "Awards", "Contact"], talk: "Let's talk", menu: "Open menu", light: "Use light mode", dark: "Use dark mode", switchLanguage: "Chuyển sang tiếng Việt",
    availability: "Seeking Software / Web Dev Internship", heroTitle: "WEAVING CODE INTO", heroHighlight: "CINEMATIC", heroEnd: "DIGITAL EXPERIENCES.",
    intro: "Hey, I'm Tran Minh Chien — an Information Technology student at The University of Danang – University of Technology and Education, building reliable web experiences and intelligent systems.", play: "Play projects", contact: "Contact me", downloadCV: "Download CV", scroll: "Scroll to explore",
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
    awardsKicker: "Competition logbook", awardsTitle: "Building, learning,", awardsHighlight: "showing up.", awardsText: "Moments from hackathons, innovation festivals, and research competitions that shaped how I collaborate and create.", awards: [["SURF 2026", "First Prize · Student category"], ["Agents, Everywhere", "Global Hackathon · Team podium"], ["Agents, Everywhere", "Global Hackathon · Runner up"], ["SURF 2026", "Innovation Startup Festival"], ["Student Research", "Special Prize · 2025–2026"]],
    footerStatus: "Available for internships & collaborations", footerTitle: "Let's make the next", footerHighlight: "frame", footerEnd: "count.", start: "Start a conversation", built: "Built in motion", close: "Close image preview",
  },
  vi: {
    nav: ["Dự án", "Câu chuyện", "Thành tích", "Liên hệ"], talk: "Liên hệ", menu: "Mở menu", light: "Chuyển sang giao diện sáng", dark: "Chuyển sang giao diện tối", switchLanguage: "Switch to English",
    availability: "Đang tìm cơ hội thực tập Software / Web Developer", heroTitle: "DỆT NÊN NHỮNG", heroHighlight: "TRẢI NGHIỆM SỐ", heroEnd: "ĐẦY CẢM XÚC BẰNG CODE.",
    intro: "Chào bạn, mình là Trần Minh Chiến — sinh viên ngành Công nghệ Thông tin tại Đại học Sư phạm Kỹ thuật – Đại học Đà Nẵng, xây dựng những trải nghiệm web đáng tin cậy và hệ thống thông minh.", play: "Xem dự án", contact: "Liên hệ với mình", downloadCV: "Tải CV", scroll: "Cuộn để khám phá",
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
    awardsKicker: "Dấu ấn cuộc thi", awardsTitle: "Xây dựng, học hỏi,", awardsHighlight: "không ngừng xuất hiện.", awardsText: "Những khoảnh khắc từ hackathon, lễ hội đổi mới sáng tạo và cuộc thi nghiên cứu đã định hình cách mình hợp tác và kiến tạo.", awards: [["SURF 2026", "Giải Nhất · Bảng sinh viên"], ["Agents, Everywhere", "Global Hackathon · Giải cùng đội"], ["Agents, Everywhere", "Global Hackathon · Á quân"], ["SURF 2026", "Lễ hội khởi nghiệp đổi mới sáng tạo"], ["Nghiên cứu sinh viên", "Giải Đặc biệt · 2025–2026"]],
    footerStatus: "Sẵn sàng thực tập & hợp tác", footerTitle: "Cùng tạo nên", footerHighlight: "dấu ấn", footerEnd: "tiếp theo.", start: "Bắt đầu trò chuyện", built: "Được tạo nên bằng chuyển động", close: "Đóng xem ảnh",
  },
} as const;

const projectKeys = ["signsound", "cinema", "plants", "sports", "connect", "analyst"] as const;
const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function IconButton({ label, children, onClick }: { label: string; children: ReactNode; onClick: () => void }) {
  return <button type="button" aria-label={label} title={label} onClick={onClick} className="control-button grid h-9 w-9 place-items-center rounded-lg transition hover:-translate-y-0.5">{children}</button>;
}

function Nav({ language, setLanguage, theme, setTheme }: { language: Language; setLanguage: (language: Language) => void; theme: Theme; setTheme: (theme: Theme) => void }) {
  const [open, setOpen] = useState(false);
  const t = copy[language];
  const links = [[t.nav[0], "#projects"], [t.nav[1], "#about"], [t.nav[2], "#awards"], [t.nav[3], "#contact"]] as const;
  return <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"><nav className="surface nav-glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-3 py-2.5 sm:px-5"><a href="#top" className="group flex items-center gap-2 text-sm font-semibold tracking-[.18em] text-[var(--text)]"><span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#74f7da] to-[#a58aff] text-[10px] font-black text-[#101020] transition-transform group-hover:rotate-12">TC</span><span className="hidden sm:block">CHIEN / 26</span></a><div className="hidden items-center gap-6 lg:flex">{links.map(([label, href]) => <a key={label} href={href} className="muted text-[11px] font-semibold uppercase tracking-[.14em] transition hover:text-[var(--text)]">{label}</a>)}</div><div className="flex items-center gap-1 sm:gap-2"><IconButton label={theme === "dark" ? t.light : t.dark} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</IconButton><button type="button" aria-label={t.switchLanguage} onClick={() => setLanguage(language === "en" ? "vi" : "en")} className="control-button flex h-9 items-center gap-1 rounded-lg px-2 text-[11px] font-bold"><Languages size={15} /><span>{language === "en" ? "VI" : "EN"}</span></button><a href="#contact" className="primary-link hidden items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold sm:flex">{t.talk}<ArrowUpRight size={14} /></a><IconButton label={t.menu} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={20} />}</IconButton></div></nav><AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="surface nav-glass mx-auto mt-2 flex max-w-7xl flex-col rounded-2xl p-3 lg:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href} className="muted rounded-lg px-3 py-3 text-sm transition hover:bg-black/[.06] hover:text-[var(--text)]">{label}</a>)}</motion.div>}</AnimatePresence></header>;
}

function Dashboard({ language }: { language: Language }) {
  const t = copy[language];
  return <motion.div initial={{ opacity: 0, scale: 0.92, rotateY: -14 }} animate={{ opacity: 1, scale: 1, rotateY: -8 }} transition={{ duration: 1, delay: .18, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[550px] [perspective:1200px]"><div className="float-soft surface relative rounded-[1.7rem] p-3 shadow-[0_28px_100px_rgba(65,51,167,.25)] backdrop-blur-xl [transform:rotateX(5deg)_rotateY(-8deg)] sm:p-4"><div className="absolute -inset-px -z-10 rounded-[1.7rem] bg-gradient-to-br from-[#74f8dd]/35 via-transparent to-[#a66cff]/35 blur-md" /><div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--soft)] px-3 py-2.5"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#72f8d8]" /><span className="muted text-[9px] font-medium tracking-[.16em]">{t.dashboardLabel}</span></div><div className="flex gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" /><span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" /></div></div><div className="mt-3 grid grid-cols-[.9fr_1.1fr] gap-3"><div className="relative min-h-[184px] overflow-hidden rounded-xl border border-[var(--border)]"><Image src={avatar} alt="Tran Minh Chien" fill priority sizes="(max-width: 640px) 45vw, 210px" className="object-cover object-[50%_28%]" /><div className="absolute inset-0 bg-gradient-to-t from-[#111426] via-[#111426]/15 to-transparent" /><div className="absolute bottom-3 left-3 right-3"><p className="text-[9px] uppercase tracking-[.16em] text-white/60">{t.profileRole}</p><p className="mt-1 text-sm font-semibold text-white">Tran Minh Chien</p><div className="mt-2 flex items-center gap-1.5 text-[9px] text-[#8bf8df]"><span className="h-1.5 w-1.5 rounded-full bg-[#78f5dc]" />{t.profileStatus}</div></div></div><div className="rounded-xl border border-[var(--border)] bg-[var(--soft)] p-3 sm:p-4"><div className="flex items-start justify-between"><div><p className="muted text-[9px] uppercase tracking-[.14em]">{t.dashboardTitle}</p><p className="mt-2 text-2xl font-semibold tracking-tight">92<span className="text-sm text-[#5fd9bd]">%</span></p></div><div className="rounded-lg bg-[#73f6d6]/15 p-2 text-[#42b79d]"><Sparkles size={14} /></div></div><div className="mt-5 flex h-12 items-end gap-1.5">{[32, 50, 38, 68, 54, 78, 64, 92].map((height, index) => <motion.span key={index} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: .65 + index * .07, duration: .6 }} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#75d9d1] to-[#b29aff]" />)}</div><div className="mt-4 space-y-2">{t.dashboardSignals.map((signal, index) => <div key={signal}><div className="muted flex justify-between text-[9px]"><span>{signal}</span><span>{[98, 87, 94][index]}%</span></div><div className="mt-1 h-1 overflow-hidden rounded-full bg-[var(--progress-track)]"><motion.div initial={{ width: 0 }} animate={{ width: `${[98, 87, 94][index]}%` }} transition={{ delay: .9 + index * .15, duration: .7 }} className="h-full rounded-full bg-gradient-to-r from-[#74f7d9] to-[#a28bff]" /></div></div>)}</div></div></div><div className="mt-3 grid grid-cols-[.72fr_1.28fr] gap-3"><div className="rounded-xl border border-[var(--border)] bg-[var(--soft)] p-3"><p className="muted text-[9px] uppercase tracking-[.14em]">{t.dashboardSignal}</p><div className="mt-3 flex items-center gap-2"><div className="relative h-8 w-8 rounded-full border border-[#77f7db]/40"><div className="absolute inset-[6px] rounded-full bg-[#77f7db] shadow-[0_0_16px_#77f7db]" /></div><span className="text-xs font-medium">{t.optimal}</span></div></div><div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--chart)] p-3"><div className="muted flex justify-between text-[9px]"><span>{t.dashboardPulse}</span><span className="text-[#42b79d]">+18.4%</span></div><svg viewBox="0 0 190 45" className="mt-2 h-10 w-full overflow-visible"><defs><linearGradient id="line" x1="0" x2="1"><stop stopColor="#74f7da" /><stop offset="1" stopColor="#aa80ff" /></linearGradient></defs><path d="M0,37 C18,35 19,18 39,24 S64,31 79,14 S105,34 125,21 S148,24 165,8 S180,13 190,4" fill="none" stroke="url(#line)" strokeWidth="2" /><path d="M0,37 C18,35 19,18 39,24 S64,31 79,14 S105,34 125,21 S148,24 165,8 S180,13 190,4 L190,45 L0,45 Z" fill="url(#line)" opacity=".1" /></svg></div></div></div><div className="surface absolute -bottom-7 -right-4 hidden rounded-xl px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:block"><div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#ae8aff]/15 text-[#876be1]"><Terminal size={14} /></span><div><p className="muted text-[9px]">{t.dashboardBuild}</p><p className="text-[10px] font-medium">{t.dashboardDeploy}</p></div></div></div></motion.div>;
}

function Hero({ language }: { language: Language }) {
  const t = copy[language];
  return <section id="top" className="relative mx-auto grid min-h-[850px] max-w-7xl items-center gap-14 px-5 pb-24 pt-36 sm:px-7 lg:min-h-screen lg:grid-cols-[1.04fr_.96fr] lg:gap-8 lg:px-10"><div className="relative z-10"><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em]"><span className="h-1.5 w-1.5 rounded-full bg-[#75f3d7] shadow-[0_0_10px_#75f3d7]" />{t.availability}</motion.div><motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl text-[clamp(3rem,7vw,6.4rem)] font-black leading-[.88] tracking-[-.075em]">{t.heroTitle} <span className="gradient-text">{t.heroHighlight}</span> {t.heroEnd}</motion.h1><motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .22, ease: [0.22, 1, 0.36, 1] }} className="muted mt-7 max-w-xl text-base leading-7 sm:text-lg">{t.intro}</motion.p><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .32, ease: [0.22, 1, 0.36, 1] }} className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="primary-link group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold shadow-[0_0_30px_rgba(116,247,218,.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(116,247,218,.5)]"><CirclePlay size={18} fill="currentColor" />{t.play}<ArrowDownRight size={17} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" /></a><a href="#contact" className="surface inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:border-[var(--border-strong)]"><Mail size={17} />{t.contact}</a><a href="/Tran-Minh-Chien-CV.pdf" download className="surface inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:border-[var(--border-strong)]"><FileDown size={17} />{t.downloadCV}</a></motion.div><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} className="muted mt-14 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.16em]"><span>{t.scroll}</span><span className="h-px w-12 bg-[var(--border-strong)]" /><ArrowDownRight size={15} /></motion.div></div><Dashboard language={language} /></section>;
}

function TechMarquee() {
  return <section aria-label="Technology stack" className="marquee-section relative z-10 -mx-8 overflow-hidden py-4 sm:py-5"><div className="marquee-track flex gap-3 px-3">{[...techs, ...techs, ...techs, ...techs].map((tech, index) => <div key={`${tech}-${index}`} className="tech-pill flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"><Code2 size={14} className="text-[#36b99d]" />{tech}<span className="ml-2 h-1 w-1 rounded-full bg-[#b493ff]" /></div>)}</div></section>;
}

function ProjectCard({ project, projectKey, image, index }: { project: (typeof copy.en.projects)[number] | (typeof copy.vi.projects)[number]; projectKey: keyof typeof projectMeta; image: StaticImageData; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const meta = projectMeta[projectKey];
  const rotateX = useSpring(useTransform(y, [-.5, .5], [7, -7]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-.5, .5], [-8, 8]), { stiffness: 180, damping: 18 });
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - .5);
    y.set((event.clientY - rect.top) / rect.height - .5);
  };

  return <Reveal delay={index * .07}>
    <motion.article onMouseMove={handleMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="surface group relative h-full overflow-hidden rounded-3xl p-3 shadow-[0_25px_80px_rgba(0,0,0,.12)] transition-colors hover:border-[var(--border-strong)] [perspective:1000px]">
      <div className="relative h-60 overflow-hidden rounded-2xl border border-[var(--border)] sm:h-64"><Image src={image} alt={project.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.045]" /><div className="photo-overlay absolute inset-0" /><div className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#0d0e1d]/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.12em] text-white backdrop-blur">0{index + 1}</div></div>
      <div className="relative px-2 pb-2 pt-5">
        <div className="flex items-center justify-between gap-3"><span className="project-badge rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.08em]">{project.badge}</span><MoveUpRight size={18} className="muted transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--text)]" /></div>
        <p className="accent mt-4 text-[10px] font-bold uppercase tracking-[.14em]">{project.type}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-.045em]">{project.name}</h3>
        <p className="muted mt-3 text-sm leading-6">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">{meta.stack.map((item) => <span key={item} className="tech-pill rounded-full px-2.5 py-1 text-[10px]">{item}</span>)}</div>
        {meta.links.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{meta.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${project.name} — ${link.label}`} className="control-button inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold transition hover:-translate-y-0.5">{link.kind === "github" ? <Github size={13} /> : <ExternalLink size={13} />}{link.label}</a>)}</div>}
      </div>
    </motion.article>
  </Reveal>;
}

function Projects({ language }: { language: Language }) {
  const t = copy[language];
  return <section id="projects" className="mx-auto max-w-7xl px-5 py-28 sm:px-7 lg:px-10 lg:py-36"><Reveal className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><div><p className="accent text-[10px] font-bold uppercase tracking-[.22em]">{t.selectedKicker}</p><h2 className="mt-4 max-w-xl text-4xl font-bold tracking-[-.065em] sm:text-6xl">{t.selectedTitle} <span className="gradient-text">{t.selectedHighlight}</span></h2></div><p className="muted max-w-xs text-sm leading-6">{t.selectedText}</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projectKeys.map((key, index) => <ProjectCard key={key} project={t.projects[index]} projectKey={key} image={projectMedia[key]} index={index} />)}</div></section>;
}

function About({ language }: { language: Language }) {
  const t = copy[language];
  return <section id="about" className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:px-10"><Reveal><div className="surface relative overflow-hidden rounded-3xl px-6 py-8 sm:p-12"><div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#9a79ff]/15 blur-3xl" /><div className="relative grid gap-8 md:grid-cols-[.42fr_.58fr] md:items-center"><div className="relative mx-auto aspect-[4/5] w-full max-w-[290px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--soft)]"><Image src={avatar} alt="Tran Minh Chien portrait" fill sizes="290px" className="object-cover object-[50%_28%]" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101426] to-transparent px-5 pb-5 pt-16"><p className="text-xs font-semibold text-white">{t.portraitLabel}</p><p className="mt-1 text-[10px] text-white/60">{t.portraitNote}</p></div></div><div><p className="accent text-[10px] font-bold uppercase tracking-[.2em]">{t.storyKicker}</p><h2 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-.055em] sm:text-5xl">{t.storyTitle} <span className="gradient-text">{t.storyHighlight}</span></h2><p className="muted mt-6 max-w-2xl text-base leading-7">{t.storyText}</p><div className="mt-7 flex flex-wrap gap-2">{t.aboutTags.map((tag) => <span key={tag} className="tech-pill rounded-full px-3 py-1.5 text-[11px]">{tag}</span>)}</div></div></div></div></Reveal></section>;
}

function CompetitionGallery({ language, onSelect }: { language: Language; onSelect: (index: number) => void }) {
  const t = copy[language]; const classes = ["md:col-span-2 md:row-span-2", "md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];
  return <section id="awards" className="mx-auto max-w-7xl px-5 py-28 sm:px-7 lg:px-10 lg:py-36"><Reveal className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><div><p className="accent text-[10px] font-bold uppercase tracking-[.22em]">{t.awardsKicker}</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-.065em] sm:text-6xl">{t.awardsTitle} <span className="gradient-text">{t.awardsHighlight}</span></h2></div><p className="muted max-w-xs text-sm leading-6">{t.awardsText}</p></Reveal><div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4">{competitionMedia.map((image, index) => <Reveal key={index} delay={index * .07} className={classes[index]}><button type="button" onClick={() => onSelect(index)} className="gallery-card group relative h-full w-full overflow-hidden rounded-2xl border border-[var(--border)] text-left"><Image src={image} alt={t.awards[index][0]} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="gallery-shade absolute inset-0" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4"><div><p className="text-sm font-semibold text-white">{t.awards[index][0]}</p><p className="mt-1 text-[10px] text-white/65">{t.awards[index][1]}</p></div><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 bg-black/25 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><Maximize2 size={14} /></span></div></button></Reveal>)}</div></section>;
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
          <div><div className="accent flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em]"><span className="pulse-dot h-2 w-2 rounded-full bg-[#79f4d9]" />{t.footerStatus}</div><h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[.9] tracking-[-.07em]">{t.footerTitle} <span className="gradient-text">{t.footerHighlight}</span> {t.footerEnd}</h2></div>
          <div className="flex flex-wrap gap-3"><a href="mailto:chientranminh355@gmail.com" className="surface group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:border-[#86f4dc]/55 hover:bg-[#86f4dc]/10">{t.start}<ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a><a href="/Tran-Minh-Chien-CV.pdf" download className="primary-link inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-1"><FileDown size={17} />{t.downloadCV}</a></div>
        </div>
      </Reveal>
      <div className="muted mt-20 flex flex-col gap-5 border-t border-[var(--border)] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} TRAN MINH CHIEN</p><div className="flex flex-wrap items-center gap-5"><a href="https://github.com/m-chien" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition hover:text-[var(--text)]"><Github size={14} />m-chien</a><a href="mailto:chientranminh355@gmail.com" className="flex items-center gap-1.5 transition hover:text-[var(--text)]"><Mail size={14} />chientranminh355@gmail.com</a><a href="/Tran-Minh-Chien-CV.pdf" download className="flex items-center gap-1.5 transition hover:text-[var(--text)]"><FileDown size={14} />CV</a><span className="flex items-center gap-1.5"><Globe2 size={14} />{t.built}</span></div></div>
    </div>
  </footer>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en"); const [theme, setTheme] = useState<Theme>("dark"); const [selectedCompetition, setSelectedCompetition] = useState<number | null>(null);
  useEffect(() => { const storedLanguage = window.localStorage.getItem("portfolio-language"); const storedTheme = window.localStorage.getItem("portfolio-theme"); if (storedLanguage === "en" || storedLanguage === "vi") setLanguage(storedLanguage); if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme); }, []);
  useEffect(() => { document.documentElement.lang = language; window.localStorage.setItem("portfolio-language", language); }, [language]);
  useEffect(() => { window.localStorage.setItem("portfolio-theme", theme); }, [theme]);
  return <main className={`theme-root theme-${theme} relative isolate min-h-screen overflow-hidden`}><div className="background-orbs pointer-events-none absolute inset-0 -z-10" /><div className="noise pointer-events-none absolute inset-0 -z-10 opacity-[.035]" /><div className="grid-lines pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] opacity-[.15] [mask-image:linear-gradient(to_bottom,black,transparent)]" /><Nav language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} /><Hero language={language} /><TechMarquee /><Projects language={language} /><About language={language} /><CompetitionGallery language={language} onSelect={setSelectedCompetition} /><Footer language={language} /><PhotoLightbox index={selectedCompetition} language={language} close={() => setSelectedCompetition(null)} /></main>;
}
