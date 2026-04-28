import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          <FooterColumn 
            title="Products" 
            links={["Rovo", "Jira", "Jira Align", "Jira Service Management", "Confluence", "Loom", "Trello", "Bitbucket"]} 
          />
          <FooterColumn 
            title="Resources" 
            links={["Technical support", "Purchasing & licensing", "Atlassian Community", "Knowledge base", "Marketplace", "My account"]} 
          />
          <FooterColumn 
            title="Learn" 
            links={["Partners", "Training & certification", "Documentation", "Developer resources", "Enterprise services"]} 
          />
          <FooterColumn 
            title="About Atlassian" 
            links={["Company", "Careers", "Events", "Blogs", "Investor Relations", "Trust Center", "Contact us"]} 
          />
          <div className="col-span-2 lg:col-span-1 space-y-6">
             <h4 className="font-bold text-atl-dark uppercase text-xs tracking-widest">Connect</h4>
             <div className="flex gap-4 text-gray-400">
                <Button variant="ghost" size="icon" className="hover:text-atl-blue">
                   <Facebook size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-atl-blue">
                   <Twitter size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-atl-blue">
                   <Linkedin size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-atl-blue">
                   <Youtube size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-atl-blue">
                   <Instagram size={20} />
                </Button>
             </div>
             <div className="pt-4">
                <Button variant="outline" className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-atl-dark hover:bg-gray-50 h-auto">
                   English (United States)
                </Button>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8 gap-8">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <span className="text-gray-400 text-sm">Copyright © 2026 Atlassian</span>
              <FooterLegalLink label="Privacy policy" />
              <FooterLegalLink label="Notice at Collection" />
              <FooterLegalLink label="Terms" />
              <FooterLegalLink label="Impressum" />
           </div>
           
           <Button variant="link" className="flex items-center gap-2 text-atl-blue font-bold text-sm hover:no-underline p-0 h-auto">
              <span>Your Privacy Choices</span>
              <div className="w-8 h-4 bg-atl-blue/20 rounded-full relative">
                 <div className="absolute right-0 top-0 bottom-0 w-4 bg-atl-blue rounded-full" />
              </div>
           </Button>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-6">
      <h4 className="font-bold text-atl-dark uppercase text-xs tracking-widest">{title}</h4>
      <ul className="space-y-4">
        {links.map((link, i) => (
          <li key={i}>
            <Button variant="link" asChild className="text-gray-500 hover:text-atl-blue transition-colors text-sm p-0 h-auto hover:no-underline font-normal">
              <Link href="#">
                {link}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLegalLink({ label }: { label: string }) {
  return (
    <Button variant="link" asChild className="text-gray-500 hover:text-atl-blue transition-colors text-sm p-0 h-auto hover:no-underline font-normal">
      <Link href="#">
        {label}
      </Link>
    </Button>
  );
}
