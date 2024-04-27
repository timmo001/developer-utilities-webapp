import Link from "next/link";

export interface LinksItem {
  title: string;
  href: string;
  paths?: Array<LinksItem>;
}

export enum LinksKeys {
  About = "about",
  Tools = "tools",
}

export type LinksData = Record<LinksKeys, LinksItem>;

export const linksData: LinksData = {
  [LinksKeys.About]: {
    title: "About",
    href: "/about",
  },
  [LinksKeys.Tools]: {
    title: "Tools",
    href: "/tools",
    paths: [{ title: "UUID Generator", href: "/tools/uuid-generator" }],
  },
};

export default async function Links({
  itemKey,
}: {
  itemKey: LinksKeys;
}): Promise<JSX.Element> {
  const linksItem = linksData[itemKey];
  if (!linksItem) return <div>Links not found</div>;

  const { title, paths } = linksItem;

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <h2 className="text-2xl font-thin">{title}</h2>
      {paths && paths.length > 0 && (
        <>
          <ul className="mt-4 text-lg text-gray-200">
            {paths.map(({ title, href }: LinksItem, index: number) => (
              <li
                key={index}
                className="mt-2 bg-indigo-900 px-4 py-2 rounded transition-colors duration-300 hover:bg-indigo-700"
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
