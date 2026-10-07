import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCv: () => void;
}

export default function Navbar({ onOpenCv }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'skills', 'experience', 'leadership', 'writing', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-bold font-mono text-base tracking-wider shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform">
              JT
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-amber-400 transition-colors">
                Joseph S. Tapkum
              </span>
              <span className="text-[11px] text-slate-400 tracking-wide font-mono hidden sm:inline">
                Computer & Network Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-amber-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-amber-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="GitHub Profile (@Bozsytoxs)"
              aria-label="GitHub Profile"
            >
              <span className="font-mono text-xs font-semibold px-0.5">GH</span>
            </a>

            <a
              href={PERSONAL_INFO.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-amber-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <span className="font-mono text-xs font-semibold px-0.5">IN</span>
            </a>

            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm shadow-amber-500/20"
            >
              <span>Connect</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCv}
              aria-label="View CV"
              className="p-2 text-slate-300 hover:text-amber-400 border border-slate-800 rounded-lg bg-slate-900/80"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-amber-500/10 text-amber-400'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 pb-1">
                <a
                  href={PERSONAL_INFO.profiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-center text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-amber-400"
                >
                  GitHub (Bozsytoxs)
                </a>
                <a
                  href={PERSONAL_INFO.profiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-center text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-amber-400"
                >
                  LinkedIn
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded-lg"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View & Download CV</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-950 bg-amber-500 rounded-lg font-medium"
              >
                <span>Connect With Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
