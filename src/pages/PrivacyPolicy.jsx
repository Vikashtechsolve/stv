
import Layout from '../component/Layout'
export default function PrivacyPolicy() {
  return (
  <Layout>
    <div className="min-h-screen bg-[#E2E2E2] ">
      {/* Header */}
      <div className=" px-6 py-16 text-center">
        <h1 className="text-5xl font-bold font-playfair text-gray-900 mb-8">
          Privacy Policy – VTS
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
          At Vikas Tech Solutions, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair red-gradient mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-6">
            We may collect the following information when you use our platform:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <div>
                <span className="font-semibold text-gray-900">Personal Information:</span>
                <span className="text-gray-700 ml-1">Name, email, phone number, class/education details, professional details.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <div>
                <span className="font-semibold text-gray-900">Service Data:</span>
                <span className="text-gray-700 ml-1">Queries submitted for mentorship/doubt solving, resumes uploaded, contest participation details.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <div>
                <span className="font-semibold text-gray-900">Payment Information:</span>
                <span className="text-gray-700 ml-1">Transaction details when you pay for mentorship, masterclasses, or resume reviews (we do not store card/UPI details — handled securely by third-party payment gateways).</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <div>
                <span className="font-semibold text-gray-900">Technical Information:</span>
                <span className="text-gray-700 ml-1">Browser type, device details, IP address, and cookies for better user experience.</span>
              </div>
            </li>
          </ul>
        </section>

       {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl  font-bold  red-gradient font-playfair mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-6">
            We use your data to:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Provide and improve our services (mentorship, doubt solving, contests, resume reviews, masterclasses).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Book and schedule sessions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Share resources, notes, and roadmaps.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Conduct contests, show leaderboards, and provide certificates.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Process payments securely.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Communicate updates, reminders, or promotional offers.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Improve website performance and personalize your experience.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair red-gradient mb-4">
            3. Data Sharing & Security
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We do not sell or rent your personal information to third parties.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <div>
                <span className="text-gray-700">We may share limited data with:</span>
                <ul className="space-y-2 mt-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="font-semibold text-gray-900">Mentors</span>
                      <span className="text-gray-700 ml-1">(only relevant details for conducting sessions).</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="font-semibold text-gray-900">Payment partners</span>
                      <span className="text-gray-700 ml-1">(for processing secure payments).</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="font-semibold text-gray-900">Service providers</span>
                      <span className="text-gray-700 ml-1">(like email, WhatsApp notifications).</span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We use secure servers, encryption, and restricted access to protect your information.</span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair red-gradient mb-4">
            4. Your Rights
          </h2>
          <p className="text-gray-700 mb-6">
            You have the right to:
          </p>
          <ul className="space-y-4 mb-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Access, update, or delete your personal data.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Opt out of promotional communications.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Request a copy of your data stored with us.</span>
            </li>
          </ul>
          <p className="text-gray-800 font-semibold">
            (For requests, contact us at: <a href="mailto:support@vikastechsolutions.com" className="text-blue-600 hover:underline">support@vikastechsolutions.com</a>)
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair red-gradient mb-4">
            5. Cookies & Tracking
          </h2>
          <p className="text-gray-700 mb-6">
            We use cookies to:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Improve site performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Remember your preferences.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Analyze site usage for improvements.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">(You can disable cookies in your browser settings, but some features may not work properly.)</span>
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className='mb-10' > 
          <h2 className=" text-2xl font-bold font-playfair red-gradient mb-4">
            6. Children's Privacy
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Our services are designed for students <span className="font-semibold">aged 13 and above</span></span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">For users under 18, parental/guardian consent may be required.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We comply with relevant data protection laws (India's DPDP Act, COPPA for U.S. users).</span>
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className='mb-10'>
          <h2 className="text-2xl font-bold font-playfair red-gradient mb-4">
            7. Cancellation & Refund Policy
          </h2>
          <ul className="space-y-4">
             <div>
              <span className="text-gray-700">Masterclasses:</span>
                <ul className="space-y-2 mt-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="text-gray-700 ml-1">Since our masterclasses are low-cost and easily accessible, no refunds will be provided once you register.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="text-gray-700 ml-1">If you miss the live session, you’ll still get full access to the session recordings.</span>
                    </div>
                  </li>
                </ul>
              </div>

            <div>
              <span className="text-gray-700">One-on-One Mentorship or Doubt-Solving Sessions:</span>
                <ul className="space-y-2 mt-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="text-gray-700 ml-1">If you miss your scheduled session for a genuine reason, you may request a refund after proper review.</span>
                    </div>
                  </li>
                </ul>
            </div>

            <div>
              <span className="text-gray-700">Live Resume Sessions:</span>
                <ul className="space-y-2 mt-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="text-gray-700 ml-1">If you cannot attend a live resume session, you can reschedule it for another time.</span>
                    </div>
                  </li>
                </ul>
                <ul className="space-y-2 mt-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-gray-700">-</span>
                    <div>
                      <span className="text-gray-700 ml-1">However, refunds are not allowed for these sessions.</span>
                    </div>
                  </li>
                </ul>
            </div>

          </ul>
        </section>

        {/* Section 8 */}
         <section className="mb-12">
          <h2 className="text-2xl  font-bold  red-gradient font-playfair mb-4">
            8. Terms & Conditions
          </h2>
         
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">By using our platform, you agree to use it only for educational and learning purposes. </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Users must be 13 years or older to register or participate.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Sharing, recording, or redistributing mentorship or class content is strictly prohibited.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Payments are handled through secure payment gateways.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We aim to enhance your skills but do not guarantee placements.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Misuse of platform content or false information may lead to account suspension.</span>
            </li>
          </ul>
        </section>


         {/* Section 9 */}
         <section className="mb-12">
          <h2 className="text-2xl  font-bold  red-gradient font-playfair mb-4">
            9. Shipping Policy
          </h2>
         
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We provide digital products and services only — no physical shipping involved. </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">All services (sessions, contests, and masterclasses) are delivered online through secure links or portals.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">After booking, confirmation and joining details are shared instantly via email or dashboard.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">If technical issues delay access, our support team will resolve it within 24 hours.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Users must ensure a stable internet connection and correct contact details during registration.</span>
            </li>
          </ul>
        </section>


         {/* Section 10 */}
         <section className="mb-12">
          <h2 className="text-2xl  font-bold  red-gradient font-playfair mb-4">
            10. Privacy
          </h2>
         
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We collect only essential user details like name, email, and contact number for mentorship and learning services. </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">AAll personal information is securely stored and never shared with third parties.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Payment data is processed safely through trusted and encrypted gateways.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Users can request data or account deletion at any time.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We use anonymized data only to improve user experience and platform performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Your privacy, trust, and safety are our top priorities at <span className="font-bold text-red-700">Vikas Tech Solution.</span></span>
            </li>
          </ul>
        </section>


        {/* Section 8 */}
        <section className='mb-10'>
          <h2 className="text-2xl font-bold font-playfair red-gradient mb-4">
            8. Changes to This Policy
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">We may update this Privacy Policy from time to time. Changes will be posted on this page with a new “Last Updated” date. </span>
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-bold font-playfair red-gradient mb-4">
            9. Contact Us
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">If you have questions about this Privacy Policy, contact us at: </span>
            </li>
            <li className="flex gap-3">
              <a href="mailto:support@vikastechsolutions.com" className="hover:underline">📩   hr@vikashtechsolution.com</a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  </Layout>
  );
}