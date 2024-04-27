"use client";
import { Fragment, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { LinksItem, LinksKeys, linksData } from "@/components/links";

export default function Breadcrumbs(): JSX.Element {
  const currentPath = usePathname();

  const paths = useMemo<Array<string>>(() => {
    return currentPath.split("/").filter(Boolean);
  }, [currentPath]);

  const pathData = useMemo(() => {
    return paths.map((path: string, index: number) => {
      const href = `/${paths.slice(0, index + 1).join("/")}`;
      let title;
      if (index === 0) {
        title = linksData[LinksKeys.Tools].title;
      } else if (index === 1) {
        title = linksData[LinksKeys.Tools].paths?.find(
          (item: LinksItem) => item.href === href
        )?.title;
      }
      return { href, title };
    });
  }, [paths]);

  return (
    <nav className="flex items-center justify-between px-4 pt-2 text-gray-200">
      <ul className={`flex space-x-4 ${paths.length < 1 && "invisible"}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <span className="mx-2 font-semibold">{">"}</span>
        {pathData.map(({ href, title }, index) => (
          <Fragment key={index}>
            {index > 0 && <span className="mx-2 font-semibold">{">"}</span>}
            <li>
              <Link href={href}>{title}</Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
