import React from "react";

const stats = [
  { label: "companies power team collaboration", value: "300,000+" },
  { label: "countries and territories have companies", value: "200+" },
  { label: "of Fortune 500 companies use Atlassian", value: "80%" },
];

const testimonials = [
  {
    quote: "With Atlassian cloud, everything regarding server maintenance is done for us, and there’s less downtime and better performance.",
    author: "Mehmet Sari",
    role: "Modern Collaboration Platform Team, Mercedes Benz",
    category: "Large enterprise",
  },
  {
    quote: "For the two teams we've already migrated from Wrike to Jira, each of those will amount to $150,000/year in savings.",
    author: "Joe Cotant",
    role: "Senior Technical Program Manager, Roblox",
    category: "Enterprise",
  },
  {
    quote: "By leveraging Jira and Confluence for automated reporting, we’re saving over 800 hours and $500k per year.",
    author: "Wais Mojaddidi",
    role: "Director of Agile Delivery, Royal Caribbean",
    category: "Large enterprise",
  }
];

export function SocialProof() {
  return (
    <section className="py-32 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="space-y-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-atl-dark">
            Teams across the globe run on Atlassian
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-5xl font-bold text-atl-blue">{stat.value}</div>
                <p className="text-atl-dark/60 font-medium max-w-[200px] mx-auto leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
               <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t.category}</span>
                  <p className="text-xl text-atl-dark leading-relaxed font-medium italic">"{t.quote}"</p>
               </div>
               <div className="pt-8 space-y-1">
                  <div className="font-bold text-atl-dark">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
               </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
           <p className="text-center text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Trusted by world-class teams</p>
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <LogoPlaceholder name="Mercedes-Benz" />
              <LogoPlaceholder name="Roblox" />
              <LogoPlaceholder name="Royal Caribbean" />
              <LogoPlaceholder name="Lumen" />
              <LogoPlaceholder name="Dropbox" />
              <LogoPlaceholder name="Sony Music" />
           </div>
        </div>
      </div>
    </section>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="h-8 flex items-center justify-center font-black text-2xl tracking-tighter text-gray-800">
      {name}
    </div>
  );
}
