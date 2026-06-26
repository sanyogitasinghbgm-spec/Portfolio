import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "QuickGPT — AI-Powered Chat & Image Generation Assistant",
    description:
      "An intelligent ChatGPT-style AI assistant — MERN stack app with AI text/image generation, secure auth, and Razorpay-powered credit subscriptions.",
    image: "/projects/project1.png",
    tags: ["React", "MongoDB", "NodeJS", "Razorpay"],
    link: "https://quick-gpt-cyan.vercel.app/",
    github: "https://github.com/sanyogitasinghbgm-spec/QuickGPT.git",
  },
  {
    title: "Scheduler — AI-Powered Social Media Scheduler",
    description:
      "AI-powered social media scheduler — create, schedule & auto-publish posts across LinkedIn, Instagram, Twitter & Facebook using Google Gemini AI.",
    image: "/projects/project2.png",
    tags: [
      "NodeJS",
      "React",
      "Cloudinary",
      "TailwindCSS",
      "Google Gemini API",
      "Zernio API",
    ],
    link: "https://social-media-client-indol.vercel.app/",
    github:
      "https://github.com/sanyogitasinghbgm-spec/ai-social-media-scheduler.git",
  },
  {
    title: "ColdMail.ai — An AI-Powered Cold Outreach Campaign Generator",
    description:
      "A premium full-stack AI cold outreach campaign builder. Generates personalized cold emails and LinkedIn connection │ notes in seconds using Groq",
    image: "/projects/project3.png",
    tags: ["React", "NodeJS", "MongoDB", "Groq"],
    link: "https://ai-cold-mail-generator-client.vercel.app/",
    github:
      "https://github.com/sanyogitasinghbgm-spec/ai-cold-mail-generator.git",
  },
  {
    title: "Libraria - Library Management System",
    description:
      "A full-stack Library Management System built with Node.js, Express.js, MongoDB, and React.js. Features JWT authentication, OTP email verification, role-based access (Admin/User), book inventory management with Cloudinary uploads, and automated borrow/return tracking with fine calculation.",
    image: "/projects/project4.png",
    tags: ["React", "NodeJS", "MongoDB", "Brevo API"],
    link: "https://library-management-system-gamma-one.vercel.app/",
    github: "https://github.com/sanyogitasinghbgm-spec/LibraryManagementSystem.git",
  },
  {
    title: "PhonePay Clone",
    description:
      "A full-stack PhonePe clone featuring secure user authentication, wallet money transfers, transaction history, MPIN verification, and utility bill payments.",
    image: "/projects/project5.png",
    tags: ["React", "NodeJS", "MongoDB", "swagger"],
    link: "https://phonepay-clone-frontend.vercel.app/",
    github: "https://github.com/sanyogitasinghbgm-spec/phonepay-clone.git",
  },
  {
    title: "CineMatch — Movie Recommender System",
    description:
      " A content-based movie recommender system built with Python & Streamlit. Uses NLP (Bag of Words + Cosine Similarity) on TMDB 5000 dataset to recommend similar movies with posters via OMDb API.",
    image: "/projects/project6.png",
    tags: ["Python", "Streamlit", "OMDB-API", "sscikit-learn"],
    link: "https://movie-recommender-system-j8p5gtromje4kgdwrrijfa.streamlit.app/",
    github: "https://github.com/sanyogitasinghbgm-spec/movie-recommender-system.git",
  },
  {
    title: "Alex — AI-Powered WhatsApp Customer Support Agent",
    description:
      "An end-to-end AI Agent for WhatsApp customer support, replicating a real-world enterprise workflow. Alex dynamically calls tools, queries a live database, auto-generates support tickets, and responds to customers in real time via WhatsApp — 24/7, no human intervention needed.",
    image: "/projects/project7.png",
    tags: ["Webhook", "Twilio", "Airtable ", "n8n"],
    link: "#",
    github: "https://github.com/sanyogitasinghbgm-spec/movie-recommender-system.git",
  },
  {
    title: "VaaniAI — AI-Powered Civic Complaint Resolution System",
    description:
      "An AI-powered multilingual voice calling agent built with a FastAPI Python backend, Twilio for telephony, MongoDB for data persistence, and a JavaScript/TypeScript frontend — enabling automated, intelligent phone conversations across multiple languages.",
    image: "/projects/project8.png",
    tags: ["FastAPI", "Vapi", "Python", "React", "JavaScript"],
    link: "https://mcd-multilingual-agent.vercel.app/",
    github: "https://github.com/sanyogitasinghbgm-spec/MCD_Multilingual_Agent.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
