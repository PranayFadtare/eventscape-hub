
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { EventType } from "@/components/event/EventCard";
import { FilterSidebar } from "@/components/event/FilterSidebar";
import { EventList } from "@/components/event/EventList";
import { sampleEvents } from "@/lib/mockData";

export default function EventsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [events, setEvents] = useState<EventType[]>(sampleEvents);
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>(events);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [sortBy, setSortBy] = useState("date");
  const [showOnline, setShowOnline] = useState(true);
  const [showInPerson, setShowInPerson] = useState(true);
  const [showFree, setShowFree] = useState(true);
  const [showPaid, setShowPaid] = useState(true);

  useEffect(() => {
    // Update the search query from URL params when the component loads
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    
    if (search) setSearchQuery(search);
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  useEffect(() => {
    const filtered = events.filter((event) => {
      // Filter by search term
      const matchesSearch =
        searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by category
      const matchesCategory =
        selectedCategory === "" ||
        event.category.toLowerCase() === selectedCategory.toLowerCase();

      // Filter by event type (online/in-person)
      const matchesType =
        (showOnline && event.isOnline) || (showInPerson && !event.isOnline);

      // Filter by event cost (free/paid)
      const matchesCost =
        (showFree && event.isFree) || (showPaid && !event.isFree);

      return matchesSearch && matchesCategory && matchesType && matchesCost;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === "popularity") {
        return b.attendees - a.attendees;
      }
      return 0;
    });

    setFilteredEvents(sorted);
  }, [
    events,
    searchQuery,
    selectedCategory,
    sortBy,
    showOnline,
    showInPerson,
    showFree,
    showPaid,
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL params when searching
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    // Update URL params when changing category
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setShowOnline(true);
    setShowInPerson(true);
    setShowFree(true);
    setShowPaid(true);
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <FilterSidebar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              showOnline={showOnline}
              setShowOnline={setShowOnline}
              showInPerson={showInPerson}
              setShowInPerson={setShowInPerson}
              showFree={showFree}
              setShowFree={setShowFree}
              showPaid={showPaid}
              setShowPaid={setShowPaid}
              handleSearch={handleSearch}
              handleCategoryChange={handleCategoryChange}
              clearFilters={clearFilters}
            />
            
            <EventList 
              filteredEvents={filteredEvents}
              clearFilters={clearFilters}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
