import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {



    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <h1>GSAP</h1>
        </div>
    )
}
