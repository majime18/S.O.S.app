
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Smartphone, Info } from 'lucide-react';

const AppleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

const AndroidIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8.81a2.5 2.5 0 0 0-4.65-1.47L4.94 13.8a2.49 2.49 0 0 0 .1 3.47l.1.1a2.49 2.49 0 0 0 3.46.1l6.4-4.05a2.5 2.5 0 0 0 .2-3.51Z"/>
        <path d="m12 12-5.1 3.2a1.5 1.5 0 0 0-.4 2l.1.1a1.5 1.5 0 0 0 2.1.3L12 14v-2Z"/>
        <path d="M12 12V2.5A1.5 1.5 0 0 1 13.5 1h.04a1.5 1.5 0 0 1 1.5 1.5v2.5"/>
        <path d="M12 12V7.5a1.5 1.5 0 0 0-1.5-1.5h-.04a1.5 1.5 0 0 0-1.5 1.5V12"/>
        <path d="M18.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        <path d="M6.5 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
    </svg>
);


export function DistributionGuidePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/settings');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBack} className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">App Publishing Guide</h1>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Info className="mr-2" />From Web App to Native App</CardTitle>
              <CardDescription>
                S.O.S is currently a Progressive Web App (PWA), which can be added to a phone's home screen. To list it on official app stores, it must be wrapped in a native application shell.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Tools like <a href="https://capacitorjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Capacitor</a> or <a href="https://cordova.apache.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Cordova</a> are used for this. They package the web application into a native container that can be submitted to app stores. This process is a significant development task requiring specific tools and developer accounts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><AppleIcon className="mr-2" />Publishing to Apple App Store (iOS)</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Apple Developer Program membership ($99/year).</li>
                <li>A Mac computer with the latest version of Xcode.</li>
                <li>App assets: icons, screenshots, and a privacy policy.</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">High-Level Steps:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Integrate Capacitor into the project and generate the native iOS project.</li>
                <li>Open the project in Xcode on a Mac.</li>
                <li>Configure the app's Bundle ID, version, and signing certificates.</li>
                <li>Create an App Store listing in App Store Connect.</li>
                <li>Build, archive, and upload the app using Xcode.</li>
                <li>Submit the app for review by Apple.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><AndroidIcon className="mr-2" />Publishing to Google Play Store (Android)</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Google Play Console developer account ($25 one-time fee).</li>
                <li>App assets: icons, feature graphics, screenshots, and a privacy policy.</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">High-Level Steps:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Integrate Capacitor and generate the native Android project.</li>
                <li>Open the project in Android Studio.</li>
                <li>Generate a signed Android App Bundle (.aab).</li>
                <li>Create a new app listing in the Google Play Console.</li>
                <li>Fill out all required information (description, assets, content rating).</li>
                <li>Upload the App Bundle and submit for review.</li>
              </ol>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50 border-yellow-400">
             <CardContent className="pt-6">
                <p className="text-center text-yellow-800">
                    <strong>Disclaimer:</strong> This is a simplified overview. The actual process for each platform is complex and involves many more steps and adherence to platform-specific guidelines.
                </p>
             </CardContent>
          </Card>

          <Button onClick={handleBack} className="w-full">
            Back to Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
