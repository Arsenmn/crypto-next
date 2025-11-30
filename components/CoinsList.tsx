"use client";

import { Coin } from "@/app/list/page";
import Loader from "./Loader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ICoinsListProps {
  filteredCoins: Coin[];
}

interface HoverCoords {
  [coinUuid: string]: { x: number; y: number } | null;
}

const CoinsList = ({ filteredCoins }: ICoinsListProps) => {
  const [hoverCoords, setHoverCoords] = useState<HoverCoords>({});

  const handleMouseMove = (
    coinUuid: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverCoords((prev) => ({
      ...prev,
      [coinUuid]: { x: e.clientX - rect.left, y: e.clientY - rect.top },
    }));
  };

  const handleMouseLeave = (coinUuid: string) => {
    setHoverCoords((prev) => ({
      ...prev,
      [coinUuid]: null,
    }));
  };

  return (
    <div className="py-3">
      {filteredCoins.length > 0 ? (
        <ul className="flex flex-col gap-3 mx-5">
          {filteredCoins.map((coin) => {
            const coords = hoverCoords[coin.uuid];

            return (
              <Link
                href={`/coin/${coin.uuid}`}
                key={coin.uuid}
                className="flex flex-row justify-between p-3 bg-[#301b1b] border border-[#4e0f0f] rounded-lg cursor-pointer relative overflow-hidden transition-colors duration-200 hover:bg-[#3b2121] hover:border-[#613314] hover:text-[#ff8b56]"
                onMouseMove={(e) => handleMouseMove(coin.uuid, e)}
                onMouseLeave={() => handleMouseLeave(coin.uuid)}
              >
                <div className="flex flex-row gap-3 items-center relative z-10">
                  <Image src={coin.iconUrl} alt="Icon" width={30} height={10} />
                  <p className="font-bold">
                    {coin.name} / {coin.symbol}
                  </p>
                </div>
                <div className="text-end relative z-10">
                  <p>{Math.round(coin.price * 10000) / 10000} $</p>
                  <p className="text-amber-300">
                    {(+coin.btcPrice).toFixed(5)} BTC
                  </p>
                </div>

                {/* Glow layer */}
                {coords && (
                  <div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle 400px at ${coords.x}px ${coords.y}px, rgba(255, 139, 86, 0.1), transparent 80%)`,
                    }}
                  />
                )}
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
