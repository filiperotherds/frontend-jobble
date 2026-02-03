import { auth } from "@/auth/auth";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Settings, LogOut, CircleDashed, Flame } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import verifiedIcon from "@/assets/verified.svg";
import { Button } from "../ui/button";

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return initials;
}

export async function ProfileButtonDesktop() {
  const { user } = await auth();

  const firstName = user.name?.split(" ")[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-3 py-1.5 flex items-center gap-3 bg-white rounded-xl outline-none cursor-pointer">
        <div className="relative">
          <div className="absolute z-20 -bottom-0.5 -right-0.5">
            <Image src={verifiedIcon} alt="verified" />
          </div>

          <Avatar>
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
            {user.name && (
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            )}
          </Avatar>
        </div>

        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{firstName}</span>
          <span className="text-xs font-medium text-muted-foreground">
            {user.email}
          </span>
        </div>

        {/* <Badge className="bg-green-500/10 text-green-700 font-semibold">
          <CircleDashed />
          Grátis
        </Badge> */}
        <Badge className="bg-orange-600/10 text-orange-600 font-semibold">
          <Flame />
          Pro
        </Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-60 bg-neutral-200 rounded-xl border-none"
      >
        <div className="w-full bg-white p-2 rounded-xl">
          <DropdownMenuItem asChild>
            <a href="/account/settings">
              <Settings className="mr-2 size-4" />
              Configurações
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a href="/api/auth/sign-out">
              <LogOut className="mr-2 size-4" />
              Sair
            </a>
          </DropdownMenuItem>
        </div>
        <div className="p-2 w-full flex flex-row items-center justify-between">
          <span className="text-xs text-muted-foreground">Feedback</span>

          <Button
            size={"sm"}
            className="h-7 border-none bg-white hover:bg-neutral-100 text-muted-foreground rounded-lg"
          >
            <LogOut />
            Sair
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
