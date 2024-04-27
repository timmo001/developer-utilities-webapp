import { Metadata } from "next";

import Container from "@/components/shared/container";
import Base64Encoder from "@/components/base64-encoder";

export const metadata: Metadata = {
  title: "Base64 Encoder | Developer Utilities",
  description: "Decode a Base64 encoded string.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="Base64 Encoder" description={metadata.description!}>
      <Base64Encoder />
    </Container>
  );
}
