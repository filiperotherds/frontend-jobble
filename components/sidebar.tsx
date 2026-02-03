"use client";

import {
  Archive,
  CreditCard,
  Inbox,
  LayoutDashboard,
  Package,
  Plus,
  ReceiptText,
  Users,
  Wrench,
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
      <SidebarHeader className="-mt-1">
        <Button
          size={"default"}
          className="text-sm w-full bg-blue-500 hover:bg-blue-500/80 text-white"
          disabled={pathname.startsWith("/new-estimate")}
          onClick={handleNavigate}
        >
          <Plus />
          Novo Orçamento
        </Button>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="text-muted-foreground text-sm font-medium">
                {group.items.map((item) => {
                  const isActive = isLinkActive(item.url);

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={`text-primary hover:[&>svg]:text-blue-500 font-normal ${
                          isActive ? "" : "[&>svg]:text-muted-foreground"
                        }`}
                      >
                        <Link href={item.url}>
                          <item.icon size={16} />
                          <span>{item.title}</span>

                          {item.pending ? (
                            <span className="absolute right-3 text-muted-foreground text-xs">
                              {item.pending}
                            </span>
                          ) : (
                            ""
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
