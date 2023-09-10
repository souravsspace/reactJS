import { Typography } from '@material-tailwind/react'
import userDetails from '../data/usersDetails.json'
import StoreItems from '../components/StoreItems'

export default function Store() {
  return (
    <main className="md:px-[2rem] px-[1rem] py-6 bg-gray-100 grid place-items-start w-full">
      <section>
        <Typography variant="h2">Store</Typography>
      </section>
      <section className="my-10 grid place-items-center place-content-center grid-cols-2 md:grid-cols-3 mx-auto gap-4">
          {userDetails.map((user, index) => (
            <StoreItems key={index} {...user} />
          ))}
      </section>
    </main>
  )
}
