import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "./assets/hero.mp4"; // Ensure your video is placed at src/assets/hero.mp4

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/70 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tighter text-white">
          Leeshark<span className="text-red-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.83-4.828 4.83a1 1 0 01-1.414-1.414l4.829-4.83-4.829-4.83a1 1 0 011.414-1.414l4.828 4.83 4.829-4.83a1 1 0 011.414 1.414l-4.83 4.83 4.83 4.83z"/>
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950/95 border-b border-white/10 px-6 py-4"
          >
            <div className="flex flex-col gap-4 py-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-white"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center rounded-full border border-white/20 bg-white/10 py-2.5 text-sm font-semibold text-white backdrop-blur"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ==========================================
// 2. HERO COMPONENT (WITH INTEGRATED VIDEO ENGINE)
// ==========================================
function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        playsInline
        muted
        loop
      />

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Interactive Core Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-12 mt-16 md:mt-0">
        
        {/* Left Side: Content Branding */}
        <div className="text-white max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
              Hi, I'm Sravya <br />
              <span 
                className="inline-block mt-2 text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.85)" }}
              >
                Full Stack Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg text-neutral-300 font-medium leading-relaxed max-w-xl"
          >
            I build modern web applications using React, Next.js, Node.js, Tailwind CSS and MongoDB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#ef4444", border: "1px solid #ef4444" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="rounded-full bg-white border border-white px-8 py-3.5 text-black font-bold tracking-wide text-sm transition-colors duration-200"
            >
              View My Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-white font-semibold backdrop-blur-md transition-colors duration-200 text-sm"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Play Engine */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-start md:justify-center items-center"
        >
          <button
            onClick={toggleVideo}
            className="group relative flex items-center justify-center h-28 w-28 md:h-36 md:w-36 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg text-white transition-all duration-300 hover:scale-110 hover:border-red-500/50 hover:shadow-[0_0_50px_rgba(239,68,68,0.6)]"
            aria-label={playing ? "Pause presentation video" : "Play presentation video"}
          >
            {playing ? (
              <svg className="w-8 h-8 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 fill-current ml-1 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>

      {/* Bottom Center: Scroll Pointer Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1.5 backdrop-blur-sm"
        >
          <div className="w-1.5 h-2 bg-white rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 3. ABOUT COMPONENT
// ==========================================
function About() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2 text-white">
              Crafting Digital Experiences.
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              I am Sravya, a software developer dedicated to designing architectures that marry performant engineering with beautiful, intuitive aesthetics. My goal is to build scalable user-centric solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-950 p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-500" />
            <h3 className="text-xl font-bold mb-4 text-white">Philosophy</h3>
            <blockquote className="text-gray-300 italic border-l-2 border-red-500 pl-4">
              "Simplicity is the ultimate sophistication. Clean logic underneath produces dynamic workflows on top."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. SERVICES / SKILLS COMPONENT
// ==========================================
function Services() {
  const skills = [
    { name: "Frontend Development", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend Architecture", items: ["Node.js", "Express.js", "REST APIs", "GraphQL"] },
    { name: "Database Engineering", items: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"] },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Expertise</span>
          <h2 className="text-4xl font-black mt-2 tracking-tight">Core Competencies</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="bg-neutral-950 border border-white/10 px-3 py-1 rounded-md text-xs font-medium text-gray-400">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. PROJECTS COMPONENT
// ==========================================
function Projects() {
  const sampleProjects = [
    { title: "E-Commerce Cloud Engine", desc: "Next.js & Microservices architecture platform." },
    { title: "AI Analytics Node", desc: "Real-time dashboard visualizer for unstructured data streams." },
  ];

  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Portfolio Showcase</span>
          <h2 className="text-4xl font-black mt-2 tracking-tight">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {sampleProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-video bg-neutral-950 border border-white/5 p-8 flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10" />
              <div className="relative z-20">
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">{proj.title}</h3>
                <p className="text-sm text-gray-400 mt-2 max-w-md">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. FOOTER COMPONENT
// ==========================================
function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Leeshark. All rights reserved.</p>
        <p className="text-gray-400">Designed & Engineered by Sravya</p>
      </div>
    </footer>
  );
}

// ==========================================
// 7. ROOT EXPORT APPLICATION CONTAINER
// ==========================================
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-neutral-950 text-white font-sans antialiased selection:bg-red-500 selection:text-white">
      <Navbar isScrolled={isScrolled} />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}