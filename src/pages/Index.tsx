
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/event/EventCard";
import { MapPin, Search, Sparkles, Calendar, Users } from "lucide-react";
import { sampleEvents, categories } from "@/lib/mockData";
import { SearchBar } from "@/components/search/SearchBar";

export default function Index() {
  const [featuredEvents, setFeaturedEvents] = useState(sampleEvents.slice(0, 3));
  const [upcomingEvents, setUpcomingEvents] = useState(sampleEvents.slice(3, 7));
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeroVisible(scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-secondary/40 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03] z-0"></div>
        <div
          className={`container px-4 sm:px-6 py-20 sm:py-24 md:py-32 relative z-10 transition-all duration-700 ${
            isHeroVisible
              ? "opacity-100 transform-none"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block animate-float">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
              Discover College Events Near You
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-down">
              Find and connect with events from colleges around you. 
              Create, share, and attend events all in one place.
            </p>
            <div className="max-w-xl mx-auto mb-8 animate-slide-up">
              <SearchBar />
            </div>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              <Button asChild size="lg">
                <Link to="/events">Explore Events</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/map">View Map</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[140%] h-48 bg-background rounded-[100%] z-10"></div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Featured Events</h2>
            </div>
            <Button asChild variant="ghost">
              <Link to="/events">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div key={event.id} className="animate-scale-in">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">
              Discover events based on your interests and preferences
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/events?category=${category.id}`}
                className="glass hover-lift rounded-lg p-6 text-center"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Upcoming Events</h2>
            </div>
            <Button asChild variant="ghost">
              <Link to="/events">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="animate-scale-in">
                <EventCard event={event} variant="compact" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Create and Share Your Own Events
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Hosting an event? Make it visible to thousands of students.
              It's free and only takes a few minutes.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/dashboard/create">Create an Event</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass p-8 rounded-lg hover-lift">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <p className="text-muted-foreground">Events every month</p>
            </div>
            <div className="text-center glass p-8 rounded-lg hover-lift">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-muted-foreground">Colleges participating</p>
            </div>
            <div className="text-center glass p-8 rounded-lg hover-lift">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <p className="text-muted-foreground">Student attendees</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
