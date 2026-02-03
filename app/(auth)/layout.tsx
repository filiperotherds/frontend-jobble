import { isAuthenticated } from "@/auth/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Entrar | Base Brasil",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (await isAuthenticated()) {
    redirect("/dashboard");
  }

  return <div className="">{children}</div>;
}
