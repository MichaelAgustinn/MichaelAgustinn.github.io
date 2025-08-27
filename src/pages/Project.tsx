import React from "react";

const projects = [
  {
    title: "Website Profil ISC",
    description: "Website organisasi dengan Laravel dan role management.",
    link: "https://github.com/QuantumVoid/isc-profile",
  },
  {
    title: "Portofolio Pribadi",
    description: "Portofolio kreatif dengan tema VSCode.",
    link: "https://quantumvoid.github.io/portfolio",
  },
  {
    title: "Genetic Algorithm Solver",
    description: "Implementasi PMX crossover untuk TSP.",
    link: "https://github.com/QuantumVoid/genetic-algorithm",
  },
];

export default function Projects() {
  return (
    <div className="h-full w-full bg-[#1e1e1e] text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <div key={idx} className="card rounded-xl shadow-md p-5 bg-[#252526] hover:bg-[#2d2d2d] transition">
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="mb-3 text-sm text-gray-400">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
