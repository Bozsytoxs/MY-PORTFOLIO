import { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ExternalLink, Layers, CheckCircle2, X, ArrowRight, ShieldCheck, GraduationCap, Cpu, Network } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Education' | 'Cybersecurity' | 'Infrastructure' | 'STEM'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-amber-400" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-4 h-4 text-amber-400" />;
      case 'Infrastructure':
        return <Network className="w-4 h-4 text-amber-400" />;
      case 'STEM':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
              <span>PROJECT SHOWCASE</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>VERIFIED INITIATIVES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Initiatives & Building Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Grounded, purpose-driven ventures founded and developed by Joseph to address tangible educational gaps, digital security, and infrastructure needs.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg">
            {(['All', 'Education', 'Cybersecurity', 'Infrastructure', 'STEM'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedFilter === cat
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Initiatives' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Meta line: Clean unboxed typography (zero-pill discipline) */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <div className="flex items-center gap-1.5">
                    {getCategoryIcon(project.category)}
                    <span className="text-slate-300 font-medium">{project.category}</span>
                  </div>
                  <span className="text-amber-400/90 font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-amber-500/80 font-mono mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Primary Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Role Highlight */}
                <div className="py-2.5 px-3 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs text-slate-300 mb-5 flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Role:</span>
                  <span className="text-white font-medium">{project.role}</span>
                </div>

                {/* Technologies / Domains in unboxed text format */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                    Core Domains & Tools:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                    {project.technologies.map((tech, i) => (
                      <span key={tech} className="inline-flex items-center">
                        <span className="text-slate-300">{tech}</span>
                        {i < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">
                  {project.linkPlaceholder}
                </span>

                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-amber-400 border border-slate-700/80 rounded-lg transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{activeProject.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {activeProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Deep Context */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Overview & Motivation
              </h4>
              <p>{activeProject.detailedDescription}</p>

              {/* Leadership Role */}
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Joseph's Role:</span>
                <span className="text-amber-400 font-semibold">{activeProject.role}</span>
              </div>

              {/* Key Implementation Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                  Key Focus Areas & Objectives
                </h4>
                <div className="space-y-2">
                  {activeProject.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold mb-2">
                  Domains & Tools Applied
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-mono">
                Repository / Platform: <strong className="text-slate-300">{activeProject.linkPlaceholder}</strong>
              </span>
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
