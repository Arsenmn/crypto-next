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
      <div className="flex flex-row gap-4">
        {quickSearch.map((coin) => (
          <a
            key={coin.uuid}
            href={`/coin/${coin.uuid}`}
            className="flex flex-col items-center gap-1 rounded-lg"
          >
            <div className="bg-amber-100 hover:bg-amber-200 transition-colors duration-150 w-10 h-10 flex items-center justify-center rounded-full">
              <Image
                src={coin.iconUrl}
                alt={coin.name}
                width={25}
                height={25}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListSearch;
