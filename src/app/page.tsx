"use client";

import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Navbar} from "@/shared/view/navbar";
import {Hero} from "@/shared/view/hero";
import {Cocktails} from "@/shared/view/cocktails";
import {About} from "@/shared/view/about";
import {Art} from "@/shared/view/art";
import {Menu} from "@/shared/view/menu";
import {Contact} from "@/shared/view/contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    );
}
