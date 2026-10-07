import { TIMELINE } from '../data/portfolioData';
import { GraduationCap, Award, Briefcase, BookOpen, Wrench, Shield, CheckCircle2, ExternalLink } from 'lucide-react';

export default function TimelineSection() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-amber-400" />;
      case 'Membership':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'Teaching':
        return <BookOpen className="w-4 h-4 text-amber-400" />;
      case 'Technical Training':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'Outreach':
        return <Shield className="w-4 h-4 text-amber-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
            <span>TRAJECTORY & MILESTONES</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Professional Development
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            A chronological view of academic formation in Computer and Communications Engineering, professional engineering society affiliations, and practical teaching engagements.
          </p>
        </div>

        {/* Featured IAENG Membership Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 shrink-0 mt-1">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                  <span>INTERNATIONAL RECOGNITION</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>PROFESSIONAL ENGINEERING</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Member, International Association of Engineers (IAENG)
                </h3>
                <p className="text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                  Registered member participating in the IAENG Society of Computer Science and Society of Telecommunications. Committed to international engineering ethics, research exchange, and practical technology stewardship.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                  <span>Status: Active Professional Member</span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="text-slate-300">[IAENG Membership ID]</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors text-center"
              >
                Inquire on Credentials
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border border-slate-700 group-hover:border-amber-400 flex items-center justify-center transition-colors">
                {getTypeIcon(item.type)}
              </div>

              {/* Timeline Content Card */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.organizationOrContext}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Details list */}
                {item.details && item.details.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-800/70 space-y-1.5">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Credential Note */}
                {item.credentialNote && (
                  <div className="mt-3 pt-2 text-[11px] font-mono text-slate-500">
                    {item.credentialNote}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
