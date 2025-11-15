import { Coin } from "@/app/list/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICoinsState {
  coins: Coin[];
  search: string;
}

const initialState: ICoinsState = {
  coins: [],
  search: ""
}

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<Coin[]>) => {
      state.coins = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  }
})

export const { setCoins, setSearch } = coinsSlice.actions;
export default coinsSlice.reducer;