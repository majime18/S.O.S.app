
import * as React from 'react';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-transparent mt-12 py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 mb-2">Follow us on Instagram</p>
        <a
          href="https://www.instagram.com/thatsosapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="S.O.S App on Instagram"
          className="inline-flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <Instagram className="h-6 w-6 text-gray-800" />
        </a>
      </div>
    </footer>
  );
}
