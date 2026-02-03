"use client";

import {
  Plus
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { navGroups } from "@/lib/nav-groups";
import Image from "next/image";

import logo from "@/assets/base-brasil.png";
import { Separator } from "./ui/separator";

export default function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isLinkActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(url);
  };

  const handleNavigate = () => {
    router.push("/new-estimate");
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-row items-center py-2 px-4">
          <Image src={logo} alt="Jobble" className="w-20" />
        </div>

        <Separator />

        <div className="w-full px-4">
          <Button
            size={"default"}
            className="text-sm w-full bg-blue-500 hover:bg-blue-500/80 text-white"
            disabled={pathname.startsWith("/new-estimate")}
            onClick={handleNavigate}
          >
            <Plus />
            Novo Orçamento
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="uppercase text-[10px] font-medium">{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="text-muted-foreground text-sm font-medium">
                {group.items.map((item) => {
                  const isActive = isLinkActive(item.url);
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={`text-[13px] text-primary font-medium ${isActive ? "" : "[&>svg]:text-muted-foreground"
                          }`}
                      >
                        <Link href={item.url}>
                          <item.icon size={16} />
                          <span>{item.title}</span>
                          {item.pending && (
                            <span className="absolute right-3 text-muted-foreground text-xs">
                              {item.pending}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <div className="w-full flex flex-col items-start justify-start space-y-4">
          {/* <OrganizationButton /> */}

          <p className="text-xs text-muted-foreground">
            Jobble Profissionais © 2026
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
