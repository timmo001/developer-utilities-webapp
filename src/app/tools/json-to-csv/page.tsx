import { Metadata } from "next";

import Container from "@/components/shared/container";
import JSONToCSV from "@/components/json-to-csv";

export const metadata: Metadata = {
  title: "JSON to CSV | Developer Utilities",
  description: "Convert JSON to CSV format.",
};

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container title="JSON Minifier" description={metadata.description!}>
      <JSONToCSV />
    </Container>
  );
}
