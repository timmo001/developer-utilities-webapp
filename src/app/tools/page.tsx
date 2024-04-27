import { Metadata } from "next";
import Header from "@/components/header";
import Links, { LinksKeys } from "@/components/links";

export const metadata: Metadata = {
  title: "Tools | Developer Utilities",
};

export default async function Tools(): Promise<JSX.Element> {
  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <Header />
      <Links itemKey={LinksKeys.Tools} />
    </section>
  );
}
