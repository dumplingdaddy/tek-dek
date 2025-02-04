"use client"; 
import { useState } from "react";
import { Skull,Twitter, Github, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-100 text-purple-800 font-retro">
      <header className="relative z-10 py-6 bg-purple-800 text-yellow-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skull className="w-10 h-10" /> 
          <h1 className="text-4xl font-bold tracking-wide glow-purple">TEK DEK</h1>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </header>

      <main className="flex-grow relative z-10">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-purple">
              Analyze Token Launches: Verify Tech, Ride the Quality Wave
            </h2>
            <p className="text-xl mb-8">
              Don&#39;t wipe out on sketchy tek. Tek Dek helps you grind through token launches, ensuring authenticity and
              quality before you drop a bag.
            </p>
            <WaitlistSignup />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 glow-purple">FEATURES</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Twitter className="w-12 h-12" />}
                title="Twitter Verification"
                description="We check if a token launch&#39;s Twitter is a canonical representation of the company or person."
              />
              <FeatureCard
                icon={<Github className="w-12 h-12" />}
                title="GitHub Analysis"
                description="Our system grinds through GitHub repos to detect plagarized or AI-generated code."
              />
              <FeatureCard
                icon={<Globe className="w-12 h-12" />}
                title="Website Content Check"
                description="We muck through project websites to spot an abundance of AI-generated content - usually indicated bad tek"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 bg-purple-800 text-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TEK DEK</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="bg-yellow-200 border-2 border-purple-800 p-6 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="flex justify-center mb-4 text-purple-800">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-purple-800">{title}</h4>
      <p className="text-purple-700">{description}</p>
    </div>
  );
}

function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("/api/waitlist", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("You're on the waitlist! 🎉");
      setEmail(""); // Clear input
    } else {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={() => document.getElementById("waitlistModal")?.classList.remove("hidden")}
        className="bg-purple-800 hover:bg-purple-700 text-yellow-100 font-bold py-3 px-6 rounded text-lg transition duration-300 transform hover:scale-105 retro-shadow"
      >
        JOIN THE WAITLIST
      </button>

      {/* Modal */}
      <div id="waitlistModal" className="hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg text-black">
          <h3 className="text-xl font-bold mb-4">Join the Waitlist</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-400 rounded"
              required
            />
            <button type="submit" className="bg-purple-800 text-white py-2 px-4 rounded">Sign Up</button>
          </form>
          <p className="mt-2">{status}</p>
          <button onClick={() => document.getElementById("waitlistModal")?.classList.add("hidden")} className="mt-4 text-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
