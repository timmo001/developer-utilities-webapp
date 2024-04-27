import { Metadata } from "next";

import Container from "@/components/shared/container";
import XMLFormatter from "@/components/xml-formatter";

export const metadata: Metadata = {
  title: "XML Formatter | Developer Utilities",
  description: "Format an XML string.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="XML Formatter" description={metadata.description!}>
      <XMLFormatter />
    </Container>
  );
}
