import HeroCard from "@/components/HeroCard";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="h-screen p-3 lg:px-28 w-full">
      <Navbar />
      <div className="h-5/6 w-full bg-[url('/images/heroImage.png')] bg-cover bg-center rounded-3xl p-4 md:pt-20 md:px-10">
        {/* div for hero items */}
        <div className="flex flex-col md:flex-row w-full md:gap-32">
          <div className="flex flex-col gap-3 text-white pt-32">
            <h1 className="text-7xl font-bold">Your journey starts here-simple booking, seamless travel.</h1>
            <p className="">In just a few clicks, find and book your bus ticket with ease. Say goodbye to long lines and <br className="hidden md:block"/> delays. Let us take care of the details so you can enjoy the ride!</p>
          </div>
          {/*  card div*/}
          <HeroCard />
        </div>
      </div>
    </div>
  );
}
