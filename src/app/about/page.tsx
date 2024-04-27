import { Metadata } from "next";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "About | Developer Utilities",
};

export default async function About(): Promise<JSX.Element> {
  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <Header />
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-4 text-lg">
        This is a webapp that provides a collection of utilities for developers.
        It is built using Next.js and TypeScript.
      </p>
      <p className="mt-4 text-lg">
        This webapp provides a single place for developers to access a
        collection of utilities that they might need in their day-to-day work.
        It also provides an alternative place to use private data that you don't
        want to share with other services.
      </p>

      <h3 className="mt-8 text-xl font-bold">Links</h3>

      <ul className="mt-4 text-lg">
        <li>
          <a
            href="https://github.com/timmo001/developer-utilities-webapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
