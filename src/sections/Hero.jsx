import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState } from "react";

const DiscordIcon = (props) => (
  <svg {...props} viewBox="0 0 127.14 96.36" fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.45-5c.84-.62,1.65-1.27,2.43-2a75.31,75.31,0,0,0,73.1,0c.78.71,1.59,1.36,2.43,2a68.43,68.43,0,0,1-10.45,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.58,49,123.51,26.23,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Backend Engineer • AI/Ml Enthusaist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Sanyogita Singh 👋 An aspiring Software Engineer
                passionate about AI, Automation, and Full-Stack Development. I
                build AI-powered applications, intelligent workflow automations,
                and modern web solutions using technologies like React, Node.js,
                MongoDB, Java, and n8n. I'm always exploring new technologies,
                solving real-world problems through projects, and continuously
                improving my skills.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/CV.pdf" download="Sanyogita_Singh_CV.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/sanyogitasinghbgm-spec",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sanyogita-singh-649b43394/",
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/Sanyogita338681",
                  label: "Twitter",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/softlychaotic9",
                  label: "Instagram",
                },
                {
                  icon: DiscordIcon,
                  href: "https://discord.com/users/sany0124_34365",
                  label: "Discord: sany0124_34365",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center justify-center w-9 h-9"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image Wrapper with Rotating Conic Glow */}
            <div className="relative max-w-md mx-auto aspect-[4/5] p-[3px] rounded-3xl overflow-hidden group shadow-2xl">
              {/* Pulsing Outer Glow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-xl opacity-70 animate-pulse pointer-events-none" />
              
              {/* Conic Gradient Border Spinner */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,var(--color-primary),transparent_30%,var(--color-primary),transparent_70%,var(--color-primary))] animate-[spin_5s_linear_infinite] group-hover:animate-[spin_2.5s_linear_infinite] transition-all" />

              {/* Inner Card Container */}
              <div className="relative w-full h-full bg-[#0f1418] rounded-[22px] p-2 flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-photo.jpg"
                  alt="Sanyogita Singh"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Status Badge */}
                <div className="absolute bottom-4 right-4 glass rounded-xl px-4 py-2.5 shadow-lg border border-border/50 animate-float z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold tracking-wide uppercase text-foreground">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
