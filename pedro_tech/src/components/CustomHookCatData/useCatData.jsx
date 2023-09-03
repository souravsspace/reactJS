import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function useCatData() {
  const { data : catData, error: catError, isLoading: catLoading, refetch: catRefetch } = useQuery(["catData"], async() => {
    return axios
      .get("https://catfact.ninja/fact")
      .then((res) => res.data)
  })
  return {catData, catError, catLoading, catRefetch}
}
