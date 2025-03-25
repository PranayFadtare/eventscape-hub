
import { useEffect, useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { EventType } from "@/components/event/EventCard";
import { sampleEvents } from "@/lib/mockData";
import { MapPlaceholder } from "@/components/map/MapPlaceholder";
import { EventPopup } from "@/components/map/EventPopup";
import { MapFilterBar } from "@/components/map/MapFilterBar";
import { EventsList } from "@/components/map/EventsList";

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
        <MapFilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          range={range}
          setRange={setRange}
          showOnline={showOnline}
          setShowOnline={setShowOnline}
          showInPerson={showInPerson}
          setShowInPerson={setShowInPerson}
          showFree={showFree}
          setShowFree={setShowFree}
          showPaid={showPaid}
          setShowPaid={setShowPaid}
          onSearch={handleSearch}
          searchInputRef={searchInputRef}
        />

        {/* Map and Events Panel */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel (Events List) */}
          <EventsList 
            events={filteredEvents} 
            activeEvent={activeEvent} 
            onSelectEvent={setActiveEvent} 
          />

          {/* Right Panel (Map) */}
          <div className="relative flex-1 overflow-hidden">
            <MapPlaceholder />

            {/* Active Event Popup */}
            <EventPopup 
              event={activeEvent}
              onClose={() => setActiveEvent(null)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
