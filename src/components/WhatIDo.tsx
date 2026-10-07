import { Network, ShieldAlert, Globe, GraduationCap, Server, Cpu, Check, ArrowUpRight } from 'lucide-react';
import { WHAT_I_DO } from '../data/portfolioData';

export default function WhatIDo() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-6 h-6 text-amber-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      default:
        return <Network className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
            <span>CORE COMPETENCIES</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>PRACTICAL SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Do
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical technology engagements spanning physical and logical networks, proactive cybersecurity education, custom digital utilities, and classroom-tested STEM pedagogy.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHAT_I_DO.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon & Editorial Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-medium">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Card Summary */}
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Competency Sub-Items */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {item.items.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Action Anchor */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-500">PRACTICAL ENGAGEMENT</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-slate-300 group-hover:text-amber-400 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
