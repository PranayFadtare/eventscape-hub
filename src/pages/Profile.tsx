
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { Bell, Bookmark, Calendar, Edit, Globe, Lock, LogOut, Mail, MapPin, MessageSquare, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { EventCard, EventType } from "@/components/event/EventCard";
import { sampleEvents } from "@/lib/mockData";

export default function Profile() {
  const [savedEvents, setSavedEvents] = useState<EventType[]>(sampleEvents.slice(0, 3));
  const [registeredEvents, setRegisteredEvents] = useState<EventType[]>(sampleEvents.slice(3, 6));
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  
  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully."
    });
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-bold">Jane Doe</h2>
                    <p className="text-muted-foreground">MIT University</p>
                    
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Cambridge, MA</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                      onClick={() => setIsEditingProfile(true)}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      My Events
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Saved Events
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Lock className="h-4 w-4 mr-2" />
                      Privacy
                    </Button>
                    <Separator className="my-2" />
                    <Button variant="ghost" className="w-full justify-start text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-2/3">
              <Tabs defaultValue="events">
                <TabsList className="w-full">
                  <TabsTrigger value="events" className="flex-1">My Events</TabsTrigger>
                  <TabsTrigger value="saved" className="flex-1">Saved Events</TabsTrigger>
                  <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="events" className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Registered Events</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {registeredEvents.map((event) => (
                      <div key={event.id} className="animate-fade-in">
                        <EventCard event={event} variant="compact" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="saved" className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Saved Events</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {savedEvents.map((event) => (
                      <div key={event.id} className="animate-fade-in">
                        <EventCard event={event} variant="compact" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="pt-6">
                  {isEditingProfile ? (
                    <Card>
                      <CardHeader>
                        <CardTitle>Edit Profile</CardTitle>
                        <CardDescription>
                          Update your personal information
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue="Jane Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="jane.doe@mit.edu" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="college">College</Label>
                          <Input id="college" defaultValue="MIT University" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" defaultValue="Cambridge, MA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input id="bio" defaultValue="Computer Science student passionate about tech events" />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSaveProfile}>
                          Save Changes
                        </Button>
                      </CardFooter>
                    </Card>
                  ) : (
                    <Card>
                      <CardHeader>
                        <CardTitle>Notification Settings</CardTitle>
                        <CardDescription>
                          Manage how you receive notifications
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">Receive event updates via email</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Browser Notifications</h4>
                            <p className="text-sm text-muted-foreground">Show desktop notifications</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Event Reminders</h4>
                            <p className="text-sm text-muted-foreground">Get reminded about upcoming events</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">New Messages</h4>
                            <p className="text-sm text-muted-foreground">Be notified when you receive messages</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
