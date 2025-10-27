"use client";

import {NAV_LINKS} from "@/shared/lib/constants";
import Link from "next/link";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


export function Navbar() {
    useGSAP(() => {
       const navTween = gsap.timeline({
           scrollTrigger: {
               trigger: "nav",
               start: "bottom top",
           }
       });

        navTween.fromTo("nav", { backgroundColor: "transparent" }, {
            backgroundColor: "#00000050",
            backgroundFilter: "blur(10px)",
            ease: "power1.inOut",
            duration: 1,
        });
    });

    return (
        <nav>
            <div className="flex gap-4">
                <Link href="/public" className='flex items-center gap-4'>
                    <Image src='/images/logo.png' alt='Logo' width={32} height={32} />
                    <p>Mojito</p>
                </Link>

                <ul className='flex gap-4'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <Link href={`#${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}