"use client";

import Script from "next/script";
import { schemaScripts } from "@/config/seo";

export function SeoDefaults() {
  return (
    <>
      {schemaScripts.map((script, index) => (
        <Script
          key={index}
          type="application/ld+json"
          id={`schema-${index}`}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script) }}
        />
      ))}
    </>
  );
}
