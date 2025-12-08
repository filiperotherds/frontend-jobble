import { auth, isAuthenticated } from "@/auth/auth";
import Header from "@/components/header";
import AppSidebar from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Jobble",
};

export default async function OrgAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/sign-in");
  }

  const { user } = await auth();

  if (user.accountType !== "ORGANIZATION") {
    redirect("/home");
  }

  return (
    <div className="w-full">
      <Header />
      <SidebarProvider className="min-h-[calc(100svh-4rem)]">
        <AppSidebar />
        <main className="w-full">
          <div className="p-4 items-start justify-start flex flex-col md:flex-row">
            <SidebarTrigger />
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
