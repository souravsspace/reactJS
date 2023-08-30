import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function FetchDataQuery() {
  const { data: catData, isLoading, error, refetch } = useQuery(['cat'], ()=> {
    return axios.get('https://catfact.ninja/fact').then((res)=> res.data)
  })

  return (
    <main className='container'>
        <article>
            <hgroup>
                <h1>Fetch data query</h1>
                <h1>To simplify feting and pass data to another element</h1>
            </hgroup>
            <section>
                <div>
                    <h1>Preview</h1>
                    <button onClick={refetch}>Show another</button>
                </div>
                <p>
                  {isLoading && 'Loading'}
                  {error && 'Error code -980'}
                  {catData?.fact}
                </p>
            </section>
        </article>
    </main>
  )
}



