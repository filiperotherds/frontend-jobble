import { BellRing } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer outline-none">
        <div className="size-8 flex items-center justify-center rounded-md bg-secondary hover:bg-secondary/80">
          <BellRing
            className="text-muted-foreground"
            size={16}
            strokeWidth={2.5}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-[200px] md:w-80"
      >
        {}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
