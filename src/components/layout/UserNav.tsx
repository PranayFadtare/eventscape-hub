
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Calendar, LogOut, Settings, User, Heart } from "lucide-react";

interface UserNavProps {
  isMobile?: boolean;
}

export function UserNav({ isMobile = false }: UserNavProps) {
  // Placeholder for user authentication state
  const isAuthenticated = false;
  const user = {
    name: "User",
    email: "user@example.com",
    image: "",
  };

  if (!isAuthenticated) {
    if (isMobile) {
      return (
        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link to="/sign-in">Sign In</Link>
        </Button>
        <Button asChild size="sm">
          <Link to="/sign-up">Sign Up</Link>
        </Button>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <Link
          to="/dashboard"
          className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
        >
          <User className="h-4 w-4" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/saved"
          className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
        >
          <Heart className="h-4 w-4" />
          <span>Saved Events</span>
        </Link>
        <Link
          to="/dashboard/my-events"
          className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
        >
          <Calendar className="h-4 w-4" />
          <span>My Events</span>
        </Link>
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start text-sm px-3 py-2 hover:bg-secondary rounded-md"
        >
          <LogOut className="h-4 w-4 mr-2" />
          <span>Log out</span>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-9 w-9 rounded-full"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 glass" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/dashboard" className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/saved" className="cursor-pointer">
              <Heart className="mr-2 h-4 w-4" />
              <span>Saved Events</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/my-events" className="cursor-pointer">
              <Calendar className="mr-2 h-4 w-4" />
              <span>My Events</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/settings" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
