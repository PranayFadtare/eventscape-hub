
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Share2,
  Heart,
  MessageCircle,
  Globe,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { EventCard, EventType } from "@/components/event/EventCard";
import { sampleEvents } from "@/lib/mockData";
import { cn } from "@/lib/utils";

// Placeholder for map component
const EventLocationMap = ({ event }: { event: EventType }) => (
  <div className="h-[300px] w-full bg-muted/30 rounded-lg flex items-center justify-center">
    <div className="text-center">
      <MapPin className="h-10 w-10 text-primary/50 mx-auto mb-2" />
      <h3 className="font-medium mb-1">{event.location}</h3>
      <p className="text-sm text-muted-foreground">Event Location Map</p>
    </div>
  </div>
);

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventType | undefined>();
  const [relatedEvents, setRelatedEvents] = useState<EventType[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    // In a real app, we would fetch the event from an API
    const foundEvent = sampleEvents.find((e) => e.id === id);
    setEvent(foundEvent);

    // Get related events (same category)
    if (foundEvent) {
      const related = sampleEvents
        .filter(
          (e) => e.category === foundEvent.category && e.id !== foundEvent.id
        )
        .slice(0, 3);
      setRelatedEvents(related);
    }

    // Scroll to top when event changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <Layout>
        <div className="container py-16 px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <p className="text-muted-foreground mb-6">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/events">Browse Events</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const termsAndConditions = `
1. Registration and Attendance

- Registration is required for all attendees.
- Attendees must be 18 years or older unless specified otherwise.
- Event organizers reserve the right to refuse entry or remove any participant.
- Tickets are non-refundable unless the event is canceled by organizers.

2. Code of Conduct

- All participants must behave respectfully toward others.
- Harassment or discrimination of any kind will not be tolerated.
- Participants must follow all safety instructions provided by staff.

3. Intellectual Property

- Photos and videos may be taken during the event for promotional purposes.
- By attending, you grant permission for your likeness to be used.
- All content presented belongs to the respective presenters and organizers.

4. Liability

- Organizers are not responsible for personal property or injuries.
- Participants assume all risks associated with attending the event.
- Organizers reserve the right to modify the program, speakers, or venue.
  `;

  return (
    <Layout>
      <div className="container px-4 sm:px-6 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/events">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex space-x-2 mb-3">
                    <Badge variant="default">{event.category}</Badge>
                    <Badge
                      variant={event.isFree ? "default" : "secondary"}
                      className="border-white/20"
                    >
                      {event.isFree ? "Free" : "Paid"}
                    </Badge>
                    <Badge
                      variant={event.isOnline ? "outline" : "secondary"}
                      className="border-white/20 text-white"
                    >
                      {event.isOnline ? "Online" : "In-person"}
                    </Badge>
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    {event.title}
                  </h1>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={event.collegeImage} alt={event.college} />
                      <AvatarFallback>{event.college.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="ml-2 text-white">{event.college}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <div className="font-medium">Time</div>
                      <div className="text-sm text-muted-foreground">
                        {event.time}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <div className="font-medium">Attendees</div>
                      <div className="text-sm text-muted-foreground">
                        {event.attendees} people attending
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">About This Event</h2>
                <div className="space-y-4">
                  <p className={cn(
                    "text-muted-foreground",
                    !showFullDescription && "line-clamp-3"
                  )}>
                    {event.description.repeat(10)}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                  >
                    {showFullDescription ? (
                      <>
                        Show Less <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Location Map */}
              {!event.isOnline && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Event Location</h2>
                  <EventLocationMap event={event} />
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Terms & Conditions</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowTerms(!showTerms)}
                  >
                    {showTerms ? (
                      <>
                        Hide <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Show <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                {showTerms && (
                  <div className="glass p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans">
                      {termsAndConditions}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Action Card */}
              <div className="glass p-5 rounded-lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {event.isFree ? "Register for this event" : "Get your tickets"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.isFree
                      ? "Secure your spot for this free event."
                      : "Tickets are limited, book now to avoid disappointment."}
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full">
                      {event.isFree ? "Register Now" : "Buy Tickets"}
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                          isSaved && "text-red-500 border-red-200 bg-red-50"
                        )}
                        onClick={() => setIsSaved(!isSaved)}
                      >
                        <Heart
                          className={cn(
                            "h-4 w-4",
                            isSaved && "fill-red-500"
                          )}
                        />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="flex-1"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" /> Chat
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organizer Info */}
              <div className="glass p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Organizer</h3>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={event.collegeImage} alt={event.college} />
                    <AvatarFallback>{event.college.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <div className="font-medium">{event.college}</div>
                    <div className="text-sm text-muted-foreground">Event Organizer</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" className="flex items-center justify-center">
                      <Globe className="mr-2 h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                </div>
              </div>

              {/* Related Events */}
              {relatedEvents.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Similar Events</h3>
                  <div className="space-y-4">
                    {relatedEvents.map((relatedEvent) => (
                      <EventCard
                        key={relatedEvent.id}
                        event={relatedEvent}
                        variant="compact"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
