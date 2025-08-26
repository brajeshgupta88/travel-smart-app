"use client";
import { useState } from "react";
import { useItineraryStore } from "@/store/itineraryStore";

interface Props {
  onMissingInfo: (q: string | null) => void;
}

export default function TravelForm({ onMissingInfo }: Props) {
  const [request, setRequest] = useState("");
  const { setItinerary } = useItineraryStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/travel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request })
    });
    const data = await res.json();
    if (data.missing) {
      onMissingInfo(data.missing);
    } else {
      onMissingInfo(null);
      setItinerary(data.itinerary || []);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        placeholder="e.g., Plan a trip to Paris for 2 people in September"
        className="flex-1 border rounded-lg px-4 py-2"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-[var(--color-accent)] text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
