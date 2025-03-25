
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CoverImageSection() {
  return (
    <div className="glass p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Cover Image</h2>
      <div className="border-2 border-dashed rounded-lg p-8 text-center">
        <div className="mx-auto flex flex-col items-center justify-center">
          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
          <h3 className="text-lg font-medium">Drop your image here</h3>
          <p className="text-sm text-muted-foreground mb-4">
            or click to browse files (SVG, PNG, JPG)
          </p>
          <Button variant="outline">Upload Image</Button>
        </div>
      </div>
    </div>
  );
}
