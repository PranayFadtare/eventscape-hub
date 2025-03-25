
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  college: string;
  collegeImage?: string;
  attendees: number;
  category: string;
  isFree: boolean;
  isOnline: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface EventCardProps {
  event: EventType;
  variant?: "default" | "compact" | "map";
}

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const isCompact = variant === "compact";
  const isMap = variant === "map";

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  if (isMap) {
    return (
      <div className="w-64 animate-scale-in">
        <div className="relative overflow-hidden rounded-t-lg h-24">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
              onClick={handleSaveToggle}
            >
              <Heart
                className={cn(
                  "h-4 w-4",
                  isSaved ? "fill-red-500 text-red-500" : "text-foreground"
                )}
              />
              <span className="sr-only">Save</span>
            </Button>
          </div>
        </div>
        <div className="p-3 space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <Badge
                variant={event.category === "Tech" ? "default" : event.category === "Cultural" ? "secondary" : "outline"}
                className="mb-1"
              >
                {event.category}
              </Badge>
              <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                {event.title}
              </h3>
            </div>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formattedDate}</span>
            <span className="mx-1">•</span>
            <Clock className="h-3 w-3 mr-1" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="pt-2">
            <Button asChild size="sm" className="w-full">
              <Link to={`/events/${event.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/events/${event.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg border bg-card hover-lift",
        isCompact ? "h-full" : ""
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isCompact ? "h-28 sm:h-32" : "h-48"
        )}
      >
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
            onClick={handleSaveToggle}
          >
            <Heart
              className={cn(
                "h-4 w-4",
                isSaved ? "fill-red-500 text-red-500" : "text-white"
              )}
            />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        <div className="absolute bottom-2 left-2 flex items-center">
          <Badge
            variant={event.isFree ? "default" : "secondary"}
            className="mr-2"
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
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge
            variant={
              event.category === "Tech"
                ? "default"
                : event.category === "Cultural"
                ? "secondary"
                : "outline"
            }
          >
            {event.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-1 h-4 w-4" />
            <span>{event.attendees}</span>
          </div>
        </div>
        <h3
          className={cn(
            "font-semibold text-lg mb-1",
            isCompact && "text-base line-clamp-1"
          )}
        >
          {event.title}
        </h3>
        {!isCompact && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {event.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "flex flex-col space-y-1",
              isCompact && "text-sm space-y-0.5"
            )}
          >
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{formattedDate}</span>
              <span className="mx-1">•</span>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4 flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src={event.collegeImage} alt={event.college} />
            <AvatarFallback>{event.college.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </Link>
  );
}
