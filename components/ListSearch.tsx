"use client";

import { Search } from "lucide-react";
import { Coin } from "@/app/list/page";
import Image from "next/image";

interface IListSearchProps {
  search: string;
  setSearch: (value: string) => void;
  coins: Coin[];
}

const ListSearch = ({ search, setSearch, coins }: IListSearchProps) => {
  const popularSymbols = ["BTC", "ETH", "USDT", "BNB", "XRP"];
  const quickSearch = popularSymbols
    .map((symbol) => coins.find((c) => c.symbol === symbol))
    .filter(Boolean) as Coin[];

  return (
    <div className="flex flex-row">
      <div className="relative flex items-center max-w-md mb-5 px-6">
        <Search size={18} className="absolute left-8 text-[#95785c]" />

        <input
          type="text"
          placeholder="Search coins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[400px] pl-10 py-2 bg-[#1f1f1f] border border-[#95785c] rounded-lg text-white placeholder-[#95785c] focus:ring-2 focus:ring-[#d29c37] outline-none transition-all"
        />
      </div>

      <div className="hidden gap-4 md:flex md:flex-row">
        {quickSearch.map((coin) => (
          <a
            key={coin.uuid}
            href={`/coin/${coin.uuid}`}
            className="flex flex-col items-center gap-1 rounded-lg group relative"
          >
            <div
              className="
                w-10 h-10 flex items-center justify-center rounded-full
                bg-linear-to-b from-yellow-300 to-orange-300
                relative overflow-hidden
              "
            >
              {/* White overlay fill */}
              <span
                className="
                  absolute -bottom-full left-0 w-full h-full bg-white/40
                  group-hover:bottom-0
                  transition-[bottom] duration-400 ease-in-out
                "
              ></span>

              <Image
                src={coin.iconUrl}
                alt={coin.name}
                width={25}
                height={25}
                className="relative z-10"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListSearch;
