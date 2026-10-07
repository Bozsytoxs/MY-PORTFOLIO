import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ExternalLink, Phone, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate orderly submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Inquiry for Joseph Seyilnen Tapkum'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: PERSONAL_INFO.profiles.whatsapp,
      handle: PERSONAL_INFO.phoneDisplay,
      desc: 'Direct Instant Messaging',
      isVerified: true,
    },
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.profiles.linkedin,
      handle: 'joseph-seyilnen-tapkum',
      desc: 'Professional & Engineering Network',
      isVerified: true,
    },
    {
      name: 'GitHub',
      url: PERSONAL_INFO.profiles.github,
      handle: 'Bozsytoxs',
      desc: 'Code Repositories & Open Source',
      isVerified: true,
    },
    {
      name: 'X / Twitter',
      placeholder: PERSONAL_INFO.profiles.x,
      desc: 'Thought & Updates',
      isVerified: false,
    },
    {
      name: 'Facebook',
      placeholder: PERSONAL_INFO.profiles.facebook,
      desc: 'Community Connections',
      isVerified: false,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-2">
            <span>DIRECT ENGAGEMENT</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <blockquote className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed border-l-2 border-amber-500/80 pl-4">
            "Whether you're interested in technology, education, networking, collaboration, youth development or practical digital solutions, I'd be glad to connect."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Profiles - 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Direct Inquiries
              </span>

              {/* Email row */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 block">Personal & Professional Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp & Phone row */}
              <div className="pt-3 border-t border-slate-800/80 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 block">WhatsApp & Direct Line</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={PERSONAL_INFO.profiles.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                      WhatsApp Active
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={PERSONAL_INFO.profiles.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 hover:text-emerald-300 transition-colors"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                    title="Copy phone number to clipboard"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Professional Profiles Placeholders */}
            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Professional Profiles
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Awaiting Final Handles
                </span>
              </div>

              <div className="space-y-2.5">
                {socialLinks.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-white block">{item.name}</span>
                        {item.isVerified && (
                          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/30">
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400">{item.desc}</span>
                    </div>

                    {item.isVerified && item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 font-mono text-xs border border-slate-700/80 transition-colors"
                      >
                        <span>Visit Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {item.placeholder}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 leading-normal pt-2">
                * LinkedIn and GitHub links are verified directly from Joseph. Other handles will be updated upon official provision.
              </p>
            </div>

          </div>

          {/* Right Column: Working Contact Form - 7 Columns */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    For consultations, educational initiatives, or technical projects.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-amber-400" />
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Thank You, {formData.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto leading-relaxed">
                      Your message has been staged. You can also send this directly from your local email client right now:
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Mail Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Danladi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. samuel@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Technical Workshop / Network Advisory / NGTI"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your note, proposal, or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-500">
                      Direct response to your provided email address.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
