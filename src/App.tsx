import { useEffect } from "react";
import { siteContent } from "@/content/site";
import { SectionRenderer } from "@/components/sections/registry";

export default function App() {
  useEffect(() => {
    document.title = siteContent.page.title || siteContent.site.name;

    const description =
      siteContent.page.description || siteContent.site.tagline;
    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  return <SectionRenderer sections={siteContent.sections} />;
}
