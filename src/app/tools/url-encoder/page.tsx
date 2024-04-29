import { Metadata } from "next";

import Container from "@/components/shared/container";
import URLEncoder from "@/components/url-encoder";

export const metadata: Metadata = {
  title: "URL Encoder | Developer Utilities",
  description: "URL Encode strings.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="URL Encoder" description={metadata.description!}>
      <URLEncoder />
    </Container>
  );
}
