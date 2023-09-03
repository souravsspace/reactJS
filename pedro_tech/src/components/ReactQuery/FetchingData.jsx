import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function FetchingData() {
  const { data: catData, error, isLoading, refetch } = useQuery(["catData"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  return (
    <div className="container">
      <article>
        <div>
          <h1>Fetching Data</h1>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          <p>{catData?.fact}</p>
        </div>
        <button onClick={refetch}>refetch</button>
      </article>
    </div>
  );
}
