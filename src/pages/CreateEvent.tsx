
import { Layout } from "@/components/layout/Layout";
import { EventForm } from "@/components/event-form/EventForm";

export default function CreateEvent() {
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

          <EventForm />
        </div>
      </div>
    </Layout>
  );
}
