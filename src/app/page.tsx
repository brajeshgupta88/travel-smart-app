import Link from "next/link";
import ItineraryCard from "@/components/ItineraryCard";
import Itinerary from "@/components/Itinerary";
export default function HomePage() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to TravelSmart Planner</h1>
      <p className="text-lg text-gray-600 mb-8">
        Plan flights, hotels, and activities easily using the TravelSmart API.
      </p>
      <Link
        href="/planner"
        className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition"
      >
        Start Planning
      </Link>
    </section>
  );
}
