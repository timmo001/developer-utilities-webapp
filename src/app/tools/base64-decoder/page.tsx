import { Metadata } from "next";

import Container from "@/components/shared/container";
import Base64Decoder from "@/components/base64-decoder";

export const metadata: Metadata = {
  title: "Base64 Decoder | Developer Utilities",
  description: "Decode a Base64 encoded string.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="Base64 Decoder" description={metadata.description!}>
      <Base64Decoder />
    </Container>
  );
}
