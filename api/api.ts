import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL_API;
const key = process.env.NEXT_PUBLIC_KEY_API;

export const getCoins = async () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": key,
    },
  };

  try {
    const response = await axios.get(url + "/coins", options);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoinHistory = async (
  uuid: string,
  timePeriod: string = "7d"
) => {
  try {
    const res = await fetch(
      `https://api.coinranking.com/v2/coin/${uuid}/history?timePeriod=${timePeriod}`,
      {
        headers: {
          "x-access-token": key || "",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch coin history");
    }

    const data = await res.json();
    return data.data.history;
  } catch (error) {
    console.error("Error fetching coin history:", error);
    throw error;
  }
};
