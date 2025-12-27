import { ProfileButton } from "./profile-button";
import Notification from "./notification";
import { LucideIcon } from "lucide-react";
import HeaderTitle from "./header-title";

export default function Header() {
  return (
    <div className="md:sticky top-0 z-20 w-full h-16 px-8 flex items-center justify-between rounded-t-lg bg-secondary">
      <HeaderTitle />

      <div className="flex items-center">
        <Notification />
        <div className="hidden md:flex md:ml-8">
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}
