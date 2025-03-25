
import { useRef } from "react";
import { Search, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/lib/mockData";

interface MapFilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  range: number[];
  setRange: (range: number[]) => void;
  showOnline: boolean;
  setShowOnline: (show: boolean) => void;
  showInPerson: boolean;
  setShowInPerson: (show: boolean) => void;
  showFree: boolean;
  setShowFree: (show: boolean) => void;
  showPaid: boolean;
  setShowPaid: (show: boolean) => void;
  onSearch: (e: React.FormEvent) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

export const MapFilterBar = ({
  selectedCategory,
  setSelectedCategory,
  range,
  setRange,
  showOnline,
  setShowOnline,
  showInPerson,
  setShowInPerson,
  showFree,
  setShowFree,
  showPaid,
  setShowPaid,
  onSearch,
  searchInputRef,
}: MapFilterBarProps) => {
  return (
    <div className="border-b py-3">
      <div className="container px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-3">
        <form
          onSubmit={onSearch}
          className="w-full sm:max-w-sm relative"
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            ref={searchInputRef}
            placeholder="Search location, event, college..."
            className="pl-10 pr-20"
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2"
          >
            Search
          </Button>
        </form>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.name.toLowerCase()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Sliders className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Events</SheetTitle>
                <SheetDescription>
                  Adjust filters to find the perfect events for you
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Distance Range</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Distance
                      </span>
                      <span className="text-sm font-medium">
                        {range[0]} km
                      </span>
                    </div>
                    <Slider
                      value={range}
                      onValueChange={setRange}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
