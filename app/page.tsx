import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CircleFadingPlus, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#191919] bg-cover bg-center h-screen text-white">
      <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 items-center">
        <h1 className="text-[50px] font-extrabold text-center text-transparent bg-clip-text animate-gold-gradient">
          Your Gateway to the World of Crypto
        </h1>

        <p className="w-[450px] text-center text-[20px] text-[#d38659] pb-10">
          Discover real-time prices, top gainers, trending coins, and everything
          you need to make smarter trading decisions.
        </p>

        <div>
          <ButtonGroup className="bg-[#191919] border-b border-t border-white/20 rounded-full">
            <Button className="hover:bg-[#d3aa59] hover:rounded-full hover:text-black w-[100px] cursor-pointer">
              <Search />
              <a href="/list">Explore</a>
            </Button>
            <Button className="hover:bg-[#d3aa59] hover:rounded-full hover:text-black w-[100px] cursor-pointer">
              <CircleFadingPlus />
              <a href="/about">More</a>
            </Button>
          </ButtonGroup>
        </div>
      </main>

      <div className="pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-amber-500/40 blur-[120px] animate-glow" />
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-yellow-500/40 blur-[120px] animate-glow delay-300" />
      </div>
    </div>
  );
}
