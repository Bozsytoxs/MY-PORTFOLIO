import { useState } from 'react';
import { ArrowDown, Mail, MapPin, Award, BookOpen, Layers, Terminal, Sparkles, Upload, Image as ImageIcon, ExternalLink, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
}

export default function Hero({ onOpenCv }: HeroProps) {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(PERSONAL_INFO.photoUrl || 'IMG_4421-Edit-2.jpg');
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoInput, setPhotoInput] = useState('');

  const handleApplyPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (photoInput.trim()) {
      setCustomPhotoUrl(photoInput.trim());
      setShowPhotoModal(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhotoUrl(event.target.result as string);
          setShowPhotoModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Context line with clean unboxed typography (zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-slate-400">
              <span className="text-amber-400 font-semibold">PORTFOLIO</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>ENGINEER</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>EDUCATOR</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>BUILDER</span>
            </div>

            {/* Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>

              {/* Subtitle / Professional Titles */}
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-amber-400 leading-snug">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Supporting Statement Quote */}
            <blockquote className="border-l-2 border-amber-500/80 pl-4 py-1 text-slate-300 text-base sm:text-lg leading-relaxed font-normal bg-slate-900/30 rounded-r-lg pr-4">
              "{PERSONAL_INFO.supportingStatement}"
            </blockquote>

            {/* Unboxed Metadata Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500/80 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500/80 shrink-0" />
                <span>IAENG Professional Member</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-500/80 shrink-0" />
                <span>Founder, Next Generation Tech Institute (NGTI)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Connect With Me
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                View Resume / CV
              </button>
            </div>

            {/* Direct Verified Links (LinkedIn & GitHub) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="text-slate-500 font-mono text-[11px]">DIRECT PROFILES:</span>
              <a
                href={PERSONAL_INFO.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-amber-400 border border-slate-800 hover:border-slate-700 transition-colors font-mono"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-amber-500" />
              </a>

              <a
                href={PERSONAL_INFO.profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-amber-400 border border-slate-800 hover:border-slate-700 transition-colors font-mono"
              >
                <span>GitHub (@Bozsytoxs)</span>
                <ExternalLink className="w-3 h-3 text-amber-500" />
              </a>

              <a
                href={PERSONAL_INFO.profiles.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 hover:text-emerald-300 border border-emerald-800/80 hover:border-emerald-700 transition-colors font-mono"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp: {PERSONAL_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              {/* Outer Technical Frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-black/60 border border-slate-800">
                
                {/* Corner registration crosshairs for engineering precision */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-amber-400/80 font-mono text-xs select-none">+</div>
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-amber-400/80 font-mono text-xs select-none">+</div>
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-amber-400/80 font-mono text-xs select-none">+</div>
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-amber-400/80 font-mono text-xs select-none">+</div>

                {/* Inner Card Container */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800/80 p-6 flex flex-col items-center text-center">
                  
                  {/* Portrait Area / Placeholder */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden border-2 border-slate-700/80 bg-slate-950 flex flex-col items-center justify-center shadow-inner group">
                    {customPhotoUrl ? (
                      <img
                        src={customPhotoUrl}
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
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400">
                        {/* Technical network monogram */}
                        <div className="relative w-20 h-20 rounded-full bg-slate-800/80 border border-amber-500/40 flex items-center justify-center mb-3">
                          <span className="font-mono text-2xl font-bold text-amber-400 tracking-wider">JST</span>
                          {/* Simulated orbiting node */}
                          <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        </div>
                        <p className="text-xs font-mono text-slate-300 font-medium">[Profile Photo]</p>
                        <p className="text-[11px] text-slate-500 mt-1">Joseph Seyilnen Tapkum</p>
                      </div>
                    )}

                    {/* Quick photo toggle overlay */}
                    <button
                      onClick={() => setShowPhotoModal(true)}
                      className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-xs text-amber-300 p-2 font-medium"
                      title="Upload or link Joseph's photo"
                    >
                      <ImageIcon className="w-5 h-5 text-amber-400" />
                      <span>{customPhotoUrl ? 'Change Portrait' : 'Set Profile Photo'}</span>
                    </button>
                  </div>

                  {/* Caption & Identity verification */}
                  <div className="mt-5 space-y-1 w-full">
                    <h2 className="text-base font-semibold text-white">
                      Joseph Seyilnen Tapkum
                    </h2>
                    <p className="text-xs text-amber-400/90 font-mono">
                      B.Eng. Computer & Communications
                    </p>
                    <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                      Grounded practitioner in networking infrastructure, educational systems, and digital literacy.
                    </p>
                  </div>

                  {/* Focus Badges in zero-pill text format */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 w-full flex items-center justify-around text-xs text-slate-400 font-mono">
                    <div>
                      <span className="block text-slate-200 font-semibold">Jos, NG</span>
                      <span className="text-[10px] text-slate-500">Base</span>
                    </div>
                    <span className="text-slate-700">|</span>
                    <div>
                      <span className="block text-slate-200 font-semibold">IAENG</span>
                      <span className="text-[10px] text-slate-500">Member</span>
                    </div>
                    <span className="text-slate-700">|</span>
                    <div>
                      <span className="block text-slate-200 font-semibold">NGTI</span>
                      <span className="text-[10px] text-slate-500">Founder</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Photo URL/Upload Modal for seamless custom photo accommodation */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                Accommodate Joseph's Photograph
              </h3>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Upload a local portrait photo or paste an image URL. If none is supplied, the clean technical monogram frame remains active.
            </p>

            <form onSubmit={handleApplyPhoto} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Image Web URL
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/joseph-photo.jpg"
                  value={photoInput}
                  onChange={(e) => setPhotoInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-1">
                <span className="block text-xs text-slate-400 mb-1.5">Or upload image file:</span>
                <label className="flex items-center justify-center gap-2 px-3 py-2 border border-dashed border-slate-700 hover:border-amber-500/60 rounded-lg cursor-pointer bg-slate-950/50 hover:bg-slate-950 text-xs text-slate-300">
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>Choose file from device</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                {customPhotoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setCustomPhotoUrl(null);
                      setShowPhotoModal(false);
                    }}
                    className="px-3 py-1.5 text-xs text-rose-400 hover:text-rose-300"
                  >
                    Reset to Default
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowPhotoModal(false)}
                  className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg"
                >
                  Apply Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
