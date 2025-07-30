export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last updated: January 30, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            Overlook is designed with your privacy in mind. We collect only the minimum information necessary:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Photos you import for analysis (processed on-device when possible)</li>
            <li>Challenge completion data to track your progress</li>
            <li>Anonymous usage analytics to improve the app</li>
            <li>Account information (email for account creation)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            Your information is used exclusively to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Provide AI-powered photo analysis and feedback</li>
            <li>Track your progress through photography challenges</li>
            <li>Personalize learning recommendations</li>
            <li>Improve our analysis algorithms</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Photo Processing</h2>
          <p className="text-gray-300 mb-6">
            Photos are analyzed using on-device processing whenever possible. 
            When server processing is required, photos are encrypted in transit, 
            analyzed immediately, and not stored on our servers unless you explicitly 
            save them to your challenge history.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="text-gray-300 mb-6">
            We implement industry-standard security measures including:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>End-to-end encryption for photo uploads</li>
            <li>Secure authentication systems</li>
            <li>Regular security audits</li>
            <li>Minimal data retention policies</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Access your personal data</li>
            <li>Delete your account and all associated data</li>
            <li>Export your challenge history</li>
            <li>Opt-out of analytics collection</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-300 mb-6">
            Overlook is not intended for children under 13. We do not knowingly 
            collect personal information from children under 13.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300">
            For privacy-related questions or concerns, please contact us at{" "}
            <a href="mailto:privacy@overlook.app" className="text-gold-500 hover:underline">
              privacy@overlook.app
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this privacy policy from time to time. We will notify 
            you of any changes by posting the new privacy policy on this page 
            and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </div>
      </div>
    </div>
  );
}