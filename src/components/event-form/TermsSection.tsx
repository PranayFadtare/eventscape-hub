
import { Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TermsSection() {
  return (
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
  );
}
