
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Settings, AlertTriangle, MapPin, Clock, Video, Globe, Eye, Radio, VolumeX, Navigation, Users } from 'lucide-react';

export function DashboardPage() {
  const navigate = useNavigate();
  const [activeAlerts] = useState([
    {
      id: 1,
      location: 'Downtown, NYC',
      coordinates: '40.7128° N, 74.0060° W',
      time: '2 mins ago',
      status: 'active',
      distance: '0.5 miles',
      viewers: '2,847',
      isLive: true
    },
    {
      id: 2,
      location: 'Central Park',
      coordinates: '40.7812° N, 73.9665° W',
      time: '15 mins ago',
      status: 'resolved',
      distance: '1.2 miles',
      viewers: '1,234',
      isLive: false
    }
  ]);

  const handleSettings = () => {
    navigate('/settings');
  };

  const handleWatchLive = (alertId) => {
    const alertInfo = activeAlerts.find(a => a.id === alertId);
    alert('🔴 LIVE STREAM\n\nConnecting you to live video feed...\n\nIMPORTANT: This is a community alert, NOT a 911 call. If you believe this is a real emergency, please contact 911.\n\n🌍 You are one of thousands watching worldwide!\n📍 Victim Location: ' + alertInfo.coordinates + '\n\n🔇 Victim\'s phone is SILENT - no sounds to expose them\n📱 Screen appears BLACK to attackers\n\nHelp mobilize local authorities and provide real-time support.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Shield className="h-10 w-10 text-red-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome to your S.O.S. hub</p>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={handleSettings}
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </header>

      <Card className="bg-yellow-50 border-yellow-400 text-yellow-800 p-4 mb-8 text-center">
        <div className="flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <p className="font-semibold text-sm">
            This app is NOT a replacement for 911. In an emergency, always call 911.
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Globe className="h-8 w-8 text-blue-500" />}
          title="Global Community"
          value="2,847"
          description="Worldwide active members"
        />
        <StatCard
          icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
          title="LIVE Alerts"
          value="3"
          description="Streaming globally now"
        />
        <StatCard
          icon={<Video className="h-8 w-8 text-green-500" />}
          title="Your Recordings"
          value="0"
          description="96-hour global access"
        />
        <StatCard
          icon={<Users className="h-8 w-8 text-purple-500" />}
          title="Your Contacts"
          value="3"
          description="Emergency contacts set"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Radio className="h-5 w-5 text-red-600 mr-2 animate-pulse" />
                LIVE Global S.O.S Alerts
              </CardTitle>
              <CardDescription>
                Real-time emergencies broadcast to all users worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4 transition-shadow hover:shadow-md">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">{alert.location}</p>
                          <p className="text-xs text-blue-600 font-mono">{alert.coordinates}</p>
                          <p className="text-sm text-gray-500">{alert.distance} away</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <Badge variant={alert.isLive ? 'destructive' : 'secondary'} className="mb-1">
                          {alert.isLive ? '🔴 LIVE' : 'Resolved'}
                        </Badge>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2 text-sm text-blue-600">
                        <Eye className="h-4 w-4" />
                        <span>{alert.viewers} viewers worldwide</span>
                      </div>
                      {alert.isLive && (
                        <Button
                          size="sm"
                          onClick={() => handleWatchLive(alert.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Watch LIVE
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-full bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                Your Protection Status
              </CardTitle>
              <CardDescription>
                Your automatic safety systems are ready.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-100 text-green-800 rounded-lg">
                  <p className="font-semibold text-sm">Global Network: Connected</p>
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <h4 className="font-semibold text-sm text-gray-700 pt-2">Automatic Features Ready:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <FeatureStatusItem>BLACK screen recording</FeatureStatusItem>
                  <FeatureStatusItem>Auto SILENT mode</FeatureStatusItem>
                  <FeatureStatusItem>GPS sharing with ALL users</FeatureStatusItem>
                  <FeatureStatusItem>LIVE stream to ALL users</FeatureStatusItem>
                  <FeatureStatusItem>Global community instant alerts</FeatureStatusItem>
                </ul>
              </div>
              <Button
                variant="outline"
                className="w-full mt-6"
                onClick={handleSettings}
              >
                Configure Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function FeatureStatusItem({ children }) {
  return (
    <li className="flex items-center">
      <span className="text-green-500 mr-2">✓</span>
      {children}
    </li>
  );
}
