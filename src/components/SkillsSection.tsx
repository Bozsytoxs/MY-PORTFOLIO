import { useState } from 'react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolioData';
import { Network, ShieldCheck, Code, Cpu, HelpCircle, Check, Search } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Networking':
        return <Network className="w-5 h-5 text-amber-400" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Development':
        return <Code className="w-5 h-5 text-amber-400" />;
      case 'Technology':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  const getProficiencyStyle = (prof: string) => {
    switch (prof) {
      case 'Intermediate':
        return {
          textColor: 'text-amber-400',
          borderColor: 'border-amber-500/40',
          bgColor: 'bg-amber-500/10',
          dot: 'bg-amber-400'
        };
      case 'Working Knowledge':
        return {
          textColor: 'text-sky-400',
          borderColor: 'border-sky-500/40',
          bgColor: 'bg-sky-500/10',
          dot: 'bg-sky-400'
        };
      case 'Developing':
        return {
          textColor: 'text-emerald-400',
          borderColor: 'border-emerald-500/40',
          bgColor: 'bg-emerald-500/10',
          dot: 'bg-emerald-400'
        };
      case 'Familiar':
        return {
          textColor: 'text-slate-400',
          borderColor: 'border-slate-700',
          bgColor: 'bg-slate-800/40',
          dot: 'bg-slate-500'
        };
      default:
        return {
          textColor: 'text-slate-400',
          borderColor: 'border-slate-700',
          bgColor: 'bg-slate-800/40',
          dot: 'bg-slate-500'
        };
    }
  };

  // Filter categories according to activeCategory and searchQuery
  const displayedCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'all' && cat.category.toLowerCase() !== activeCategory.toLowerCase()) {
      return null;
    }

    if (!searchQuery.trim()) {
      return cat;
    }

    const filteredSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.proficiency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0) return null;
    return { ...cat, skills: filteredSkills };
  }).filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
            <span>TECHNICAL CAPABILITIES</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>GROUNDED PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technical Competencies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            A transparent and realistic assessment of capabilities across network engineering, security, development, and system environments. Calibrated with honesty — no inflated claims.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category.toLowerCase())}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeCategory === cat.category.toLowerCase()
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. VLAN, Cisco)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/90 border border-slate-800 focus:border-amber-500/80 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.summary}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="mt-6 space-y-3">
                  {cat.skills.map((skill) => {
                    const style = getProficiencyStyle(skill.proficiency);
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-slate-200 block truncate">
                            {skill.name}
                          </span>
                          {skill.description && (
                            <span className="text-xs text-slate-400 block truncate mt-0.5">
                              {skill.description}
                            </span>
                          )}
                        </div>

                        {/* Quiet, unboxed proficiency status */}
                        <div className="flex items-center gap-1.5 shrink-0 text-xs font-mono">
                          <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                          <span className={style.textColor}>{skill.proficiency}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Calibration Legend */}
        <div className="mt-12 p-6 rounded-xl bg-slate-950/80 border border-slate-800/90 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="uppercase tracking-wider">Proficiency Scale & Philosophy</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            In adherence to professional integrity and engineering ethics, skills are strictly represented by actual practical capability rather than inflated resume claims:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="border-l-2 border-amber-500 pl-3">
              <span className="font-semibold text-amber-400 block font-mono">Intermediate</span>
              <p className="text-slate-400 mt-1">Configured, deployed, and troubleshot in physical or simulated lab scenarios independently.</p>
            </div>
            <div className="border-l-2 border-sky-500 pl-3">
              <span className="font-semibold text-sky-400 block font-mono">Working Knowledge</span>
              <p className="text-slate-400 mt-1">Solid theoretical comprehension with recurring hands-on practice and standard configuration ability.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-3">
              <span className="font-semibold text-emerald-400 block font-mono">Developing</span>
              <p className="text-slate-400 mt-1">Active current domain of study and experimental prototyping with mentorship or guides.</p>
            </div>
            <div className="border-l-2 border-slate-600 pl-3">
              <span className="font-semibold text-slate-300 block font-mono">Familiar</span>
              <p className="text-slate-400 mt-1">Conceptual awareness of protocols, tooling, and operational implications.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
