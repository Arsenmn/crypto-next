"use client"

import { getCoins } from "@/api/api";
import CoinsList from "@/components/CoinsList";
import ListSearch from "@/components/ListSearch";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { setCoins, setSearch } from "@/store/coinsSlice";
import { AppDispatch } from "@/store/store";
import { RootState } from "../../store/store";
import { useEffect } from "react";

export interface Coin {
  uuid: string
  name: string
  symbol: string
  iconUrl: string
  price: number
  btcPrice: number
  change: number
  marketCap: number
  ['24hVolume']: number
  rank: number
  listedAt: number
  color: string
  coinrankingUrl: string
}


export interface ICoins { 
  coins: Coin[]
}

const List = () => {
  const dispatch = useAppDispatch<AppDispatch>()

  const coins = useAppSelector((state: RootState) => state.coins.coins);
  const search = useAppSelector((state: RootState) => state.coins.search);

  const filteredCoins = coins.filter(coin => {
    const matchesSearch = !search || coin.name.toLowerCase().includes(search.toLowerCase());
    return matchesSearch
  })

  useEffect(() => {
    const fetchData = async() => {
      const data = await getCoins()
      dispatch(setCoins(data.coins))
    }
    fetchData()
  }, [dispatch])

  const handleSearchChange = (value: string) => {
    dispatch(setSearch(value))
  }

  return (
    <div className="bg-[#181818] w-full min-h-screen pt-[100px] text-white">
      <ListSearch search={search} setSearch={handleSearchChange} coins={coins}/>
      <CoinsList filteredCoins={filteredCoins}/>
    </div>
  )
}

export default List;