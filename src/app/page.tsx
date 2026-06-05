"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaJava, FaPython, FaDocker } from "react-icons/fa";
import { SiPostgresql, SiGraphql, SiMongodb, SiTailwindcss,  } from "react-icons/si";
import { Mail, ExternalLink, Code2, Terminal, Server, Star } from "lucide-react";

const FallingIcons = () => {
  const icons = [FaNodeJs, FaReact, FaJava, FaPython, FaDocker, SiPostgresql, SiGraphql, SiMongodb, SiTailwindcss];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 40 }).map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="absolute text-[rgb(var(--accent))]"
            style={{
              top: `-20%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 60 + 40}px`
            }}
            animate={{
              y: ["0vh", "130vh"],
              rotate: [0, Math.random() * 360 + 180],
              opacity: [0, 0.4, 0] // Increased opacity
            }}
            transition={{
              duration: Math.random() * 12 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
};

export default function Home() {
  const fullName = "Atharv Pandey";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden selection:bg-[rgb(var(--accent))] selection:text-white pb-24">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[rgb(var(--accent))] opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[rgb(var(--accent-secondary))] opacity-20 blur-[120px] pointer-events-none" />

      <FallingIcons />

      <div className="max-w-6xl mx-auto px-6 pt-32 relative z-10">
        {/* HERO SECTION - Removed gap-6 to reduce vertical space */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center mb-32 mt-10"
        >
          {/* Increased image size (w-64 h-64 = 256px), object-center for perfect centering */}
          <motion.div variants={fadeInUp} className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-[rgb(var(--accent))] to-[rgb(var(--accent-secondary))] mb-4 shadow-[0_0_40px_rgba(var(--accent),0.4)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-black border-4 border-black relative flex items-center justify-center">
              <img
                src="/profile-cropped.png"
                alt="Atharv Pandey"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium border-white/10 text-gray-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
            Full-Stack Software Engineer
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mt-1 min-h-[1.2em] mb-4">
            Hi, I&apos;m <span className="text-gradient inline-flex items-center relative mr-2">
              {fullName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </span>
            <br />
            I build systems that <span className="text-gray-400 italic">scale</span>.
          </motion.h1>

          {/* w-full max-w-full to span the text nicely without being restricted to 4 short lines */}
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 w-full max-w-[95%] leading-relaxed mb-8 px-4">
            CS Undergrad at IIIT Bhopal (9.37 CGPA). I am a Full-Stack Engineer with a heavy emphasis on backend architecture. I thrive on architecting scalable microservices, designing robust databases, and building seamless, high-performance web applications from end to end.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="mailto:atharvpandey245@gmail.com" className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 hover:scale-105 transition-all flex items-center gap-2">
              <Mail size={18} /> Get in Touch
            </a>
            <a href="https://drive.google.com/drive/folders/1kUKwIOUtmzGiYza5mpIwciRVQ9pjOMJX?usp=sharing" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl glass hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-2 font-medium border border-white/10">
              <ExternalLink size={18} /> View Resume
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/atharv-sys32" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-gray-300 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/atharvpandey" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Terminal className="text-[rgb(var(--accent))]" /> Work Experience
          </motion.h2>

          <motion.div variants={fadeInUp} className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group card-hover">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[rgb(var(--accent))] to-[rgb(var(--accent-secondary))]" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                {/* Updated Payoneer Logo */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0 border-2 border-white/20">
                  <img src="/payoneer-logo.png" alt="Payoneer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">Software Engineering Intern</h3>
                  <p className="text-xl text-gray-400 mt-1">Payoneer (Skuad)</p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-gray-300 font-mono bg-white/5 px-3 py-1 rounded-lg inline-block">May 2025 - Feb 2026</p>
                <p className="text-sm text-gray-500 mt-2">Gurugram, Haryana</p>
              </div>
            </div>

            <ul className="space-y-4 text-gray-300 ml-4 list-none relative">
              <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[rgb(var(--accent))] before:rounded-full">
                Resolved <strong className="text-white">80+ Jira tickets</strong> across 4 microservices using Node.js, TypeScript, GraphQL, MongoDB, and Kafka.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[rgb(var(--accent))] before:rounded-full">
                Architected an <strong className="text-white">end-to-end Resignation Flow</strong> comprising 6 sub-modules including GraphQL mutations, database migrations, and automated PDF generation.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[rgb(var(--accent))] before:rounded-full">
                Established a <strong className="text-white">centralized Kafka error monitoring framework</strong> integrated across 4 critical services to guarantee message processing reliability.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-[rgb(var(--accent))] before:rounded-full">
                Troubleshot <strong className="text-white">6 production-critical bugs</strong> impacting global contractor payroll accuracy. Improved unit test coverage from ∼17% to 30%+ for 5 core services.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* TOP PROJECTS SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Server className="text-[rgb(var(--accent-secondary))]" /> Featured Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <motion.div variants={fadeInUp} className="glass p-6 rounded-2xl border border-white/5 flex flex-col card-hover">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">DocBrain</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/atharv-sys32/docbrain" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-[rgb(var(--accent))] font-mono mb-4">Spring Boot • React • Tailwind • PostgreSQL • pgvector • Docker</p>
              <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                Full-stack document platform with 24 REST APIs. Engineered a RAG pipeline using Apache Tika and pgvector to store 3072-dimensional embeddings for cosine similarity search via Groq LLM.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">RAG Pipeline</span>
                <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">Microservices</span>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeInUp} className="glass p-6 rounded-2xl border border-white/5 flex flex-col card-hover">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">InkThink</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/atharv-sys32/InkThink" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-[rgb(var(--accent-secondary))] font-mono mb-4">NestJS • GraphQL • TypeORM • PostgreSQL • React</p>
              <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                Full-stack CMS with RBAC via JWT. Authored optimized GraphQL APIs for CRUD operations across 5 data models, integrating Supabase Storage for seamless media handling.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">GraphQL</span>
                <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">RBAC</span>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={fadeInUp} className="glass p-6 rounded-2xl border border-white/5 flex flex-col card-hover">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">ChatIO</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/atharv-sys32/ChatIO" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-green-400 font-mono mb-4">Express.js • Socket.io • MongoDB • React</p>
              <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                Real-time messaging solution supporting 1:1 and group chats. Handled 20+ concurrent users with sub-second latency over WebSockets. Secured with robust JWT authorization modules.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">WebSockets</span>
                <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">Real-time</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* EXTRA PROJECTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Code2 className="text-yellow-400" /> More Engineering Feats
          </motion.h2>

          <div className="space-y-4">
            {/* The Special Project */}
            <motion.div variants={fadeInUp} className="group relative glass p-6 rounded-2xl border border-[rgb(var(--accent))]/30 hover:border-[rgb(var(--accent))] transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star size={100} />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">FileShortcutter</h3>
                    <span className="px-2 py-0.5 text-xs font-mono bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">Next-Gen Engineering</span>
                  </div>
                  <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
                    Built at extreme speed using <strong className="text-white">AI coding tools</strong> (Claude Code, Cursor) and modern tooling for maximum engineering velocity. Despite the rapid prototyping pace, it features a comprehensive PRD, scalable design patterns, and robust architecture, proving that AI-augmented development doesn&apos;t mean compromising on clean code.
                  </p>
                </div>
                <a href="https://github.com/atharv-sys32/FileShortcutter" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[rgb(var(--accent))] hover:text-white transition-colors shrink-0">
                  View Repo <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Other repos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Loan Management System", url: "lms-assignment", desc: "A robust financial backend handling complex loan lifecycle processing, demonstrating secure transactional data structures and strict validation." },
                { name: "Ecommerce-SWE", url: "Ecommerce-SWE", desc: "Scalable E-commerce architecture showcasing high-throughput transactional processing." },
                { name: "Realtime_Object_Detection", url: "Realtime_Object_Detection", desc: "Computer Vision project leveraging ML models for sub-second object classification." },
                { name: "Course-Edu", url: "Course-Edu", desc: "An educational platform tailored for streamlined course management." }
              ].map((repo, i) => (
                <motion.a
                  key={i}
                  variants={fadeInUp}
                  href={`https://github.com/atharv-sys32/${repo.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-5 rounded-xl border border-white/5 hover:bg-white/[0.05] transition-colors flex justify-between items-start group"
                >
                  <div className="flex-1 pr-4">
                    <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors flex items-center gap-2">
                      <FaGithub size={16} className="shrink-0" /> <span className="truncate">{repo.name}</span>
                    </h4>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{repo.desc}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-600 group-hover:text-white transition-colors shrink-0 mt-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SKILLS & ACHIEVEMENTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} className="glass p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Arsenal</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "C++", "TypeScript", "Python", "Spring Boot", "Node.js", "NestJS", "React.js", "GraphQL"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[rgb(var(--accent))] transition-colors cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "PostgreSQL", "Kafka", "Docker", "CI/CD", "Grafana", "Datadog", "BigQuery"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[rgb(var(--accent-secondary))] transition-colors cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6 text-white">Milestones & Accolades</h3>
            <ul className="space-y-5 text-gray-300">
              <li className="flex gap-4 items-start">
                <span className="text-[rgb(var(--accent))] font-bold mt-0.5">01</span>
                <div>
                  <strong className="text-white block">Competitive Programming</strong>
                  Solved <span className="text-[rgb(var(--accent))]">600+</span> questions across Leetcode and Codechef (3-star rating).
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[rgb(var(--accent))] font-bold mt-0.5">02</span>
                <div>
                  <strong className="text-white block">Published Research</strong>
                  Author of &quot;NeuroVoice: Leveraging Neural Networks for Precise Gender Classification in Audio&quot; (SCRS ICCIS 2024).
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[rgb(var(--accent))] font-bold mt-0.5">03</span>
                <div>
                  <strong className="text-white block">Hackathons</strong>
                  Qualified for Smart India Hackathon (SIH) Round 1 and Flipkart GRiD Round 1.
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Atharv Pandey. Built to scale.</p>
          <div className="flex gap-6">
            <a href="https://github.com/atharv-sys32" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/atharvpandey" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:atharvpandey245@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </footer>
      </div>
    </main>
  );
}