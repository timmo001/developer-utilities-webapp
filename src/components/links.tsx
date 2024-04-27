import Link from "next/link";

interface Path {
  name: string;
  href: string;
}

interface LinksItem {
  title: string;
  paths: Array<Path>;
}

export enum LinksKeys {
  Tools = "tools",
}

type LinksData = Record<LinksKeys, LinksItem>;

const linksData: LinksData = {
  [LinksKeys.Tools]: {
    title: "Tools",
    paths: [{ name: "Placeholder", href: "/tools" }],
  },
};

export default async function Links({
  itemKey,
}: {
  itemKey: LinksKeys;
}): Promise<JSX.Element> {
  const linksItem = linksData[itemKey];

  if (!linksItem) {
    return <div>Links not found</div>;
  }

  const { title, paths } = linksItem;

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-4 text-lg text-gray-200">
        {paths.map(({ name, href }) => (
          <li
            key={name}
            className="mt-2 bg-indigo-900 px-4 py-2 rounded transition-colors duration-300 hover:bg-indigo-700"
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
