
import { EventCard, EventType } from "@/components/event/EventCard";
import { cn } from "@/lib/utils";

interface EventsListProps {
  events: EventType[];
  activeEvent: EventType | null;
  onSelectEvent: (event: EventType) => void;
}

export const EventsList = ({ events, activeEvent, onSelectEvent }: EventsListProps) => {
  return (
    <div
      className={cn(
        "w-full md:w-[400px] border-r overflow-y-auto transition-all duration-300",
        activeEvent ? "md:w-0 md:opacity-0 md:invisible" : "md:opacity-100 md:visible"
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {events.length} Events Found
          </h2>
        </div>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="cursor-pointer hover:bg-muted/50 rounded-lg p-2 -mx-2 transition-colors"
              onClick={() => onSelectEvent(event)}
            >
              <EventCard event={event} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
