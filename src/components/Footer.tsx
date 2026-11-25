import { Globe, Linkedin, Mail, Share2 } from 'lucide-react';
import type { PublicPageId } from '../types/platform';

interface FooterProps {
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
}

export function Footer({ onNavigatePage }: FooterProps) {
  return (
    <footer className="bg-[#071426] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="32" height="32" rx="7" fill="#122D52" />
                <circle cx="16" cy="16" r="8.5" stroke="#2DD4BF" strokeWidth="1.75" />
                <ellipse cx="16" cy="16" rx="4" ry="8.5" stroke="#2DD4BF" strokeWidth="1.4" />
                <path d="M7.5 16H24.5" stroke="#2DD4BF" strokeWidth="1.4" />
              </svg>
              <span className="font-display text-base font-bold text-white">
                Global Skills Passport
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Education Without Borders. Empowering refugees and displaced
              communities through structured professional training, competency
              assessment, and international opportunities.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#contact-social-linkedin"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePage('contact');
                }}
                aria-label="Global Skills Passport LinkedIn & Partner Updates"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact-social-web"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePage('contact');
                }}
                aria-label="Global Skills Passport Global Network"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 transition-colors"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact-social-share"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePage('contact');
                }}
                aria-label="Global Skills Passport Community Channels"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 transition-colors"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => onNavigatePage('contact')}
                aria-label="Contact Global Skills Passport"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'about')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  About Global Skills Passport
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('academy')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Learning Academy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'how-it-works')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white">
              Credentials &amp; Pathways
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'certifications')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Certification Framework
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'opportunities')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Opportunities &amp; Mentorship
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('verify')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Verify a Credential
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('partners')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Partners &amp; Mentors Onboarding
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'impact')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  UN SDG Alignment
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-semibold text-white">
              Governance &amp; Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('contact')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('privacy')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('terms')}
                  className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Global Skills Passport (GSP) – Education Without Borders.
          </p>
          <p>
            Public Foundation Release · Preparing Phase 2 Learner &amp; Partner Portals
          </p>
        </div>
      </div>
    </footer>
  );
}
