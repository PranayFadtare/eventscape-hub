
import { useEffect, useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EventCard, EventType } from "@/components/event/EventCard";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Sliders, MapPin, X } from "lucide-react";
import { sampleEvents, categories } from "@/lib/mockData";
import { cn } from "@/lib/utils";

// This would be replaced with actual Mapbox implementation
const MapPlaceholder = () => (
  <div className="h-full w-full flex items-center justify-center bg-muted/30 rounded-lg relative overflow-hidden">
    <div className="absolute inset-0 bg-noise opacity-20"></div>
    <div className="text-center p-5">
      <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-4" />
      <h3 className="text-xl font-medium mb-2">Map View</h3>
      <p className="text-muted-foreground max-w-md">
        In a real implementation, this would be a Mapbox map showing event
        locations with interactive markers.
      </p>
    </div>
  </div>
);

export default function MapView() {
  const [events, setEvents] = useState<EventType[]>(sampleEvents);
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>(events);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [range, setRange] = useState([10]);
  const [showOnline, setShowOnline] = useState(true);
  const [showInPerson, setShowInPerson] = useState(true);
  const [showFree, setShowFree] = useState(true);
  const [showPaid, setShowPaid] = useState(true);
  const [activeEvent, setActiveEvent] = useState<EventType | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filtered = events.filter((event) => {
      // Filter by search term
      const matchesSearch =
        searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.college.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by category
      const matchesCategory =
        selectedCategory === "" ||
        event.category.toLowerCase() === selectedCategory.toLowerCase();

      // Filter by event type (online/in-person)
      const matchesType =
        (showOnline && event.isOnline) || (showInPerson && !event.isOnline);

      // Filter by event cost (free/paid)
      const matchesCost = (showFree && event.isFree) || (showPaid && !event.isFree);

      return matchesSearch && matchesCategory && matchesType && matchesCost;
    });

    setFilteredEvents(filtered);
    // If we had actual coordinates, we would filter by range here
  }, [
    events,
    searchQuery,
    selectedCategory,
    range,
    showOnline,
    showInPerson,
    showFree,
    showPaid,
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputRef.current) {
      setSearchQuery(searchInputRef.current.value);
    }
  };

  return (
    <Layout hideFooter>
      <div className="h-[calc(100vh-4rem)] flex flex-col">
        {/* Filter Bar */}
        <div className="border-b py-3">
          <div className="container px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-3">
            <form
              onSubmit={handleSearch}
              className="w-full sm:max-w-sm relative"
            >
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                ref={searchInputRef}
                placeholder="Search location, event, college..."
                className="pl-10 pr-20"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                Search
              </Button>
            </form>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name.toLowerCase()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Sliders className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Events</SheetTitle>
                    <SheetDescription>
                      Adjust filters to find the perfect events for you
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Distance Range</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Distance
                          </span>
                          <span className="text-sm font-medium">
                            {range[0]} km
                          </span>
                        </div>
                        <Slider
                          value={range}
                          onValueChange={setRange}
                          max={50}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Event Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="online"
                            checked={showOnline}
                            onCheckedChange={(checked) =>
                              setShowOnline(checked as boolean)
                            }
                          />
                          <Label htmlFor="online">Online Events</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="in-person"
                            checked={showInPerson}
                            onCheckedChange={(checked) =>
                              setShowInPerson(checked as boolean)
                            }
                          />
                          <Label htmlFor="in-person">In-Person Events</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Price</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="free"
                            checked={showFree}
                            onCheckedChange={(checked) =>
                              setShowFree(checked as boolean)
                            }
                          />
                          <Label htmlFor="free">Free Events</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="paid"
                            checked={showPaid}
                            onCheckedChange={(checked) =>
                              setShowPaid(checked as boolean)
                            }
                          />
                          <Label htmlFor="paid">Paid Events</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Map and Events Panel */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel (Events List) */}
          <div
            className={cn(
              "w-full md:w-[400px] border-r overflow-y-auto transition-all duration-300",
              activeEvent ? "md:w-0 md:opacity-0 md:invisible" : "md:opacity-100 md:visible"
            )}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  {filteredEvents.length} Events Found
                </h2>
              </div>
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="cursor-pointer hover:bg-muted/50 rounded-lg p-2 -mx-2 transition-colors"
                    onClick={() => setActiveEvent(event)}
                  >
                    <EventCard event={event} variant="compact" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel (Map) */}
          <div className="relative flex-1 overflow-hidden">
            <MapPlaceholder />

            {/* Active Event Popup */}
            {activeEvent && (
              <div className="absolute inset-0 md:inset-auto md:right-4 md:top-4 md:max-w-sm glass animate-fade-in p-1 rounded-lg">
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setActiveEvent(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-2">
                  <EventCard event={activeEvent} variant="map" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
