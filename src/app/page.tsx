import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Navbar} from "@/features/navbar";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {

    return (
        <main>
            <Navbar />
        </main>
    )
}
