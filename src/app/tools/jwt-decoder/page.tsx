import { Metadata } from "next";

import Container from "@/components/shared/container";
import JWTDecoder from "@/components/jwt-decoder";

export const metadata: Metadata = {
  title: "JWT Decoder | Developer Utilities",
  description: "Decode a JWT (JSON Web Token).",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="JWT Decoder" description={metadata.description!}>
      <JWTDecoder />
    </Container>
  );
}
