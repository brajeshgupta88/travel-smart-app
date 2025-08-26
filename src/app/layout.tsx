import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TravelSmart Planner",
  description: "Plan your trips with AI-powered TravelSmart API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="border-b border-[var(--color-border)] bg-[var(--background)] sticky top-0 z-50">
          <div className="container flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-[var(--color-accent)]">
              ✈️ TravelSmart
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/planner" className="hover:text-[var(--color-accent)]">
                Plan Trip
              </Link>
              <Link href="/itinerary" className="hover:text-[var(--color-accent)]">
                My Itinerary
              </Link>
              <Link href="/about" className="hover:text-[var(--color-accent)]">
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-8 min-h-[calc(100vh-8rem)]">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--color-border)] py-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} TravelSmart. Built with ❤️ using Next.js & Tailwind.
          </p>
        </footer>
      </body>
    </html>
  );
}
