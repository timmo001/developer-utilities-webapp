import { Metadata } from "next";

import Container from "@/components/shared/container";
import Base64ToBinary from "@/components/base64-to-binary";

export const metadata: Metadata = {
  title: "Base64 to Binary File | Developer Utilities",
  description: "Decode a Base64 encoded string to a binary file.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="Base64 to Binary File" description={metadata.description!}>
      <Base64ToBinary />
    </Container>
  );
}
