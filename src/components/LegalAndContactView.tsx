import { useState, type FormEvent } from 'react';
import { ArrowLeft, CheckCircle2, Mail, MapPin, Shield } from 'lucide-react';
import type { PublicPageId } from '../types/platform';

interface LegalAndContactViewProps {
  page: Exclude<PublicPageId, 'home' | 'academy'>;
  onBackHome: () => void;
}

export function LegalAndContactView({
  page,
  onBackHome,
}: LegalAndContactViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Learner Enrollment');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailValid) {
      setError('Please enter a valid email address.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Please include a brief message (at least 10 characters).');
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="bg-[#F7F9FC] min-h-[75vh] py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </button>

        {page === 'contact' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-2">
              Institutional Inquiries &amp; Partnerships
            </p>
            <h1 className="font-display text-3xl font-bold text-[#0B1F3A] mb-3">
              Contact Global Skills Passport
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Reach out regarding learner access, volunteer mentorship, employer
              hiring collaborations, or institutional accreditation partnerships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 space-y-5">
                <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-[#0B1F3A]">
                        General &amp; Partner Desk
                      </p>
                      <p className="text-sm text-slate-600">
                        partnerships@globalskillspassport.org
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-[#0B1F3A]">
                        Operational Scope
                      </p>
                      <p className="text-sm text-slate-600">
                        Remote-first international network serving displaced
                        learners across regions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Phase 1 Notice: Form submissions in this public preview
                      validate input client-side; live server email routing will
                      activate in Phase 2 alongside Supabase deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                {submitted ? (
                  <div className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                      <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                        Inquiry Recorded for Preview
                      </h2>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Thank you, {name}. Your message regarding{' '}
                      <span className="font-semibold">{topic}</span> has been
                      validated. Live message dispatch will be connected when
                      backend communications launch in Phase 2.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="text-sm font-semibold text-[#0F766E] hover:underline cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {error && (
                      <div
                        role="alert"
                        className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                      >
                        {error}
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                        placeholder="you@organization.org"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-topic"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Inquiry Category
                      </label>
                      <select
                        id="contact-topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                      >
                        <option value="Learner Enrollment">Learner Enrollment</option>
                        <option value="Teacher or Mentor Volunteering">
                          Teacher or Mentor Volunteering
                        </option>
                        <option value="Employer & Recruitment Partnership">
                          Employer &amp; Recruitment Partnership
                        </option>
                        <option value="University & Awarding Accreditation">
                          University &amp; Awarding Accreditation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none"
                        placeholder="How would you like to learn or partner with Global Skills Passport?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors cursor-pointer min-h-[44px]"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {page === 'privacy' && (
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-2">
                Data Protection &amp; Safeguarding
              </p>
              <h1 className="font-display text-3xl font-bold text-[#0B1F3A]">
                Privacy Policy
              </h1>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-prose">
              <p>
                Global Skills Passport (GSP) is committed to protecting the safety,
                dignity, and personal information of displaced learners, mentors,
                and institutional partners.
              </p>
              <section className="space-y-2">
                <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                  1. Minimal Data Collection Principle
                </h2>
                <p>
                  During this Phase 1 public website release, GSP does not require
                  user accounts or store sensitive displacement documentation. When
                  Phase 2 learner portals launch, data collection will follow strict
                  data-minimization principles.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                  2. Safeguarding Displaced Learners
                </h2>
                <p>
                  Learner identities, geographic locations, and portfolio records
                  will never be sold, shared with unauthorized third parties, or
                  disclosed to external employers without explicit learner consent.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                  3. Credential Verification Privacy
                </h2>
                <p>
                  Planned Phase 2 verification endpoints will expose only the
                  minimum credential metadata authorized by the graduate to verify
                  completed assessments and partner-issued awards.
                </p>
              </section>
            </div>
          </article>
        )}

        {page === 'terms' && (
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-2">
                Platform Governance
              </p>
              <h1 className="font-display text-3xl font-bold text-[#0B1F3A]">
                Terms and Conditions
              </h1>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-prose">
              <p>
                These Terms and Conditions govern access to the Global Skills
                Passport public information platform and upcoming educational
                services.
              </p>
              <section className="space-y-2">
                <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                  1. Scope of Educational Certificates
                </h2>
                <p>
                  Global Skills Passport provides structured skills training and
                  competency-based project evaluations. GSP&apos;s own certificates of
                  completion attest to coursework finished on this platform and are
                  not automatically equivalent to university degrees, state
                  licenses, or national academic qualifications. Formal recognized
                  certifications are issued solely through accredited institutions
                  and approved awarding partners.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                  2. Academic Integrity
                </h2>
                <p>
                  All assessments and capstone deliverables submitted in Phase 2
                  cohorts must represent a learner&apos;s authentic work. Plagiarism
                  or misrepresentation of credentials will result in revocation of
                  platform recognition.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                  3. Equal Access &amp; Non-Discrimination
                </h2>
                <p>
                  GSP maintains an inclusive learning community free from
                  harassment or discrimination based on displacement status,
                  nationality, gender, ethnicity, religion, or disability.
                </p>
              </section>
            </div>
          </article>
        )}
      </div>
    </main>
  );
}
