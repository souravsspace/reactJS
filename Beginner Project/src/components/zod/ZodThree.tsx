import z from "zod"

export default function ZodThree() {
  const user_map = z.record(z.string())

  const user = {
    dsds: "sdsd",
    ggrgr: "ffdfd",
  }

  console.log(user_map.parse(user))

  return <div>ZodThree</div>
}
