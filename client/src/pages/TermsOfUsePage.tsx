
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function TermsOfUsePage() {
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Terms of Use and Conditions</h1>
        </div>

        <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 space-y-4">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

          <p>Welcome to S.O.S ("we," "us," or "our"). These Terms of Use govern your access to and use of our application and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>

          <h2 className="text-xl font-semibold">1. IMPORTANT: Not a 911 Replacement</h2>
          <p className="border-l-4 border-red-500 pl-4 font-semibold text-red-700">
            The Service is NOT a substitute for emergency services like 911. In any situation where you feel your safety is at risk, you should contact your local emergency services immediately. We are not liable for any failure to do so. The Service is a community-based alerting tool and does not connect to any official emergency dispatch.
          </p>

          <h2 className="text-xl font-semibold">2. User Accounts</h2>
          <p>You must create an account to use the Service. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information.</p>

          <h2 className="text-xl font-semibold">3. User Conduct</h2>
          <p>You agree not to misuse the Service. This includes, but is not limited to:</p>
          <ul className="list-disc list-inside">
            <li>Activating the S.O.S feature for non-emergency situations or as a prank.</li>
            <li>Harassing, threatening, or infringing on the rights of others.</li>
            <li>Using the service for any illegal purpose.</li>
          </ul>
          <p>Misuse of the Service may result in immediate termination of your account.</p>

          <h2 className="text-xl font-semibold">4. User-Generated Content</h2>
          <p>When you activate the S.O.S feature, the Service will record video and audio and collect location data ("User Content"). By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, store, display, and share this User Content with other users of the Service and your designated emergency contacts for the purpose of providing the Service. This content is automatically deleted from our servers after 96 hours.</p>

          <h2 className="text-xl font-semibold">5. Privacy</h2>
          <p>Your privacy is important to us. Our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> explains how we collect, use, and share your personal information. By using the Service, you agree to the collection and use of information in accordance with our Privacy Policy.</p>

          <h2 className="text-xl font-semibold">6. Disclaimers and Limitation of Liability</h2>
          <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE SERVICE WILL ALWAYS BE SAFE, SECURE, OR ERROR-FREE, OR THAT IT WILL FUNCTION WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS.</p>
          <p>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF LIFE, HEALTH, OR PROPERTY ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.</p>

          <h2 className="text-xl font-semibold">7. Termination</h2>
          <p>We may terminate or suspend your account at any time, without prior notice or liability, for any reason, including if you breach these Terms.</p>

          <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will provide notice of any significant changes. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.</p>

          <h2 className="text-xl font-semibold">9. Governing Law</h2>
          <p>These Terms shall be governed by the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.</p>

          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at [Your Contact Email].</p>
        </div>
        <Button onClick={handleBack} className="w-full mt-8">
          Back
        </Button>
      </div>
    </div>
  );
}
