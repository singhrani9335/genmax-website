import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  UserCheck,
  Cookie,
  Mail,
  FileText,
  Database,
  Globe2,
  Eye,
  CheckCircle2,
  ArrowRight,
  CircleHelp,
  Scale,
  RefreshCw,
  ChevronRight,
  Sparkles,
  Shield,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#555555]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-28 top-10 h-[430px] w-[430px] rounded-full bg-[#F04D02]/[0.035]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[280px] w-[280px] rounded-full bg-[#202A55]/[0.025]" />

        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid min-h-[520px] grid-cols-1 items-center gap-12 py-10 md:grid-cols-[1.55fr_1fr] md:gap-14 lg:py-14">
            {/* IMAGE */}
            <div className="relative h-[330px] w-full sm:h-[390px] lg:h-[420px]">
              {/* Orange arc */}
              <div className="absolute -right-4 -top-8 z-0 h-[155px] w-[155px] rounded-full border-[6px] border-[#F04D02] border-b-transparent border-l-transparent sm:h-[175px] sm:w-[175px]" />

              {/* Navy small circle */}
              <div className="absolute -bottom-1 -left-4 z-20 h-[76px] w-[76px] rounded-full border-[3px] border-[#202A55]/15 bg-white sm:h-[88px] sm:w-[88px]" />

              {/* Image */}
              <div className="absolute left-0 top-[45px] z-10 h-[275px] w-full overflow-hidden rounded-[4px] shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:top-[55px] sm:h-[330px] lg:h-[365px]">
                <Image
                  src="/images/privacy-policy-banner.jpg"
                  alt="Genmax IT Solution Privacy Policy"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-[#F04D02]/10" />

                {/* Image badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-[4px] bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F04D02]/10">
                    <ShieldCheck
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#F04D02]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#202A55]">
                      Privacy First
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#777777]">
                      Your information matters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="relative z-20 md:pl-2 lg:pl-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#F04D02]" />
                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#F04D02]">
                  Genmax IT Solution
                </span>
              </div>

              <h1 className="text-[44px] font-normal leading-[1.04] tracking-[-2px] text-[#222222] sm:text-[52px] lg:text-[62px]">
                Privacy
                <br />
                <span className="text-[#202A55]">Policy</span>
              </h1>

              <div className="mt-6 h-[3px] w-[62px] bg-gradient-to-r from-[#F04D02] to-[#FE8302]" />

              <p className="mt-7 max-w-[470px] text-[15px] leading-[1.9] text-[#666666] sm:text-[16px]">
                At Genmax IT Solution, we respect your privacy and are
                committed to protecting the information you share with us.
                Learn how we collect, use, protect, and manage your
                information.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#EEEEEE] bg-[#FAFAFA] px-4 py-2.5 text-[11px] font-medium text-[#555555]">
                  <ShieldCheck size={16} className="text-[#F04D02]" />
                  Transparent
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#EEEEEE] bg-[#FAFAFA] px-4 py-2.5 text-[11px] font-medium text-[#555555]">
                  <LockKeyhole size={16} className="text-[#F04D02]" />
                  Secure
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#EEEEEE] bg-[#FAFAFA] px-4 py-2.5 text-[11px] font-medium text-[#555555]">
                  <UserCheck size={16} className="text-[#F04D02]" />
                  Responsible
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <section className="border-y border-[#EEEEEE] bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1240px] px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-2.5 text-[12px] sm:text-[13px]">
            <Link
              href="/"
              className="text-[#777777] transition-colors duration-300 hover:text-[#F04D02]"
            >
              Home
            </Link>

            <ChevronRight size={14} className="text-[#BBBBBB]" />

            <span className="font-semibold text-[#202A55]">
              Privacy Policy
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVACY PROMISE CARDS
      ========================================================= */}
      <section className="relative z-20 -mt-1 bg-white">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[5px] border border-[#EEEEEE] bg-white shadow-[0_15px_55px_rgba(0,0,0,0.07)] sm:grid-cols-3">
            <PrivacyCard
              icon={<ShieldCheck size={23} strokeWidth={1.5} />}
              title="Privacy Focused"
              text="We respect and responsibly handle the information you share."
            />

            <PrivacyCard
              icon={<LockKeyhole size={23} strokeWidth={1.5} />}
              title="Data Protection"
              text="Reasonable safeguards help protect your personal information."
            />

            <PrivacyCard
              icon={<UserCheck size={23} strokeWidth={1.5} />}
              title="Your Choices"
              text="You have choices regarding marketing, cookies, and information."
              last
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_285px] lg:gap-20">
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div className="min-w-0">
              {/* INTRO */}
              <section className="mb-16">
                <SectionEyebrow text="Privacy & Data Protection" />

                <h2 className="mt-4 max-w-[850px] text-[31px] font-normal leading-[1.18] tracking-[-0.8px] text-[#202A55] sm:text-[36px] lg:text-[40px]">
                  Welcome To Our Privacy Policy
                </h2>

                <div className="mt-5 h-[3px] w-[58px] bg-gradient-to-r from-[#F04D02] to-[#FE8302]" />

                <p className="content-text mt-7">
                  <strong className="font-semibold text-[#222222]">
                    Company collecting personal data:
                  </strong>{" "}
                  Genmax IT Solution (also referred to as “we,” “us,” or
                  “our”).
                </p>

                <p className="content-text">
                  Genmax IT Solution respects your privacy and is committed to
                  protecting the personal information of our customers, website
                  visitors, and users of our services. This Privacy Policy
                  explains how we collect, use, store, protect, and disclose
                  information through our website and digital services.
                </p>

                <p className="content-text">
                  This Privacy Policy applies to information collected through
                  our website, contact forms, service inquiries, consultation
                  requests, marketing campaigns, and other interactions with
                  Genmax IT Solution.
                </p>

                <div className="mt-8 rounded-[5px] border border-[#F04D02]/15 bg-[#F04D02]/[0.035] p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10">
                      <Eye
                        size={20}
                        strokeWidth={1.6}
                        className="text-[#F04D02]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[16px] font-semibold text-[#202A55]">
                        Our Privacy Commitment
                      </h3>

                      <p className="mt-1.5 text-[14px] leading-[1.8] text-[#666666]">
                        We aim to be transparent about the information we
                        collect, why we use it, and the reasonable steps we
                        take to protect the information entrusted to us.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="content-text mt-7">
                  If you have any questions or concerns regarding this Privacy
                  Policy, please contact Genmax IT Solution through the contact
                  details provided on our website.
                </p>
              </section>

              {/* =====================================================
                  PRIVACY SECTIONS
              ===================================================== */}
              <div className="space-y-16">
                {/* YOUR OPT OUT RIGHTS */}
                <PolicySection
                  number="01"
                  title="Your Opt-Out Rights — How to Opt Out"
                  icon={<UserCheck size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    <strong className="font-semibold text-[#222222]">
                      You can opt out of marketing communications and
                      applicable advertising or tracking activities at any
                      time.
                    </strong>{" "}
                    You may use the following options:
                  </p>

                  <SubTitle
                    number="01"
                    icon={<Mail size={17} />}
                    title="Marketing Emails"
                  />

                  <BulletList
                    items={[
                      'Click the "Unsubscribe" link included in promotional emails.',
                      "Contact Genmax IT Solution and request to stop receiving promotional communications.",
                    ]}
                  />

                  <InfoBox
                    icon={<Mail size={20} strokeWidth={1.5} />}
                    title="Important Note"
                    text="You may still receive essential service-related communications such as account updates, service notifications, invoices, or security messages."
                  />

                  <SubTitle
                    number="02"
                    icon={<Cookie size={17} />}
                    title="Cookies and Tracking"
                  />

                  <BulletList
                    items={[
                      "Block or delete cookies through your browser settings.",
                      "Adjust your browser privacy settings to limit tracking.",
                      "Disable personalized advertising through applicable advertising platform settings.",
                    ]}
                  />

                  <SubTitle
                    number="03"
                    icon={<Mail size={17} />}
                    title="Direct Request"
                  />

                  <p className="content-text">
                    If you wish to opt out of applicable marketing
                    communications or request changes to your personal
                    information, please contact Genmax IT Solution through the
                    contact information available on our website.
                  </p>
                </PolicySection>

                {/* PURPOSE */}
                <PolicySection
                  number="02"
                  title="Purpose and Legal Basis for Processing"
                  icon={<Scale size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Genmax IT Solution may collect and process personal
                    information for the following purposes:
                  </p>

                  <BulletList
                    items={[
                      "To respond to inquiries and requests submitted through our website.",
                      "To provide information about our IT and digital solutions.",
                      "To provide quotations, consultations, and requested services.",
                      "To manage customer accounts and business relationships.",
                      "To improve our website, services, and user experience.",
                      "To communicate service updates and important notifications.",
                      "To send marketing communications where permitted by applicable law.",
                      "To measure website performance and marketing effectiveness.",
                      "To prevent fraud, abuse, and security threats.",
                      "To comply with applicable legal and regulatory requirements.",
                    ]}
                  />

                  <p className="content-text">
                    Where applicable privacy laws require a legal basis for
                    processing, Genmax IT Solution may rely on user consent,
                    contractual necessity, legitimate interests, or compliance
                    with legal obligations.
                  </p>
                </PolicySection>

                {/* INFORMATION COLLECTION */}
                <PolicySection
                  number="03"
                  title="Information Collection"
                  icon={<Database size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Genmax IT Solution may collect information that users
                    voluntarily provide through website forms, service
                    inquiries, consultation requests, quotation forms, and
                    other interactions with our website.
                  </p>

                  <SubTitle
                    number="01"
                    icon={<UserCheck size={17} />}
                    title="Contact Information"
                  />

                  <p className="content-text">
                    Depending on the interaction, we may collect information
                    such as your name, email address, telephone number, company
                    name, business details, and information included in your
                    message or inquiry.
                  </p>

                  <SubTitle
                    number="02"
                    icon={<FileText size={17} />}
                    title="Service Inquiries"
                  />

                  <p className="content-text">
                    When you request information about our services, we may
                    collect the details necessary to understand your
                    requirements and respond to your request.
                  </p>

                  <SubTitle
                    number="03"
                    icon={<Database size={17} />}
                    title="Website Usage Information"
                  />

                  <p className="content-text">
                    We may automatically collect technical information such as
                    IP address, browser type, device type, operating system,
                    pages visited, referring pages, approximate location, and
                    website interaction information.
                  </p>

                  <SubTitle
                    number="04"
                    icon={<Cookie size={17} />}
                    title="Cookies"
                  />

                  <p className="content-text">
                    Our website may use cookies and similar technologies to
                    improve functionality, remember preferences, understand
                    website usage, analyze traffic, and improve our services.
                  </p>

                  <p className="content-text">
                    Cookies may be session-based or persistent. You can control
                    or remove cookies through your browser settings. Disabling
                    certain cookies may affect some website functionality.
                  </p>
                </PolicySection>

                {/* TRACKING */}
                <PolicySection
                  number="04"
                  title="Tracking Technologies, Advertising, and Analytics"
                  icon={<Globe2 size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Genmax IT Solution may use cookies, pixels, tags, analytics
                    tools, and similar technologies to understand website
                    usage, measure conversions, improve campaigns, and provide
                    relevant advertising.
                  </p>

                  <p className="content-text">
                    These technologies may collect information such as browser
                    information, device information, IP address, pages visited,
                    clicks, forms submitted, and interactions with
                    advertisements.
                  </p>

                  <p className="content-text">
                    Third-party service providers may process information on
                    our behalf for analytics, advertising, hosting, customer
                    support, or other business purposes.
                  </p>

                  <SubTitle
                    number="05"
                    icon={<UserCheck size={17} />}
                    title="Children’s Privacy"
                  />

                  <p className="content-text">
                    Our services are not directed toward children. Genmax IT
                    Solution does not knowingly collect personal information
                    from children under the age required by applicable privacy
                    laws.
                  </p>

                  <p className="content-text">
                    If we become aware that personal information has been
                    collected from a child in violation of applicable law, we
                    will take reasonable steps to delete such information.
                  </p>
                </PolicySection>

                {/* INFORMATION USE */}
                <PolicySection
                  number="05"
                  title="Information Use and Sharing"
                  icon={<ShareIcon />}
                >
                  <p className="content-text">
                    Genmax IT Solution uses collected information only for
                    legitimate business purposes, including providing
                    services, responding to inquiries, improving our website,
                    communicating with customers, and complying with applicable
                    laws.
                  </p>

                  <SubTitle
                    number="01"
                    icon={<Mail size={17} />}
                    title="Communications"
                  />

                  <SubTitle
                    letter="a"
                    icon={<CheckCircle2 size={17} />}
                    title="Service Communications"
                  />

                  <p className="content-text">
                    We may contact you regarding your inquiry, quotation,
                    consultation, project, account, service request, or other
                    business relationship with Genmax IT Solution.
                  </p>

                  <SubTitle
                    letter="b"
                    icon={<Sparkles size={17} />}
                    title="Marketing Communications"
                  />

                  <p className="content-text">
                    Where permitted by law and where appropriate consent has
                    been obtained, we may send information about our services,
                    offers, updates, or other promotional communications. You
                    may opt out of marketing communications at any time.
                  </p>

                  <SubTitle
                    letter="c"
                    icon={<CircleHelp size={17} />}
                    title="Customer Support"
                  />

                  <p className="content-text">
                    We may use your contact information to respond to support
                    requests, questions, and other communications.
                  </p>

                  <SubTitle
                    number="02"
                    icon={<Globe2 size={17} />}
                    title="Sharing"
                  />

                  <SubTitle
                    letter="a"
                    icon={<Database size={17} />}
                    title="Service Providers"
                  />

                  <p className="content-text">
                    We may share information with trusted service providers
                    who help us operate our website, provide hosting,
                    analytics, email, customer support, payment processing,
                    security, or other business services.
                  </p>

                  <SubTitle
                    letter="b"
                    icon={<Scale size={17} />}
                    title="Legal Requirements"
                  />

                  <p className="content-text">
                    We may disclose personal information where required by law,
                    regulation, court order, legal process, or governmental
                    request, or where necessary to protect our rights,
                    property, users, or security.
                  </p>

                  <SubTitle
                    letter="c"
                    icon={<RefreshCw size={17} />}
                    title="Business Transactions"
                  />

                  <p className="content-text">
                    If Genmax IT Solution is involved in a merger, acquisition,
                    restructuring, financing, sale of assets, or similar
                    business transaction, personal information may be
                    transferred as part of that transaction, subject to
                    applicable law.
                  </p>
                </PolicySection>

                {/* RIGHTS */}
                <PolicySection
                  number="06"
                  title="Privacy Rights and Choices"
                  icon={<UserCheck size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Depending on your location and applicable privacy laws, you
                    may have rights relating to your personal information,
                    including the right to access, correct, delete, restrict,
                    or object to certain processing activities.
                  </p>

                  <BulletList
                    items={[
                      "The right to request access to personal information.",
                      "The right to request correction of inaccurate information.",
                      "The right to request deletion where legally applicable.",
                      "The right to request restriction of certain processing.",
                      "The right to object to certain processing activities.",
                      "The right to withdraw consent where applicable.",
                    ]}
                  />

                  <SubTitle
                    icon={<CheckCircle2 size={17} />}
                    title="Giving and Withdrawing Consent"
                  />

                  <p className="content-text">
                    Where Genmax IT Solution relies on your consent, you may
                    withdraw that consent at any time by using available
                    unsubscribe options, changing your browser or cookie
                    settings, or contacting us.
                  </p>

                  <p className="content-text">
                    Withdrawal of consent does not affect the lawfulness of
                    processing that occurred before consent was withdrawn.
                  </p>
                </PolicySection>

                {/* THIRD PARTY LINKS */}
                <PolicySection
                  number="07"
                  title="Third-Party Links"
                  icon={<ArrowRight size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Our website may contain links to third-party websites or
                    services. Genmax IT Solution is not responsible for the
                    privacy practices, content, or security of third-party
                    websites.
                  </p>

                  <p className="content-text">
                    We encourage users to review the privacy policies of any
                    third-party websites they visit.
                  </p>
                </PolicySection>

                {/* SECURITY */}
                <PolicySection
                  number="08"
                  title="Security and Data Retention"
                  icon={<LockKeyhole size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Genmax IT Solution takes reasonable technical and
                    organizational measures to protect personal information
                    against unauthorized access, disclosure, alteration, loss,
                    or destruction.
                  </p>

                  <InfoBox
                    icon={<LockKeyhole size={20} strokeWidth={1.5} />}
                    title="Important Security Notice"
                    text="No method of transmission over the Internet or method of electronic storage is completely secure. Therefore, we cannot guarantee absolute security."
                  />

                  <SubTitle
                    icon={<Database size={17} />}
                    title="Data Retention"
                  />

                  <p className="content-text">
                    We retain personal information only for as long as
                    reasonably necessary to fulfill the purposes for which it
                    was collected, provide services, maintain business
                    records, resolve disputes, enforce agreements, and comply
                    with legal obligations.
                  </p>
                </PolicySection>

                {/* DATA CATEGORIES */}
                <PolicySection
                  number="09"
                  title="Categories of Personal Data"
                  icon={<Database size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Depending on how you interact with us, we may collect
                    categories of information including identity information,
                    contact information, company or business information,
                    service requirements, technical information, website usage
                    information, marketing preferences, and communications you
                    send to us.
                  </p>

                  <p className="content-text">
                    Personal information may be processed by Genmax IT
                    Solution, trusted service providers, technology providers,
                    analytics providers, advertising partners, professional
                    advisers, or authorities where required by law.
                  </p>
                </PolicySection>

                {/* INTERNATIONAL */}
                <PolicySection
                  number="10"
                  title="International Data Transfers"
                  icon={<Globe2 size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Depending on the location of our customers, service
                    providers, and technology infrastructure, personal
                    information may be processed or stored in countries outside
                    your country of residence.
                  </p>

                  <p className="content-text">
                    Where required by applicable law, Genmax IT Solution will
                    take reasonable steps to ensure appropriate safeguards are
                    in place for international transfers of personal
                    information.
                  </p>
                </PolicySection>

                {/* CORRECTING */}
                <PolicySection
                  number="11"
                  title="Correcting, Updating, or Deleting Personal Information"
                  icon={<RefreshCw size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    If your personal information changes or you believe that
                    information we hold about you is inaccurate, you may contact
                    Genmax IT Solution and request that the information be
                    corrected or updated.
                  </p>

                  <p className="content-text">
                    Where permitted by applicable law, you may also request
                    deletion or restriction of your personal information.
                  </p>
                </PolicySection>

                {/* CHANGES */}
                <PolicySection
                  number="12"
                  title="Changes to This Privacy Policy"
                  icon={<RefreshCw size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    Genmax IT Solution may update this Privacy Policy from time
                    to time to reflect changes in our services, technology,
                    legal requirements, or business practices.
                  </p>

                  <p className="content-text">
                    When changes are made, the updated Privacy Policy will be
                    published on this page. We encourage you to review this
                    page periodically to stay informed about how we protect
                    your information.
                  </p>
                </PolicySection>

                {/* CONTACT */}
                <PolicySection
                  number="13"
                  title="Contact Us"
                  icon={<Mail size={19} strokeWidth={1.5} />}
                >
                  <p className="content-text">
                    If you have any questions, concerns, requests, or
                    complaints regarding this Privacy Policy or the way Genmax
                    IT Solution handles your personal information, please
                    contact us through the contact information provided on our
                    website.
                  </p>

                  {/* PREMIUM CONTACT BOX */}
                  <div className="relative mt-8 overflow-hidden rounded-[5px] bg-[#202A55] p-7 sm:p-9">
                    <div className="pointer-events-none absolute -right-14 -top-14 h-[180px] w-[180px] rounded-full border border-white/10" />

                    <div className="pointer-events-none absolute -bottom-16 -left-16 h-[150px] w-[150px] rounded-full bg-[#F04D02]/10" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F04D02] text-white">
                          <Mail size={21} strokeWidth={1.5} />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#F04D02]">
                            Get In Touch
                          </p>

                          <h3 className="mt-1 text-[22px] font-normal text-white sm:text-[26px]">
                            Have a privacy-related question?
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 max-w-[680px] text-[14px] leading-[1.85] text-white/70 sm:text-[15px]">
                        Our team is available to help with questions regarding
                        your personal information, privacy choices, or this
                        Privacy Policy.
                      </p>

                      <Link
                        href="/contact"
                        className="group mt-6 inline-flex h-[48px] items-center gap-3 rounded-[3px] bg-[#F04D02] px-6 text-[11px] font-bold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-[#FE8302]"
                      >
                        Contact Us
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </PolicySection>
              </div>

              {/* LAST UPDATED */}
              <div className="mt-16 border-t border-[#EAEAEA] pt-7">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[13px] leading-6 text-[#888888]">
                    <span className="font-semibold text-[#444444]">
                      Last Updated:
                    </span>{" "}
                    August 21, 2026
                  </p>

                  <div className="flex items-center gap-2 text-[12px] text-[#999999]">
                    <ShieldCheck
                      size={16}
                      className="text-[#F04D02]"
                      strokeWidth={1.5}
                    />
                    <span>Genmax IT Solution</span>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <aside className="hidden lg:block">
              <div className="sticky top-[110px]">
                {/* Navigation */}
                <div className="overflow-hidden rounded-[5px] border border-[#EEEEEE] bg-[#FAFAFA]">
                  <div className="bg-[#202A55] px-6 py-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F04D02] text-white">
                      <ShieldCheck size={22} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-5 text-[19px] font-normal text-white">
                      Your Privacy Matters
                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.7] text-white/60">
                      A quick overview of the important topics covered in this
                      policy.
                    </p>
                  </div>

                  <div className="divide-y divide-[#EEEEEE]">
                    <SidebarItem number="01" text="Opt-Out Rights" />
                    <SidebarItem
                      number="02"
                      text="Purpose & Legal Basis"
                    />
                    <SidebarItem number="03" text="Information Collection" />
                    <SidebarItem number="04" text="Tracking & Analytics" />
                    <SidebarItem number="05" text="Information Sharing" />
                    <SidebarItem number="06" text="Privacy Rights" />
                    <SidebarItem number="07" text="Third-Party Links" />
                    <SidebarItem number="08" text="Security & Retention" />
                    <SidebarItem number="09" text="Personal Data" />
                    <SidebarItem number="10" text="International Transfers" />
                    <SidebarItem number="11" text="Your Information" />
                    <SidebarItem number="12" text="Policy Updates" />
                    <SidebarItem number="13" text="Contact Us" />
                  </div>
                </div>

                {/* HELP BOX */}
                <div className="mt-5 rounded-[5px] border border-[#F04D02]/15 bg-[#F04D02]/[0.035] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F04D02]/10">
                    <CircleHelp
                      size={20}
                      className="text-[#F04D02]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-4 text-[16px] font-semibold text-[#202A55]">
                    Need Help?
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.75] text-[#777777]">
                    If you have questions about this policy, our team is here
                    to help.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.8px] text-[#F04D02] transition-colors hover:text-[#202A55]"
                  >
                    Contact Us
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* SECURITY BADGE */}
                <div className="mt-5 flex items-center gap-3 rounded-[5px] border border-[#EEEEEE] bg-white p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#202A55]/5">
                    <Shield
                      size={19}
                      className="text-[#202A55]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold text-[#202A55]">
                      Privacy First
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#888888]">
                      Responsible data practices
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   PRIVACY CARD
============================================================= */

function PrivacyCard({
  icon,
  title,
  text,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div
      className={`group flex items-start gap-4 px-6 py-7 transition-all duration-300 hover:bg-[#FAFAFA] sm:px-7 ${
        !last
          ? "border-b border-[#EEEEEE] sm:border-b-0 sm:border-r"
          : ""
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10 text-[#F04D02] transition-all duration-300 group-hover:bg-[#F04D02] group-hover:text-white">
        {icon}
      </div>

      <div>
        <h3 className="text-[15px] font-semibold text-[#202A55]">{title}</h3>

        <p className="mt-1.5 text-[12.5px] leading-[1.7] text-[#777777]">
          {text}
        </p>
      </div>
    </div>
  );
}

/* =============================================================
   SECTION EYEBROW
============================================================= */

function SectionEyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-8 bg-[#F04D02]" />

      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#F04D02]">
        {text}
      </span>
    </div>
  );
}

/* =============================================================
   POLICY SECTION
============================================================= */

function PolicySection({
  number,
  title,
  icon,
  children,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-28">
      <div className="mb-7">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#F04D02]/10 px-2 text-[10px] font-bold tracking-[1px] text-[#F04D02]">
            {number}
          </span>

          <span className="h-px w-8 bg-[#F04D02]" />

          <span className="text-[#F04D02]">{icon}</span>
        </div>

        <h2 className="max-w-[880px] text-[27px] font-normal leading-[1.25] tracking-[-0.6px] text-[#202A55] sm:text-[30px] lg:text-[32px]">
          {title}
        </h2>

        <div className="mt-4 h-[2px] w-[45px] bg-[#F04D02]" />
      </div>

      <div>{children}</div>
    </section>
  );
}

/* =============================================================
   SUB TITLE
============================================================= */

function SubTitle({
  title,
  icon,
  number,
  letter,
}: {
  title: string;
  icon?: React.ReactNode;
  number?: string;
  letter?: string;
}) {
  return (
    <h3 className="mb-3 mt-8 flex items-center gap-2.5 text-[17px] font-semibold leading-[1.45] text-[#222222]">
      {(number || letter) && (
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#202A55]/5 px-1.5 text-[9px] font-bold uppercase text-[#202A55]">
          {number || letter}
        </span>
      )}

      {icon && <span className="text-[#F04D02]">{icon}</span>}

      {title}
    </h3>
  );
}

/* =============================================================
   CONTENT TEXT
============================================================= */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-6 space-y-3 pl-1">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-[15px] leading-[1.85] text-[#5D5D5D] sm:text-[15.5px]"
        >
          <CheckCircle2
            size={17}
            strokeWidth={1.8}
            className="mt-[5px] shrink-0 text-[#F04D02]"
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* =============================================================
   INFO BOX
============================================================= */

function InfoBox({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="mt-7 rounded-[5px] border-l-[3px] border-[#F04D02] bg-[#FAFAFA] px-5 py-5 sm:px-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F04D02]/10 text-[#F04D02]">
          {icon}
        </div>

        <div>
          <h3 className="text-[15px] font-semibold text-[#202A55]">
            {title}
          </h3>

          <p className="mt-1.5 text-[13.5px] leading-[1.8] text-[#6B6B6B]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   SIDEBAR ITEM
============================================================= */

function SidebarItem({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-3 px-6 py-3.5 transition-colors duration-200 hover:bg-white">
      <span className="text-[10px] font-bold tracking-[1px] text-[#F04D02]">
        {number}
      </span>

      <span className="text-[12px] leading-5 text-[#666666] transition-colors group-hover:text-[#202A55]">
        {text}
      </span>
    </div>
  );
}

/* =============================================================
   SHARE ICON
============================================================= */

function ShareIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98" />
      <path d="m15.41 6.51-6.82 3.98" />
    </svg>
  );
}