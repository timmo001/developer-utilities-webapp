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
    paths: [
      { title: "Base64 Decoder", href: "/tools/base64-decoder" },
      { title: "Base64 Encoder", href: "/tools/base64-encoder" },
      { title: "JSON Formatter", href: "/tools/json-formatter" },
      { title: "JSON Minifier", href: "/tools/json-minifier" },
      { title: "JWT Decoder", href: "/tools/jwt-decoder" },
      { title: "URL Decoder", href: "/tools/url-decoder" },
      { title: "URL Encoder", href: "/tools/url-encoder" },
      { title: "UUID Generator", href: "/tools/uuid-generator" },
      { title: "XML Formatter", href: "/tools/xml-formatter" },
      { title: "XML Minifier", href: "/tools/xml-minifier" },
    ],
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
          <ul className="mt-4 text-center text-lg text-gray-200">
            {paths.map(({ title, href }: LinksItem, index: number) => (
              <li key={index}>
                <button className="min-w-80 mt-3 px-6 py-3 rounded transition-colors duration-300 bg-indigo-900 hover:bg-indigo-700">
                  <Link href={href} prefetch>
                    {title}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
