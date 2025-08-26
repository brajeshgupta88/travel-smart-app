"use client";

interface ChatMessage {
  role: "user" | "system";
  content: string;
}

export default function ChatBox({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="space-y-3">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-3 rounded-lg max-w-lg ${
            msg.role === "user"
              ? "bg-blue-500 text-white self-end ml-auto"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}
