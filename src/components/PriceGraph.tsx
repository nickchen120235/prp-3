import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

import { data } from '../utils/data'
import { months } from '../utils/consts'
import { PriceDataType } from '../utils/types'

export const PriceGraph = () => {
  const renderData: PriceDataType[] = data.map((value, index) => ({
    month: months[index],
    price: value.price
  }))

  return(
    <ResponsiveContainer width='95%' height={600}>
      <LineChart data={renderData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis domain={[140, 175]} tickCount={8} tickFormatter={value => `$${value}`} />
        <Legend />
        <Line name='Price' dataKey='price' dot={{r: 5}} animationEasing='ease-in-out' />
      </LineChart>
    </ResponsiveContainer>
  )
}