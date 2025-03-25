
import { Button } from "@/components/ui/button";
import { EventCard, EventType } from "@/components/event/EventCard";
import { Calendar } from "lucide-react";

interface EventListProps {
  filteredEvents: EventType[];
  clearFilters: () => void;
}

export function EventList({ filteredEvents, clearFilters }: EventListProps) {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {filteredEvents.length} Events Found
        </h1>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div key={event.id} className="animate-scale-in">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">No events found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters or search terms
          </p>
          <Button onClick={clearFilters}>
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
