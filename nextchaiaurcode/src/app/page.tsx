
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full grid place-items-center h-[100svh]">
      <div className="w-[90%] h-fit flex justify-evenly">
        <HeroSection />
        <div className="w-[50%] h-full mt-32 rounded-lg">
          <img className="" src="https://imgs.search.brave.com/3N8i8Bvq786fpfwdpOED7McJVg3ENguA9CdwuZCpXTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYW5k/b20taW1hZ2UtcGVw/ZWJpZ290ZXMudmVy/Y2VsLmFwcC9hcGkv/cmFuZG9tLWltYWdl" alt="This is my photo" />
        </div>
      </div>
    </div>
  );
}
