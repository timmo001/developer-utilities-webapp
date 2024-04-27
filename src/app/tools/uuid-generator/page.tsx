import { Metadata } from "next";

import Container from "@/components/shared/container";
import UUIDGenerator from "@/components/uuid-generator";

export const metadata: Metadata = {
  title: "UUID Generator | Developer Utilities",
  description: "Generate a UUID (Universally Unique Identifier).",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="UUID Generator" description={metadata.description!}>
      <UUIDGenerator />
    </Container>
  );
}
