'use client';
import Image from "next/image";
import Profile from '@/Images/profile.jpg'
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "./ui/background-gradient";
function HeroSection() {

  const words=['FullStack-Developer','Open Source Contributor','AI-Enthusiast']

  return (
    <>
    <section className="h-[100svh] scroll-smooth grid place-items-center">
      <BackgroundBeams className="-z-50]" StartColor="#fff" endColor="#black" />
      <div className="flex flex-wrap lg:flex-nowrap gap-[20%] pl-16 items-center w-full h-[80%] ">
        <div className="ml-4 pl-4 mt-16text-wrap w-[40%]">
          <h1 className="text-4xl" >Hello Myself Angad ,</h1><FlipWords className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparen text-4xl m-4" words={words} />
        </div>
        <div className="w-[90%] md:w-[40%] z-[999] lg:w-[40%] xl:w-[40%]">
          <CardContainer className="hover:shadow-gray-100 shadow-background hover:shadow-md
          transition-shadow ">
            <CardBody>
              <CardItem className="">
                <BackgroundGradient className="p-2">
                  <Image className=" rounded-lg " src={Profile} alt="This is my photo" />
                </BackgroundGradient>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
    <section id="about" className="h-[100svh] grid place-items-center w-full">
    About
    </section>
    <section id="project" className="h-[100svh] grid place-items-center w-full">
    Project
    </section>
    <section id="contact" className="h-[100svh] grid place-items-center w-full">
    contact
    </section>
    </>
  )
}

export default HeroSection