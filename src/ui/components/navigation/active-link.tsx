"use client"

import {PropsWithChildren, useMemo} from "react";
import Link from "next/link";
import clsx from "clsx";
import {usePathname, useRouter} from "next/navigation";

interface Props {
    href: string
}

export const ActiveLink = ({href, children}: PropsWithChildren<Props>) => {
    const router = useRouter()
    const pathname = usePathname()
    const isActive: boolean = useMemo((): boolean => {
        return pathname === href
    }, [pathname, href])
    return (
        <Link href={href} className={clsx(isActive && "bg-midnight-700 font-medium", "flex gap-2 items-center px-3 py-4 hover:bg-midnight-700 transition-all")}>
            {children}
        </Link>
    )
}