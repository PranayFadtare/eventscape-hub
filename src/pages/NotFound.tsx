
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="container px-4 sm:px-6 text-center max-w-md">
          <div className="glass p-10 rounded-lg">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">Go Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
