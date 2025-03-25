
import { EventType } from "@/components/event/EventCard";

export const sampleEvents: EventType[] = [
  {
    id: "1",
    title: "Annual Tech Fest 2023",
    description: "Join us for a weekend of innovation, learning, and collaboration. Featuring workshops, hackathons, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
    date: "2023-11-15",
    time: "10:00 AM",
    location: "Stanford University, CA",
    college: "Stanford",
    collegeImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    attendees: 250,
    category: "Tech",
    isFree: false,
    isOnline: false,
    coordinates: {
      lat: 37.4275,
      lng: -122.1697
    }
  },
  {
    id: "2",
    title: "Cultural Festival: Rhythms & Beats",
    description: "Experience diverse cultures through music, dance, food, and art. A celebration of global heritage and traditions.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2074",
    date: "2023-10-28",
    time: "6:00 PM",
    location: "UC Berkeley, CA",
    college: "Berkeley",
    collegeImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2070",
    attendees: 420,
    category: "Cultural",
    isFree: true,
    isOnline: false,
    coordinates: {
      lat: 37.8719,
      lng: -122.2585
    }
  },
  {
    id: "3",
    title: "Sports Championship Final",
    description: "The culmination of months of competition. Come watch the best college teams battle for the championship title.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2070",
    date: "2023-11-05",
    time: "3:30 PM",
    location: "UCLA, Los Angeles, CA",
    college: "UCLA",
    collegeImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070",
    attendees: 1200,
    category: "Sports",
    isFree: true,
    isOnline: false,
    coordinates: {
      lat: 34.0689,
      lng: -118.4452
    }
  },
  {
    id: "4",
    title: "Virtual Career Fair",
    description: "Connect with top employers from the comfort of your home. Explore internships, full-time positions, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070",
    date: "2023-10-22",
    time: "11:00 AM",
    location: "Online Event",
    college: "Multiple",
    collegeImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070",
    attendees: 850,
    category: "Career",
    isFree: true,
    isOnline: true,
    coordinates: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: "5",
    title: "Startup Weekend Hackathon",
    description: "48 hours to turn your idea into a viable business. Form teams, validate ideas, and pitch to investors and entrepreneurs.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
    date: "2023-11-10",
    time: "5:00 PM",
    location: "MIT, Cambridge, MA",
    college: "MIT",
    collegeImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2070",
    attendees: 160,
    category: "Tech",
    isFree: false,
    isOnline: false,
    coordinates: {
      lat: 42.3601,
      lng: -71.0942
    }
  },
  {
    id: "6",
    title: "College Music Festival",
    description: "A day of live performances from the best college bands and artists. Food, drinks, and good vibes guaranteed.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070",
    date: "2023-10-30",
    time: "2:00 PM",
    location: "NYU, New York, NY",
    college: "NYU",
    collegeImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070",
    attendees: 750,
    category: "Cultural",
    isFree: false,
    isOnline: false,
    coordinates: {
      lat: 40.7291,
      lng: -73.9965
    }
  },
  {
    id: "7",
    title: "Debate Championship",
    description: "The most prestigious college debate tournament. Watch as teams argue compelling cases on current issues.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070",
    date: "2023-11-18",
    time: "9:00 AM",
    location: "Harvard University, Cambridge, MA",
    college: "Harvard",
    collegeImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070",
    attendees: 300,
    category: "Academic",
    isFree: true,
    isOnline: false,
    coordinates: {
      lat: 42.3770,
      lng: -71.1167
    }
  },
  {
    id: "8",
    title: "AI and Machine Learning Workshop",
    description: "Learn the fundamentals of AI and ML with hands-on exercises. No prior experience required.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
    date: "2023-11-02",
    time: "1:00 PM",
    location: "Online Event",
    college: "Stanford",
    collegeImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    attendees: 520,
    category: "Tech",
    isFree: false,
    isOnline: true,
    coordinates: {
      lat: 0,
      lng: 0
    }
  }
];

export const categories = [
  { id: "tech", name: "Tech", icon: "💻" },
  { id: "cultural", name: "Cultural", icon: "🎭" },
  { id: "sports", name: "Sports", icon: "⚽" },
  { id: "academic", name: "Academic", icon: "📚" },
  { id: "career", name: "Career", icon: "💼" },
  { id: "social", name: "Social", icon: "🎉" },
  { id: "workshop", name: "Workshop", icon: "🔧" },
  { id: "other", name: "Other", icon: "✨" },
];

export const colleges = [
  { id: "stanford", name: "Stanford University", location: "Stanford, CA" },
  { id: "berkeley", name: "UC Berkeley", location: "Berkeley, CA" },
  { id: "mit", name: "MIT", location: "Cambridge, MA" },
  { id: "harvard", name: "Harvard University", location: "Cambridge, MA" },
  { id: "ucla", name: "UCLA", location: "Los Angeles, CA" },
  { id: "nyu", name: "New York University", location: "New York, NY" },
];
