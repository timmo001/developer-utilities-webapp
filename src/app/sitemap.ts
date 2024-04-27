import { MetadataRoute } from "next";

import { linksData } from "@/components/shared/links";

export const baseUrl = "https://developer-utilities.timmo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const result: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];

  for (const link of Object.values(linksData)) {
    result.push({
      url: `${baseUrl}${link.href}`,
      lastModified: new Date(),
    });

    if (link.paths) {
      for (const path of link.paths) {
        result.push({
          url: `${baseUrl}${path.href}`,
          lastModified: new Date(),
        });
      }
    }
  }

  return result;
}
