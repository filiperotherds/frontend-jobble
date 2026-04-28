"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SearchCommandMenu } from "./SearchCommandMenu";

import astroLogo from "@/assets/astro_logo.png";

export function Navbar() {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src={astroLogo}
              alt="Astro Logo"
              height={24}
              className="h-6 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/solution" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-atl-dark hover:text-atl-blue data-[state=open]:text-atl-blue font-medium transition-colors",
                      )}
                    >
                      Solution
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-atl-dark hover:text-atl-blue data-[state=open]:text-atl-blue font-medium transition-colors">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3">
                      <ListItem
                        title="Professional Website"
                        href="/features/website"
                      >
                        A fully custom, responsive website tailored for your
                        contracting business.
                      </ListItem>
                      <ListItem title="Contractor CRM" href="/features/crm">
                        Manage your leads, clients, and projects all in one
                        place.
                      </ListItem>
                      <ListItem
                        title="Professional Email"
                        href="/features/email"
                      >
                        Get a custom domain email address to look professional.
                      </ListItem>
                      <ListItem
                        titleNode={
                          <>
                            AI Agent
                            <Badge
                              variant="default"
                              className="text-[10px] bg-atl-blue/10 text-atl-blue"
                            >
                              TARS
                            </Badge>
                          </>
                        }
                        href="/features/ai-agent"
                      >
                        Automate tasks and customer support with your AI
                        assistant.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-atl-dark hover:text-atl-blue data-[state=open]:text-atl-blue font-medium transition-colors",
                      )}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-atl-dark hover:text-atl-blue data-[state=open]:text-atl-blue font-medium transition-colors",
                      )}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={20} className="text-atl-dark" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe size={20} className="text-atl-dark" />
          </Button>
          <div className="h-6 w-[1px] bg-gray-200 mx-2" />
          <Button variant="ghost" asChild className="text-atl-dark px-4">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button
            asChild
            className="bg-atl-blue text-white hover:bg-atl-blue/85"
          >
            <Link href="/get-started">Get started</Link>
          </Button>
        </div>
      </div>
      <SearchCommandMenu open={searchOpen} setOpen={setSearchOpen} />
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { titleNode?: React.ReactNode }
>(({ className, title, titleNode, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center gap-2">
            {titleNode || title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
