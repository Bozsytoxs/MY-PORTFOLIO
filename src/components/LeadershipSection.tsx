import { LEADERSHIP_PILLARS } from '../data/portfolioData';
import { Lightbulb, HeartHandshake, Compass, Users, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
            <span>SERVICE & PURPOSE</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>SYSTEMIC REFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Leadership & Education Reform
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Technology is only as transformative as the minds prepared to steer it. Joseph’s work in education is grounded in service, ethical stewardship, and moving Nigerian youth from passive consumers to creative problem-solvers.
          </p>
        </div>

        {/* Framing Essay / Principle Card */}
        <div className="mb-14 p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Foundational Perspective
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Why African Youth Need Hands-on Engineering, Not Just Consumer Tech
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Across many developing institutions, computer training has historically been reduced to word processing or social media browsing. Meanwhile, the critical infrastructure of nations—communications networks, electrical grids, security architectures, and automated systems—remains shrouded in mystery.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Joseph advocates for demystifying technical mechanisms right in the classroom. When young people understand how packets move across an Ethernet cable or how transistors execute binary logic, fear dissolves and agency takes root.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-semibold">
                <HeartHandshake className="w-4 h-4" />
                <span>The NGTI Ethos</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed border-l-2 border-amber-500/60 pl-3">
                "Our measure of success is not how many students pass a theoretical exam, but how many possess the courage, curiosity, and capability to build something that solves an authentic community problem."
              </p>
              <div className="pt-2 text-xs text-slate-400 font-mono">
                — Joseph S. Tapkum
              </div>
            </div>

          </div>
        </div>

        {/* 8 Core Focus Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-amber-500/80 font-semibold">
                    0{index + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                PRACTICAL IMPERATIVE
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
