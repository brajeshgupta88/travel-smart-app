import { create } from "zustand";

interface ItineraryItem {
  type: string;
  detail: string;
  dateTime: string;
}

interface ItineraryState {
  itinerary: ItineraryItem[];
  setItinerary: (items: ItineraryItem[]) => void;
}

export const useItineraryStore = create<ItineraryState>((set) => ({
  itinerary: [],
  setItinerary: (items) => set({ itinerary: items })
}));
