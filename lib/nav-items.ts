import { House, Inbox, ReceiptText, SettingsIcon } from "lucide-react";

export const navItems = [
  {
    title: "Início",
    icon: House,
    href: "/overview",
  },
  {
    title: "Orçamentos",
    icon: ReceiptText,
    href: "/estimates",
  },
  {
    title: "Serviços",
    icon: Inbox,
    href: "/projects",
  },
  {
    title: "Opções",
    icon: SettingsIcon,
    href: "/settings",
  },
];
