"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Briefcase, Users } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const AboutSection = () => {
  const { settings } = useSettings();
  const aboutTitle = settings.about_title || "Building the Future of Ethiopia.";
  const aboutDescription = settings.about_content || "Our journey began with a global exploration — our founders traveled the world to immerse themselves in diverse work cultures and innovative design philosophies. From this international perspective, Makitex Trading was founded as Ethiopia's ultimate one-stop solution for office design, engineering, and construction.";

  const highlights = [
    "Design & Build Integration",
    "Sustainability & Safety Focus",
    "Innovative Modern Materials",
    "On-Schedule Delivery",
  ];

  const milestones = [
    { year: 2012, title: "Foundation", desc: "Makitex Trading PLC established." },
    { year: 2016, title: "Expansion", desc: "Expanded to industrial developments." },
    { year: 2020, title: "Excellence", desc: "Awarded top construction firm." },
    { year: 2025, title: "Innovation", desc: "Pioneering sustainable smart-structures." },
  ];

  return (
    <section id="about" className="py-20 md:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/4 h-1/4 bg-primary/10 blur-[150px] rounded-full -z-10" />

      <Container>
        {/* ── Two-column grid: image | text ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl z-10 aspect-square lg:aspect-[3/4] xl:aspect-square max-w-lg mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000"
                alt="Expert Engineering"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative corners — hide on small screens */}
            <div className="hidden md:block absolute -top-8 -right-8 w-48 h-48 border-4 border-primary/20 rounded-[3rem] -z-0" />
            <div className="hidden md:block absolute -bottom-8 -left-8 w-24 h-24 bg-primary rounded-[2rem] -z-0" />

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-4 right-2 md:bottom-12 md:right-[-16px] p-5 md:p-8 bg-background border border-primary/20 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl z-20 flex flex-col gap-4"
            >
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-heading font-black text-primary leading-none">
                    <AnimatedCounter end={150} suffix="+" />
                  </span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">Projects Completed</span>
                </div>
              </div>

              <div className="flex gap-4 items-center border-t border-border pt-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-heading font-black text-primary leading-none">
                    <AnimatedCounter end={500} suffix="+" />
                  </span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <div className="flex flex-col gap-8 md:gap-10 order-1 lg:order-2">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 md:mb-6 inline-block"
              >
                Our Foundation
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-6"
              >
                {aboutTitle.includes("Future") ? (
                  <>Building the <span className="text-primary italic">Future</span> of Ethiopia.</>
                ) : aboutTitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium"
              >
                {aboutDescription}
              </motion.p>
            </div>

            {/* Highlight chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center gap-3 bg-accent/10 p-4 rounded-2xl border border-primary/5 group hover:bg-background transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest">{h}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-fit flex items-center gap-3 text-xl md:text-2xl font-black font-heading hover:text-primary transition-all group"
            >
              Our Full Story <ArrowUpRight className="w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="mt-24 md:mt-40">
          <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto px-4">
            <h3 className="text-3xl md:text-5xl font-heading font-black tracking-tight mb-4">
              A Legacy of <span className="text-primary italic">Growth</span>.
            </h3>
            <p className="text-muted-foreground font-medium text-sm md:text-base">
              Tracing our steps from a local startup to one of East Africa's premier construction firms.
            </p>
          </div>

          {/* Mobile: vertical list | Desktop: horizontal timeline */}
          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-[23px] left-0 w-full h-[1px] bg-primary/20 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative md:text-center flex items-start gap-5 md:flex-col md:items-center md:gap-0"
                >
                  {/* Mobile line */}
                  {i < milestones.length - 1 && (
                    <div className="md:hidden absolute left-[7px] top-5 bottom-0 w-[1px] bg-primary/20 -translate-x-0" />
                  )}
                  {/* Dot */}
                  <div className="relative z-10 w-4 h-4 md:w-[11px] md:h-[11px] bg-primary rounded-full ring-4 ring-background flex-shrink-0 md:mb-16" />
                  {/* Card */}
                  <div className="bg-card border hover:border-primary/50 transition-colors p-5 rounded-2xl shadow-xl shadow-primary/5 flex-1 md:w-full">
                    <div className="text-2xl md:text-3xl font-heading font-black text-primary mb-1">
                      <AnimatedCounter end={m.year} duration={1} />
                    </div>
                    <h4 className="font-bold text-base md:text-lg mb-1">{m.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
