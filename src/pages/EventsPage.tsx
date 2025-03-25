
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { EventCard, EventType } from "@/components/event/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Calendar } from "lucide-react";
import { sampleEvents, categories } from "@/lib/mockData";

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
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  };

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="space-y-4">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search events..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </form>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Category</h3>
                  <Select
                    value={selectedCategory}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.name.toLowerCase()}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Sort By</h3>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date (Upcoming)</SelectItem>
                      <SelectItem value="popularity">Popularity</SelectItem>
                    </SelectContent>
                  </Select>
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

                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <a href="/map">
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
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
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("");
                      setShowOnline(true);
                      setShowInPerson(true);
                      setShowFree(true);
                      setShowPaid(true);
                      setSearchParams({});
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
