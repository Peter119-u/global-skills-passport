import type { PartnerInquiryRecord } from '../types/platform';

const PARTNER_INQUIRIES_KEY = 'gsp_partner_inquiries_v1';

export function readPartnerInquiries(): PartnerInquiryRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(PARTNER_INQUIRIES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as PartnerInquiryRecord[]) : [];
  } catch {
    return [];
  }
}

export function savePartnerInquiry(record: PartnerInquiryRecord): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = readPartnerInquiries();
    const updated = [record, ...existing].slice(0, 20);
    window.localStorage.setItem(PARTNER_INQUIRIES_KEY, JSON.stringify(updated));
  } catch {
    // Ignore storage quota or private-browsing errors gracefully
  }
}

export function generatePartnerReferenceId(): string {
  const year = new Date().getFullYear();
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `GSP-PRT-${year}-${suffix}`;
}
