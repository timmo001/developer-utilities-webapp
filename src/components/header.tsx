export default async function Header(): Promise<JSX.Element> {
  return (
    <section className="flex flex-col items-center justify-center w-full p-8 bg-slate-950 rounded-lg">
      <h1 className="text-4xl font-bold">Developer Utilities</h1>
      <p className="mt-4 text-lg text-gray-600">
        A collection of utilities for developers.
      </p>
    </section>
  );
}
