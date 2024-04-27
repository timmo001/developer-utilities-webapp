import { Metadata } from "next";

import Container from "@/components/shared/container";
import URLDecoder from "@/components/url-decoder";

export const metadata: Metadata = {
  title: "URL Decoder | Developer Utilities",
  description: "Decode URL encoded strings.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="URL Decoder" description={metadata.description!}>
      <URLDecoder />
    </Container>
  );
}
