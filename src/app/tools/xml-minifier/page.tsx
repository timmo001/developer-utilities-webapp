import { Metadata } from "next";

import Container from "@/components/shared/container";
import XMLMinifier from "@/components/xml-minifier";

export const metadata: Metadata = {
  title: "XML Minifier | Developer Utilities",
  description: "Minify an XML string.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="XML Minifier" description={metadata.description!}>
      <XMLMinifier />
    </Container>
  );
}
