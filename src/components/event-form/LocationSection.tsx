
import { useState } from "react";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function LocationSection() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="glass p-6 rounded-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Location</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="isOnline">Online Event</Label>
          <Switch
            id="isOnline"
            checked={isOnline}
            onCheckedChange={setIsOnline}
          />
        </div>
      </div>

      {isOnline ? (
        <div className="space-y-2">
          <Label htmlFor="onlineLink">
            Event Link <span className="text-red-500">*</span>
          </Label>
          <Input id="onlineLink" placeholder="https://meeting.link/..." />
          <p className="text-sm text-muted-foreground">
            Add the link to your online event (Zoom, Google Meet, etc.)
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">
              Location <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="location"
                placeholder="Search for a location"
                className="pl-10"
              />
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Start typing to search for a location
            </p>
          </div>

          <div className="h-[200px] bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Map will appear here after you select a location
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
