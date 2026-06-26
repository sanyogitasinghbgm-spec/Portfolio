import { useState, useEffect } from "react";
import { X, Award, Calendar, ExternalLink, ZoomIn } from "lucide-react";
import cert1 from "@/assets/certification1.png";
import cert2 from "@/assets/certification2.png";
import cert3 from "@/assets/certification3.png";
import cert4 from "@/assets/certification4.png";

// SVG Logos for Issuers
const issuerLogos = {
  Google: (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  ),
  MongoDB: (
    <svg className="w-4 h-4 text-[#47A248] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11.5 2 7 8 7 12c0 2.8 2.2 5 5 5s5-2.2 5-5c0-4-4.5-10-5-10zm0 13c-1.7 0-3-1.3-3-3 0-1.8 1.8-4.7 3-6.4 1.2 1.7 3 4.6 3 6.4 0 1.7-1.3 3-3 3zm0-11c-.3 0-.5 0-.5.5s0 .5.5.5.5-.2.5-.5 0-.5-.5-.5z" />
    </svg>
  ),
  Cloudinary: (
    <svg className="w-4 h-4 text-[#3448C5] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM15 13l-3-3-3 3h2v4h2v-4h2z" />
    </svg>
  ),
  IBM: (
    <svg className="w-4 h-4 text-[#0F62FE] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 4h4v1H0V4zm0 2h4v1H0V6zm0 2h4v1H0V8zm0 2h4v1H0v-1zm0 2h4v1H0v-1zm0 2h4v1H0v-1zm0 2h4v1H0v-1zm0 2h4v1H0v-1zM6 4h4v1H6V4zm0 2h4v1H6V6zm0 2h4v1H6V8zm0 2h4v1H6v-1zm0 2h4v1H6v-1zm0 4h4v1H6v-1zm0 2h4v1H6v-1zm0-4h4v1H6v-1zm6-8h4v1h-4V4zm0 2h4v1h-4V6zm0 2h4v1h-4V8zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm6-14h4v1h-4V4zm0 2h4v1h-4V6zm0 2h4v1h-4V8zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1z" />
    </svg>
  ),
};

const certifications = [
  {
    id: 1,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Nov 2025",
    image: cert1,
    description: "Covers standard computer networking concepts including the TCP/IP and OSI models, IP routing, DNS, DHCP, network ports, and diagnostic troubleshooting tools.",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/8RYYP2W1SXKE"
  },
  {
    id: 2,
    title: "MongoDB Database Admin Path (Self-Managed)",
    issuer: "MongoDB",
    date: "Jun 2026",
    image: cert2,
    description: "In-depth path focusing on self-managed MongoDB database administration, covering configuration, security policies, scaling topologies, replication, and performance optimization.",
    verifyUrl: "https://learn.mongodb.com/c/TITQyhM5SsOV4DjEyx_yAg"
  },
  {
    id: 3,
    title: "Introduction to Cloudinary for Node.js Developers",
    issuer: "Cloudinary",
    date: "May 2026",
    image: cert3,
    description: "Covers media uploads, on-the-fly image and video transformations, performance optimization delivery, and programmatic SDK integration inside Node.js applications.",
    verifyUrl: "https://training.cloudinary.com/c/s/ZTt80M0Pc4dcC24vQ6aGpRodQ8rLPX71Pm6nkuUvHSPUvGf547omafaDs_dXMjdF"
  },
  {
    id: 4,
    title: "Introduction to DevOps",
    issuer: "IBM",
    date: "Jan 2025",
    image: cert4,
    description: "Covers DevOps principles, Agile culture, CI/CD pipelines, containerization tools (Docker/Kubernetes), microservices architectures, and automation workflows.",
    verifyUrl: "https://www.coursera.org/account/accomplishments/records/6XU1GP63E2HI"
  },
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Credentials & Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My{" "}
            <span className="font-serif italic font-normal text-white">
              Certifications.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Verified proofs of my technical expertise, specialization areas, and practical training courses.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group glass rounded-2xl p-6 glow-border animate-fade-in cursor-pointer hover:translate-y-[-4px] hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[1.414/1] bg-surface rounded-xl flex items-center justify-center p-3 mb-5 border border-border/30">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain rounded transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Hover overlay with Zoom icon */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="p-3 rounded-full bg-primary/20 text-primary border border-primary/30">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">Click to Expand</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
                      {issuerLogos[cert.issuer] || null}
                      <span className="text-foreground/90">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Verify Link */}
              <div className="mt-4 pt-3 border-t border-border/30">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for full screen certificate view */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-md bg-background/85 transition-all duration-300 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          {/* Modal Content Wrapper */}
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center justify-center gap-4 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-14 right-2 sm:right-0 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] group cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300" />
            </button>

            {/* Certificate Display Screen */}
            <div className="w-full bg-surface/40 p-2 rounded-2xl border border-border/80 shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-inner"
              />
            </div>

            {/* Certificate Meta Info Overlay */}
            <div className="glass rounded-xl p-4 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left">
              <div>
                <span className="text-xs font-semibold text-primary tracking-wider uppercase flex items-center gap-1.5 mb-1">
                  {issuerLogos[selectedCert.issuer] || <Award className="w-4 h-4" />}
                  <span className="text-foreground/90 ml-1">{selectedCert.issuer}</span>
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {selectedCert.title}
                </h4>
              </div>
              <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground sm:self-center border-t sm:border-t-0 sm:border-l border-border/50 pt-2 sm:pt-0 sm:pl-4 min-w-[150px]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {selectedCert.date}</span>
                </div>
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline uppercase tracking-wider"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
