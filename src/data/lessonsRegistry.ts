import {
  ARTIFICIAL_INTELLIGENCE_LESSONS,
  SOFTWARE_DEVELOPMENT_LESSONS,
} from './lessonsSoftwareAndAI';
import {
  CYBERSECURITY_LESSONS,
  DATA_SCIENCE_LESSONS,
} from './lessonsDataAndCyber';
import {
  BUSINESS_ENTREPRENEURSHIP_LESSONS,
  DIGITAL_MARKETING_LESSONS,
} from './lessonsMarketingAndBusiness';
import {
  GRAPHIC_DESIGN_LESSONS,
  PROJECT_MANAGEMENT_LESSONS,
} from './lessonsProjectAndDesign';
import type { LessonContent } from '../types/platform';

export const PATHWAY_LESSONS: Record<string, LessonContent[]> = {
  'software-development': SOFTWARE_DEVELOPMENT_LESSONS,
  'artificial-intelligence': ARTIFICIAL_INTELLIGENCE_LESSONS,
  'data-science-analytics': DATA_SCIENCE_LESSONS,
  cybersecurity: CYBERSECURITY_LESSONS,
  'digital-marketing': DIGITAL_MARKETING_LESSONS,
  'business-entrepreneurship': BUSINESS_ENTREPRENEURSHIP_LESSONS,
  'project-management': PROJECT_MANAGEMENT_LESSONS,
  'graphic-design': GRAPHIC_DESIGN_LESSONS,
};
