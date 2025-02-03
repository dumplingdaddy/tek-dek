"use client"; // Ensures this component runs on the client side

import { SkullIcon as Skateboard, Twitter, Github, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-100 text-purple-800 font-retro">
      <div
        className="fixed inset-0 bg-repeat opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      <header className="relative z-10 py-6 bg-purple-800 text-yellow-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skateboard className="w-10 h-10" />
          <h1 className="text-4xl font-bold tracking-wide glow-purple">TEK DEK</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-purple">
              Analyze Token Launches: Verify Tech, Ride the Quality Wave
            </h2>
            <p className="text-xl mb-8">
              Don&#39;t wipe out on sketchy tek. Tek Dek helps you rip through token launches, ensuring authenticity and
              quality before you drop in.
            </p>
            <button
              onClick={() => alert("Thanks for joining the waitlist!")}
              className="inline-block bg-purple-800 hover:bg-purple-700 text-yellow-100 font-bold py-3 px-6 rounded text-lg transition duration-300 transform hover:scale-105 retro-shadow"
            >
              JOIN THE WAITLIST
            </button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 glow-purple">FEATURES COMING SOON</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Twitter className="w-12 h-12" />}
                title="Twitter Verification"
                description="We check if a token launch&#39;s Twitter account is the canonical representation of the company or individual behind it."
              />
              <FeatureCard
                icon={<Github className="w-12 h-12" />}
                title="GitHub Analysis"
                description="Our system grinds thru GitHub repos to detect plagarized or AI-generated code."
              />
              <FeatureCard
                icon={<Globe className="w-12 h-12" />}
                title="Website Content Check"
                description="We ollie through project websites to spot an abundance of AI-generated content."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-800 text-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6 glow-yellow">READY TO SHRED THE TECH?</h3>
            <p className="text-xl mb-8">
              Don&#39;t let technical fakies trip you up. Use Tek Dek to get a clear picture of token launches.
            </p>
            <button
              onClick={() => alert("You're on the list! We'll be in touch soon.")}
              className="inline-block bg-yellow-100 hover:bg-yellow-200 text-purple-800 font-bold py-3 px-6 rounded text-lg transition duration-300 transform hover:scale-105 retro-shadow"
            >
              GRAB A SPOT ON THE WAITLIST
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 bg-purple-800 text-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TEK DEK.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="bg-yellow-200 border-2 border-purple-800 p-6 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="flex justify-center mb-4 text-purple-800">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-purple-800">{title}</h4>
      <p className="text-purple-700">{description}</p>
    </div>
  )
}
