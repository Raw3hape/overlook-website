export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last updated: January 29, 2024</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            Overlook collects minimal information necessary to provide our services:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Photos you choose to analyze (processed locally when possible)</li>
            <li>Anonymous usage statistics to improve the app</li>
            <li>Subscription information for premium features</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Provide AI-powered photo analysis</li>
            <li>Improve our algorithms and features</li>
            <li>Manage your subscription and account</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="text-gray-300 mb-6">
            We implement industry-standard security measures to protect your data. 
            Photos are processed with encryption and deleted after analysis unless 
            you choose to save them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300">
            If you have questions about this privacy policy, please contact us at{" "}
            <a href="mailto:privacy@overlook.app" className="text-gold-500 hover:underline">
              privacy@overlook.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}