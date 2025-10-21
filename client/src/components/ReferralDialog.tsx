
import * as React from 'react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Send } from 'lucide-react';

interface ReferralDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
}

export function ReferralDialog({ open, onOpenChange, onClose }: ReferralDialogProps) {
  const [contacts, setContacts] = useState(['']);

  const handleContactChange = (index: number, value: string) => {
    const newContacts = [...contacts];
    newContacts[index] = value;
    setContacts(newContacts);
  };

  const handleAddContact = () => {
    if (contacts.length < 5) {
      setContacts([...contacts, '']);
    }
  };

  const handleRemoveContact = (index: number) => {
    if (contacts.length > 1) {
      const newContacts = contacts.filter((_, i) => i !== index);
      setContacts(newContacts);
    }
  };

  const handleSendInvites = () => {
    const validContacts = contacts.filter(c => c.trim() !== '');
    if (validContacts.length > 0) {
      console.log('Sending invites to:', validContacts);
      alert(`Invitations sent to ${validContacts.length} contact(s)!`);
    }
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Refer Your Friends</DialogTitle>
          <DialogDescription>
            Strengthen your safety network by inviting people you trust. Enter their email addresses below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="grid flex-1 items-center gap-1.5">
                <Label htmlFor={`email-${index}`} className="sr-only">
                  Email
                </Label>
                <Input
                  id={`email-${index}`}
                  type="email"
                  placeholder="friend@example.com"
                  value={contact}
                  onChange={(e) => handleContactChange(index, e.target.value)}
                />
              </div>
              {contacts.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveContact(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          {contacts.length < 5 && (
            <Button variant="outline" onClick={handleAddContact}>
              <Plus className="mr-2 h-4 w-4" /> Add another contact
            </Button>
          )}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Skip for now</Button>
          <Button onClick={handleSendInvites} className="bg-red-600 hover:bg-red-700">
            <Send className="mr-2 h-4 w-4" />
            Send Invites
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
