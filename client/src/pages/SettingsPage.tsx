
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Shield, ArrowLeft, Plus, Trash2, BookOpen, FileText, Lock } from 'lucide-react';

export function SettingsPage() {
  const navigate = useNavigate();
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'Mom', phone: '+1 (555) 555-0123' },
    { id: 2, name: 'Dad', phone: '+1 (555) 555-0124' },
    { id: 3, name: 'Sister', phone: '+1 (555) 555-0125' },
  ]);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });
  const [voiceCommand, setVoiceCommand] = useState('emergency help');
  const [settings, setSettings] = useState({
    gpsEnabled: true,
    autoRecord: true,
    communityAlerts: true,
    silentMode: true,
  });

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && emergencyContacts.length < 6) {
      setEmergencyContacts([
        ...emergencyContacts,
        { id: Date.now(), name: newContact.name, phone: newContact.phone }
      ]);
      setNewContact({ name: '', phone: '' });
    }
  };

  const handleRemoveContact = (id) => {
    setEmergencyContacts(emergencyContacts.filter(contact => contact.id !== id));
  };

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSaveSettings = () => {
    // TODO: Implement save settings logic
    console.log('Settings saved:', { emergencyContacts, voiceCommand, settings });
    alert('Settings saved successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
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
            <h1 className="text-3xl font-bold text-red-600">S.O.S Settings</h1>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
              <CardDescription>
                Add up to 6 emergency contacts who will receive alarm notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyContacts.map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.phone}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveContact(contact.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {emergencyContacts.length < 6 && (
                  <div className="space-y-3 p-3 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="contactName">Name</Label>
                        <Input
                          id="contactName"
                          value={newContact.name}
                          onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                          placeholder="Contact name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactPhone">Phone</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          value={newContact.phone}
                          onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={handleAddContact}
                      className="w-full"
                      variant="outline"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Contact
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Voice Command</CardTitle>
              <CardDescription>
                Set your secret voice command to activate S.O.S
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="voiceCommand">Secret Voice Command</Label>
                <Input
                  id="voiceCommand"
                  value={voiceCommand}
                  onChange={(e) => setVoiceCommand(e.target.value)}
                  placeholder="Enter your secret command"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Choose a phrase that's easy for you to remember but not commonly used in conversation
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy & Safety Settings</CardTitle>
              <CardDescription>
                Configure how S.O.S protects your privacy during emergencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">GPS Tracking</p>
                    <p className="text-sm text-gray-500">Share location during emergencies</p>
                  </div>
                  <Switch
                    checked={settings.gpsEnabled}
                    onCheckedChange={(checked) => handleSettingChange('gpsEnabled', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto Recording</p>
                    <p className="text-sm text-gray-500">Start recording automatically on activation</p>
                  </div>
                  <Switch
                    checked={settings.autoRecord}
                    onCheckedChange={(checked) => handleSettingChange('autoRecord', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Community Alerts</p>
                    <p className="text-sm text-gray-500">Receive notifications from nearby users</p>
                  </div>
                  <Switch
                    checked={settings.communityAlerts}
                    onCheckedChange={(checked) => handleSettingChange('communityAlerts', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Silent Mode</p>
                    <p className="text-sm text-gray-500">Automatically enable vibrate mode during S.O.S</p>
                  </div>
                  <Switch
                    checked={settings.silentMode}
                    onCheckedChange={(checked) => handleSettingChange('silentMode', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legal & App Information</CardTitle>
              <CardDescription>
                Review legal documents and learn about app distribution.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button onClick={() => navigate('/terms-of-use')} className="w-full" variant="secondary">
                <FileText className="mr-2 h-4 w-4" />
                Terms of Use
              </Button>
              <Button onClick={() => navigate('/privacy-policy')} className="w-full" variant="secondary">
                <Lock className="mr-2 h-4 w-4" />
                Privacy Policy
              </Button>
              <Button onClick={() => navigate('/distribution-guide')} className="w-full" variant="secondary">
                <BookOpen className="mr-2 h-4 w-4" />
                App Publishing Guide
              </Button>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button
              onClick={handleSaveSettings}
              className="flex-1 bg-red-600 hover:bg-red-700"
            >
              Save Settings
            </Button>
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
