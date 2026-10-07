import { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Award, BookOpen, Network, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, TIMELINE, WRITINGS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
CURRICULUM VITAE
JOSEPH SEYILNEN TAPKUM
Computer & Communications Engineer | Network Engineer | Educator | Technology Builder
Email: ${PERSONAL_INFO.email}
Phone / WhatsApp: ${PERSONAL_INFO.phoneDisplay}
Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.profiles.linkedin}
GitHub: ${PERSONAL_INFO.profiles.github}
IAENG Membership: Professional Member, International Association of Engineers

PROFESSIONAL SUMMARY
${PERSONAL_INFO.supportingStatement}
${PERSONAL_INFO.bioSummary}

CORE COMPETENCIES & TECHNICAL PROFICIENCY
- Networking: TCP/IP, Routing & Switching, VLANs & Segmentation, OSPF, DHCP/DNS, Wireless & Fibre Networking, Network Troubleshooting
- Cybersecurity: Fundamentals, Network Security, Phishing Awareness, Digital Threat Education
- Development: HTML/CSS, JavaScript, Python, Web Development, Git/GitHub
- Technology: Linux Administration, Cisco IOS & Packet Tracer, IT Infrastructure Management

INITIATIVES & PROJECTS
- Next Generation Tech Institute (NGTI): Founder & Lead Educator. Practical technology and youth empowerment initiative.
- PhishGuard NG: Project Lead & Security Researcher. Grassroots cybersecurity and scam awareness project.
- Dynamis Technologies: Technical Lead. Practical networking, IT infrastructure, and web solutions.
- TechEdGuard: Initiator & Mentor. Secondary-school STEM, electronics and robotics mentorship.

EDUCATION & PROFESSIONAL FORMATION
- Computer & Communications Engineering (Engineering Degree)
- Secondary School Chemistry Teacher & STEM Educator (Foundational Pedagogical Background)
- Technical Internships in Network Infrastructure & Enterprise IT Setup
- Member, International Association of Engineers (IAENG)

ESSAYS & COMMENTARY
- "The Price of Power: How Nigeria’s Political Spending Overshadows True Leadership"
- "Echoes of Faith, Shadows of Discord: Religion, Division and the Search for Peace in Nigeria"
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Controls Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <h3 className="text-sm font-semibold text-white font-mono tracking-wider">
              CURRICULUM VITAE · JOSEPH SEYILNEN TAPKUM
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              title="Print document or save to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              title="Copy plain text CV to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-900 space-y-8 text-slate-200">
          
          {/* Header Identity */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base text-amber-400 font-medium">
                {PERSONAL_INFO.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1 font-mono">
                <span className="text-slate-300">{PERSONAL_INFO.email}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={PERSONAL_INFO.profiles.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp: {PERSONAL_INFO.phoneDisplay}
                </a>
                <span aria-hidden="true">·</span>
                <span>{PERSONAL_INFO.location}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={PERSONAL_INFO.profiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={PERSONAL_INFO.profiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  GitHub
                </a>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">Member, IAENG</span>
              </div>
            </div>

            {/* Portrait thumbnail in CV header */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-950 shrink-0 shadow-md">
              <img
                src={PERSONAL_INFO.photoUrl || 'IMG_4421-Edit-2.jpg'}
                alt="Joseph Seyilnen Tapkum"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('IMG_4421-Edit-2.jpg') && !target.src.endsWith('/IMG_4421-Edit-2.jpg')) {
                    target.src = '/IMG_4421-Edit-2.jpg';
                  }
                }}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Statement & Bio Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-mono font-bold text-amber-400">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              {PERSONAL_INFO.supportingStatement}
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              {PERSONAL_INFO.bioSummary} Started professional career as a secondary-level Chemistry teacher before transitioning into Computer and Communications Engineering, combining pedagogical clarity with rigorous network infrastructure engineering.
            </p>
          </div>

          {/* Professional Association & Education */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-mono font-bold text-amber-400">
              Education & Professional Society
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <div className="flex justify-between items-baseline font-semibold text-white">
                  <span>International Association of Engineers (IAENG)</span>
                  <span className="text-amber-400 text-xs font-mono">Professional Member</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Participating member focused on Computer Science & Telecommunications. Committed to international engineering ethics.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <div className="flex justify-between items-baseline font-semibold text-white">
                  <span>Computer & Communications Engineering</span>
                  <span className="text-slate-400 text-xs font-mono">Degree Formation</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Comprehensive grounding in communications systems, telecommunications theory, digital logic, routing protocols, and signal transmission.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <div className="flex justify-between items-baseline font-semibold text-white">
                  <span>Secondary School Chemistry Teacher & STEM Educator</span>
                  <span className="text-slate-400 text-xs font-mono">Foundational Teaching</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Instructed students in scientific principles, laboratory inquiry, and analytical reasoning, forming the pedagogical foundation for subsequent tech initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-mono font-bold text-amber-400">
              Initiatives & Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between font-semibold text-white mb-1">
                    <span>{proj.title}</span>
                    <span className="text-amber-400 font-mono text-[11px]">{proj.status}</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400">
                    Role: <span className="text-slate-200">{proj.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Table */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-mono font-bold text-amber-400">
              Technical Competencies & Calibrated Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="font-semibold text-white block mb-2">{cat.category}</span>
                  <ul className="space-y-1 text-slate-300">
                    {cat.skills.map((s) => (
                      <li key={s.name} className="flex justify-between items-center text-[11px]">
                        <span>{s.name}</span>
                        <span className="text-slate-500 font-mono">{s.proficiency}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Writings */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-mono font-bold text-amber-400">
              Essays & Societal Commentary
            </h2>
            <div className="space-y-2 text-xs">
              {WRITINGS.map((w) => (
                <div key={w.id} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="font-semibold text-white block">
                    {w.title}: {w.subtitle}
                  </span>
                  <p className="text-slate-400 text-xs mt-0.5">{w.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integrity Notice */}
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400 leading-relaxed font-mono">
            Integrity Note: This curriculum vitae reflects authentic verified competencies, projects, and educational milestones. Specific external URLs, certificate scans, or references are provided upon request via {PERSONAL_INFO.email}.
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Placeholder PDF File: {PERSONAL_INFO.cvPlaceholder}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
