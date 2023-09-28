export type OPTION_TYPE = {
  name: string
  id: number
}

export type SINGLE_SELECT_TYPE = {
  value?: OPTION_TYPE
  onChange: (value: OPTION_TYPE | undefined) => void
  options: OPTION_TYPE[]
}
export type MULTI_SELECT_TYPE = {
  value: OPTION_TYPE[]
  onChange: (value: OPTION_TYPE[]) => void
  options: OPTION_TYPE[]
}
