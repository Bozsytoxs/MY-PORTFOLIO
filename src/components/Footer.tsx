import { ArrowUp, Award, BookOpen, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCv: () => void;
}

export default function Footer({ onOpenCv }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 md:py-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Identity & Mission - 6 cols */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold font-mono text-sm">
                JT
              </div>
              <div>
                <span className="font-bold text-white text-base block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-amber-400 font-mono">
                  Computer & Network Engineer · Educator · Founder
                </span>
              </div>
            </div>

            <p className="text-slate-300 max-w-md text-xs sm:text-sm leading-relaxed">
              Dedicated to practical networking infrastructure, grassroots cybersecurity awareness, STEM pedagogy, and building Next Generation Tech Institute (NGTI) for African youth empowerment.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>IAENG Professional Member</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.profiles.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-800 underline-offset-4 transition-colors"
              >
                WhatsApp: {PERSONAL_INFO.phoneDisplay}
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 underline decoration-slate-700 underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 underline decoration-slate-700 underline-offset-4 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Navigation Directory - 3 cols */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Joseph</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">What I Do</a></li>
              <li><a href="#skills" className="hover:text-amber-400 transition-colors">Skills & Proficiencies</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projects & Initiatives</a></li>
              <li><a href="#experience" className="hover:text-amber-400 transition-colors">Education & Timeline</a></li>
              <li><a href="#writing" className="hover:text-amber-400 transition-colors">Writing & Ideas</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Connect</a></li>
            </ul>
          </div>

          {/* Initiatives & Quick Actions - 3 cols */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              Key Initiatives
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors block">
                  Next Generation Tech Institute
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors block">
                  PhishGuard NG (Scam Awareness)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors block">
                  Dynamis Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors block">
                  TechEdGuard (STEM Mentorship)
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenCv}
                className="w-full text-center px-3 py-2 bg-slate-900 hover:bg-slate-800 text-xs text-slate-200 border border-slate-700/80 rounded-lg transition-colors"
              >
                View Full Curriculum Vitae
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Joseph Seyilnen Tapkum. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Grounded Technology & Education in Africa</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors py-1 px-2 rounded hover:bg-slate-900"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
