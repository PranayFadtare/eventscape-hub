
import { MapPin } from "lucide-react";

export const MapPlaceholder = () => (
  <div className="h-full w-full flex items-center justify-center bg-muted/30 rounded-lg relative overflow-hidden">
    <div className="absolute inset-0 bg-noise opacity-20"></div>
    <div className="text-center p-5">
      <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-4" />
      <h3 className="text-xl font-medium mb-2">Map View</h3>
      <p className="text-muted-foreground max-w-md">
        In a real implementation, this would be a Mapbox map showing event
        locations with interactive markers.
      </p>
    </div>
  </div>
);
