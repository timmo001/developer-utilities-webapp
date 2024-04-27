import { MetadataRoute } from "next";

import { metadata as base64DecoderMetadata } from "@/app/tools/base64-decoder/page";
import { metadata as base64EncoderMetadata } from "@/app/tools/base64-encoder/page";
import { metadata as jsonFormatterMetadata } from "@/app/tools/json-formatter/page";
import { metadata as jsonMinifierMetadata } from "@/app/tools/json-minifier/page";
import { metadata as jwtDecoderMetadata } from "@/app/tools/jwt-decoder/page";
import { metadata as urlEncoderMetadata } from "@/app/tools/url-encoder/page";
import { metadata as urlDecoderMetadata } from "@/app/tools/url-decoder/page";
import { metadata as uuidGeneratorMetadata } from "@/app/tools/uuid-generator/page";
import { metadata as xmlFormatterMetadata } from "@/app/tools/xml-formatter/page";
import { metadata as xmlMinifierMetadata } from "@/app/tools/xml-minifier/page";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Developer Utilities",
    short_name: "Developer Utilities",
    description: "A collection of utilities for developers",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    categories: ["developer", "utilities"],
    lang: "en",
    icons: [
      {
        src: "/icon",
        sizes: "256x256",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: base64DecoderMetadata.title as string,
        description: base64DecoderMetadata.description as string,
        url: "/tools/base64-decoder",
      },
      {
        name: base64EncoderMetadata.title as string,
        description: base64EncoderMetadata.description as string,
        url: "/tools/base64-encoder",
      },
      {
        name: jsonFormatterMetadata.title as string,
        description: jsonFormatterMetadata.description as string,
        url: "/tools/json-formatter",
      },
      {
        name: jsonMinifierMetadata.title as string,
        description: jsonMinifierMetadata.description as string,
        url: "/tools/json-minifier",
      },
      {
        name: jwtDecoderMetadata.title as string,
        description: jwtDecoderMetadata.description as string,
        url: "/tools/jwt-decoder",
      },
      {
        name: urlEncoderMetadata.title as string,
        description: urlEncoderMetadata.description as string,
        url: "/tools/url-encoder",
      },
      {
        name: urlDecoderMetadata.title as string,
        description: urlDecoderMetadata.description as string,
        url: "/tools/url-decoder",
      },
      {
        name: uuidGeneratorMetadata.title as string,
        description: uuidGeneratorMetadata.description as string,
        url: "/tools/uuid-generator",
      },
      {
        name: xmlFormatterMetadata.title as string,
        description: xmlFormatterMetadata.description as string,
        url: "/tools/xml-formatter",
      },
      {
        name: xmlMinifierMetadata.title as string,
        description: xmlMinifierMetadata.description as string,
        url: "/tools/xml-minifier",
      },
    ],
  };
}
