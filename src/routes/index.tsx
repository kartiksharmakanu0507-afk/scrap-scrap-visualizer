import { createFileRoute } from "@tanstack/react-router";
import ArchitecturePoster from "../components/architecture-poster";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Technical Approach | Scrap अड्डा — SIH 2026" },
      { name: "description", content: "Scrap अड्डा technical architecture for Smart India Hackathon 2026." },
      { property: "og:title", content: "Scrap अड्डा Technical Approach" },
      { property: "og:description", content: "The complete SIH 2026 technical architecture, data flow, and implementation process." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ArchitecturePoster />;
}
