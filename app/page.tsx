import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CircleFadingPlus, Search } from "lucide-react";
import { bebasNeue } from "./layout";

export default function Home() {
  return (
    <div className="bg-[#2d1919] w-full h-screen text-white overflow-hidden flex flex-col justify-center items-center relative">
      
      <main className="flex flex-col gap-8 items-center text-center px-4 max-w-[90vw]">
        <h1 className={`text-[80px] font-extrabold text-transparent bg-clip-text animate-gold-gradient ${bebasNeue.className}`}>
          Your Gateway to the World of Crypto
        </h1>

        <p className="w-full max-w-[450px] text-[20px] text-[#d38659]">
          Discover real-time prices, top gainers, trending coins, and everything
          you need to make smarter trading decisions.
        </p>

        <ButtonGroup className="bg-[#191919] border-b border-t border-white/20 rounded-full">
          <Button asChild className="hover:bg-[#d3aa59] hover:rounded-full hover:text-black w-[100px] cursor-pointer">
            <a href="/list" className="flex items-center justify-center gap-1">
              <Search />
              Explore
            </a>
          </Button>
          <Button asChild className="hover:bg-[#d3aa59] hover:rounded-full hover:text-black w-[100px] cursor-pointer">
            <a href="/about" className="flex items-center justify-center gap-1">
              <CircleFadingPlus />
              More
            </a>
          </Button>
        </ButtonGroup>
      </main>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-amber-500/40 blur-[120px] animate-glow" />
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-yellow-500/40 blur-[120px] animate-glow delay-300" />
      </div>
    </div>
  );
}
