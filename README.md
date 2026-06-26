# Sanyogita Singh — Personal Portfolio 🚀

A premium, interactive, and fully responsive personal portfolio website designed to showcase my technical skills, projects, certifications, and achievements as a Software Engineer. Built using modern frontend technologies with rich animations, glassmorphic UI elements, and a dark mode aesthetic.

🔗 **Live Demo**: https://portfolio-sand-two-39.vercel.app/

---

## 🛠️ Tech Stack & Features

- **Core**: React 19 + Vite + JavaScript (ES6+)
- **Styling**: Vanilla CSS with Tailwind CSS v4.0 (Custom neon glows, animations, and fluid responsive grids)
- **Icons**: Lucide React
- **Email Service**: EmailJS (Integrated client-side contact form)
- **Key Features**:
  - **Dynamic Hero Section**: Pulsing outer glow and interactive conic rotating border spinner around the profile picture.
  - **About Me**: Narrative of my passion for Backend Engineering, Software Architecture, and AI/ML.
  - **Interactive triple-row Skills Marquee**: Custom SVG tech logos for 26 modern frameworks, databases, and IDEs scrolling in alternating directions (pauses on hover).
  - **Projects Showcase**: Interactive cards featuring my featured projects (QuickGPT, Scheduler, ColdMail.ai, etc.) with source code and deployment links.
  - **Certifications Showcase**: Fully uncropped certificates (landscape ratio) that expand into a modern blurred backdrop lightbox on click, complete with verified credential verification links (Google, IBM, MongoDB, Cloudinary).
  - **Secure Contact Form**: Validated email sending with auto-disappearing notification banners.
  - **Custom Favicon**: Personalized "SS." tab logo in the browser.

---

## 📁 Project Structure

```text
Portfolio/
├── public/                 # Static assets
│   ├── favicon.svg         # Custom browser tab logo
│   └── CV.pdf              # Resume/CV file
├── src/
│   ├── assets/             # Images and local certificate media
│   ├── components/         # Reusable UI elements (Buttons, custom components)
│   ├── layout/             # Header/Navbar and Footer components
│   ├── sections/           # Individual page sections (Hero, About, Skills, Projects, etc.)
│   ├── App.jsx             # Main application layout manager
│   ├── index.css           # Global styles and tailwind theme configuration
│   └── main.jsx            # Application entry point
├── .env.example            # Environment variables template
├── index.html              # HTML entry page
└── package.json            # Project dependencies and script settings
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sanyogitasinghbgm-spec/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (based on `.env.example`) and fill in your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment Recommendations

This portfolio is a static frontend site and can be deployed for free on several popular platforms:

### 1. Vercel (Recommended)
- Link your GitHub repository directly to [Vercel](https://vercel.com).
- Vercel will auto-detect Vite settings and deploy on every git commit.
- **Environment Variables**: Add your EmailJS variables in Vercel's project settings dashboard.

### 2. Netlify
- Create an account on [Netlify](https://netlify.com) and connect your GitHub repo.
- Build command: `npm run build`, Publish directory: `dist`.
- Add environment variables in Netlify settings.

### 3. GitHub Pages
- You can deploy using the `gh-pages` package or via GitHub Actions.

---

## 👤 Author

- **Sanyogita Singh**
- GitHub: [@sanyogitasinghbgm-spec](https://github.com/sanyogitasinghbgm-spec)
- LinkedIn: [Sanyogita Singh](https://www.linkedin.com/in/sanyogita-singh-649b43394/)
- Email: sanyogitasinghbgm@gmail.com
