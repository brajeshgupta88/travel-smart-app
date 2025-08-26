// src/app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">About TravelSmart</h1>

      {/* About Section */}
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          Welcome to <span className="font-semibold">TravelSmart</span>, your
          AI-powered travel companion that makes planning trips effortless,
          personalized, and smarter than ever before.
        </p>

        <p>
          Unlike traditional booking platforms, TravelSmart acts as your{" "}
          <span className="font-semibold">Agent AI</span>, taking a simple
          prompt about your travel requirements—such as destination, dates,
          budget, and preferences—and instantly curating a{" "}
          <span className="font-semibold">customized travel plan</span> just for
          you.
        </p>
      </div>

      {/* Unique Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">What Makes TravelSmart Unique?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>AI-Curated Itineraries –</strong> Get a complete travel plan
            optimized for your budget, lifestyle, and interests.
          </li>
          <li>
            <strong>Seamless Integration –</strong> From flights and cabs to
            hotels and activities, TravelSmart brings everything together in one
            place.
          </li>
          <li>
            <strong>Smart Optimization –</strong> We plan hotels near your daily
            activities, reducing commute time so you can spend more time
            exploring and enjoying.
          </li>
          <li>
            <strong>Local Recommendations –</strong> Discover the best
            restaurants and hidden gems near the places you visit.
          </li>
          <li>
            <strong>Budget-Friendly Planning –</strong> Whether you’re a luxury
            traveler or a backpacker, TravelSmart ensures you get the most value
            for your money.
          </li>
        </ul>
      </div>

      {/* Why TravelSmart */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Why TravelSmart?</h2>
        <p className="text-gray-700 leading-relaxed">
          Planning a trip can often feel overwhelming—searching multiple sites
          for flights, hotels, cabs, and things to do. TravelSmart takes away
          that stress by acting like a{" "}
          <span className="font-semibold">personal travel concierge</span>,
          handling the heavy lifting for you. The result is a{" "}
          <span className="font-semibold">feasible, well-structured itinerary</span>{" "}
          tailored to your needs, saving you both <strong>time and money</strong>.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          With TravelSmart, you don’t just book a trip—you experience travel the
          smarter way.
        </p>
      </div>

      {/* Founders Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Founders</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Brajesh Gupta */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/brajesh-gupta.jpg"
              alt="Brajesh Gupta"
              width={160}
              height={160}
              className="rounded-full shadow-lg object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">Brajesh Gupta</h3>
            <p className="text-gray-600 mt-1">Co-Founder</p>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              A seasoned technology leader with 20+ years of experience
              architecting enterprise-scale, cloud-native, and AI-driven
              platforms across fintech, e-commerce, and digital ecosystems.
            </p>
          </div>

          {/* G Suresh */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/g-suresh.png"
              alt="G Suresh"
              width={160}
              height={160}
              className="rounded-full shadow-lg object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">G Suresh</h3>
            <p className="text-gray-600 mt-1">Co-Founder</p>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              An experienced entrepreneur and innovator with a strong background
              in building customer-first solutions, combining business insight
              with technology to create impactful travel experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
