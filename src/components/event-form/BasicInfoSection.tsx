
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/mockData";

export function BasicInfoSection() {
  return (
    <div className="glass p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Basic Information</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">
            Event Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            placeholder="Enter event title"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">
            Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Describe your event"
            rows={5}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">
            Category <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
