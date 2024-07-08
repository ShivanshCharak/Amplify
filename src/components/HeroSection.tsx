import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import Image from "next/image"
import Logo from '../../public/Amplify.png'
function HeroSection() {
  return (
    <div className="h-auto md:h-[100vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-40 md:left-60 md:-top-20"
        fill="blue"
      />
        <div className="p-4 relative z-10 w-full text-center">
        <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <div className="flex items-center justify-center">
            <Image className="w-[500px] h-auto" src ={Logo} alt =""/>
            </div>
            <div className="flex items-center justify-center">
            <p  className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Welcome to Amplify Studio, where music mastery begins. Nestled at the intersection of passion and precision, we empower aspiring musicians to unlock their full potential.</p>
            </div>
            <div className="mt-4">
              <Link href="/courses">
              <Button borderRadius="0.5rem">Explore Courses</Button></Link>

            </div>
        </div>
    </div>
  )
}

export default HeroSection
