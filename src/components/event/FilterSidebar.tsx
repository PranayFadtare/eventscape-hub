
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
import { Search, MapPin } from "lucide-react";
import { categories } from "@/lib/mockData";

interface FilterSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  showOnline: boolean;
  setShowOnline: (show: boolean) => void;
  showInPerson: boolean;
  setShowInPerson: (show: boolean) => void;
  showFree: boolean;
  setShowFree: (show: boolean) => void;
  showPaid: boolean;
  setShowPaid: (show: boolean) => void;
  handleSearch: (e: React.FormEvent) => void;
  handleCategoryChange: (value: string) => void;
  clearFilters: () => void;
}

export function FilterSidebar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  showOnline,
  setShowOnline,
  showInPerson,
  setShowInPerson,
  showFree,
  setShowFree,
  showPaid,
  setShowPaid,
  handleSearch,
  handleCategoryChange,
  clearFilters,
}: FilterSidebarProps) {
  return (
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
              <SelectItem value="all">All Categories</SelectItem>
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
  );
}
