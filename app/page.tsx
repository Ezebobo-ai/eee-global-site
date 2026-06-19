'use client';

import { useRef, useState } from "react";
import Image from "next/image";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import GlobalPresence from '@/components/GlobalPresence';
import Testimonials from '@/components/Testimonials';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function Home() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  const team = [
    {
      name: "Ezeoke Ezra Eke",
      role: "Founder & Lead Engineer",
      img: "/team1.jpg",
      short: "Leads scalable infrastructure and system architecture.",
      full: "Ezeoke Ezra Eke is the visionary behind EEE Global, leading the design and development of scalable digital infrastructure across diverse industries. With deep expertise in full‑stack engineering and systems architecture, Ezra focuses on building high‑performance, resilient systems that enable organizations to operate efficiently and scale confidently.Beyond technical execution, Ezeoke brings strong strategic insight into every project, ensuring that solutions are not only technically sound but also aligned with long‑term business growth. Under his leadership, EEE Global continues to deliver innovative, reliable, and future‑ready technology solutions."
    },
    {
      name: "Chinedum Bright Obuabia",
      role: "Full‑Stack & Data Engineer",
      img: "/team2.jpeg",
      short: "Builds intelligent systems with data-driven insights.",
      full: "Chinedum Bright Obuabia specializes in developing robust, end‑to‑end digital systems that integrate both frontend and backend technologies with data‑driven intelligence. His expertise spans full‑stack development and advanced data analysis, allowing him to design solutions that are both highly functional and insight-driven.With a strong focus on performance, scalability, and efficiency, Chinedum builds systems that transform complex data into actionable business value. His work ensures that applications are not only technically optimized but also capable of supporting critical decision-making processes."
    },
    {
      name: "Sophia Ekwusie",
      role: "Frontend Engineer",
      img: "/team13.jpg",
      short: "Creates clean and responsive interfaces.",
      full: "Sophia Ekwusie is dedicated to the creation of modern, responsive, and user‑centered digital interfaces. With a strong foundation in frontend development and design systems, she focuses on delivering seamless user experiences that balance functionality with visual clarity. Her approach emphasizes accessibility, performance optimization, and intuitive interaction design. By translating complex ideas into clean and engaging user interfaces, Sophia ensures that every product delivers a consistent and impactful user experience across all platforms."
    },
    {
      name: "Polycarp Favour",
      role: "Design & Strategy Lead",
      img: "/team4.jpeg",
      short: "Drives structure, design and operations.",
      full: "Polycarp Favour brings a unique blend of architectural design expertise and strategic business insight to EEE Global. With a strong background in structural planning and organizational systems, she contributes significantly to both the technical and operational aspects of the company’s projects. Her role extends into business strategy, administrative leadership, and human resource coordination, ensuring that projects are not only well-designed but also efficiently executed. Favour’s multidisciplinary approach supports sustainable growth, operational excellence, and strong market positioning."
    },
    {
      name: "Promise Ukwede",
      role: "Financial & Data Analyst",
      img: "/team5.jpeg",
      short: "Supports decisions with financial insights.",
      full: "Promise Ukwede plays a critical role in guiding financial decision‑making through detailed analysis and data‑driven insights. With a strong background in financial modeling, performance evaluation, and data analytics, she ensures that project execution aligns with economic sustainability and long‑term business goals. she provides clarity on financial performance and strategic direction, enabling the organization to make informed decisions with confidence. Promise’s analytical expertise helps ensure that every solution delivered is not only technically effective but also financially sound."
    }
  ];

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LogoStrip />
        <WhyChooseUs />
        <Services />

        {/* ✅ TEAM SECTION */}
        <section id="team" className="py-28">

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl text-white text-center font-semibold mb-12">
              Meet Our Team
            </h2>

            {/* ✅ ARROWS */}
            <div className="flex justify-end gap-3 mb-6">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              >
                ←
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              >
                →
              </button>
            </div>

            {/* ✅ TEAM LINE */}
            <div
              ref={scrollRef}
              className="flex gap-14 overflow-x-auto no-scrollbar"
            >

              {team.map((member, i) => (
                <div
                  key={i}
                  className="min-w-[320px] flex items-center gap-5"
                >

                  {/* ✅ PERFECT IMAGE */}
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden shrink-0">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* ✅ TEXT */}
                  <div className="max-w-[220px]">

                    <h3 className="text-white text-sm font-medium">
                      {member.name}
                    </h3>

                    <p className="text-cyan-400 text-xs">
                      {member.role}
                    </p>

                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      {member.short}
                    </p>

                    <button
                      onClick={() => setActive(i)}
                      className="text-cyan-400 text-xs mt-2"
                    >
                      Read more →
                    </button>

                  </div>

                  {/* ✅ MODAL */}
                  {active === i && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                      <div className="bg-[#020617] p-6 rounded-xl max-w-sm">

                        <h3 className="text-white text-lg">
                          {member.name}
                        </h3>

                        <p className="text-cyan-400 text-sm">
                          {member.role}
                        </p>

                        <p className="text-gray-400 text-sm mt-3">
                          {member.full}
                        </p>

                        <button
                          onClick={() => setActive(null)}
                          className="mt-5 text-white"
                        >
                          Close
                        </button>

                      </div>

                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>

        <GlobalPresence />
        <Testimonials />
        <CTABand />
      </main>

      <Footer />

      {/* ✅ HIDE SCROLLBAR */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </>
  );
}
