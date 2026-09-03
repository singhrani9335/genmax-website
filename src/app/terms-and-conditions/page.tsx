"use client";

import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-700">
      {/* ==================== HERO ==================== */}
      <section className="relative h-[350px] w-full overflow-hidden md:h-[420px] lg:h-[460px]">
        <Image
          src="/images/terms-and-conditions-banner.jpg"
          alt="Terms and Conditions - GenMax IT Solution"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Hero Heading */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold leading-tight drop-shadow-lg md:text-5xl lg:text-6xl">
              <span className="text-white">Terms </span>

              <span className="bg-gradient-to-r from-[#F04D02] to-[#FE8302] bg-clip-text text-transparent">
                and Conditions
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold md:text-base">
            <Link
              href="/"
              className="font-bold text-gray-500 transition-colors hover:text-[#F04D02]"
            >
              Home
            </Link>

            <span className="font-bold text-gray-300">&gt;</span>

            <span className="font-bold text-[#171717]">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>

      {/* ==================== TERMS CONTENT ==================== */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          {/* ==================== MAIN HEADING ==================== */}
          <div className="mb-9">
            <h2 className="text-3xl font-bold tracking-tight text-[#171717] md:text-4xl">
              Terms and Conditions
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#F04D02] to-[#FE8302]" />
          </div>

          {/* ==================== INTRODUCTION ==================== */}
          <div className="text-[15px] leading-7 text-gray-600 md:text-base">
            <p>
              GenMax IT Solution does not have any hidden terms and
              conditions. GenMax IT Solution provides a legal contract
              to you with all the applicable terms and conditions.
              Limited reclamation period and refund rights may apply
              according to the selected service or project and the
              signed terms and conditions. The right to ask for a
              refund, where applicable, will be governed by the agreed
              terms and conditions and the applicable reclamation period
              starting from the date of purchase. If you feel that
              GenMax IT Solution has not provided the correct work, has
              completed work incorrectly, or has provided unwanted work
              contrary to the selected service and signed terms and
              conditions, you may contact us regarding the applicable
              refund rights. Third-party charges such as plugins,
              integrations, shipping charges, or other third-party
              services may be non-refundable. Tax refunds, where
              applicable, depend on the relevant laws, regulations, and
              circumstances. Like many other websites, GenMax IT
              Solution may make use of log files. The information inside
              the log files may include Internet Protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and
              time stamps, referring and exit pages, and number of
              clicks. This information may be used to analyze trends,
              administer the website, track website activity, and gather
              general demographic information. IP addresses and similar
              technical information are not intentionally linked to
              personally identifiable information for these analytical
              purposes.
            </p>
          </div>

          {/* ==================== REMEMBER ==================== */}
          <div className="mt-11 border-t border-gray-200 pt-9">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Remember
            </h3>

            <p className="text-[15px] leading-7 text-gray-600 md:text-base">
              This clause may not be applicable to customers who
              belong to specific states or jurisdictions where
              limitations of refund rights are not permitted by
              applicable law. Any other valid refund right will not be
              affected by this clause. GenMax IT Solution follows
              applicable laws and regulations of the jurisdictions in
              which it provides its services.
            </p>
          </div>

          {/* ==================== CONCEPT ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Concept
            </h3>

            <p className="text-[15px] leading-7 text-gray-600 md:text-base">
              Certain terms defined in these Terms and Conditions may
              also be used in the Privacy Policy and are incorporated
              by reference into these Terms and Conditions where
              applicable.
            </p>
          </div>

          {/* ==================== COMPONENTS OR SERVICE ==================== */}
          <div className="mt-11">
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Components or Service
            </h3>

            <div className="space-y-7">
              {/* Content */}
              <div>
                <h4 className="mb-2 text-lg font-bold text-[#F04D02]">
                  Content
                </h4>

                <p className="text-[15px] leading-7 text-gray-600 md:text-base">
                  Software, materials, services, content, and other
                  related information provided by GenMax IT Solution
                  are collectively referred to as the applicable
                  content or service.
                </p>
              </div>

              {/* You */}
              <div>
                <h4 className="mb-2 text-lg font-bold text-[#F04D02]">
                  You
                </h4>

                <p className="text-[15px] leading-7 text-gray-600 md:text-base">
                  “You” means you individually, any customer, client,
                  user, subscriber, or any person acting on behalf of
                  an employer or organization.
                </p>
              </div>

              {/* Selective Service */}
              <div>
                <h4 className="mb-2 text-lg font-bold leading-7 text-[#F04D02]">
                  Selective or Single Service or Project
                </h4>

                <div className="space-y-3 text-[15px] leading-7 text-gray-600 md:text-base">
                  <p>
                    A selective or single service or project provided
                    by GenMax IT Solution will be considered refundable
                    or non-refundable according to the signed terms and
                    conditions and applicable agreement. Services may
                    be non-upgradable unless otherwise agreed in
                    writing. If work is delayed due to GenMax IT
                    Solution, applicable remedies will be determined
                    according to the signed terms and conditions. If
                    the same situation or incident occurs due to a
                    client, customer, or “You” after the contract has
                    been signed, deadline-extension charges may apply
                    according to the applicable agreement.
                  </p>

                  <p>
                    GenMax IT Solution may provide complimentary
                    services such as images, written content, videos,
                    or graphics for website development and designing.
                    Refund or separate payment may not be applicable to
                    complimentary content unless otherwise agreed.
                    Complimentary services may be suspended, stopped,
                    or become chargeable where permitted under the
                    signed terms and conditions. The client or customer
                    will be informed where applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== MATERIALS ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Materials
            </h3>

            <p className="text-[15px] leading-7 text-gray-600 md:text-base">
              Any material, downloadable content, website image,
              graphic, written content, or other creative material
              produced or provided by GenMax IT Solution may constitute
              in-house or commissioned work. Claims concerning the
              ownership, use, reproduction, or distribution of such
              materials will be governed by the applicable agreement
              and intellectual property laws.
            </p>
          </div>

          {/* ==================== PAYMENT PROCESS ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Payment Process
            </h3>

            <div className="space-y-3 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                Payment for a selective or single service or project is
                applicable after the customer or client provides consent
                and agrees to the applicable terms and conditions. Any
                applicable refund will be processed according to the
                signed agreement. All payments are generally required
                before the start of support or service unless otherwise
                agreed in writing by GenMax IT Solution or stated in the
                signed contract.
              </p>

              <p>
                Failure to make required payments may result in
                suspension or termination of the applicable service or
                contract. Payments made after an agreed deadline may be
                subject to additional charges where specified in the
                applicable agreement.
              </p>
            </div>
          </div>

          {/* ==================== BILLING PROCESS ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Billing Process
            </h3>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                All bills and invoices issued by GenMax IT Solution may
                be electronic or computer-generated. A physical stamp or
                handwritten signature is not necessarily required unless
                required by applicable law or the relevant agreement.
              </p>

              <p>
                When providing credit card information or authorizing
                another payment method, you authorize the applicable
                payment provider or financial institution to process
                the approved payment.
              </p>

              <p>
                All payment transactions are subject to the terms and
                conditions of the applicable bank, credit card issuer,
                debit card provider, payment gateway, or financial
                institution.
              </p>
            </div>
          </div>

          {/* ==================== RENEWAL PROCESS ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Renewal Process
            </h3>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                GenMax IT Solution may provide renewal or extension
                options for applicable services. Where an agreement
                provides for renewal, the renewal will be governed by
                the terms specified in the existing contract.
              </p>

              <p>
                If you wish to change the terms of the contract, modify
                the service, or cancel a renewal, you should contact
                GenMax IT Solution before the applicable renewal date.
              </p>
            </div>
          </div>

          {/* ==================== TERMINATION ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Termination of Policy or Contract
            </h3>

            <p className="text-[15px] leading-7 text-gray-600 md:text-base">
              The services provided by GenMax IT Solution are subject
              to applicable fair-use requirements and the terms of the
              signed agreement. Suspension or termination of a service
              or contract may apply where permitted by the agreement or
              applicable law.
            </p>
          </div>

          {/* ==================== FRAUDULENT CONTRACT ==================== */}
          <div className="mt-9 rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h4 className="mb-3 text-xl font-bold text-[#171717] md:text-2xl">
              The Contract is Fraudulent
            </h4>

            <div className="space-y-3 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                If it is found that a customer, client, or “You” has
                caused harmful, fraudulent, unlawful, abusive, or
                deceptive activity relating to the contract or GenMax
                IT Solution, the applicable contract or terms and
                conditions may be suspended, terminated, or otherwise
                handled in accordance with the signed agreement and
                applicable law.
              </p>

              <p>
                Refund eligibility, where applicable, will be determined
                according to the signed terms and conditions and
                applicable law. Temporary suspension may occur due to
                contractual, legal, security, or other applicable
                circumstances.
              </p>
            </div>
          </div>

          {/* ==================== PRIVACY & COOKIES ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Privacy and Cookies
            </h3>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                As soon as you visit and use the GenMax IT Solution
                website, the applicable Privacy Policy and Cookie Policy
                may apply. You are required to review the applicable
                policies carefully.
              </p>

              <p>
                Information voluntarily disclosed to GenMax IT Solution
                through telephone conversations, email, website forms,
                or other communication channels may be processed for
                customer service, business operations, support, and
                other lawful purposes.
              </p>
            </div>
          </div>

          {/* ==================== TECHNICAL INFORMATION ==================== */}
          <div className="mt-11">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Technical and Support Information
            </h3>

            <p className="mb-4 text-[15px] leading-7 text-gray-600 md:text-base">
              When providing authorized technical support or using
              diagnostic tools, certain technical information may be
              transferred or collected for analysis, troubleshooting,
              security, or support purposes, including:
            </p>

            <ul className="space-y-2.5 pl-5 text-[15px] leading-7 text-gray-600 md:text-base">
              <li className="list-disc">
                The number of files scanned, threats found, and files
                fixed by the applicable support tool.
              </li>

              <li className="list-disc">
                Whether a firewall is active.
              </li>

              <li className="list-disc">
                Whether antivirus software is active and updated.
              </li>

              <li className="list-disc">
                General system information related to the operating
                system, memory, disk space, and proxy configuration.
              </li>

              <li className="list-disc">
                Security status and available security threats.
              </li>

              <li className="list-disc">
                Installed programs and active processes where required
                for authorized technical support.
              </li>

              <li className="list-disc">
                Relevant application log information and technical
                diagnostic data.
              </li>
            </ul>
          </div>

          {/* ==================== DATA PROTECTION ==================== */}
          <div className="mt-11">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Data Protection and Security
            </h3>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                Information handled by GenMax IT Solution will be
                processed according to applicable privacy and data
                protection requirements and the GenMax IT Solution
                Privacy Policy.
              </p>

              <p>
                GenMax IT Solution takes reasonable measures to protect
                information handled through its services. However, no
                internet-based service can guarantee absolute security.
                Customers and users are responsible for maintaining
                appropriate security on their own devices, accounts,
                browsers, and networks.
              </p>
            </div>
          </div>

          {/* ==================== THIRD PARTY ==================== */}
          <div className="mt-11">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
              Third Party Products and Services
            </h3>

            <div className="space-y-3 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                GenMax IT Solution may use third-party tools and
                services such as Google products, plugins, WordPress,
                Microsoft services, APIs, payment gateways, analytics
                tools, hosting services, and other third-party
                technologies. Customers and users are expected to
                follow the terms, conditions, privacy policies, and
                licensing requirements of applicable third-party tools
                and services.
              </p>

              <p>
                GenMax IT Solution may use third-party services to help
                provide certain services. If you request that a
                third-party service be stopped or removed, an
                alternative service may require a separate agreement,
                additional development, or additional payment.
                Third-party products and services may have their own
                interfaces, data practices, security measures, and
                policies. GenMax IT Solution is not responsible for
                independent changes, interruptions, security incidents,
                or data practices caused directly by third-party
                providers, subject to applicable law and the terms of
                the relevant agreement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}