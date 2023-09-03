import useCatData from "./useCatData";

export default function FetingLayout() {
  const { catData, catError, catLoading, catRefetch } = useCatData();
  return (
    <div className="container">
      <article>
        <h1>Cat Facts</h1>
        <div>
          {catLoading && <p>Loading...</p>}
          {catError && <p>Error: {catError.message}</p>}
          {catData && <p>{catData.fact}</p>}
        </div>
        <button onClick={catRefetch}>Refetch</button>
      </article>
    </div>
  );
}
