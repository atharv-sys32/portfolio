"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaJava, FaPython, FaDocker } from "react-icons/fa";
import { SiPostgresql, SiGraphql, SiMongodb, SiTailwindcss, SiPytorch, SiTensorflow, SiJupyter, SiPandas, SiScikitlearn, SiKeras, SiOpenai } from "react-icons/si";

import { Mail, ExternalLink, Code2, Terminal, Server, Star, GraduationCap, Database, FileText, Layers, BrainCircuit, ShieldCheck, Zap, GitCommit, Cpu } from "lucide-react";

const FallingIcons = ({ isAI }: { isAI: boolean }) => {
  const sweIcons = [FaNodeJs, FaReact, FaJava, FaPython, FaDocker, SiPostgresql, SiGraphql, SiMongodb, SiTailwindcss];
  const aiIcons = [FaPython, SiPytorch, SiTensorflow, SiJupyter, SiPandas, SiScikitlearn, SiKeras, SiOpenai, SiPostgresql, FaDocker];
  const icons = isAI ? aiIcons : sweIcons;

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

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{count}</span>;
};

export default function Portfolio({ isAI = false }: { isAI?: boolean }) {
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

      <FallingIcons isAI={isAI} />

      <div className="w-[90vw] max-w-[1400px] mx-auto pt-32 relative z-10">
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
            {isAI ? "AI / ML Engineer" : "Full-Stack Software Engineer"}
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
            {isAI ? "CS Undergrad at IIIT Bhopal (9.37 CGPA). I am an AI/ML Engineer focusing on deep learning, neural networks, and scalable AI infrastructure. I thrive on building end-to-end machine learning pipelines, optimizing models, and bridging the gap between research and production." : "CS Undergrad at IIIT Bhopal (9.37 CGPA). I am a Full-Stack Engineer with a heavy emphasis on backend architecture. I thrive on architecting scalable microservices, designing robust databases, and building seamless, high-performance web applications from end to end."}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="mailto:atharvpandey245@gmail.com" className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 hover:scale-105 transition-all flex items-center gap-2">
              <Mail size={18} /> Get in Touch
            </a>
            <a href={isAI ? "https://drive.google.com/drive/folders/1d5o9uNyfZmPOHar1kID6Aa3XeeP8UFRr?usp=sharing" : "https://drive.google.com/drive/folders/1kUKwIOUtmzGiYza5mpIwciRVQ9pjOMJX?usp=sharing"} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl glass hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-2 font-medium border border-white/10">
              <ExternalLink size={18} /> View Resume
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/atharv-sys32" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-gray-300 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/atharvpandey-swe" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:scale-110 transition-all border border-white/10 text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* IMPACT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full bg-gradient-to-r from-[rgb(var(--accent))]/10 via-white/5 to-[rgb(var(--accent-secondary))]/10 border-y border-white/10 py-8 mb-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">90<span className="text-[rgb(var(--accent))]">+</span></div>
              <p className="text-xs md:text-sm text-gray-400 font-mono uppercase tracking-wider">Prod Tickets Resolved</p>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">5<span className="text-[rgb(var(--accent-secondary))]">+</span></div>
              <p className="text-xs md:text-sm text-gray-400 font-mono uppercase tracking-wider">Core Microservices Scaled</p>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">&lt;500<span className="text-yellow-400">ms</span></div>
              <p className="text-xs md:text-sm text-gray-400 font-mono uppercase tracking-wider">API Latency Achieved</p>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">30<span className="text-green-400">%+</span></div>
              <p className="text-xs md:text-sm text-gray-400 font-mono uppercase tracking-wider">Test Coverage Reached</p>
            </div>
          </div>
        </motion.div>

        {/* CORE EXPERTISE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            <BrainCircuit className="text-[rgb(var(--accent-secondary))]" /> Engineering DNA
          </motion.h2>

          {!isAI ? (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-[rgba(var(--accent),0.2)] hover-glow-accent group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={80} />
              </div>
              <Database className="text-[rgb(var(--accent))] mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(var(--accent))] transition-all duration-300">Distributed Data Systems</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Expertise in designing fault-tolerant systems using <strong className="text-white">Kafka</strong> for event-driven architectures. Deep understanding of <strong className="text-white">MongoDB & PostgreSQL</strong> modeling, indexing, and handling heavy read/write throughput via <strong className="text-[rgb(var(--accent))]">GraphQL and REST</strong>.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-yellow-400/20 hover-glow-yellow group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap size={80} />
              </div>
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-all duration-300">High-Performance APIs</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Obsessed with latency reduction. Proficient in executing load tests via <strong className="text-white">JMeter</strong> to identify bottlenecks, slashing response times from seconds to <strong className="text-yellow-400">sub-500ms</strong> using caching, optimized DB queries, and payload minimization.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-green-400/20 hover-glow-green group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={80} />
              </div>
              <ShieldCheck className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-all duration-300">Enterprise Architecture</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bridging rapid prototyping with enterprise scale. Integrating <strong className="text-white">Grafana, Datadog, & BigQuery</strong> for observability. Managing robust CI/CD, unit testing strategies, and strict <strong className="text-green-400">JWT/RBAC security</strong> modules across Node.js and Spring Boot.
              </p>
            </motion.div>
          </div>
) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-[rgba(var(--accent),0.2)] hover-glow-accent group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={80} />
              </div>
              <Database className="text-[rgb(var(--accent))] mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(var(--accent))] transition-all duration-300">Scalable AI Pipelines</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Expertise in designing fault-tolerant ETL systems using <strong className="text-white">Kafka & PostgreSQL</strong> for real-time ingestion. Deep understanding of <strong className="text-white">Vector Databases (pgvector)</strong> and large-scale data engineering to support production-ready ML infrastructure.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-yellow-400/20 hover-glow-yellow group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap size={80} />
              </div>
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-all duration-300">Model Optimization</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Obsessed with inference latency. Proficient in optimizing deep neural networks with <strong className="text-white">TensorFlow & PyTorch</strong>, utilizing Batch Normalization, Dropout, and SMOTE to maximize F1-scores while slashing execution times for <strong className="text-yellow-400">sub-second</strong> predictions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-green-400/20 hover-glow-green group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={80} />
              </div>
              <ShieldCheck className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-all duration-300">Applied Machine Learning</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bridging research with real-world scale. Training robust <strong className="text-white">XGBoost & Random Forest</strong> models for predictive analytics, combined with <strong className="text-green-400">RAG architectures</strong> and Groq LLMs to deliver intelligent, context-aware web applications.
              </p>
            </motion.div>
          </div>)}
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

              {/* Architecture & Features */}
              <div className="glass-card glass-card-hover hover-glow-accent z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[rgba(var(--accent),0.1)] text-[rgb(var(--accent))]">
                     <Server size={18} />
                  </div>
                  <h4 className="font-bold text-white">System Architecture</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-400 list-none">
                  <li className="bullet-list-item bullet-accent">
                    Architected an <strong className="text-gray-200">end-to-end Resignation Flow</strong> via 5 GraphQL mutations, handling DB migrations (JSONB) and PDF/email triggers.
                  </li>
                  <li className="bullet-list-item bullet-accent">
                    Engineered robust role-based access checks (IsCEM/IsCSM) and resolved complex search filtering across Contractor and Vendor APIs.
                  </li>
                </ul>
              </div>

              {/* Infrastructure & Data */}
              <div className="glass-card glass-card-hover hover-glow-secondary z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[rgba(var(--accent-secondary),0.1)] text-[rgb(var(--accent-secondary))]">
                     <Terminal size={18} />
                  </div>
                  <h4 className="font-bold text-white">Infrastructure & Data</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-400 list-none">
                  <li className="bullet-list-item bullet-accent-secondary">
                    Established a <strong className="text-gray-200">centralized Kafka monitoring framework</strong> across 4 services, unifying consumers and implementing health checks.
                  </li>
                  <li className="bullet-list-item bullet-accent-secondary">
                    Executed <strong className="text-gray-200">Node.js v22 & Mongoose upgrades</strong>, fixed BigQuery sync pipelines, and set up Grafana cron dashboards.
                  </li>
                </ul>
              </div>

              {/* Performance Optimization */}
              <div className="glass-card glass-card-hover hover-glow-green z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-400/10 text-green-400">
                     <Star size={18} />
                  </div>
                  <h4 className="font-bold text-white">Performance Optimization</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-400 list-none">
                  <li className="bullet-list-item bullet-green">
                    Slashed API response times from <strong className="text-gray-200">seconds to ~250-600ms</strong> across 8+ heavy workflows by eliminating database bottlenecks and optimizing queries.
                  </li>
                  <li className="bullet-list-item bullet-green">
                    Resolved slow Kafka message consumption by adding targeted MongoDB indexing, and conducted <strong className="text-gray-200">JMeter load testing</strong> to benchmark workflow stability.
                  </li>
                </ul>
              </div>

              {/* Production Engineering */}
              <div className="glass-card glass-card-hover hover-glow-yellow z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400">
                     <Code2 size={18} />
                  </div>
                  <h4 className="font-bold text-white">Production Engineering</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-400 list-none">
                  <li className="bullet-list-item bullet-yellow">
                    Resolved <strong className="text-gray-200">90+ Jira tickets</strong> and scaled unit test coverage from <strong className="text-gray-200">~17% to 30%+</strong> across 5 core services.
                  </li>
                  <li className="bullet-list-item bullet-yellow">
                    Troubleshot 20+ <strong className="text-gray-200">critical prod bugs</strong> including currency conversion failures, missing flat-object mappings, and dropped invoice events.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* HOW I BUILD (SDLC) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            <GitCommit className="text-[rgb(var(--accent))]" /> How I Engineer
          </motion.h2>

          {!isAI ? (<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-[rgba(var(--accent),0.2)] hover-glow-accent group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={100} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2 group-hover:text-[rgb(var(--accent))] transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] text-[rgb(var(--accent))] flex items-center justify-center text-sm">1</span>
                Fault Tolerance First
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                I never assume the happy path. Before writing business logic, I establish <strong className="text-white">centralized error frameworks</strong> and dead-letter queues. I ensure message processing reliability in event-driven systems by unifying <strong className="text-[rgb(var(--accent))]">Kafka consumers</strong> and writing strict validation schemas to prevent poisoned payloads from cascading.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-[rgba(var(--accent-secondary),0.2)] hover-glow-secondary group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={100} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2 group-hover:text-[rgb(var(--accent-secondary))] transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-[rgba(var(--accent-secondary),0.2)] text-[rgb(var(--accent-secondary))] flex items-center justify-center text-sm">2</span>
                Data Modeling & Latency
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                Performance is an architecture problem, not an afterthought. I obsess over query plans, JSONB structuring, and strategic <strong className="text-white">MongoDB/PostgreSQL indexing</strong> to slash read times. By running heavy <strong className="text-[rgb(var(--accent-secondary))]">JMeter load tests</strong> against GraphQL mutations, I actively eliminate database bottlenecks before they hit production.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-yellow-400/20 hover-glow-yellow group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal size={100} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2 group-hover:text-yellow-400 transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center text-sm">3</span>
                Zero-Downtime Execution
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                Shipping code is only half the job. I take ownership of the deployment lifecycle by configuring <strong className="text-white">Grafana dashboards</strong>, executing major <strong className="text-yellow-400">Node.js runtime upgrades</strong>, and rotating CI/CD pipeline tokens with zero impact to active users or data integrity pipelines (BigQuery).
              </p>
            </motion.div>
          </div>
) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-[rgba(var(--accent),0.2)] hover-glow-accent group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={100} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2 group-hover:text-[rgb(var(--accent))] transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] text-[rgb(var(--accent))] flex items-center justify-center text-sm">1</span>
                Data Quality First
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                I never assume clean data. Before training models, I establish strict ETL validations and handle data imbalance using <strong className="text-[rgb(var(--accent))]">SMOTE & Class Weights</strong>. I ensure corrupted datasets and outliers are caught early in the pipeline to prevent cascading errors in predictive accuracy.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-[rgba(var(--accent-secondary),0.2)] hover-glow-secondary group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={100} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2 group-hover:text-[rgb(var(--accent-secondary))] transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-[rgba(var(--accent-secondary),0.2)] text-[rgb(var(--accent-secondary))] flex items-center justify-center text-sm">2</span>
                Feature Engineering
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                Model performance is rooted in data architecture. I obsess over feature extraction, vectorizing text with <strong className="text-white">pgvector</strong>, and leveraging <strong className="text-[rgb(var(--accent-secondary))]">Pandas & NumPy</strong> for high-throughput preprocessing. I actively tune hyperparameters to maximize ROC-AUC scores without sacrificing training speed.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-yellow-400/20 hover-glow-yellow group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal size={100} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2 group-hover:text-yellow-400 transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center text-sm">3</span>
                Production Inference
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                A model in a notebook is only half the job. I take ownership of deployment by exporting optimized models (<strong className="text-white">TensorFlow, XGBoost</strong>) and integrating them into highly scalable, containerized <strong className="text-yellow-400">FastAPI/Spring Boot</strong> endpoints for sub-second, real-time predictions.
              </p>
            </motion.div>
          </div>)}
        </motion.section>

        {/* TOP PROJECTS SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            <Server className="text-[rgb(var(--accent-secondary))]" /> Featured Work
          </motion.h2>

          {isAI ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project 1 - Massive Left Box */}
            <motion.div variants={fadeInUp} className="glass-card glass-card-hover flex-col lg:col-span-2 group/doc border-[rgba(var(--accent),0.2)] hover-glow-accent">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/doc:opacity-10 transition-opacity">
                <BrainCircuit size={200} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl font-extrabold text-white mb-2">NeuroVoice</h3>
                    <p className="text-sm text-[rgb(var(--accent))] font-mono">Python • Librosa • Keras • TensorFlow • Scikit-Learn</p>
                  </div>
                  <a href="https://doi.org/10.56155/978-81-975670-5-6-5" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10">
                    <FileText size={24} />
                  </a>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                  A deep learning neural network (MLP) with Batch Normalization and Dropout layers to classify gender from audio, achieving 99.7% accuracy on the Mozilla Common Voice dataset. Mitigated data imbalance across 1,978 examples using SMOTE.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Database size={16} className="text-[rgb(var(--accent))]" /> Feature Extraction</h4>
                    <p className="text-sm text-gray-400">Extracted acoustic parameters utilizing Librosa to isolate MFCCs, Chroma Features, and Spectral Contrast.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Cpu size={16} className="text-[rgb(var(--accent-secondary))]" /> Cross-Validation</h4>
                    <p className="text-sm text-gray-400">Validated model performance using Stratified 5-Fold Cross-Validation, outperforming traditional baseline models.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="px-3 py-1 bg-[rgba(var(--accent),0.1)] border border-[rgba(var(--accent),0.2)] rounded-lg text-sm text-[rgb(var(--accent))] font-medium">Neural Networks</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Published Paper</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Audio Classification</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side Stack */}
            <div className="grid grid-cols-1 gap-6 lg:col-span-1">
              <motion.div variants={fadeInUp} className="glass-card glass-card-hover flex-col justify-between hover-glow-white">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">DocBrain</h3>
                    <a href="https://github.com/atharv-sys32/docbrain" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all duration-300">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <p className="text-xs text-[rgb(var(--accent-secondary))] font-mono mb-3">PostgreSQL • pgvector • Groq LLM</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Scalable Retrieval-Augmented Generation (RAG) pipeline utilizing Apache Tika for parsing and pgvector for 3072-dimensional embeddings for rapid semantic search.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">RAG Pipeline</span>
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">Vector DB</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card glass-card-hover flex-col justify-between hover-glow-white">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">Predictive Analytics</h3>
                    <a href="https://github.com/atharv-sys32/predictive-analytics-dashboard" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all duration-300">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <p className="text-xs text-green-400 font-mono mb-3">Python • XGBoost • Streamlit</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Deployed an XGBoost machine learning model achieving an AUC-ROC of 0.92, processing 500k+ session records in a real-time ETL pipeline to forecast conversions.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">ETL Pipeline</span>
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">XGBoost ML</span>
                </div>
              </motion.div>
            </div>
          </div>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="glass-card glass-card-hover flex-col lg:col-span-2 group/doc border-[rgba(var(--accent),0.2)] hover-glow-accent">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/doc:opacity-10 transition-opacity">
                <BrainCircuit size={200} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl font-extrabold text-white mb-2">DocBrain</h3>
                    <p className="text-sm text-[rgb(var(--accent))] font-mono">Spring Boot • React • Tailwind • PostgreSQL • pgvector • Docker • Groq LLM</p>
                  </div>
                  <a href="https://github.com/atharv-sys32/docbrain" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10">
                    <FaGithub size={24} />
                  </a>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                  A production-grade, full-stack document intelligence platform. Engineered a highly scalable Retrieval-Augmented Generation (RAG) pipeline utilizing Apache Tika for document parsing and pgvector to store 3072-dimensional embeddings for rapid cosine similarity search.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Database size={16} className="text-[rgb(var(--accent))]" /> Vector Search Architecture</h4>
                    <p className="text-sm text-gray-400">Integrated pgvector for high-performance vector operations and semantic search capabilities.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Cpu size={16} className="text-[rgb(var(--accent-secondary))]" /> 24 REST APIs</h4>
                    <p className="text-sm text-gray-400">Exposed secure, JWT-authenticated endpoints seamlessly integrated into a containerized microservice architecture.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="px-3 py-1 bg-[rgba(var(--accent),0.1)] border border-[rgba(var(--accent),0.2)] rounded-lg text-sm text-[rgb(var(--accent))] font-medium">RAG Pipeline</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Microservices</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Docker & Flyway</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:col-span-1">
              <motion.div variants={fadeInUp} className="glass-card glass-card-hover flex-col justify-between hover-glow-white">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">InkThink</h3>
                    <a href="https://github.com/atharv-sys32/InkThink" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all duration-300">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <p className="text-xs text-[rgb(var(--accent-secondary))] font-mono mb-3">NestJS • GraphQL • TypeORM • PostgreSQL</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Full-stack CMS with RBAC via JWT. Authored optimized GraphQL APIs for CRUD operations across 5 data models, integrating Supabase Storage for seamless media handling.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">GraphQL APIs</span>
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">Role-Based Access</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card glass-card-hover flex-col justify-between hover-glow-white">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">ChatIO</h3>
                    <a href="https://github.com/atharv-sys32/ChatIO" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all duration-300">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <p className="text-xs text-green-400 font-mono mb-3">Express.js • Socket.io • MongoDB</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Real-time messaging solution supporting 1:1 and group chats. Handled 20+ concurrent users with sub-second latency over WebSockets.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">WebSockets</span>
                  <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">Real-time DB</span>
                </div>
              </motion.div>
            </div>
          </div>
          )}
        </motion.section>

        {/* EXTRA PROJECTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            <Code2 className="text-yellow-400" /> More Engineering Feats
          </motion.h2>

          {isAI ? (
          <div className="space-y-4">
            <motion.div variants={fadeInUp} className="glass-card p-6 group glass-card-hover border-[rgba(var(--accent),0.3)] hover:border-[rgb(var(--accent))] hover-glow-accent">
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
                <a href="https://github.com/atharv-sys32/FileShortcutter" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[rgb(var(--accent))] hover:text-white transition-all duration-300 shrink-0">
                  View Repo <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "InkThink", url: "InkThink", desc: "Full-stack CMS with RBAC via JWT. Authored optimized GraphQL APIs for CRUD operations across 5 data models." },
                { name: "ChatIO", url: "ChatIO", desc: "Real-time messaging solution supporting 1:1 and group chats. Handled 20+ concurrent users with sub-second latency." },
                { name: "Loan Management System", url: "lms-assignment", desc: "A robust financial backend handling complex loan lifecycle processing, demonstrating secure transactional data structures and strict validation." },
                { name: "Ecommerce-SWE", url: "Ecommerce-SWE", desc: "Scalable E-commerce architecture showcasing high-throughput transactional processing." },
                { name: "Course-Edu", url: "Course-Edu", desc: "An educational platform tailored for streamlined course management." }
              ].map((repo, i) => (
                <motion.a
                  key={i}
                  variants={fadeInUp}
                  href={`https://github.com/atharv-sys32/${repo.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card p-5 rounded-xl transition-all duration-300 flex justify-between items-start group glass-card-hover hover-glow-white"
                >
                  <div className="flex-1 pr-4">
                    <h4 className="font-bold text-gray-200 group-hover:text-white transition-all duration-300 flex items-center gap-2">
                      <FaGithub size={16} className="shrink-0" /> <span className="truncate">{repo.name}</span>
                    </h4>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{repo.desc}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-600 group-hover:text-white transition-all duration-300 shrink-0 mt-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
          ) : (
          <div className="space-y-4">
            <motion.div variants={fadeInUp} className="glass-card p-6 group glass-card-hover border-[rgba(var(--accent),0.3)] hover:border-[rgb(var(--accent))] hover-glow-accent">
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
                <a href="https://github.com/atharv-sys32/FileShortcutter" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[rgb(var(--accent))] hover:text-white transition-all duration-300 shrink-0">
                  View Repo <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "predictive-analytics-dashboard", url: "predictive-analytics-dashboard", desc: "Designed a real-time ETL pipeline and XGBoost predictive ML model for user conversion forecasting." },
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
                  className="glass-card p-5 rounded-xl transition-all duration-300 flex justify-between items-start group glass-card-hover hover-glow-white"
                >
                  <div className="flex-1 pr-4">
                    <h4 className="font-bold text-gray-200 group-hover:text-white transition-all duration-300 flex items-center gap-2">
                      <FaGithub size={16} className="shrink-0" /> <span className="truncate">{repo.name}</span>
                    </h4>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{repo.desc}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-600 group-hover:text-white transition-all duration-300 shrink-0 mt-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
          )}
        </motion.section>

        {/* EDUCATION & PUBLICATIONS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <motion.div variants={fadeInUp} className="glass-card p-8 group glass-card-hover hover-glow-accent">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <GraduationCap className="text-[rgb(var(--accent))]" /> Education
            </h3>

            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-[rgb(var(--accent))] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(var(--accent),0.8)]" />
              <h4 className="text-xl font-bold text-white">Indian Institute of Information Technology</h4>
              <p className="text-[rgb(var(--accent))] font-mono text-sm mt-1 mb-2">B.Tech in Computer Science</p>
              <p className="text-gray-400 text-sm mb-3">Nov 2022 - Jun 2026 • Bhopal, MP</p>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200">
                CGPA: <strong className="text-white">9.37</strong>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Active member of the Training & Placement (TnP) Cell and <strong className="text-gray-200">Teaching Assistant (DSA)</strong>.
                  Led management and outreach initiatives across the institute.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Publications & Hackathons */}
          <motion.div variants={fadeInUp} className="glass-card p-8 group glass-card-hover hover-glow-accent">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <FileText size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <FileText className="text-[rgb(var(--accent-secondary))]" /> Research & Hackathons
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-[rgb(var(--accent-secondary))] transition-all duration-300">
                <span className="text-xs font-mono text-[rgb(var(--accent-secondary))] mb-2 block">SCRS ICCIS 2024 • Published Paper</span>
                <h4 className="font-bold text-white text-lg leading-snug mb-2">
                  <a href="https://doi.org/10.56155/978-81-975670-5-6-5" target="_blank" rel="noreferrer" className="hover:text-[rgb(var(--accent-secondary))] transition-colors">
                    NeuroVoice: Leveraging Neural Networks for Precise Gender Classification in Audio
                  </a>
                </h4>
                <p className="text-sm text-gray-400">
                  Authored and published research on applied neural networks for complex audio processing.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-yellow-400 transition-all duration-300">
                <span className="text-xs font-mono text-yellow-400 mb-2 block">Competitions</span>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">▹</span> Qualified for Smart India Hackathon (SIH) Round 1.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">▹</span> Qualified for Flipkart GRiD Round 1.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* SKILLS & ACHIEVEMENTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} className="glass-card p-8 glass-card-hover hover-glow-secondary">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Layers className="text-[rgb(var(--accent))]" /> Technical Arsenal
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {(isAI ? ["Python", "C++", "Java", "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy"] : ["Java", "C++", "TypeScript", "Python", "Spring Boot", "Node.js", "NestJS", "React.js", "GraphQL"]).map(skill => (
                    <span key={skill} className="tech-chip hover:border-[rgb(var(--accent))]">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {(isAI ? ["Docker", "Kubernetes", "Jupyter", "MLflow", "HuggingFace", "PostgreSQL", "Kafka"] : ["MongoDB", "PostgreSQL", "Kafka", "Docker", "CI/CD", "Grafana", "Datadog", "BigQuery"]).map(skill => (
                    <span key={skill} className="tech-chip hover:border-[rgb(var(--accent-secondary))]">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-8 flex flex-col justify-center items-center text-center group glass-card-hover hover-glow-white">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white relative z-10">Problem Solving</h3>
            <div className="text-[rgb(var(--accent))] font-bold text-6xl my-4 relative z-10">
              <AnimatedCounter from={0} to={250} />+
            </div>
            <p className="text-gray-300 text-lg mb-2 relative z-10">Problems Solved</p>
            <p className="text-gray-500 text-sm max-w-xs relative z-10">
              Consistently sharpening algorithmic problem-solving skills on programming platforms like <a href="https://leetcode.com/u/atharvpandey245/" target="_blank" rel="noreferrer" className="text-[rgb(var(--accent))] hover:underline">LeetCode</a> and <a href="https://www.codechef.com/users/atharv_sys32" target="_blank" rel="noreferrer" className="text-[rgb(var(--accent))] hover:underline">CodeChef</a> (3-star rating).
            </p>
          </motion.div>
        </motion.section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Atharv Pandey. Built to scale.</p>
          <div className="flex gap-6">
            <a href="https://github.com/atharv-sys32" className="hover:text-white transition-all duration-300">GitHub</a>
            <a href="https://linkedin.com/in/atharvpandey-swe" className="hover:text-white transition-all duration-300">LinkedIn</a>
            <a href="mailto:atharvpandey245@gmail.com" className="hover:text-white transition-all duration-300">Email</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
