import z from "zod"

export default function ZodTo() {
  const schema = z
    .object({
      id: z.union([z.string(), z.number()]),
      // id: z.number().or(z.string()),
      name: z.string().min(3).max(30),
      // friends: z.array(z.string()).nonempty(),
      coords: z
        .tuple([z.number(), z.string(), z.number().gt(20)])
        .rest(z.number()),
    })
    // .passthrough()
    .strict()

  type UserType = z.infer<typeof schema>
  const user: Partial<UserType> = {
    id: 4334,
    name: "Sourav",
    // friends: ["sakib", "rakib", "rajib"],
    // age: 20,
    coords: [20, "ukil", 29, 5, 23, 232, 342],
  }

  console.log(schema.parse(user))

  return <div className="p-8">ZodTo</div>
}
