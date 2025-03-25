
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, MapPin, Clock, Upload, Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/mockData";

export default function CreateEvent() {
  const [date, setDate] = useState<Date>();
  const [isOnline, setIsOnline] = useState(false);
  const [isFree, setIsFree] = useState(true);

  return (
    <Layout>
      <div className="container px-4 sm:px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Event</h1>
            <p className="text-muted-foreground">
              Fill in the details below to create your event. All fields marked with * are required.
            </p>
          </div>

          <form className="space-y-8">
            {/* Basic Information */}
            <div className="glass p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-semibold">Basic Information</h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Event Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter event title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your event"
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">
                    Category <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id.toString()}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="glass p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-semibold">Cover Image</h2>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <div className="mx-auto flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <h3 className="text-lg font-medium">Drop your image here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse files (SVG, PNG, JPG)
                  </p>
                  <Button variant="outline">Upload Image</Button>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="glass p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-semibold">Date & Time</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">
                    Date <span className="text-red-500">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">
                    Time <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="time"
                      placeholder="Select a time"
                      type="time"
                      className="pl-10"
                    />
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass p-6 rounded-lg space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Location</h2>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="isOnline">Online Event</Label>
                  <Switch
                    id="isOnline"
                    checked={isOnline}
                    onCheckedChange={setIsOnline}
                  />
                </div>
              </div>

              {isOnline ? (
                <div className="space-y-2">
                  <Label htmlFor="onlineLink">
                    Event Link <span className="text-red-500">*</span>
                  </Label>
                  <Input id="onlineLink" placeholder="https://meeting.link/..." />
                  <p className="text-sm text-muted-foreground">
                    Add the link to your online event (Zoom, Google Meet, etc.)
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      Location <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="location"
                        placeholder="Search for a location"
                        className="pl-10"
                      />
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Start typing to search for a location
                    </p>
                  </div>

                  <div className="h-[200px] bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Map will appear here after you select a location
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tickets */}
            <div className="glass p-6 rounded-lg space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Tickets</h2>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="isFree">Free Event</Label>
                  <Switch
                    id="isFree"
                    checked={isFree}
                    onCheckedChange={setIsFree}
                  />
                </div>
              </div>

              {!isFree && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">
                      Ticket Price <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input id="price" type="number" className="pl-8" min="0" step="0.01" placeholder="0.00" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availableTickets">
                      Available Tickets <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="availableTickets"
                      type="number"
                      min="1"
                      placeholder="100"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="registrationDeadline">Registration Deadline</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a deadline"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="glass p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-semibold">Terms & Conditions</h2>
              <div className="space-y-2">
                <Label htmlFor="terms">Event Terms & Conditions</Label>
                <Textarea
                  id="terms"
                  placeholder="Enter the terms and conditions for your event..."
                  rows={6}
                />
                <p className="text-sm text-muted-foreground flex items-start">
                  <Info className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  Add any specific rules, restrictions, or policies participants should know about.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" size="lg">
                Create Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
