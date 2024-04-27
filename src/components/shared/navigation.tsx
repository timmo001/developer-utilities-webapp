import Link from "next/link";

import { LinksItem, linksData } from "@/components/shared/links";

function NavigationLink({ link }: { link: LinksItem }): JSX.Element {
  return (
    <li>
      <Link href={link.href} passHref>
        {link.title}
      </Link>
    </li>
  );
}

export default async function Navigation(): Promise<JSX.Element> {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4">
      <ul className="flex items-center space-x-8">
        <NavigationLink
          link={{
            title: "Home",
            href: "/",
          }}
        />
        {Object.values(linksData).map((link: LinksItem) => (
          <NavigationLink key={link.title} link={link} />
        ))}
      </ul>
    </nav>
  );
}
