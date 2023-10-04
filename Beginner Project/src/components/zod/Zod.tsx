import z from "zod"

// enum Hobbies {
//   coding = "coding",
//   gaming = "gaming",
//   reading = "reading",
// }

const hobby = ["coding", "gaming", "reading"] as const

export default function Zod() {
  const baalerSchema = z.object({
    isMen: z.boolean(),
  })

  const schema = z
    .object({
      name: z.string().min(3).max(30),
      age: z
        .number()
        .gt(0)
        .lt(100)
        .default(Math.floor(Math.random() * 100)),
      birthDay: z.date().optional(),
      isPain_inAss: z.boolean().default(true),
      isProgrammer: z.boolean(),
      // hobby: z.enum(["coding", "gaming", "reading"]),
      // hobby: z.nativeEnum(Hobbies),
      hobby: z.enum(hobby),
      // isProgrammer: z.literal(true),
      // isProgrammer: z.boolean().nullable(), // nullable = null or anyother type i have pass
      // isProgrammer: z.boolean().nullish(), // nullish = null or undefined or anyother type i have pass
    })
    // .partial()
    // .pick({age: true})
    // .omit({age: true})
    // .deepPartial() // all the properties are optional childreen inside the object are also optional
    // .extend({ isMen: z.boolean() })
    .merge(baalerSchema)

  type UserType = z.infer<typeof schema>
  const user: Partial<UserType> = {
    name: "asv",
    birthDay: new Date(),
    isProgrammer: true,
    // isProgrammer: false,
    hobby: "coding",
  }

  const userBad: Partial<UserType> = {
    name: "dsdsdsdsdsds",
  }

  // console.log(schema.safeParse(user).success)
  // console.log(schema.parse(user))
  // console.log(schema.shape)

  console.log(schema.partial().parse(userBad))

  return <main className="p-8">zod</main>
}
