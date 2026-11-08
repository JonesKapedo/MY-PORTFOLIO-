import { CONCERNS, getService, SERVICES } from "./site";
import { WORK_CASES } from "./work-cases";

export type SearchHit =
  | {
      kind: "service";
      id: string;
      title: string;
      teaser: string;
      to: "/services/$slug";
      params: { slug: string };
    }
  | {
      kind: "concern";
      id: string;
      title: string;
      teaser: string;
      to: "/concerns/$slug";
      params: { slug: string };
    }
  | {
      kind: "work";
      id: string;
      title: string;
      teaser: string;
      to: "/work";
      hash: string;
    };

export function searchCatalog(query: string, limit = 12): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const hits: SearchHit[] = [];

  for (const s of SERVICES) {
    const hay = [s.name, s.blurb, s.outcome, s.id].join(" ").toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        kind: "service",
        id: s.id,
        title: s.name,
        teaser: s.outcome,
        to: "/services/$slug",
        params: { slug: s.id },
      });
    }
  }

  for (const c of CONCERNS) {
    const service = getService(c.serviceId);
    const hay = [c.title, c.teaser, service?.name ?? "", ...c.situation]
      .join(" ")
      .toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        kind: "concern",
        id: c.slug,
        title: c.title,
        teaser: c.teaser,
        to: "/concerns/$slug",
        params: { slug: c.slug },
      });
    }
  }

  for (const w of WORK_CASES) {
    const hay = [w.name, w.sector, w.headline, w.situation, w.installed]
      .join(" ")
      .toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        kind: "work",
        id: w.id,
        title: w.name,
        teaser: w.headline,
        to: "/work",
        hash: w.id,
      });
    }
  }

  return hits.slice(0, limit);
}
