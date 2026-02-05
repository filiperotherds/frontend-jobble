import { Notification } from "./notification";
import { ProfileButtonDesktop } from "./profile/profile-button-desktop";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";

export function Header() {
  return (
    <div className="md:sticky top-0 z-20 w-full h-16 px-4 flex items-center justify-between bg-secondary">
      <div className="w-80">
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>

          <InputGroupInput placeholder="Pesquisar..." />
        </InputGroup>
      </div>

      <div className="flex items-center">
        <Notification />
        <div className="hidden md:flex md:ml-8">
          <ProfileButtonDesktop />
        </div>
      </div>
    </div>
  );
}
