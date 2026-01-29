'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageTitleUpdater() {
    const pathname = usePathname();

    useEffect(() => {
        const formatSlug = (path: string) => {
            if (!path || path === '/') return 'Dashboard';
            const slug = path.split('/').filter(Boolean).pop() || '';
            return slug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        };

        document.title = `Jobble - ${formatSlug(pathname)}`;
    }, [pathname]);

    return null;
}