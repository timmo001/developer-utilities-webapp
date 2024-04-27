export default async function Container({
  title,
  description,
  children,
}: Readonly<{
  title: string;
  description: string;
  children: JSX.Element;
}>): Promise<JSX.Element> {
  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <h1 className="text-4xl font-thin">{title}</h1>
      <h2 className="text-md font-thin mb-8">{description}</h2>
      {children}
    </section>
  );
}
