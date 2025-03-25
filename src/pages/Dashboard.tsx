
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventCard } from "@/components/event/EventCard";
import { Plus, Calendar, Heart, MessageCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { sampleEvents } from "@/lib/mockData";

export default function Dashboard() {
  const myEvents = sampleEvents.slice(0, 2);
  const savedEvents = sampleEvents.slice(2, 5);
  
  return (
    <Layout>
      <div className="container px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your events, messages, and saved events
            </p>
          </div>
          <Button asChild>
            <Link to="/dashboard/create">
              <Plus className="h-4 w-4 mr-2" />
              Create New Event
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="my-events" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="my-events" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">My Events</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Saved</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-events" className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">My Events</h2>
              {myEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">No events yet</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't created any events yet
                  </p>
                  <Button asChild>
                    <Link to="/dashboard/create">Create an Event</Link>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Saved Events</h2>
              {savedEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">No saved events</h3>
                  <p className="text-muted-foreground mb-6">
                    Events you save will appear here
                  </p>
                  <Button asChild>
                    <Link to="/events">Browse Events</Link>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="messages" className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Messages</h2>
              <div className="text-center py-12">
                <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No messages yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start conversations with event organizers and participants
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
              <p className="text-muted-foreground mb-4">
                Manage your profile, preferences, and account settings
              </p>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
