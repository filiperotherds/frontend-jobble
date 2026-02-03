"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/nav-groups";

export function PageTitleUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    const getTitleFromNav = (path: string) => {
      for (const group of navGroups) {
        const foundItem = group.items.find((item) => item.url === path);
        if (foundItem) return foundItem.title;
      }

      if (path === "/") return "Dashboard";

      const slug = path.split("/").filter(Boolean).pop() || "";
      return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    const pageTitle = getTitleFromNav(pathname);
    document.title = `${pageTitle} | Base Brasil`;
  }, [pathname]);

  return null;
}
