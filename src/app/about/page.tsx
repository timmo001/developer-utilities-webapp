import Header from "@/components/header";

export default async function About(): Promise<JSX.Element> {
  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <Header />
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-4 text-lg text-gray-200">
        This is a placeholder for the about page.
      </p>
    </section>
  );
}
