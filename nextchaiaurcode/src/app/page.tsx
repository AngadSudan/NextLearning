
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full grid place-items-center h-[100svh]">
      <div className="w-[90%] h-fit flex-col md:flex lg:flex justify-evenly">
        <HeroSection />
      </div>
    </div>
  );
}
