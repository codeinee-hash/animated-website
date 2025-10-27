import {NAV_LINKS} from "@/shared/lib/constants";
import Link from "next/link";

export function Navbar() {
    return (
        <nav>
            <div className="flex gap-4">
                <Link href="/">Home</Link>

                <ul className='flex gap-4'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <Link href={`/${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}