
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  variant?: "full" | "minimal";
  className?: string;
}

export function SearchBar({ variant = "full", className }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/events?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={cn("w-full", className)}>
      <div className="relative">
        <Search
          className={cn(
            "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
            variant === "minimal" && "text-foreground/60"
          )}
        />
        <Input
          type="search"
          placeholder="Search events, colleges, locations..."
          className={cn(
            "pl-10 transition-all duration-300",
            variant === "minimal" && "bg-secondary/80 border-0 focus-visible:bg-background",
            variant === "full" && "pr-24"
          )}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {variant === "full" && (
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2"
          >
            Search
          </Button>
        )}
      </div>
    </form>
  );
}
