import { isAuthenticated } from "@/auth/auth";
import { Header } from "@/components/header";
import AppSidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

import MobileNavbar from "@/components/mobile-navbar";
import { PageTitleUpdater } from "@/components/page-title-updater";

export async function generateMetadata() {
  return {
    title: {
      default: 'Base Brasil',
    },
  };
}

export default async function OrgAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/sign-in");
  }

  return (
    <div className="w-full font-sans">
      <PageTitleUpdater />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-full">
          <Header />
          <div className="w-full h-full p-8 md:px-4 md:py-0 gap-4 items-start justify-start flex flex-col bg-white md:bg-secondary">
            {children}
          </div>

        </main>
      </SidebarProvider>
      <MobileNavbar />
    </div >
  );
}
