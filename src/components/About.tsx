import { BookOpen, Sparkles, Compass, Lightbulb, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
            <span>ABOUT JOSEPH</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            An Engineer Rooted in Teaching, Driven by Practical Problem-Solving
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            From the chemistry laboratory to network switches and youth workshops — an authentic path shaped by curiosity, service, and technical determination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative - 7 Columns */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            
            <p>
              Joseph’s professional life began not in a server room, but in front of a secondary school blackboard as a <strong className="text-white font-semibold">Chemistry teacher</strong>. Guiding teenagers through the structures of matter, reactions, and scientific inquiry revealed something fundamental: the profound gap between rote theoretical memorization and genuine hands-on understanding in African classrooms.
            </p>

            <p>
              That pedagogical experience awakened an enduring passion for engineering and structured systems. Driven by how information moves across physical and digital spaces, Joseph transitioned into <strong className="text-white font-semibold">Computer and Communications Engineering</strong>. Here, his analytical discipline found concrete expression in network topologies, routing protocols, physical cabling, and systems reliability.
            </p>

            {/* Featured Callout Box: NGTI */}
            <div className="my-6 p-6 rounded-xl bg-slate-950/80 border border-amber-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 text-amber-400 text-sm font-semibold mb-2">
                <GraduationCap className="w-5 h-5" />
                <span>Next Generation Tech Institute (NGTI)</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Rather than treating education and engineering as separate callings, Joseph founded <strong>Next Generation Tech Institute (NGTI)</strong>. NGTI is an initiative he is building to explore technology-driven education, youth empowerment, critical thinking, leadership, and practical skills. The goal is simple yet urgent: equipping Nigerian youths with real, working technical competence so they can build sustainable solutions for their communities.
              </p>
            </div>

            <p>
              Whether troubleshooting a complex VLAN setup, advising young students on STEM pathways, examining cybersecurity threats in everyday banking, or writing about national leadership, Joseph approaches every endeavour with humility, intellectual rigor, and an unwavering commitment to human development.
            </p>

          </div>

          {/* Right Column: Core Interests & Principles - 5 Columns */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Core Areas of Interest */}
            <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                Interests & Focus Areas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {PERSONAL_INFO.interests.map((interest, idx) => (
                  <div
                    key={interest}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 py-1"
                  >
                    <span className="font-mono text-xs text-amber-500/70 shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="font-medium text-slate-200">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grounded Working Philosophy */}
            <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Guiding Principles
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="border-l border-amber-500/40 pl-3">
                  <h4 className="font-semibold text-white">Pragmatic Grounding</h4>
                  <p className="text-slate-400 mt-0.5">
                    Building systems that work under real Nigerian environmental realities (power, connectivity, hardware access).
                  </p>
                </div>

                <div className="border-l border-amber-500/40 pl-3">
                  <h4 className="font-semibold text-white">Pedagogical Clarity</h4>
                  <p className="text-slate-400 mt-0.5">
                    If you cannot explain a technical concept simply and demonstrate it practically, you haven't mastered it yet.
                  </p>
                </div>

                <div className="border-l border-amber-500/40 pl-3">
                  <h4 className="font-semibold text-white">Service Over Self-Promotion</h4>
                  <p className="text-slate-400 mt-0.5">
                    Technology is not an end in itself; its moral worth is measured by the human lives and communities it elevates.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
