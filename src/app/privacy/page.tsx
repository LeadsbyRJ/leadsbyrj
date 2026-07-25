import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}—how we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  const effectiveDate = "July 25, 2026";

  return (
    <Section className="bg-background pt-12 sm:pt-16">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">
          Effective date: {effectiveDate}
        </p>
        <p className="mt-2 text-sm text-muted">
          Website:{" "}
          <a href={SITE.url} className="text-accent hover:underline">
            {SITE.url}
          </a>
        </p>

        <div className="prose-privacy mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              respects your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard information when you visit{" "}
              {SITE.url}, submit forms, contact us by phone, text, or email, or
              otherwise engage with our services.
            </p>
            <p>
              By using our website or submitting information to us, you agree to
              the practices described in this policy. If you do not agree,
              please do not use the site or submit personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Contact details</strong> —
                name, email address, phone number, business name, and website
                URL when you fill out forms or email us.
              </li>
              <li>
                <strong className="text-foreground">Inquiry content</strong> —
                messages, project details, service preferences, and other
                information you choose to provide.
              </li>
              <li>
                <strong className="text-foreground">
                  Communications consent
                </strong>{" "}
                — records of your consent to be contacted by phone, text (SMS),
                and/or email, including timestamps and form submissions.
              </li>
              <li>
                <strong className="text-foreground">
                  Technical / usage data
                </strong>{" "}
                — IP address, browser type, device information, pages visited,
                referring URLs, and approximate location derived from IP, which
                may be collected automatically via cookies, analytics, or server
                logs.
              </li>
            </ul>
            <p>
              We do not knowingly collect personal information from children
              under 13. If you believe we have done so, contact us for removal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and provide requested services</li>
              <li>
                Deliver free resources such as ranking audits and follow-up
                recommendations
              </li>
              <li>
                Contact you by phone, text message (SMS/MMS), and/or email about
                your inquiry, our services, appointments, or related offers—
                where you have consented
              </li>
              <li>Improve our website, marketing, and customer experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>
                Detect, prevent, and address fraud, abuse, or security issues
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. Phone Calls, Text Messages &amp; TCPA Notice
            </h2>
            <p>
              If you provide a phone number and consent (for example, by
              checking the consent box on our contact forms), you agree that{" "}
              {SITE.name} and its agents may contact you at that number by
              phone call, text message (SMS/MMS), or both, using automated
              dialing technology, prerecorded messages, and/or artificial or
              prerecorded voice where applicable and permitted by law, regarding
              your inquiry and our services.
            </p>
            <p>
              Message and data rates may apply. Message frequency varies.
              Consent is not a condition of purchase. You may opt out of text
              messages at any time by replying <strong className="text-foreground">STOP</strong>{" "}
              (or following other instructions provided in the message). For
              help, reply <strong className="text-foreground">HELP</strong> or
              contact us using the details below. You may also request to be
              removed from our calling or email lists by contacting us.
            </p>
            <p>
              We strive to honor opt-out requests promptly. Carrier filtering
              and delivery of messages are outside our control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              5. Cookies &amp; Similar Technologies
            </h2>
            <p>
              Our site may use cookies, local storage, pixels, and similar
              technologies to operate the site, remember preferences, analyze
              traffic, and measure marketing performance. You can control
              cookies through your browser settings. Disabling cookies may
              affect site functionality.
            </p>
            <p>
              Third-party analytics or advertising partners (if used) may set
              their own cookies subject to their privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              6. Third Parties &amp; Service Providers
            </h2>
            <p>
              We may share information with trusted service providers who assist
              us in operating our business—for example, hosting providers, email
              delivery, form processors, analytics platforms, CRM tools, or
              communications providers. These parties are expected to process
              data only as needed to perform services for us and in accordance
              with applicable law.
            </p>
            <p>
              We may also disclose information if required by law, regulation,
              legal process, or governmental request; to protect the rights,
              property, or safety of {SITE.name}, our clients, or others; or in
              connection with a merger, acquisition, or sale of assets (with
              notice where required).
            </p>
            <p>
              We do not sell your personal information for money. We do not
              share your contact information with unrelated third parties for
              their own independent marketing without your direction or consent,
              except as described in this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              7. Data Retention &amp; Security
            </h2>
            <p>
              We retain personal information only as long as reasonably
              necessary for the purposes described above, including legal,
              accounting, or reporting requirements, unless a longer period is
              required or permitted by law.
            </p>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards designed to protect personal information. No method of
              transmission or storage is 100% secure; we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              8. Your Rights &amp; Choices
            </h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access, correct, or delete personal information we hold</li>
              <li>Opt out of marketing emails, texts, or calls</li>
              <li>
                Request information about categories of data collected or shared
              </li>
              <li>Appeal certain decisions regarding your privacy requests</li>
            </ul>
            <p>
              To exercise these rights or request removal of your data, contact
              us using the information in Section 10. We may need to verify your
              identity before fulfilling a request.
            </p>
            <p>
              California residents and residents of other states with privacy
              laws may have additional rights under applicable statutes (e.g.,
              CCPA/CPRA). We will honor valid requests as required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              9. External Links
            </h2>
            <p>
              Our website may link to third-party sites (including client
              project demos and social profiles). We are not responsible for the
              privacy practices of those sites. Review their policies before
              providing personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              10. Contact Us / Data Removal
            </h2>
            <p>
              For privacy questions, opt-out requests, or to request access,
              correction, or deletion of your personal information, contact:
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li>
                <strong className="text-foreground">{SITE.name}</strong>
              </li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-accent hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href={SITE.phoneHref}
                  className="text-accent hover:underline"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                Website:{" "}
                <Link href="/contact" className="text-accent hover:underline">
                  Contact form
                </Link>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &quot;Effective date&quot; at the top will be revised when changes
              are posted. Continued use of the site after changes constitutes
              acceptance of the updated policy where permitted by law.
            </p>
          </section>
        </div>
      </article>
    </Section>
  );
}
