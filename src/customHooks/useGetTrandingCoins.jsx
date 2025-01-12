import { useQuery } from "@tanstack/react-query";

const useGetTrandingCoins = () => {
  const { data: trandingData, isLoading } = useQuery({
    queryKey: ["trandingData"],
    queryFn: async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/search/trending`);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Something went wrong!");
      }

      // Return the parsed JSON directly
      return await res.json();
    },
  });

  // Optional: Log the fetched data for debugging
  console.log("Trending Coins Data:", trandingData);

  return { trandingData, isLoading };
};

export default useGetTrandingCoins;

