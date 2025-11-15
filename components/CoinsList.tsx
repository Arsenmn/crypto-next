"use client";

import { Coin } from "@/app/list/page";
import Loader from "./Loader";
import Image from "next/image";
import Link from "next/link";

interface ICoinsListProps {
  filteredCoins: Coin[];
}

const CoinsList = ({ filteredCoins }: ICoinsListProps) => {
  return (
    <div className="py-3">
      {filteredCoins.length > 0 ? (
        <ul className="flex flex-col gap-3 w-100% mx-5">
          {filteredCoins.map((coin) => {
            return (
              <Link
                href={`/coin/${coin.uuid}`}
                key={coin.uuid}
                className="flex flex-row justify-between p-3 bg-[#343434] hover:bg-[#5b5b5b] hover:border-r hover:border-b border-white/30 rounded-lg cursor-pointer"
              >
                <div className="flex flex-row gap-3 items-center">
                  <Image src={coin.iconUrl} alt="Icon" width={30} height={10} />
                  <p className="font-bold">
                    {coin.name} / {coin.symbol}
                  </p>
                </div>
                <div className="text-end">
                  <p>{Math.round(coin.price * 10000) / 10000} $</p>
                  <p className="text-amber-300">
                    {(+coin.btcPrice).toFixed(5)} BTC
                  </p>
                </div>
              </Link>
            );
          })}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CoinsList;
