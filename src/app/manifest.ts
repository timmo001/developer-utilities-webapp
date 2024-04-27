import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Developer Utilities",
    short_name: "Developer Utilities",
    description: "A collection of utilities for developers",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [
      {
        src: "/icon",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
