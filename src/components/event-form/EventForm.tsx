
import { Button } from "@/components/ui/button";
import { BasicInfoSection } from "./BasicInfoSection";
import { CoverImageSection } from "./CoverImageSection";
import { DateTimeSection } from "./DateTimeSection";
import { LocationSection } from "./LocationSection";
import { TicketsSection } from "./TicketsSection";
import { TermsSection } from "./TermsSection";

export function EventForm() {
  return (
    <form className="space-y-8">
      <BasicInfoSection />
      <CoverImageSection />
      <DateTimeSection />
      <LocationSection />
      <TicketsSection />
      <TermsSection />

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Create Event
        </Button>
      </div>
    </form>
  );
}
