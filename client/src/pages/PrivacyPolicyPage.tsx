
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBack} className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Privacy Policy</h1>
        </div>

        <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 space-y-4">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

          <p>S.O.S ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application (the "Service").</p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside">
            <li><strong>Personal Information:</strong> Your name, email address, phone number, and emergency contacts you provide during registration.</li>
            <li><strong>Emergency Data:</strong> When you activate the S.O.S feature, we collect real-time video and audio recordings from your device's cameras and microphone, as well as your precise GPS location data.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our Service.</li>
          </ul>

          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside">
            <li>Provide, operate, and maintain the Service.</li>
            <li>Activate S.O.S alerts and share your Emergency Data with your emergency contacts and the S.O.S global community to facilitate assistance.</li>
            <li>Communicate with you, including sending service-related notifications.</li>
            <li>Improve and personalize the Service.</li>
          </ul>

          <h2 className="text-xl font-semibold">3. How We Share Your Information</h2>
          <p>Your information is shared under the following circumstances:</p>
          <ul className="list-disc list-inside">
            <li><strong>During an S.O.S Event:</strong> Your live video, audio, and real-time GPS location are broadcast to your designated emergency contacts and the entire S.O.S global user community.</li>
            <li><strong>With Law Enforcement:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2 className="text-xl font-semibold">4. Data Retention</h2>
          <p>We retain your account information as long as your account is active. Emergency Data (video, audio, and location history from an S.O.S event) is automatically and permanently deleted from our servers 96 hours after the event concludes.</p>

          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p>You have the right to access, update, or delete your account information at any time through the app's settings. You can also manage your emergency contacts and other preferences.</p>

          <h2 className="text-xl font-semibold">7. Children's Privacy</h2>
          <p>The Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.</p>

          <h2 className="text-xl font-semibold">8. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at [Your Contact Email].</p>
        </div>
        <Button onClick={handleBack} className="w-full mt-8">
          Back
        </Button>
      </div>
    </div>
  );
}
