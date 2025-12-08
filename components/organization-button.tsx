import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Link, Settings } from "lucide-react";

const organization = {
  name: "Organization Name",
  slug: "organization-slug",
  avatarUrl: null,
};

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return initials;
}

export default function OrganizationButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none cursor-pointer">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium">{organization.name}</span>
          <span className="text-xs font-medium text-muted-foreground">
            {organization.slug}
          </span>
        </div>
        <Avatar>
          {organization.avatarUrl && (
            <AvatarImage src={organization.avatarUrl} />
          )}
          {organization.name && (
            <AvatarFallback>{getInitials(organization.name)}</AvatarFallback>
          )}
        </Avatar>
        <ChevronDown className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/account/settings">
            <Settings className="mr-2 size-4" />
            Configurações
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
