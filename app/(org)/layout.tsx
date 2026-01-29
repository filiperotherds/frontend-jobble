import { isAuthenticated } from "@/auth/auth";
import { Header } from "@/components/header";
import AppSidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

import MobileNavbar from "@/components/mobile-navbar";
import { PageTitleUpdater } from "@/components/page-title-updater";

function formatSlug(path: string) {
  const slug = path.split('/').filter(Boolean).pop() || 'Dashboard';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata() {
  return {
    title: {
      template: 'Jobble - %s',
      default: 'Jobble',
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
      <div className="w-full h-full">
        <Header />

        <main className="w-full h-full">
          <div className="w-full h-full p-8 md:px-4 md:py-0 gap-4 items-start justify-start flex flex-col md:flex-row bg-white md:bg-secondary">
            <SidebarProvider>
              <AppSidebar />

              {children}
            </SidebarProvider>
          </div>
          <MobileNavbar />
        </main>
      </div>
    </div>
  );
}
