
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Share, MoreVertical } from 'lucide-react';

// A simple Apple icon component as it might not be in all lucide-react versions
const AppleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);


export function PlatformInfo() {
  return (
    <Card className="bg-gray-50 border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-gray-800">How to Install S.O.S</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-gray-700">
        <p className="mb-6">
          S.O.S is a Progressive Web App (PWA). It's not in the App Store or Google Play, but you can install it directly to your phone's home screen for instant access, just like a regular app!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg mb-2 flex items-center justify-center"><AppleIcon className="mr-2 h-5 w-5" /> For iPhone & iPad (Safari)</h3>
            <ol className="text-left list-decimal list-inside space-y-1">
              <li>Tap the <Share className="inline h-4 w-4 mx-1" /> <strong>Share</strong> button.</li>
              <li>Scroll down and tap <strong>'Add to Home Screen'</strong>.</li>
              <li>Confirm by tapping <strong>'Add'</strong>.</li>
            </ol>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg mb-2 flex items-center justify-center"><Smartphone className="mr-2" /> For Android (Chrome)</h3>
            <ol className="text-left list-decimal list-inside space-y-1">
              <li>Tap the <MoreVertical className="inline h-4 w-4 mx-1" /> <strong>Menu</strong> button (3 dots).</li>
              <li>Tap <strong>'Install app'</strong> or <strong>'Add to Home screen'</strong>.</li>
              <li>Follow the on-screen instructions.</li>
            </ol>
          </div>
        </div>
        <p className="mt-6 text-sm">
          Once installed, the S.O.S icon will appear on your home screen, providing one-tap access to your safety network.
        </p>
      </CardContent>
    </Card>
  );
}
