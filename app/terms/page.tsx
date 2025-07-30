export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last updated: January 29, 2024</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-300 mb-6">
            By using Overlook, you agree to these Terms of Service. If you do not 
            agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Service</h2>
          <p className="text-gray-300 mb-4">
            You may use Overlook for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Use the service for any illegal or unauthorized purpose</li>
            <li>Attempt to reverse engineer or hack the application</li>
            <li>Share your account with others</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Subscriptions</h2>
          <p className="text-gray-300 mb-6">
            Premium features require a subscription. Subscriptions automatically 
            renew unless cancelled at least 24 hours before the end of the current 
            period. You can manage subscriptions in your App Store account settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-300 mb-6">
            You retain all rights to your photos. By using Overlook, you grant us 
            a limited license to process your images for analysis purposes only.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-gray-300">
            For questions about these terms, contact us at{" "}
            <a href="mailto:legal@overlook.app" className="text-gold-500 hover:underline">
              legal@overlook.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}