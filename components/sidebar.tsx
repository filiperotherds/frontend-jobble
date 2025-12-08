import OrganizationButton from "./organization-button";
import { Separator } from "./ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "./ui/sidebar";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <div className="p-2 w-full flex flex-col items-start justify-start space-y-4">
          <OrganizationButton />

          <p className="text-sm text-muted-foreground">© 2025 Jobble</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
