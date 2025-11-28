import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Layout from '../component/Layout';
import SEO from '../component/SEO';
import {
  Shield,
  Database,
  Lock,
  Users,
  Cookie,
  Baby,
  RefreshCw,
  FileText,
  Truck,
  Eye,
  Mail,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Info,
  Key,
  Clock,
} from 'lucide-react';

export default function PrivacyPolicy() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const sections = [
    {
      number: 1,
      title: "Information We Collect",
      icon: Database,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100/50",
      description: "We may collect the following information when you use our platform:",
      items: [
        {
          label: "Personal Information:",
          text: "Name, email, phone number, class/education details, professional details.",
          icon: Users,
        },
        {
          label: "Service Data:",
          text: "Queries submitted for mentorship/doubt solving, resumes uploaded, contest participation details.",
          icon: FileText,
        },
        {
          label: "Payment Information:",
          text: "Transaction details when you pay for mentorship, masterclasses, or resume reviews (we do not store card/UPI details — handled securely by third-party payment gateways).",
          icon: Lock,
        },
        {
          label: "Technical Information:",
          text: "Browser type, device details, IP address, and cookies for better user experience.",
          icon: Info,
        },
      ],
    },
    {
      number: 2,
      title: "How We Use Your Information",
      icon: Eye,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100/50",
      description: "We use your data to:",
      items: [
        "Provide and improve our services (mentorship, doubt solving, contests, resume reviews, masterclasses).",
        "Book and schedule sessions.",
        "Share resources, notes, and roadmaps.",
        "Conduct contests, show leaderboards, and provide certificates.",
        "Process payments securely.",
        "Communicate updates, reminders, or promotional offers.",
        "Improve website performance and personalize your experience.",
      ],
    },
    {
      number: 3,
      title: "Data Sharing & Security",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100/50",
      items: [
        "We do not sell or rent your personal information to third parties.",
        {
          label: "We may share limited data with:",
          subItems: [
            { label: "Mentors", text: "(only relevant details for conducting sessions)." },
            { label: "Payment partners", text: "(for processing secure payments)." },
            { label: "Service providers", text: "(like email, WhatsApp notifications)." },
          ],
        },
        "We use secure servers, encryption, and restricted access to protect your information.",
      ],
    },
    {
      number: 4,
      title: "Your Rights",
      icon: Key,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100/50",
      description: "You have the right to:",
      items: [
        "Access, update, or delete your personal data.",
        "Opt out of promotional communications.",
        "Request a copy of your data stored with us.",
      ],
      contact: "support@vikastechsolutions.com",
    },
    {
      number: 5,
      title: "Cookies & Tracking",
      icon: Cookie,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100/50",
      description: "We use cookies to:",
      items: [
        "Improve site performance.",
        "Remember your preferences.",
        "Analyze site usage for improvements.",
        "(You can disable cookies in your browser settings, but some features may not work properly.)",
      ],
    },
    {
      number: 6,
      title: "Children's Privacy",
      icon: Baby,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100/50",
      items: [
        "Our services are designed for students aged 13 and above",
        "For users under 18, parental/guardian consent may be required.",
        "We comply with relevant data protection laws (India's DPDP Act, COPPA for U.S. users).",
      ],
    },
    {
      number: 7,
      title: "Cancellation & Refund Policy",
      icon: RefreshCw,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100/50",
      items: [
        {
          label: "Masterclasses:",
          subItems: [
            "Since our masterclasses are low-cost and easily accessible, no refunds will be provided once you register.",
            "If you miss the live session, you'll still get full access to the session recordings.",
          ],
        },
        {
          label: "One-on-One Mentorship or Doubt-Solving Sessions:",
          subItems: [
            "If you miss your scheduled session for a genuine reason, you may request a refund after proper review.",
          ],
        },
        {
          label: "Live Resume Sessions:",
          subItems: [
            "If you cannot attend a live resume session, you can reschedule it for another time.",
            "However, refunds are not allowed for these sessions.",
          ],
        },
      ],
    },
    {
      number: 8,
      title: "Terms & Conditions",
      icon: FileText,
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100/50",
      items: [
        "By using our platform, you agree to use it only for educational and learning purposes.",
        "Users must be 13 years or older to register or participate.",
        "Sharing, recording, or redistributing mentorship or class content is strictly prohibited.",
        "Payments are handled through secure payment gateways.",
        "We aim to enhance your skills but do not guarantee placements.",
        "Misuse of platform content or false information may lead to account suspension.",
      ],
    },
    {
      number: 9,
      title: "Shipping Policy",
      icon: Truck,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-cyan-100/50",
      items: [
        "We provide digital products and services only — no physical shipping involved.",
        "All services (sessions, contests, and masterclasses) are delivered online through secure links or portals.",
        "After booking, confirmation and joining details are shared instantly via email or dashboard.",
        "If technical issues delay access, our support team will resolve it within 24 hours.",
        "Users must ensure a stable internet connection and correct contact details during registration.",
      ],
    },
    {
      number: 10,
      title: "Privacy",
      icon: Lock,
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100/50",
      items: [
        "We collect only essential user details like name, email, and contact number for mentorship and learning services.",
        "All personal information is securely stored and never shared with third parties.",
        "Payment data is processed safely through trusted and encrypted gateways.",
        "Users can request data or account deletion at any time.",
        "We use anonymized data only to improve user experience and platform performance.",
        "Your privacy, trust, and safety are our top priorities at Vikas Tech Solution.",
      ],
    },
    {
      number: 11,
      title: "Changes to This Policy",
      icon: Clock,
      color: "from-slate-500 to-slate-600",
      bgColor: "from-slate-50 to-slate-100/50",
      items: [
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with a new \"Last Updated\" date.",
      ],
    },
    {
      number: 12,
      title: "Contact Us",
      icon: Mail,
      color: "from-[#ED0331] to-[#87021C]",
      bgColor: "from-red-50 to-pink-100/50",
      items: [
        "If you have questions about this Privacy Policy, contact us at:",
      ],
      contact: "hr@vikashtechsolution.com",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Privacy Policy | VTS"
        description="Read Vikas Tech Solutions' privacy policy on how we protect and use your personal data securely."
        url="https://vikastechsolutions.com/privacy-policy"
      />
      <div className="min-h-screen bg-gray-50 font-nunito">
        {/* Hero Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative px-6 py-16 md:py-20 text-center bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-200/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isHeaderInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#ED0331]" />
              <span className="text-sm font-semibold text-gray-700">Privacy & Trust</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Shield className="w-16 h-16 md:w-20 md:h-20 text-[#ED0331] mx-auto mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-playfair mb-6"
            >
              <span className="heading-primary">Privacy Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            >
              At <span className="font-semibold text-gray-900">Vikas Tech Solutions</span>, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {sections.map((section, index) => (
            <SectionCard key={section.number} section={section} />
          ))}
        </div>

        {/* Last Updated Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl text-center"
        >
          <p className="text-gray-600 font-nunito">
            Last Updated: <span className="font-semibold text-gray-900">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}

// Separate component for section cards
function SectionCard({ section }) {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const IconComponent = section.icon;

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      className="mb-8 md:mb-12"
    >
                <motion.div
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-gray-200`}
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.bgColor} opacity-30`} />

                  <div className="relative p-6 md:p-8 lg:p-10">
                    {/* Section Header */}
                    <motion.div
                      className="flex items-start gap-4 md:gap-6 mb-6"
                      variants={itemVariants}
                    >
                      {/* Icon */}
                      <motion.div
                        className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="text-white w-7 h-7 md:w-8 md:h-8" />
                      </motion.div>

                      {/* Title */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl md:text-3xl font-bold text-gray-400">
                            {String(section.number).padStart(2, '0')}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-playfair">
                            <span className="heading-primary">{section.title}</span>
                          </h2>
                        </div>
                        {section.description && (
                          <p className="text-gray-600 font-nunito text-base md:text-lg mt-2">
                            {section.description}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div className="space-y-4" variants={sectionVariants}>
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          variants={itemVariants}
                          className="flex gap-3 md:gap-4 group"
                        >
                          <motion.div
                            className="flex-shrink-0 mt-1"
                            whileHover={{ scale: 1.2 }}
                          >
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                          </motion.div>
                          <div className="flex-1">
                            {typeof item === 'string' ? (
                              <p className="text-gray-700 font-nunito text-base md:text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                                {item}
                              </p>
                            ) : item.label ? (
                              <>
                                <p className="font-semibold text-gray-900 font-nunito text-base md:text-lg mb-2">
                                  {item.label}
                                </p>
                                {item.text && (
                                  <p className="text-gray-700 font-nunito text-base md:text-lg leading-relaxed ml-4">
                                    {item.text}
                                  </p>
                                )}
                                {item.icon && (
                                  <div className="flex items-center gap-2 mt-2 ml-4">
                                    <item.icon className="w-4 h-4 text-[#ED0331]" />
                                    <span className="text-gray-700 font-nunito text-sm">
                                      {item.text}
                                    </span>
                                  </div>
                                )}
                                {item.subItems && (
                                  <ul className="space-y-3 mt-2 ml-4">
                                    {item.subItems.map((subItem, subIndex) => (
                                      <li key={subIndex} className="flex gap-3">
                                        <ArrowRight className="w-4 h-4 text-[#ED0331] flex-shrink-0 mt-1" />
                                        <div>
                                          {typeof subItem === 'string' ? (
                                            <p className="text-gray-700 font-nunito text-base leading-relaxed">
                                              {subItem}
                                            </p>
                                          ) : (
                                            <>
                                              <span className="font-semibold text-gray-900 font-nunito">
                                                {subItem.label}
                                              </span>
                                              {subItem.text && (
                                                <span className="text-gray-700 font-nunito ml-2">
                                                  {subItem.text}
                                                </span>
                                              )}
                                            </>
                                          )}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : null}
                          </div>
                        </motion.div>
                      ))}

                      {/* Contact Info */}
                      {section.contact && (
                        <motion.div
                          variants={itemVariants}
                          className="mt-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100"
                        >
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#ED0331]" />
                            <div>
                              <p className="text-sm text-gray-600 font-nunito mb-1">
                                For requests, contact us at:
                              </p>
                              <a
                                href={`mailto:${section.contact}`}
                                className="text-[#ED0331] font-semibold hover:underline font-nunito text-base md:text-lg"
                              >
                                {section.contact}
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
    </motion.section>
  );
}
