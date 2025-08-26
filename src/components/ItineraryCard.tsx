export default function ItineraryCard({ item }: { item: any }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="font-semibold">{item.type}</h3>
      <p className="text-sm">{item.detail}</p>
      <p className="text-xs text-gray-500">{item.dateTime}</p>
    </div>
  );
}
