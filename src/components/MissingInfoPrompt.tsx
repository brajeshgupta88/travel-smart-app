"use client";
export default function MissingInfoPrompt({ question }: { question: string }) {
  return (
    <div className="p-4 border rounded-lg bg-yellow-50">
      <p className="text-sm text-gray-700">{question}</p>
    </div>
  );
}
