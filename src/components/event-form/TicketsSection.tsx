
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function TicketsSection() {
  const [isFree, setIsFree] = useState(true);
  const [date, setDate] = useState<Date>();

  return (
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
  );
}
