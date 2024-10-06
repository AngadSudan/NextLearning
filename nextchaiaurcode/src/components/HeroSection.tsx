'use client';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

function HeroSection() {
  const words=[
    {
      text:"Angad Sudan"
    }
  ]
  return (
    <div className="h-[100svh] grid place-items-center">
      <BackgroundBeams StartColor="#fff" endColor="#black" />
      <div className="flex justify-evenly w-[80%]">
        <div>
          <h1 className="text-5xl" >Hello I'm</h1>
          <TypewriterEffectSmooth words={words} />
          <h2></h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection