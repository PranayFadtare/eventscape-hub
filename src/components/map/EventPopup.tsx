
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventCard, EventType } from "@/components/event/EventCard";

interface EventPopupProps {
  event: EventType | null;
  onClose: () => void;
}

export const EventPopup = ({ event, onClose }: EventPopupProps) => {
  if (!event) return null;

  return (
    <div className="absolute inset-0 md:inset-auto md:right-4 md:top-4 md:max-w-sm glass animate-fade-in p-1 rounded-lg">
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-2">
        <EventCard event={event} variant="map" />
      </div>
    </div>
  );
};
