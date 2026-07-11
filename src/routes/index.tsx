import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AniStream — Catalogue et suivi d'animés" },
      {
        name: "description",
        content:
          "Recherchez, découvrez et sauvegardez vos animés préférés dans une interface cinématique inspirée des grandes plateformes de streaming.",
      },
      { property: "og:title", content: "AniStream — Catalogue et suivi d'animés" },
      {
        property: "og:description",
        content:
          "Votre catalogue personnel d'animés, style streaming — recherche via Jikan (MyAnimeList).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/app.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-300">
      <p>Chargement d'AniStream…</p>
    </div>
  );
}
