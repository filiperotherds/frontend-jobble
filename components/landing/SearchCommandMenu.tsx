"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Home,
  Monitor,
  Briefcase,
  Mail,
  Bot,
  DollarSign,
  Phone,
  LogIn,
  Rocket,
} from "lucide-react";

interface SearchCommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SearchCommandMenu({ open, setOpen }: SearchCommandMenuProps) {
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen],
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search pages and features..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/solution"))}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Solutions</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/pricing"))}
          >
            <DollarSign className="mr-2 h-4 w-4" />
            <span>Pricing</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/contact"))}
          >
            <Phone className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Features">
          <CommandItem
            onSelect={() => runCommand(() => router.push("/features/website"))}
          >
            <Monitor className="mr-2 h-4 w-4" />
            <span>Professional Website</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/features/crm"))}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Contractor CRM</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/features/email"))}
          >
            <Mail className="mr-2 h-4 w-4" />
            <span>Professional Email</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/features/ai-agent"))}
          >
            <Bot className="mr-2 h-4 w-4" />
            <span>AI Agent</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Account">
          <CommandItem onSelect={() => runCommand(() => router.push("/login"))}>
            <LogIn className="mr-2 h-4 w-4" />
            <span>Sign In</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/get-started"))}
          >
            <Rocket className="mr-2 h-4 w-4" />
            <span>Get Started</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
