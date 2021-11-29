export type GoogleSpreadSheetAPIResponse = {
  range: string
  majorDimension: string
  values: string[][]
}
export const is = <T>(object: unknown): object is T => !!(object as T)
export const SectionNames = [
  "ソフトドリンク",
  "アルコール",
  "スナック",
] as const
export type SectionName = typeof SectionNames[number]

export type Item = {
  section: SectionName
  title: string
  description: string | null
  cost: number
  active: boolean
}

export type SectionItem = {
  name: SectionName
  items: Item[]
}
