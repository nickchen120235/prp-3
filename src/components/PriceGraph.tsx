import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

import { data } from '../utils/data'
import { months, conventionMonths } from '../utils/consts'
import { PriceDataType, LineProps } from '../utils/types'

export const PriceGraph = (props: LineProps) => {
  let renderData: PriceDataType[] = data.map((value, index) => ({
    month: months[index],
    price: value.price
  }))
  renderData = props.convention? renderData.filter(value => conventionMonths.includes(value.month)): renderData

  return(
    <ResponsiveContainer width='95%' height={300}>
      <LineChart data={renderData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis domain={[140, 175]} tickCount={8} tickFormatter={value => `$${value}`} />
        <Legend />
        <Line name='Price' dataKey='price' dot={{r: 5}} animationEasing='ease-in-out' animationDuration={500} />
      </LineChart>
    </ResponsiveContainer>
  )
}