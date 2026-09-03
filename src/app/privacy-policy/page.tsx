import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Hexagon } from "lucide-react";
import type { ReactNode } from "react";

export default function PrivacyPolicyPage() {
  const companyName = "GenMax IT Solution";
  const email = "genmaxitsolution@gmail.com";
  const phone = "+91 99383 07637";

  const BulletItem = ({ children }: { children: ReactNode }) => (
    <div className="flex items-start gap-4">
      <Hexagon
        size={18}
        strokeWidth={1.8}
        className="mt-1 shrink-0 text-[#F04D02]"
      />

      <p className="text-[15px] leading-[1.9] text-[#666666] sm:text-[16px]">
        {children}
      </p>
    </div>
  );

  const Paragraph = ({ children }: { children: ReactNode }) => (
    <p className="mt-5 text-[15px] leading-[1.9] text-[#666666] sm:text-[16px]">
      {children}
    </p>
  );

  const SectionTitle = ({ children }: { children: ReactNode }) => (
    <h2 className="mt-12 text-[32px] font-normal leading-[1.3] text-[#202A55] sm:text-[40px] lg:text-[44px]">
      {children}
    </h2>
  );

  const SubTitle = ({ children }: { children: ReactNode }) => (
    <h3 className="mt-8 text-[20px] font-semibold text-[#333333] sm:text-[22px]">
      {children}
    </h3>
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:gap-16">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -right-5 -top-8 z-20 h-[105px] w-[105px] rounded-full border-[5px] border-[#F04D02] border-b-transparent border-l-transparent sm:h-[125px] sm:w-[125px]" />

              <div className="relative h-[250px] w-full overflow-hidden sm:h-[320px] md:h-[370px] lg:h-[390px]">
                <Image
                  src="/images/privacy-policy-banner.jpg"
                  alt="Privacy Policy"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />

                <div className="absolute inset-0 bg-black/[0.03]" />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex items-center lg:pl-4">
              <h1 className="text-[38px] font-normal tracking-[-0.5px] text-[#222222] sm:text-[48px] md:text-[54px] lg:text-[58px]">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB ================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-8 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 text-[15px] text-[#777777]">
            <Link
              href="/"
              className="transition-colors hover:text-[#F04D02]"
            >
              Home
            </Link>

            <ChevronRight size={15} className="text-[#888888]" />

            <span className="text-[#777777]">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* ================= PRIVACY POLICY CONTENT ================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-2 sm:px-8 lg:px-10">
          <div className="max-w-[1050px]">
            {/* ================= INTRO ================= */}

            <h2 className="text-[34px] font-normal leading-[1.25] text-[#202A55] sm:text-[42px] lg:text-[46px]">
              Welcome To Our Privacy Policy
            </h2>

            <h3 className="mt-5 text-[28px] font-normal text-[#202A55] sm:text-[34px]">
              Privacy Policy
            </h3>

            <Paragraph>
              <strong className="font-semibold text-[#333333]">
                Company collecting personal data:
              </strong>{" "}
              {companyName} (also referred to as “we,” “us,” or “our”).
            </Paragraph>

            <Paragraph>
              {companyName} respects your privacy and is committed to protecting
              the personal information of our customers, website visitors, and
              users of our services. This Privacy Policy explains how we
              collect, use, store, protect, and disclose information through our
              website and digital services.
            </Paragraph>

            <Paragraph>
              This Privacy Policy applies to information collected through our
              website, contact forms, service inquiries, consultation requests,
              marketing campaigns, and other interactions with {companyName}.
            </Paragraph>

            <Paragraph>
              If you have questions or concerns regarding this Privacy Policy,
              please contact us at{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-[#F04D02] hover:underline"
              >
                {email}
              </a>
              .
            </Paragraph>

            {/* ================= OPT OUT ================= */}

            <SectionTitle>
              Your Opt-Out Rights — How to Opt Out
            </SectionTitle>

            <div id="opt-out" className="scroll-mt-24">
              <Paragraph>
                <strong className="font-semibold text-[#333333]">
                  You can opt out of data collection for advertising, marketing
                  communications, and related tracking practices at any time.
                </strong>{" "}
                {companyName} provides the following clear opt-out
                instructions:
              </Paragraph>

              <h3 className="mt-7 text-[27px] font-normal leading-[1.4] text-[#202A55] sm:text-[32px]">
                1. Opt out of marketing emails and promotional communications
              </h3>

              <div className="mt-5 space-y-4">
                <BulletItem>
                  Click the{" "}
                  <strong className="font-semibold text-[#333333]">
                    “Unsubscribe”
                  </strong>{" "}
                  or{" "}
                  <strong className="font-semibold text-[#333333]">
                    “Opt-out”
                  </strong>{" "}
                  link at the bottom of any promotional email from{" "}
                  {companyName}.
                </BulletItem>

                <BulletItem>
                  Email us at{" "}
                  <a
                    href={`mailto:${email}?subject=Opt-Out%20Request`}
                    className="font-semibold text-[#F04D02] hover:underline"
                  >
                    {email}
                  </a>{" "}
                  with the subject line{" "}
                  <strong className="font-semibold text-[#333333]">
                    “Opt-Out Request”
                  </strong>
                  .
                </BulletItem>
              </div>

              <Paragraph>
                <strong className="font-medium text-[#444444]">
                  Note:
                </strong>{" "}
                You cannot opt out of transactional emails such as invoices,
                order confirmations, account updates, or service notices while
                you remain a customer.
              </Paragraph>

              {/* ================= ADVERTISING OPT OUT ================= */}

              <h3 className="mt-8 text-[27px] font-normal leading-[1.4] text-[#202A55] sm:text-[32px]">
                2. Opt out of advertising cookies, tracking, and personalized
                ads
              </h3>

              <div className="mt-5 space-y-5">
                <BulletItem>
                  <strong className="font-semibold text-[#333333]">
                    Browser settings:
                  </strong>{" "}
                  Block or delete cookies in your browser settings to limit
                  tracking technologies on our websites.
                </BulletItem>

                <BulletItem>
                  <strong className="font-semibold text-[#333333]">
                    Microsoft Advertising / Bing ads:
                  </strong>{" "}
                  Opt out of personalized Microsoft advertising through your
                  Microsoft advertising privacy settings.
                </BulletItem>

                <BulletItem>
                  <strong className="font-semibold text-[#333333]">
                    Google Ads:
                  </strong>{" "}
                  Opt out of personalized Google ads through your Google Ads
                  settings.
                </BulletItem>

                <BulletItem>
                  <strong className="font-semibold text-[#333333]">
                    Industry opt-out tools:
                  </strong>{" "}
                  Network Advertising Initiative (NAI), Digital Advertising
                  Alliance (DAA), and European Interactive Digital Advertising
                  Alliance (EDAA).
                </BulletItem>
              </div>

              {/* ================= DIRECT OPT OUT ================= */}

              <h3 className="mt-10 text-[27px] font-normal leading-[1.4] text-[#202A55] sm:text-[32px]">
                3. Opt out by contacting us directly
              </h3>

              <Paragraph>
                To stop applicable data collection, marketing use, or
                advertising practices related to your personal information,
                contact us at:
              </Paragraph>

              <div className="mt-5 space-y-4">
                <BulletItem>
                  Email:{" "}
                  <a
                    href={`mailto:${email}?subject=Privacy%20Opt-Out`}
                    className="font-medium text-[#F04D02] hover:underline"
                  >
                    {email}
                  </a>
                </BulletItem>

                <BulletItem>
                  Phone:{" "}
                  <a
                    href="tel:+919938307637"
                    className="font-medium text-[#F04D02] hover:underline"
                  >
                    {phone}
                  </a>
                </BulletItem>
              </div>

              <Paragraph>
                Please include your name, email address, and a clear description
                of your opt-out request. We will process valid requests in
                accordance with applicable law.
              </Paragraph>
            </div>

            {/* ================= PURPOSE ================= */}

            <SectionTitle>
              Purpose and Legal Basis for Processing
            </SectionTitle>

            <Paragraph>
              We collect and use personal information for the following
              purposes:
            </Paragraph>

            <div className="mt-6 space-y-5">
              <BulletItem>
                To respond to inquiries, provide consultations, and deliver our
                products and services.
              </BulletItem>

              <BulletItem>
                To process orders, billing, payments, and account
                administration.
              </BulletItem>

              <BulletItem>
                To improve our websites, measure performance, and understand
                how visitors use our pages.
              </BulletItem>

              <BulletItem>
                To send service-related communications and, where permitted,
                marketing and promotional messages.
              </BulletItem>

              <BulletItem>
                To run advertising and marketing campaigns, including measuring
                ad performance and remarketing, through cookies, pixels, and
                similar technologies.
              </BulletItem>

              <BulletItem>
                To comply with legal obligations and protect our rights and
                security.
              </BulletItem>
            </div>

            <Paragraph>
              Where required by applicable Data Privacy Laws, we process
              personal data based on one or more of the following legal bases:
              your consent; performance of a contract or steps taken at your
              request before entering a contract; our legitimate interests; and
              compliance with a legal obligation.
            </Paragraph>

            {/* ================= INFORMATION COLLECTION ================= */}

            <SectionTitle>A) Information Collection</SectionTitle>

            <Paragraph>
              {companyName} collects information from its users at several
              different points on our websites and digital services.
            </Paragraph>

            <SubTitle>1) Registration</SubTitle>

            <Paragraph>
              In order to use {companyName} services at any level, and to access
              certain information or areas of the website, a user may be
              required to complete a registration form. During registration, a
              user may be required to provide contact information such as name,
              telephone number, or an email address.
            </Paragraph>

            <Paragraph>
              We use this information to contact the user about products and
              services available through our websites. It may also be optional
              for customers to provide demographic information so that we can
              offer a more personalized experience.
            </Paragraph>

            <SubTitle>2) Order</SubTitle>

            <Paragraph>
              When a user purchases a product or service, we may request
              information from the user through an order form. A user may need
              to provide contact information such as name, email address, and
              billing address, along with payment information where required.
            </Paragraph>

            <Paragraph>
              This information is used for billing purposes and to fulfill
              customer orders. If we have trouble processing an order, the
              information may be used to contact the user.
            </Paragraph>

            <SubTitle>3) Profile</SubTitle>

            <Paragraph>
              We may store information collected through cookies and log files
              to create a profile of our users and understand their viewing
              preferences. This information helps us improve the content and
              experience of our websites and provide relevant offers and
              services.
            </Paragraph>

            <Paragraph>
              The information used for profiling is not intended to be shared
              with third parties in a personally identifiable form unless
              required for a legitimate business purpose or as otherwise
              described in this Privacy Policy.
            </Paragraph>

            <SubTitle>4) Cookies</SubTitle>

            <Paragraph>
              A cookie is a piece of data stored on the user&apos;s computer or
              device that may be tied to information about the user. We may use
              both session cookies and persistent cookies. Session cookies
              generally expire when users close their browser, while persistent
              cookies remain stored for a longer period of time.
            </Paragraph>

            <Paragraph>
              Cookies can generally be removed or controlled through your
              internet browser settings. By setting a cookie on our site, users
              may not have to enter certain information repeatedly, helping save
              time while using our services.
            </Paragraph>

            <Paragraph>
              If users reject certain cookies, they may still be able to use our
              site, although some features or areas of the website may be
              limited. Persistent cookies may also help us understand user
              interests and improve the experience of our websites.
            </Paragraph>

            {/* ================= TRACKING ================= */}

            <SectionTitle>
              Tracking Technologies, Advertising, and Third-Party Sharing
            </SectionTitle>

            <Paragraph>
              We use cookies, pixels, tags, and similar technologies on our web
              properties to track individual end-user activity, such as pages
              visited, clicks, form submissions, and conversions. These
              technologies help us measure and improve our advertising and
              marketing activities.
            </Paragraph>

            <Paragraph>
              We may share or disclose certain information with third-party
              advertising and analytics partners for advertising and marketing
              purposes, including ad delivery, conversion measurement, audience
              insights, and remarketing.
            </Paragraph>

            <Paragraph>
              These partners may include, without limitation, Google, Microsoft,
              and other analytics or advertising providers that we engage from
              time to time.
            </Paragraph>

            {/* ================= MICROSOFT UET ================= */}

            <SectionTitle>
              Microsoft Advertising and Universal Event Tracking (UET)
            </SectionTitle>

            <Paragraph>
              Our websites may use Microsoft Advertising tools, including
              Microsoft Universal Event Tracking (UET).{" "}
              <strong className="font-semibold text-[#333333]">
                Microsoft may collect or receive personal data from users of our
                websites
              </strong>{" "}
              through these tools.
            </Paragraph>

            <Paragraph>
              This data may include online identifiers such as cookies, IP
              address, device information, browser information, and information
              about how you interact with our pages and advertisements.
            </Paragraph>

            <Paragraph>
              Microsoft may use this information to provide advertising,
              analytics, and related services, as described in Microsoft&apos;s
              applicable privacy practices.
            </Paragraph>

            <Paragraph>
              We also take steps to comply with applicable Microsoft Advertising
              technical safeguards for sensitive data and related advertising
              requirements. We do not intentionally send sensitive personal data
              to Microsoft through UET.
            </Paragraph>

            <SubTitle>5) Log Files</SubTitle>

            <Paragraph>
              Like most websites, our servers may use log files to analyze
              trends, administer the site, track user movement in the aggregate,
              and gather broad demographic information for aggregate use.
              Information such as IP addresses is generally not directly linked
              to personally identifiable information.
            </Paragraph>

            <SubTitle>6) Clear Gifs</SubTitle>

            <Paragraph>
              Clear gifs are tiny graphics with a unique identifier, similar in
              function to cookies, and may be used to track the online movements
              of website users.
            </Paragraph>

            <Paragraph>
              We may also use clear gifs in HTML-based emails to help understand
              whether recipients have opened messages and to evaluate the
              effectiveness of our communications and marketing campaigns.
            </Paragraph>

            {/* ================= CHILDREN'S PRIVACY ================= */}

            <SubTitle>7) Children&apos;s Privacy</SubTitle>

            <Paragraph>
              We do not knowingly collect personal information from children
              under the age of 13. If we learn that we have collected personal
              information from a child under the age of 13, we will take
              reasonable steps to delete that information from our systems.
            </Paragraph>

            <Paragraph>
              We encourage parents and guardians to participate in their
              children&apos;s online activities and help make their online
              experience safer.
            </Paragraph>

            <div className="mt-6 space-y-5">
              <BulletItem>
                Teach children never to provide personal information unless
                supervised by a parent or responsible adult.
              </BulletItem>

              <BulletItem>
                Know which websites your children are visiting and determine
                whether those websites are appropriate for them.
              </BulletItem>

              <BulletItem>
                Review website privacy policies to understand how children&apos;s
                information may be collected and used.
              </BulletItem>
            </div>

            {/* ================= INFORMATION USE ================= */}

            <SectionTitle>
              B) Information Use and Sharing of Information
            </SectionTitle>

            <Paragraph>
              Subject to the legal exceptions described in this Privacy Policy,
              {companyName} will not disclose personal information to third
              parties except as described in this Privacy Policy, required by
              applicable law, or necessary to provide our services.
            </Paragraph>

            <SubTitle>1) Communications from the Site</SubTitle>

            <h3 className="mt-7 text-[19px] font-semibold text-[#333333] sm:text-[21px]">
              a) Special Offers and Updates
            </h3>

            <Paragraph>
              We may send new customers welcome emails and may communicate with
              them regarding our products and services. Visitors who provide
              contact information may receive information about our products,
              special offers, and other promotions.
            </Paragraph>

            <Paragraph>
              Users and visitors may opt out of promotional communications as
              described in the Opt-Out sections of this Privacy Policy.
            </Paragraph>

            <h3 className="mt-7 text-[19px] font-semibold text-[#333333] sm:text-[21px]">
              b) Invoices and Account Statements
            </h3>

            <Paragraph>
              We may send customers emails summarizing order details and
              applicable charges. These emails form part of the purchase and
              service process, and users generally cannot opt out of necessary
              transactional communications while maintaining an active account
              or service.
            </Paragraph>

            <h3 className="mt-7 text-[19px] font-semibold text-[#333333] sm:text-[21px]">
              c) Customer Service
            </h3>

            <Paragraph>
              We communicate with users to provide requested services and
              address issues relating to their accounts. We may reply by email
              or phone, depending on the nature of the request.
            </Paragraph>

            <SubTitle>2) Sharing</SubTitle>

            <h3 className="mt-7 text-[19px] font-semibold text-[#333333] sm:text-[21px]">
              a) Legal Disclaimer
            </h3>

            <Paragraph>
              We may disclose personal information when required by law or when
              we have a good-faith belief that such action is necessary to
              comply with a judicial proceeding, court order, subpoena, legal
              process, or other lawful request.
            </Paragraph>

            <h3 className="mt-7 text-[19px] font-semibold text-[#333333] sm:text-[21px]">
              b) Aggregate Information
            </h3>

            <Paragraph>
              We may share aggregated demographic or statistical information
              with our partners. This information is not intended to identify
              individual users.
            </Paragraph>

            <h3 className="mt-7 text-[19px] font-semibold text-[#333333] sm:text-[21px]">
              c) Third-Party Intermediaries
            </h3>

            <Paragraph>
              We may use third-party service providers, including hosting,
              payment processors, CRM providers, email providers, and analytics
              providers, to help provide our services.
            </Paragraph>

            <h3 className="mt-7 text-[19px] font-semibold text-[#333333] sm:text-[21px]">
              d) Business Transitions
            </h3>

            <Paragraph>
              In the event {companyName} undergoes a business transition, such
              as a merger, acquisition, restructuring, or sale of assets,
              personal information may be among the assets transferred, subject
              to applicable law.
            </Paragraph>

            {/* ================= CHOICE / CONSENT ================= */}

            <SectionTitle>
              C) Choice / Opt-Out / Consent and Privacy Rights
            </SectionTitle>

            <Paragraph>
              <strong className="font-semibold text-[#333333]">
                Clear opt-out instructions are provided at the top of this
                Privacy Policy.
              </strong>{" "}
              Please refer to{" "}
              <a
                href="#opt-out"
                className="font-semibold text-[#F04D02] hover:underline"
              >
                Your Opt-Out Rights — How to Opt Out
              </a>{" "}
              for full details.
            </Paragraph>

            <Paragraph>
              Users and visitors who do not wish to receive promotional
              communications may opt out by clicking the unsubscribe or
              opt-out link included in promotional messages, or by contacting us
              directly.
            </Paragraph>

            <h3 className="mt-8 text-[22px] font-semibold text-[#333333] sm:text-[24px]">
              (i) Giving and withdrawing consent
            </h3>

            <Paragraph>
              Where we rely on your consent to process personal data, you may
              give consent through the relevant form, cookie banner or settings,
              where available, or another clear affirmative action.
            </Paragraph>

            <Paragraph>You may withdraw consent at any time by:</Paragraph>

            <div className="mt-5 space-y-5">
              <BulletItem>
                Using unsubscribe or opt-out links in our emails.
              </BulletItem>

              <BulletItem>
                Adjusting cookie or browser settings to refuse or delete
                cookies.
              </BulletItem>

              <BulletItem>
                Contacting us at{" "}
                <a
                  href={`mailto:${email}?subject=Withdraw%20Consent`}
                  className="font-medium text-[#F04D02] hover:underline"
                >
                  {email}
                </a>{" "}
                and requesting withdrawal of consent.
              </BulletItem>
            </div>

            <h3 className="mt-8 text-[22px] font-semibold text-[#333333] sm:text-[24px]">
              (ii) Opt-out rights including advertising, tracking, and data
              collection
            </h3>

            <div className="mt-5 space-y-5">
              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Marketing emails:
                </strong>{" "}
                Click unsubscribe or opt-out in any promotional email, or
                contact us directly.
              </BulletItem>

              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Cookies / tracking:
                </strong>{" "}
                Block or delete cookies through your browser settings.
              </BulletItem>

              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Microsoft Advertising:
                </strong>{" "}
                Use Microsoft advertising privacy settings.
              </BulletItem>

              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Google Ads:
                </strong>{" "}
                Use Google Ads Settings to manage personalized advertising.
              </BulletItem>

              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Direct request:
                </strong>{" "}
                Contact us at{" "}
                <a
                  href={`mailto:${email}?subject=Privacy%20Opt-Out`}
                  className="font-medium text-[#F04D02] hover:underline"
                >
                  {email}
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+919938307637"
                  className="font-medium text-[#F04D02] hover:underline"
                >
                  {phone}
                </a>
                .
              </BulletItem>
            </div>

            {/* ================= LINKS ================= */}

            <SectionTitle>D) Links</SectionTitle>

            <Paragraph>
              {companyName} websites may contain links to other websites.
              Please be aware that we are not responsible for the privacy
              practices of such third-party websites.
            </Paragraph>

            <Paragraph>
              We encourage users to read the privacy statements of every
              website that collects personally identifiable information.
            </Paragraph>

            <Paragraph>
              This Privacy Policy applies solely to information collected
              through {companyName} websites and services.
            </Paragraph>

            {/* ================= SAFEGUARDS ================= */}

            <SectionTitle>E) Safeguards and Data Retention</SectionTitle>

            <SubTitle>1) User Information</SubTitle>

            <Paragraph>
              {companyName} takes reasonable precautions to protect user
              information. When users submit sensitive information through our
              websites, we take appropriate steps to protect that information
              both online and offline.
            </Paragraph>

            <Paragraph>
              We use appropriate security technologies and safeguards designed
              to protect sensitive information during transmission and storage.
              Access to personal information is limited to authorized persons
              who require it for legitimate business purposes.
            </Paragraph>

            <SubTitle>2) Message Content Handling</SubTitle>

            <Paragraph>
              We may store personal transmissions and communications for a
              limited period and may purge older information when the applicable
              retention period has expired, subject to legal, operational, and
              technical requirements.
            </Paragraph>

            <Paragraph>
              We use industry-standard efforts and technologies, such as
              firewalls and encryption technologies where appropriate, to
              safeguard personal information.
            </Paragraph>

            <Paragraph>
              However, no method of transmission over the internet or electronic
              storage is completely secure. While we take reasonable steps to
              protect information, we cannot guarantee absolute security.
            </Paragraph>

            <SubTitle>3) Data Retention</SubTitle>

            <Paragraph>
              The time period for which we keep information varies according to
              the purpose for which the information is used and applicable legal
              requirements.
            </Paragraph>

            <Paragraph>
              Unless there is a specific legal requirement to keep information,
              we retain personal data for no longer than reasonably necessary
              for the purposes for which it was collected or further processed.
            </Paragraph>

            <h3 className="mt-10 text-[24px] font-semibold leading-[1.4] text-[#202A55] sm:text-[28px]">
              Categories of Personal Data, Recipients, and International
              Transfers
            </h3>

            <Paragraph>
              Depending on how you interact with us, the categories of personal
              data we may collect include identity and contact details, business
              information, billing and payment details, technical and usage
              data, marketing preferences, and communications you send to us.
            </Paragraph>

            <Paragraph>
              Recipients of personal data may include {companyName} service
              providers, such as hosting providers, payment processors, CRM
              providers, email service providers, customer support providers,
              analytics providers, and other authorized business partners.
            </Paragraph>

            <Paragraph>
              Because we may use global service providers, personal data may be
              transferred to and processed in countries other than your country
              of residence. Where required by applicable law, we take
              appropriate safeguards for such transfers.
            </Paragraph>

            {/* ================= SUPPLEMENTATION ================= */}

            <SectionTitle>F) Supplementation of Information</SectionTitle>

            <Paragraph>
              In order to properly fulfill our obligations to users and better
              understand customer needs, it may be necessary to supplement
              information we receive with information obtained from third-party
              sources.
            </Paragraph>

            <Paragraph>
              Information obtained from third-party sources is handled in a
              manner consistent with this Privacy Policy and applicable law.
            </Paragraph>

            {/* ================= CORRECTING INFORMATION ================= */}

            <SectionTitle>
              G) Correcting, Updating, Deleting, or Deactivating Personal
              Information
            </SectionTitle>

            <Paragraph>
              If a user&apos;s personally identifiable information changes, such
              as their phone number, email address, or postal address, users may
              contact us to request correction or updating of their information.
            </Paragraph>

            <Paragraph>
              If a user no longer desires our service, they may request deletion
              or deactivation of applicable personal information, subject to
              legal, contractual, and operational requirements.
            </Paragraph>

            <Paragraph>
              To make a request regarding your personal information, please
              contact us at{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-[#F04D02] hover:underline"
              >
                {email}
              </a>
              .
            </Paragraph>

            {/* ================= NOTIFICATION OF CHANGES ================= */}

            <SectionTitle>H) Notification of Changes</SectionTitle>

            <Paragraph>
              If we decide to change this Privacy Policy, we will post those
              changes on this page and in other places we consider appropriate,
              so that users remain aware of what information we collect, how we
              use it, and under what circumstances we may disclose it.
            </Paragraph>

            <Paragraph>
              We will generally use information in accordance with the Privacy
              Policy under which the information was collected, unless otherwise
              permitted or required by applicable law.
            </Paragraph>

            {/* ================= DATA PROTECTION ================= */}

            <SectionTitle>Data Protection and Security</SectionTitle>

            <Paragraph>
              We take reasonable administrative, technical, and organizational
              measures to help protect personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </Paragraph>

            <Paragraph>
              However, no method of transmission over the internet or electronic
              storage is completely secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </Paragraph>

            {/* ================= CONTACT ================= */}

            <SectionTitle>Contact Us</SectionTitle>

            <Paragraph>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact {companyName}.
            </Paragraph>

            <div className="mt-6 space-y-4">
              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Company:
                </strong>{" "}
                {companyName}
              </BulletItem>

              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Address:
                </strong>{" "}
                Sec-45, Delhi NCR, India – 201301, C3M Aneja Market, Sadarpur
              </BulletItem>

              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Phone:
                </strong>{" "}
                <a
                  href="tel:+919938307637"
                  className="text-[#F04D02] hover:underline"
                >
                  {phone}
                </a>
              </BulletItem>

              <BulletItem>
                <strong className="font-semibold text-[#333333]">
                  Email:
                </strong>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-[#F04D02] hover:underline"
                >
                  {email}
                </a>
              </BulletItem>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}