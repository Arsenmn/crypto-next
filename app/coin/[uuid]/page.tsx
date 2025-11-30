"use client";

import { getCoins } from "@/api/api";
import PriceChart from "@/components/PriceChart";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { setCoins } from "@/store/coinsSlice";
import { AlignHorizontalDistributeCenter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CoinPage = () => {
  const { uuid } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.coins);
  const coin = coins.find((c) => c.uuid === uuid);

  useEffect(() => {
    if (coins.length === 0) {
      const fetchData = async () => {
        setLoading(true);
        const data = await getCoins();
        dispatch(setCoins(data.coins));
        setLoading(false);
      };

      fetchData();
    }
  }, [coins.length, dispatch]);

  if (loading || !coin)
    return (
      <div className="font-bold text-3xl text-center pt-[100px]">Qotaq</div>
    );

  const mainData = [
    { label: "Market Cap", value: Number(coin.marketCap) },
    { label: "Listed at:", value: Number(coin.listedAt) },
    { label: "Price (USD)", value: Number(coin.price) },
    { label: "Price (BTC)", value: Number(coin.btcPrice) },
    { label: "Volume (24h)", value: coin["24hVolume"] },
    { label: "Change (24h)", value: Number(coin.change) },
  ];

  return (
    <div className="w-ful h-screen bg-[#2d1919] text-white pt-[100px] px-7">
      <header className="flex flex-row justify-between items-center">
        <div>
          <div className="flex flex-row gap-2 items-center">
            <Image src={coin?.iconUrl} alt="" width={25} height={25} />
            <p className="font-bold text-3xl">{coin?.name}</p>
            <p className="text-gray-500 text-xl pl-2">{coin?.symbol}</p>
          </div>

          <div className="flex flex-row items-center pt-2">
            <h4 className="text-6xl">
              ${Math.round(coin.price * 1000) / 1000}
            </h4>
            <p
              className={`text-3xl pl-2 ${
                coin.change > 0
                  ? "text-teal-400"
                  : coin.change < 0
                  ? "text-red-400"
                  : "text-white"
              }`}
            >
              {coin.change}%
            </p>
          </div>
        </div>
        <Link
          href={coin.coinrankingUrl}
          className="font-bold flex flex-row items-center gap-1 group"
        >
          <AlignHorizontalDistributeCenter className="group-hover:text-teal-200" />
          <p className="text-xl hidden sm:flex">More</p>
        </Link>
      </header>

      <main className="pt-5">
        <PriceChart uuid={coin.uuid} />

        <div className="pt-5 flex flex-row items-center">
          <h3 className="text-5xl font-bold">Main Data</h3>
          <div
            className={`w-[65%] h-1 mx-5`}
            style={{ backgroundColor: coin.color  }}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 pl-5 pt-2">
          {mainData.map((data) => (
            <div key={data.label}>
              <h3 className="font-medium text-2xl">{data.label}</h3>
              <p className="text-gray-400">{data.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoinPage;
