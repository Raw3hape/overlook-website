export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last updated: January 30, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-6">
            By downloading, installing, or using Overlook (&ldquo;the App&rdquo;), you agree to be bound 
            by these Terms of Service. If you do not agree to these terms, please do not use the App.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-300 mb-6">
            Overlook is a photography learning application that provides challenges, 
            AI-powered photo analysis, and educational content to help users improve 
            their photography skills.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Account</h2>
          <p className="text-gray-300 mb-4">
            To use certain features of the App, you may need to create an account. You agree to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized use</li>
            <li>Be responsible for all activities under your account</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
          <p className="text-gray-300 mb-4">
            You agree not to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Use the App for any illegal or unauthorized purpose</li>
            <li>Upload inappropriate, offensive, or copyrighted content</li>
            <li>Attempt to reverse engineer, decompile, or hack the App</li>
            <li>Use the App to harm, threaten, or harass others</li>
            <li>Interfere with or disrupt the App&apos;s functionality</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-300 mb-6">
            You retain all rights to the photos you upload to the App. By using Overlook, 
            you grant us a limited, non-exclusive license to process and analyze your photos 
            solely for the purpose of providing our services. We will not use your photos 
            for any other purpose without your explicit consent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Subscription and Payments</h2>
          <p className="text-gray-300 mb-6">
            Some features may require a paid subscription. Subscriptions are billed through 
            the App Store and automatically renew unless cancelled at least 24 hours before 
            the end of the current period. Prices may vary by region and are subject to change.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-gray-300 mb-6">
            The App is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee 
            that the App will be error-free, uninterrupted, or meet your specific requirements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-300 mb-6">
            To the maximum extent permitted by law, we shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages arising from your use 
            of the App.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications to Terms</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to modify these terms at any time. We will notify users 
            of significant changes through the App or via email. Your continued use of the 
            App after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Termination</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to terminate or suspend your account at any time for 
            violation of these terms or for any other reason at our sole discretion.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
          <p className="text-gray-300 mb-6">
            These terms shall be governed by and construed in accordance with the laws 
            of the jurisdiction in which Overlook operates, without regard to its conflict 
            of law principles.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Information</h2>
          <p className="text-gray-300">
            For questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:legal@overlook.app" className="text-gold-500 hover:underline">
              legal@overlook.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}