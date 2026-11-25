import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { AboutSection } from './components/AboutSection';
import { AcademyView } from './components/AcademyView';
import type { CourseViewTab } from './components/PathwayCourseView';
import { CertificationSection } from './components/CertificationSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ImpactSection } from './components/ImpactSection';
import { LegalAndContactView } from './components/LegalAndContactView';
import { LoginPage } from './components/LoginPage';
import { PathwayDetailModal } from './components/Modals';
import { Navbar } from './components/Navbar';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { PartnersPage } from './components/PartnersPage';
import { PathwaysSection } from './components/PathwaysSection';
import { RegisterPage } from './components/RegisterPage';
import { StudentDashboard } from './components/StudentDashboard';
import { VerifyCredentialPage } from './components/VerifyCredentialPage';
import {
  fetchOrProvisionStudentProfile,
  isSupabaseConfigured,
  signOutStudent,
  supabase,
} from './lib/supabaseClient';
import type {
  LearningPathway,
  PublicPageId,
  StudentProfile,
} from './types/platform';

export default function App() {
  const [activePage, setActivePage] = useState<PublicPageId>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/partners') return 'partners';
      if (window.location.pathname === '/verify') return 'verify';
    }
    return 'home';
  });
  const [selectedPathway, setSelectedPathway] =
    useState<LearningPathway | null>(null);
  const [academyInitialPathway, setAcademyInitialPathway] =
    useState<LearningPathway | null>(null);
  const [academyInitialTab, setAcademyInitialTab] =
    useState<CourseViewTab>('syllabus');
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(null);

  const [session, setSession] = useState<Session | null>(null);
  const [authInitialized, setAuthInitialized] = useState(!isSupabaseConfigured);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(null);
  const [welcomeFirstName, setWelcomeFirstName] = useState<string | null>(null);
  const [profileSyncWarning, setProfileSyncWarning] = useState<string | null>(
    null
  );
  const [authNotice, setAuthNotice] = useState<string | null>(null);
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);

  useEffect(() => {
    const client = supabase;
    if (!client) {
      setAuthInitialized(true);
      return;
    }

    let isMounted = true;

    const loadSessionAndProfile = async () => {
      const { data } = await client.auth.getSession();
      if (!isMounted) return;
      const currentSession = data.session;
      setSession(currentSession);

      if (currentSession?.user) {
        try {
          const synced = await fetchOrProvisionStudentProfile(currentSession.user);
          if (isMounted) {
            setStudentProfile(synced.profile);
            setProfileSyncWarning(synced.warning ?? null);
          }
        } catch {
          // Leave profile null if table is not yet provisioned
        }
      }
      if (isMounted) {
        setAuthInitialized(true);
      }
    };

    void loadSessionAndProfile();

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((event, nextSession) => {
      if (!isMounted) return;
      setSession(nextSession);

      if (event === 'PASSWORD_RECOVERY') {
        setIsPasswordRecovery(true);
        setActivePage('login');
        return;
      }

      if (event === 'SIGNED_OUT') {
        setStudentProfile(null);
        setWelcomeFirstName(null);
        setProfileSyncWarning(null);
        setIsPasswordRecovery(false);
        return;
      }

      if (nextSession?.user) {
        void fetchOrProvisionStudentProfile(nextSession.user)
          .then((synced) => {
            if (isMounted) {
              setStudentProfile(synced.profile);
              setProfileSyncWarning(synced.warning ?? null);
            }
          })
          .catch(() => {
            // Handled gracefully inside Dashboard
          });
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/partners') {
        setActivePage('partners');
      } else if (window.location.pathname === '/verify') {
        setActivePage('verify');
      } else if (activePage === 'partners' || activePage === 'verify') {
        setActivePage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activePage]);

  const navigateToPage = (page: PublicPageId, sectionId?: string) => {
    setAuthNotice(null);

    if (page !== 'academy') {
      setAcademyInitialPathway(null);
      setAcademyInitialTab('syllabus');
    }

    // Protect dashboard from unauthenticated access
    if (page === 'dashboard' && !session) {
      setAuthNotice('Please sign in to access your Student Dashboard.');
      setActivePage('login');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (typeof window !== 'undefined') {
      const targetPath =
        page === 'partners'
          ? '/partners'
          : page === 'verify'
            ? '/verify'
            : '/';
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, '', targetPath);
      }
    }

    setActivePage(page);
    if (page === 'home' && sectionId) {
      setPendingSectionId(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (activePage === 'home' && pendingSectionId) {
      const targetId = pendingSectionId;
      setPendingSectionId(null);
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }, [activePage, pendingSectionId]);

  const handleAuthActionIntent = () => {
    if (session) {
      navigateToPage('dashboard');
    } else {
      navigateToPage('register');
    }
  };

  const handleAuthSuccess = (
    profile: StudentProfile | null,
    firstName: string
  ) => {
    setStudentProfile(profile);
    setWelcomeFirstName(firstName);
    setAuthNotice(null);
    setIsPasswordRecovery(false);
    setActivePage('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    await signOutStudent();
    setSession(null);
    setStudentProfile(null);
    setWelcomeFirstName(null);
    setAuthNotice('You have signed out securely.');
    setActivePage('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar
        activePage={activePage}
        session={session}
        onNavigatePage={navigateToPage}
        onSignOut={handleSignOut}
      />

      {activePage === 'home' && (
        <main className="flex-1">
          <HeroSection
            onStartLearning={handleAuthActionIntent}
            onExploreCourses={() => navigateToPage('academy')}
          />
          <AboutSection />
          <HowItWorksSection />
          <PathwaysSection
            onSelectPathway={setSelectedPathway}
            onExploreAcademy={() => navigateToPage('academy')}
          />
          <CertificationSection
            onLearnMorePortal={handleAuthActionIntent}
            onOpenPartners={() => navigateToPage('partners')}
            onOpenVerify={() => navigateToPage('verify')}
          />
          <OpportunitiesSection
            onConnectOpportunities={handleAuthActionIntent}
            onOpenPartners={() => navigateToPage('partners')}
          />
          <ImpactSection />
        </main>
      )}

      {activePage === 'academy' && (
        <AcademyView
          initialPathway={academyInitialPathway}
          initialTab={academyInitialTab}
          onClearInitialPathway={() => {
            setAcademyInitialPathway(null);
            setAcademyInitialTab('syllabus');
          }}
          onBackHome={() => navigateToPage('home', 'top')}
          onNavigatePage={navigateToPage}
          onOpenPortalModal={handleAuthActionIntent}
        />
      )}

      {activePage === 'partners' && (
        <PartnersPage onNavigatePage={navigateToPage} />
      )}

      {activePage === 'verify' && (
        <VerifyCredentialPage onNavigatePage={navigateToPage} />
      )}

      {activePage === 'register' && (
        <RegisterPage
          onNavigatePage={navigateToPage}
          onAuthSuccess={handleAuthSuccess}
        />
      )}

      {activePage === 'login' && (
        <LoginPage
          notice={authNotice}
          isPasswordRecovery={isPasswordRecovery}
          onNavigatePage={navigateToPage}
          onLoginSuccess={handleAuthSuccess}
          onRecoveryComplete={() => setIsPasswordRecovery(false)}
        />
      )}

      {activePage === 'dashboard' &&
        (authInitialized ? (
          session ? (
            <StudentDashboard
              session={session}
              profile={studentProfile}
              welcomeName={welcomeFirstName}
              profileSyncWarning={profileSyncWarning}
              onProfileUpdated={setStudentProfile}
              onSignOut={handleSignOut}
              onNavigatePage={navigateToPage}
              onSelectPathway={setSelectedPathway}
            />
          ) : (
            <LoginPage
              notice="Please sign in to access your Student Dashboard."
              onNavigatePage={navigateToPage}
              onLoginSuccess={handleAuthSuccess}
              onRecoveryComplete={() => setIsPasswordRecovery(false)}
            />
          )
        ) : (
          <main className="flex-1 bg-[#F7F9FC] py-20 text-center text-sm text-slate-600">
            Verifying authentication session...
          </main>
        ))}

      {(activePage === 'contact' ||
        activePage === 'privacy' ||
        activePage === 'terms') && (
        <LegalAndContactView
          page={activePage}
          onBackHome={() => navigateToPage('home', 'top')}
        />
      )}

      <Footer onNavigatePage={navigateToPage} />

      {selectedPathway && (
        <PathwayDetailModal
          key={selectedPathway.id}
          pathway={selectedPathway}
          onClose={() => setSelectedPathway(null)}
          onExpressInterest={handleAuthActionIntent}
          onOpenSampleLesson={(pathway) => {
            setAcademyInitialPathway(pathway);
            setAcademyInitialTab('lesson');
            setActivePage('academy');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}
