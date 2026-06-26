import React from "react";

// SVG Logos for Technologies to ensure they look premium and compile offline
const techLogos = {
  React: (
    <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  "Node.js": (
    <svg className="w-6 h-6 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L4 6.6v9.2L12 22l8-4.6v-9.2L12 2zm-1.8 15.6c-.6 0-1.1-.1-1.6-.4-.5-.3-.8-.8-.8-1.4h1.5c0 .3.1.5.3.6.2.1.4.2.7.2.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8v-6.3h1.5v6.2c0 .9-.3 1.6-.8 2.1-.5.5-1.1.7-1.9.7zm5.3-.2c-.5.5-1.2.7-2 .7s-1.5-.2-2-.7c-.5-.5-.7-1.2-.7-2.1h1.5c0 .5.1.9.3 1.1.2.3.6.4 1 .4s.7-.1 1-.4c.2-.2.3-.6.3-1.1v-.8c-.3.4-.6.6-1 .8-.4.1-.8.2-1.3.2-1 0-1.8-.4-2.3-1.1-.5-.7-.8-1.7-.8-3s.3-2.3.8-3c.5-.7 1.3-1.1 2.3-1.1.4 0 .9.1 1.3.2.4.1.8.4 1 .8V8.9h1.5v6.2c.1.9-.2 1.6-.7 2.1z" />
    </svg>
  ),
  JavaScript: (
    <svg className="w-6 h-6 text-[#F7DF1E] bg-black rounded" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm11.52 14.28c.48-.28.84-.7 1.08-1.26.24-.56.36-1.24.36-2.04h1.56c0 1.08-.24 1.94-.72 2.58-.48.64-1.26.96-2.34.96-1.12 0-1.96-.32-2.52-.96-.56-.64-.84-1.5-.84-2.58h1.56c0 .8.12 1.4.36 1.8.24.4.64.6 1.2.6.48 0 .84-.1 1.08-.3.24-.2.36-.5.36-.9s-.1-.68-.3-.84c-.2-.16-.62-.36-1.26-.6-1.04-.4-1.8-.82-2.28-1.26-.48-.44-.72-1.1-.72-1.98 0-.96.32-1.7.96-2.22s1.46-.78 2.46-.78c1.08 0 1.9.26 2.46.78s.84 1.24.84 2.16h-1.56c0-.68-.14-1.18-.42-1.5-.28-.32-.7-.48-1.26-.48-.48 0-.86.12-1.14.36-.28.24-.42.54-.42.9s.12.64.36.84c.24.2.7.42 1.38.66.92.32 1.62.68 2.1 1.08.48.4.78.88.9 1.44.12.56.18 1.18.18 1.86v.24c0 .84-.2 1.58-.6 2.22s-1 .12-1.8.12z" />
    </svg>
  ),
  PostgreSQL: (
    <svg className="w-6 h-6 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.6 3.1 8.5 7.4 9.6.2.1.4-.1.4-.3v-1.9c-.8.3-1.6.4-2.5.3-.8-.1-1.5-.4-2-.9-.5-.5-.8-1.2-.9-2-.1-.8.1-1.6.5-2.2.4-.6.9-1 1.5-1.2.6-.2 1.2-.2 1.8-.1.6.1 1.1.4 1.5.8s.6.9.7 1.5h1.7c-.1-1.1-.5-2.1-1.2-2.9-.7-.8-1.7-1.3-2.8-1.4-1.1-.1-2.2.2-3.1.9-.9.7-1.4 1.7-1.5 2.8s.2 2.2.9 3.1c.7.9 1.7 1.4 2.8 1.5 1.1.1 2.2-.2 3.1-.9.9-.7 1.4-1.7 1.5-2.8H12v-1.7h5.1c-.1 1.8-.7 3.5-1.8 4.9-1.1 1.4-2.7 2.3-4.5 2.6V22c2.7-.4 5.1-1.8 6.7-4 1.6-2.2 2.2-4.9 1.7-7.5-.5-2.6-2-4.9-4.2-6.3C15 3.1 13.5 2.4 12 2zm1 3.5c-.3 0-.6.1-.8.3-.2.2-.3.5-.3.8 0 .3.1.6.3.8.2.2.5.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3z" />
    </svg>
  ),
  MongoDB: (
    <svg className="w-6 h-6 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11.5 2 7 8 7 12c0 2.8 2.2 5 5 5s5-2.2 5-5c0-4-4.5-10-5-10zm0 13c-1.7 0-3-1.3-3-3 0-1.8 1.8-4.7 3-6.4 1.2 1.7 3 4.6 3 6.4 0 1.7-1.3 3-3 3zm0-11c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z" />
    </svg>
  ),
  Redis: (
    <svg className="w-6 h-6 text-[#DC382D]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 6.5l10 4.5 10-4.5L12 2zm0 11l-9-4v6.5L12 20V13zm1-1.5l9-4v6.5L13 20v-8.5z" />
    </svg>
  ),
  Docker: (
    <svg className="w-6 h-6 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.98 8.602h-2.117V6.485h2.117v2.117zm2.84 0H14.7V6.485h2.12v2.117zm-5.679 0H8.983V6.485h2.158v2.117zm2.839-2.836h-2.117V3.652h2.117v2.114zm2.84 0H14.7V3.652h2.12v2.114zm-5.679 0H8.983V3.652h2.158v2.114zm-2.84 5.672H6.143v-2.116h2.157v2.116zm5.68 0h-2.117v-2.116h2.117v2.116zm2.84 0H14.7v-2.116h2.12v2.116zm8.125-.566c-.198-.943-.764-1.745-1.613-2.222-.17-.09-.34-.17-.528-.245v.004c-.094-.486-.33-.925-.668-1.282-.575-.623-1.425-.97-2.316-.97-1.047 0-1.925.48-2.453 1.282H2.338v7.05h17.925c.877 0 1.68-.425 2.222-1.127.528-.707.726-1.57.566-2.5z" />
    </svg>
  ),
  Vercel: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  ),
  Render: (
    <svg className="w-6 h-6 text-[#46E3B7]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7h2v2.5z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg className="w-6 h-6 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6.036c-2.286 0-3.428.84-3.428 2.52 0 2.235 1.776 2.544 3.109 2.777 1.05.184 1.455.337 1.455.932 0 .524-.462.825-1.385.825-1.246 0-1.892-.61-1.938-1.832H6.974c.05 2.378 1.493 3.664 4.322 3.664 2.686 0 3.828-1.04 3.828-2.613 0-2.302-1.875-2.61-3.21-2.843-1.084-.19-1.353-.357-1.353-.83 0-.427.35-.74 1.135-.74.99 0 1.547.467 1.666 1.4H17.02c-.126-2.186-1.584-3.053-5.02-3.053z" />
    </svg>
  ),
  n8n: (
    <svg className="w-6 h-6 text-[#FF6D5A]" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 12l12-6M6 12l12 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Git: (
    <svg className="w-6 h-6 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.68 11.31L12.69 1.32c-.42-.42-1.12-.42-1.54 0L9.43 3.04l2.73 2.73c.31-.11.68-.07.96.18.29.29.33.72.15 1.06l2.64 2.64c.34-.18.77-.14 1.06.15.42.42.42 1.12 0 1.54-.42.42-1.12.42-1.54 0-.29-.29-.33-.72-.15-1.06l-2.63-2.63c-.15.08-.32.12-.5.12s-.35-.04-.5-.12L9.04 11.3c.08.15.12.32.12.5 0 .38-.15.73-.42.99-.42.42-1.12.42-1.54 0-.42-.42-.42-1.12 0-1.54.26-.26.61-.41.99-.41.18 0 .35.04.5.12l2.67-2.67c-.18-.34-.14-.77.15-1.06.29-.29.72-.33 1.06-.15l-2.73-2.73-8.02 8.02c-.42.42-.42 1.12 0 1.54l9.99 9.99c.42.42 1.12.42 1.54 0l9.99-9.99c.42-.41.42-1.11 0-1.53z" />
    </svg>
  ),
  MySQL: (
    <svg className="w-6 h-6 text-[#00758F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" fillOpacity="0.2" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      <path d="M12 9c1.5-1 3 0 3 1.5s-1.5 2-3 .5S10.5 10 12 9z" fill="currentColor" />
    </svg>
  ),
  FastAPI: (
    <svg className="w-6 h-6 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 6v12l9 5 9-5V6l-9-5zm-1 15h-3l5-9h3l-5 9z" />
    </svg>
  ),
  Swagger: (
    <svg className="w-6 h-6 text-[#85EA2D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
      <circle cx="12" cy="12" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  "VS Code": (
    <svg className="w-6 h-6 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.98 6.41l-2.73-2.12c-.3-.23-.71-.24-1.02-.02l-10 7.2L3.13 6.64c-.37-.28-.9-.19-1.17.2l-1.8 2.6c-.23.33-.2.78.08 1.07l4.33 4.49-4.33 4.49c-.28.29-.31.74-.08 1.07l1.8 2.6c.27.39.8.48 1.17.2l7.1-4.83 10 7.2c.31.22.72.21 1.02-.02l2.73-2.12c.43-.33.52-.94.2-1.38l-6.1-8.23 6.1-8.23c.32-.44.23-1.05-.2-1.38z" />
    </svg>
  ),
  Antigravity: (
    <svg className="w-6 h-6 text-[#20B2A6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3.5" fill="currentColor" className="animate-pulse" />
      <ellipse cx="12" cy="12" rx="9" ry="2.5" transform="rotate(-30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="2.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="2.5" transform="rotate(90 12 12)" />
    </svg>
  ),
  HTML: (
    <svg className="w-6 h-6 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 2h21l-1.91 21.56L12 24l-8.59-2.44L1.5 2zm17 5H5.5l.38 4.3h12l-.37 4.19L12 17.22l-5.51-1.73-.25-2.79H8.5l.13 1.48 3.37 1.06 3.38-1.06.27-3.08H5.97l-.76-8.6h13.38v.1z" />
    </svg>
  ),
  CSS: (
    <svg className="w-6 h-6 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 2h21l-1.91 21.56L12 24l-8.59-2.44L1.5 2zm15.58 7.42l-.24 2.71H8.55l.14 1.5H16.6l-.67 7.53L12 22.25l-3.93-1.09-.27-3h2.24l.11 1.25 1.85.5 1.85-.5.25-2.77H6.07l-.67-7.53h11.68z" />
    </svg>
  ),
  Java: (
    <svg className="w-6 h-6 text-[#E76F51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  Express: (
    <svg className="w-6 h-6 text-[#828282]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8h6M5 12h4M5 16h6M5 8v8" />
      <path d="M13 8l6 8M19 8l-6 8" />
    </svg>
  ),
  Postman: (
    <svg className="w-6 h-6 text-[#FF6C37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5h6c0-2-1-4-2.5-5.5z" />
      <path d="M12 2c-4 0-8 4-8 8v6h16v-6c0-4-4-8-8-8z" />
      <circle cx="12" cy="9" r="2" />
      <path d="M9 16v3h6v-3" />
    </svg>
  ),
  Groq: (
    <svg className="w-6 h-6 text-[#F55036]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10a6 6 0 1 0-1.2 5.3L20 18M13 10h5" />
    </svg>
  ),
  Gemini: (
    <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-2 6 10 10 0 0 0-6 2 10 10 0 0 0 6 2 10 10 0 0 0 2 6 10 10 0 0 0 2-6 10 10 0 0 0 6-2 10 10 0 0 0-6-2 10 10 0 0 0-2-6z" fill="url(#gemini-grad-skills)" />
      <defs>
        <linearGradient id="gemini-grad-skills" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  "IntelliJ IDEA": (
    <svg className="w-6 h-6 text-[#FE2857]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 8v6M13 8h2v6h-2" />
    </svg>
  ),
  "Version Control": (
    <svg className="w-6 h-6 text-[#F05032]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6M9 9h6a3 3 0 0 1 3 3v3" />
    </svg>
  ),
};

const skillList1 = ["React", "Node.js", "JavaScript", "MongoDB", "PostgreSQL", "Tailwind CSS", "MySQL", "FastAPI", "Express"];
const skillList2 = ["Redis", "Docker", "Vercel", "Render", "n8n", "Git", "Version Control", "Swagger", "Postman"];
const skillList3 = ["HTML", "CSS", "Java", "Groq", "Gemini", "Antigravity", "VS Code", "IntelliJ IDEA"];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technologies I{" "}
            <span className="font-serif italic font-normal text-white">
              work with.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A linear view of the modern frameworks, databases, tools, and platforms in my developer toolkit.
          </p>
        </div>

        {/* Linear Marquee Rows */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Row 1: Left Scrolling */}
          <div className="relative overflow-hidden py-3">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
              {[...skillList1, ...skillList1, ...skillList1].map((skill, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="flex-shrink-0 mx-4 flex items-center gap-3 px-5 py-3 bg-surface/50 rounded-full border border-border/40 hover:border-primary/50 transition-colors shadow-sm cursor-pointer group"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {techLogos[skill] || null}
                  </div>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right Scrolling (Reverse Marquee) */}
          <div className="relative overflow-hidden py-3">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee hover:[animation-play-state:paused] [animation-direction:reverse] transition-all duration-300">
              {[...skillList2, ...skillList2, ...skillList2].map((skill, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="flex-shrink-0 mx-4 flex items-center gap-3 px-5 py-3 bg-surface/50 rounded-full border border-border/40 hover:border-primary/50 transition-colors shadow-sm cursor-pointer group"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {techLogos[skill] || null}
                  </div>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Left Scrolling (New Row) */}
          <div className="relative overflow-hidden py-3">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
              {[...skillList3, ...skillList3, ...skillList3].map((skill, idx) => (
                <div 
                  key={`r3-${idx}`} 
                  className="flex-shrink-0 mx-4 flex items-center gap-3 px-5 py-3 bg-surface/50 rounded-full border border-border/40 hover:border-primary/50 transition-colors shadow-sm cursor-pointer group"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {techLogos[skill] || null}
                  </div>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {skill === "Antigravity" ? "Antigravity" : skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
