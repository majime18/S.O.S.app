
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowLeft } from 'lucide-react';
import { ReferralDialog } from '@/components/ReferralDialog';

export function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    voiceCommand: '',
  });
  const [showReferralDialog, setShowReferralDialog] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration data:', formData);
    setIsSignedUp(true);
    setShowReferralDialog(true);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleDialogClose = () => {
    setShowReferralDialog(false);
  };

  useEffect(() => {
    if (isSignedUp && !showReferralDialog) {
      navigate('/dashboard');
    }
  }, [isSignedUp, showReferralDialog, navigate]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-red-600 mr-2" />
              <h1 className="text-3xl font-bold text-red-600">S.O.S</h1>
            </div>
          </div>

          <Card className="border-red-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join the S.O.S Community</CardTitle>
              <CardDescription>
                Create your account to start protecting yourself and others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="voiceCommand">Secret Voice Command</Label>
                  <Input
                    id="voiceCommand"
                    name="voiceCommand"
                    type="text"
                    value={formData.voiceCommand}
                    onChange={handleInputChange}
                    required
                    placeholder="Choose your secret activation word"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    This word will activate S.O.S when spoken
                  </p>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Create a secure password"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    placeholder="Confirm your password"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Create Account
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-600">
                  By creating an account, you agree to our{' '}
                  <Link to="/terms-of-use" className="underline text-blue-600">
                    Terms of Use
                  </Link>{' '}
                  and acknowledge our{' '}
                  <Link to="/privacy-policy" className="underline text-blue-600">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <ReferralDialog
        open={showReferralDialog}
        onOpenChange={setShowReferralDialog}
        onClose={handleDialogClose}
      />
    </>
  );
}
