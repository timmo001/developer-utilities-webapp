import { Metadata } from "next";

import Container from "@/components/shared/container";
import JSONMinifier from "@/components/json-minifier";

export const metadata: Metadata = {
  title: "JSON Minifier | Developer Utilities",
  description: "Minify a JSON string.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="JSON Minifier" description={metadata.description!}>
      <JSONMinifier />
    </Container>
  );
}
