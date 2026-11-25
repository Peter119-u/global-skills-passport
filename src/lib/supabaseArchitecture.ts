import type { LearningPathway, UserRole } from '../types/platform';

/**
 * Architectural boundary for Phase 2 Supabase Integration.
 *
 * Phase 1 focuses exclusively on the public-facing platform, curriculum
 * transparency, and institutional architecture. No fake authentication,
 * synthetic certificate verification, or mock payment processing is active.
 *
 * Planned environment variables for Phase 2:
 * - VITE_SUPABASE_URL
 * - VITE_SUPABASE_ANON_KEY
 */

export interface PlatformRoadmapCapability {
  moduleName: string;
  plannedTableOrService: string;
  status: 'Planned for Phase 2';
  description: string;
}

export const PHASE_2_ARCHITECTURE_MODULES: PlatformRoadmapCapability[] = [
  {
    moduleName: 'Role-Based Authentication & Profiles',
    plannedTableOrService: 'supabase.auth + public.profiles',
    status: 'Planned for Phase 2',
    description:
      'Secure onboarding for refugee learners, mentors, employers, accredited institutions, and administrators with row-level security.',
  },
  {
    moduleName: 'Academy Enrollment & Progress Tracking',
    plannedTableOrService: 'public.pathways / public.modules / public.enrollments',
    status: 'Planned for Phase 2',
    description:
      'Offline-resilient module progression, milestone tracking, and mentor feedback queues.',
  },
  {
    moduleName: 'Competency Assessments & Portfolios',
    plannedTableOrService: 'public.assessments + Storage Buckets',
    status: 'Planned for Phase 2',
    description:
      'Structured practical project submissions reviewed by qualified practitioners and instructors.',
  },
  {
    moduleName: 'Partner Credential Issuance & Verification',
    plannedTableOrService: 'public.credentials + Signed Verification Endpoint',
    status: 'Planned for Phase 2',
    description:
      'Cryptographically verifiable credential records issued exclusively upon approved partner review.',
  },
];

export interface AuthServiceContract {
  signInWithEmail(email: string): Promise<{ status: 'unavailable_phase_1'; message: string }>;
  registerInterest(payload: {
    fullName: string;
    email: string;
    role: UserRole;
    preferredPathwayId?: string;
  }): Promise<{ accepted: boolean; referenceNote: string }>;
}

export interface AcademyCatalogContract {
  listPathways(): Promise<LearningPathway[]>;
}
