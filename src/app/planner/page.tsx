"use client";
import { useState } from "react";
import TravelForm from "@/components/TravelForm";
import MissingInfoPrompt from "@/components/MissingInfoPrompt";
import ItineraryCard from "@/components/ItineraryCard";
import { useItineraryStore } from "@/store/itineraryStore";
import Itinerary from "@/components/Itinerary";


export default function PlannerPage() {
  const { itinerary } = useItineraryStore();
  const [missingInfo, setMissingInfo] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
      <TravelForm onMissingInfo={setMissingInfo} />
      {missingInfo && <MissingInfoPrompt question={missingInfo} />}
      {itinerary.length > 0 && (
        <div className="grid gap-4">
          {itinerary.map((item, idx) => (
            <ItineraryCard key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
