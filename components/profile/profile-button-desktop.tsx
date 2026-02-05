import { auth } from "@/auth/auth";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import {
  UserRound,
  House,
  CreditCard,
  Monitor,
  UsersRound,
  BriefcaseBusiness,
  DoorOpen,
  Sprout,
  Flame,
} from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import verifiedIcon from "@/assets/verified.svg";
import { Button } from "../ui/button";
import Link from "next/link";

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
      <DropdownMenuTrigger className="px-3 py-1.5 flex items-center gap-3 bg-white rounded-lg outline-none cursor-pointer">
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
          <span className="text-xs font-medium text-muted-foreground truncate">
            {user.email}
          </span>
        </div>

        {/* <Badge className="bg-green-500/10 text-green-700 font-semibold">
          <Sprout />
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
        className="w-60 bg-neutral-100 rounded-lg border-none"
      >
        <div className="w-full bg-white p-2 rounded-lg">
          <DropdownMenuItem asChild>
            <Link href="/overview">
              <House />
              Início
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a href="/billing">
              <CreditCard />
              Assinatura
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a href="/billing">
              <UsersRound />
              Membros
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a href="/website">
              <Monitor />
              Portfólio profissional
            </a>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <a href="/account/settings">
              <UserRound />
              Seu perfil
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/account/settings">
              <BriefcaseBusiness />
              Sua empresa
            </a>
          </DropdownMenuItem>
        </div>
        <div className="p-2 w-full flex flex-row items-center justify-between">
          <a
            href="/feedback"
            className="text-xs text-muted-foreground hover:underline"
          >
            Feedback
          </a>
          <a href="/api/auth/sign-out">
            <Button
              size={"sm"}
              className="h-7 border-none bg-white hover:bg-white text-primary rounded-md cursor-pointer"
            >
              <DoorOpen className="text-muted-foreground" />
              Sair
            </Button>
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
