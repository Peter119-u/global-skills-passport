import { useState } from 'react';
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';
import type { PublicPageId } from '../types/platform';

interface NavbarProps {
  activePage: PublicPageId;
  session: Session | null;
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
  onSignOut: () => Promise<void>;
}

interface NavItem {
  label: string;
  page: PublicPageId;
  sectionId?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: 'home', sectionId: 'top' },
  { label: 'About Us', page: 'home', sectionId: 'about' },
  { label: 'Learning Academy', page: 'academy' },
  { label: 'How It Works', page: 'home', sectionId: 'how-it-works' },
  { label: 'Certifications', page: 'home', sectionId: 'certifications' },
  { label: 'Opportunities', page: 'home', sectionId: 'opportunities' },
  { label: 'Partners & Mentors', page: 'partners' },
  { label: 'Verify Credential', page: 'verify' },
];

export function Navbar({
  activePage,
  session,
  onNavigatePage,
  onSignOut,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (item: NavItem) => {
    setMobileOpen(false);
    onNavigatePage(item.page, item.sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Brand Wordmark & Mark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick({ label: 'Home', page: 'home', sectionId: 'top' });
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:rounded-md"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="7" fill="#0B1F3A" />
            <circle cx="16" cy="16" r="8.5" stroke="#2DD4BF" strokeWidth="1.75" />
            <ellipse cx="16" cy="16" rx="4" ry="8.5" stroke="#2DD4BF" strokeWidth="1.4" />
            <path d="M7.5 16H24.5" stroke="#2DD4BF" strokeWidth="1.4" />
          </svg>
          <span className="font-display text-base sm:text-[17px] font-bold tracking-tight text-[#0B1F3A] whitespace-nowrap shrink-0">
            Global Skills Passport
          </span>
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-[13.5px] 2xl:text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => {
            const isStandalonePage =
              item.page === 'academy' ||
              item.page === 'partners' ||
              item.page === 'verify';
            const isCurrent =
              (isStandalonePage && activePage === item.page) ||
              (item.label === 'Home' && activePage === 'home');

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer hover:text-[#0B1F3A] ${
                  isCurrent ? 'text-[#0B1F3A] font-semibold' : 'text-slate-600'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#0D9488] transition-opacity duration-150 ${
                    isStandalonePage && activePage === item.page
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Auth Actions */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          {session ? (
            <>
              <button
                type="button"
                onClick={() => onNavigatePage('dashboard')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activePage === 'dashboard'
                    ? 'bg-[#0F766E] text-white'
                    : 'text-[#0B1F3A] bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
                Dashboard
              </button>
              <button
                type="button"
                onClick={() => void onSignOut()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0B1F3A] border border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onNavigatePage('login')}
                className={`px-3.5 py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer rounded-lg ${
                  activePage === 'login'
                    ? 'text-[#0F766E] font-semibold'
                    : 'text-[#0B1F3A] hover:text-[#0F766E]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('register')}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              >
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile / Tablet Menu Trigger */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0B1F3A] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className="w-full text-left px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A] rounded-lg min-h-[44px] cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
            {session ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onNavigatePage('dashboard');
                  }}
                  className="flex-1 min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] rounded-lg hover:bg-[#122D52] cursor-pointer"
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    void onSignOut();
                  }}
                  className="flex-1 min-h-[44px] px-4 py-2.5 text-sm font-medium text-[#0B1F3A] border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onNavigatePage('login');
                  }}
                  className="flex-1 min-h-[44px] px-4 py-2.5 text-sm font-medium text-[#0B1F3A] border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onNavigatePage('register');
                  }}
                  className="flex-1 min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] rounded-lg hover:bg-[#122D52] cursor-pointer"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
