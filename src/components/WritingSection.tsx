import { useState } from 'react';
import { WritingItem, WRITINGS } from '../data/portfolioData';
import { BookOpen, Feather, X, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

export default function WritingSection() {
  const [activeEssay, setActiveEssay] = useState<WritingItem | null>(null);

  return (
    <section id="writing" className="py-20 md:py-28 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
            <span>INTELLECTUAL INQUIRY</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>WRITING & ESSAYS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Writing, Society & Ideas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Beyond circuits and code, Joseph engages with the deeper societal questions shaping Nigeria — examining governance, resource prioritization, interfaith brotherhood, and moral leadership.
          </p>
        </div>

        {/* Featured Writings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {WRITINGS.map((essay, index) => (
            <div
              key={essay.id}
              className="rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 p-7 sm:p-9 flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                {/* Meta line: Clean unboxed typography (zero-pill discipline) */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Feather className="w-4 h-4" />
                    <span>FEATURED ESSAY 0{index + 1}</span>
                  </div>
                  <span className="text-slate-500">{essay.date}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                  {essay.title}
                </h3>
                <p className="text-sm font-medium text-amber-500/90 mt-1 mb-4 font-mono">
                  {essay.subtitle}
                </p>

                {/* Excerpt Block */}
                <div className="my-5 p-4 rounded-xl bg-slate-900/80 border-l-2 border-amber-500 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{essay.excerpt}"
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {essay.summary}
                </p>

                {/* Unboxed Topics */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Key Themes Explored:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    {essay.topics.map((topic, i) => (
                      <span key={topic} className="inline-flex items-center">
                        <span className="text-slate-300">{topic}</span>
                        {i < essay.topics.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  {essay.theme}
                </span>

                <button
                  onClick={() => setActiveEssay(essay)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-amber-400 border border-slate-700 rounded-lg transition-colors"
                >
                  <span>Read Detailed Thesis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Thought Leadership Summary Box */}
        <div className="mt-12 p-6 rounded-xl bg-slate-950/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            "A nation does not rise solely on technical prowess; it rises when its engineers understand justice, when its teachers understand technology, and when its youth are anchored in ethical responsibility."
          </p>
          <span className="block mt-2 font-mono text-xs text-amber-400/90">
            — Joseph Seyilnen Tapkum
          </span>
        </div>

      </div>

      {/* Interactive Essay Detail Modal */}
      {activeEssay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-9 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  {activeEssay.theme}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeEssay.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mt-1">
                  {activeEssay.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveEssay(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Featured Quote */}
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 text-slate-200 text-sm italic leading-relaxed">
              "{activeEssay.excerpt}"
            </div>

            {/* Core Arguments */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Central Arguments & Thesis
              </h4>
              <div className="space-y-2">
                {activeEssay.coreArguments.map((arg, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{arg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-Depth Commentary */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Analysis & Reflection
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeEssay.fullAnalysis.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">
                Joseph Seyilnen Tapkum · Thought & Commentary
              </span>
              <button
                onClick={() => setActiveEssay(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg"
              >
                Close Essay
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
