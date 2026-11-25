/**
 * Domain types for Global Skills Passport (GSP) – Education Without Borders.
 * Structured to align directly with planned Phase 2 Supabase relational tables
 * (profiles, pathways, courses, enrollments, assessments, certificates).
 */

export type PublicPageId =
  | 'home'
  | 'academy'
  | 'partners'
  | 'verify'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'register'
  | 'login'
  | 'dashboard';

export interface VerifiedModuleScore {
  moduleOrder: number;
  moduleTitle: string;
  deliverable: string;
  scorePercent: number;
}

export interface VerifiedCapstoneCriterion {
  criterion: string;
  weightPercent: number;
  scorePercent: number;
  assessorNote: string;
}

export interface VerifiedPortfolioArtifact {
  id: string;
  title: string;
  artifactType: string;
  summary: string;
  toolsUsed: string[];
  highlights: string[];
  previewSnippetLabel: string;
  previewSnippet: string;
}

export interface VerifiedCredentialRecord {
  credentialId: string;
  pathwayId: string;
  pathwayCode: string;
  pathwayTitle: string;
  issueDate: string;
  issuingPartner: string;
  assessorNameAndRole: string;
  verificationHash: string;
  learnerSummary: {
    fullName: string;
    cohortRegion: string;
    readinessLevel: string;
    studyHoursCompleted: number;
  };
  moduleScores: VerifiedModuleScore[];
  capstoneTitle: string;
  capstoneOverallPercent: number;
  capstoneAwardLevel: string;
  capstoneCriteria: VerifiedCapstoneCriterion[];
  assessorEndorsement: string;
  portfolioArtifacts: VerifiedPortfolioArtifact[];
}

export type PartnerTrackId = 'mentor' | 'employer' | 'institution';

export interface PartnerInquiryRecord {
  referenceId: string;
  submittedAt: string;
  fullName: string;
  titleRole: string;
  organizationName: string;
  website: string;
  workEmail: string;
  countryTimezone: string;
  track: PartnerTrackId;
  skillDomains: string[];
  collaborationMessage: string;
}

export type StudentAccountType = 'refugee_displaced' | 'other_learner';

export interface StudentProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country_of_residence: string;
  nationality: string | null;
  location: string | null;
  account_type: StudentAccountType;
  registration_date: string;
  updated_at?: string;
}

export interface StudentRegistrationInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  nationality?: string;
  location?: string;
  accountType: StudentAccountType;
  password: string;
}

export type UserRole =
  | 'learner'
  | 'mentor'
  | 'employer'
  | 'institution'
  | 'admin';

export type PathwayCategory = 'all' | 'technology' | 'business_design';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonExampleBlock {
  label: string;
  content: string;
}

export interface SampleLessonSection {
  heading: string;
  body: string;
  exampleOrTemplate?: LessonExampleBlock;
  keyTakeaway?: string;
}

export interface LessonContent {
  id: string;
  moduleOrder: number;
  lessonNumber: string;
  title: string;
  estimatedMinutes: number;
  learningObjectives: string[];
  sections: SampleLessonSection[];
  quiz: QuizQuestion[];
}

export interface CourseModule {
  id: string;
  order: number;
  title: string;
  durationWeeks: number;
  estimatedHours: number;
  lessons: string[];
  deliverable: string;
  projectDescription: string;
}

export interface SampleLesson {
  moduleTitle: string;
  lessonTitle: string;
  estimatedMinutes: number;
  learningObjectives: string[];
  sections: SampleLessonSection[];
  quiz: QuizQuestion[];
}

export interface AssignmentBrief {
  moduleOrder: number;
  title: string;
  deliverable: string;
  estimatedHours: number;
  steps: string[];
}

export interface RubricCriterion {
  criterion: string;
  weightPercent: number;
  competentStandard: string;
  distinctionStandard: string;
}

export interface PathwayAssignments {
  capstoneTitle: string;
  capstoneOverview: string;
  capstoneSteps: string[];
  submissionChecklist: string[];
  moduleAssignments: AssignmentBrief[];
  gradingRubric: RubricCriterion[];
}

export interface LearningPathway {
  id: string;
  code: string;
  title: string;
  category: Exclude<PathwayCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  level: 'Foundation to Professional' | 'Intermediate' | 'Foundation';
  estimatedWeeks: number;
  coreSkills: string[];
  skillBadgeTitle: string;
  practicalCapstone: string;
  partnerRecognitionNote: string;
  modules: CourseModule[];
  sampleLesson: SampleLesson;
}

export interface ProcessStage {
  stepNumber: string;
  title: string;
  description: string;
  actor: string;
}

export interface TargetAudienceGroup {
  role: UserRole;
  title: string;
  description: string;
  primaryBenefit: string;
}

export interface OpportunityTrack {
  id: string;
  title: string;
  category: string;
  description: string;
  readinessCriteria: string;
}

export interface SdgGoal {
  number: number;
  title: string;
  alignmentSummary: string;
  placeholderMetricLabel: string;
  placeholderValue: string;
}

export interface PortalAccessIntent {
  mode: 'sign_in' | 'get_started' | 'start_learning' | 'pathway_cohort';
  pathwayTitle?: string;
}
