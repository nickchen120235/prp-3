/** props */
export interface TitleBarProps {
  title: string
}

export interface PercentageGraphProps {
  mode: string,
  convention: boolean
}

export interface LineProps {
  convention: boolean
}

/** PercentageGraph */
type Gender = {
  month: string,
  male: number,
  female: number
}

type Location = {
  month: string,
  local: number,
  usa: number,
  sa: number,
  eu: number,
  mea: number,
  asia: number
}

type Customer = {
  month: string,
  businessmen: number,
  tourists: number
}

type Reserve = {
  month: string,
  direct: number,
  agency: number,
  air: number
}

type Age = {
  month: string,
  u20: number,
  to35: number,
  to55: number,
  m55: number
}

export type DataType = Gender | Location | Customer | Reserve | Age

/** PriceGraph */
export type PriceDataType = {
  month: string,
  price: number
}

/** LengthGraph */
export type LengthDataType = {
  month: string,
  length: number
}

/** OccupancyGraph */
export type OccupancyDataType = {
  month: string,
  occ: number
}