import { Metadata } from "next";

import Container from "@/components/shared/container";
import JSONFormatter from "@/components/json-formatter";

export const metadata: Metadata = {
  title: "JSON Formatter | Developer Utilities",
  description: "Format a JSON string.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="JSON Formatter" description={metadata.description!}>
      <JSONFormatter />
    </Container>
  );
}
