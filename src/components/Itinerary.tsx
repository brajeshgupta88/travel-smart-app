"use client";

import React from "react";
import ItineraryCard from "@/components/ItineraryCard";

export interface Flight {
  id: string;
  type: "flight";
  airline: string;
  from: string;
  to: string;
  departure: string; // ISO string
  arrival: string;   // ISO string
}

export interface Hotel {
  id: string;
  type: "hotel";
  name: string;
  location: string;
  checkIn: string;  // ISO string
  checkOut: string; // ISO string
}

export interface Activity {
  id: string;
  type: "activity";
  name: string;
  location: string;
  startTime: string; // ISO string
  endTime: string;   // ISO string
}

export type ItineraryItem = Flight | Hotel | Activity;

interface Props {
  items: ItineraryItem[];
  onEdit?: (item: ItineraryItem) => void;
}

/**
 * Sort itinerary items chronologically by their primary datetime field.
 */
function sortItinerary(items: ItineraryItem[]): ItineraryItem[] {
  return [...items].sort((a, b) => {
    const timeA =
      a.type === "flight"
        ? a.departure
        : a.type === "hotel"
        ? a.checkIn
        : a.startTime;
    const timeB =
      b.type === "flight"
        ? b.departure
        : b.type === "hotel"
        ? b.checkIn
        : b.startTime;
    return new Date(timeA).getTime() - new Date(timeB).getTime();
  });
}

const Itinerary: React.FC<Props> = ({ items, onEdit }) => {
  const sorted = sortItinerary(items);

  if (sorted.length === 0) {
    return <p className="text-gray-500 text-center">No itinerary available</p>;
  }

  return (
    <div className="grid gap-4">
      {sorted.map((item) => (
        <ItineraryCard key={item.id} item={item}  />
      ))}
    </div>
  );
};

export default Itinerary;
