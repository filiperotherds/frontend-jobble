import { Notification } from "./notification";
import { ProfileButtonDesktop } from "./profile/profile-button-desktop";
import Image from "next/image";
import logo from "@/assets/base-brasil.png";
import { Input } from "./ui/input";

export function Header() {
  return (
    <div className="md:sticky top-0 z-20 w-full h-16 px-4 flex items-center justify-between bg-secondary">
      <div className="w-60">
        <Input />
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
