import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

import { data } from '../utils/data'
import { months } from '../utils/consts'
import { LengthGraphType } from '../utils/types'

export const LengthGraph = () => {
  const renderData: LengthGraphType[] = data.map((value, index) => ({
    month: months[index],
    length: value.LoS
  }))

  return(
    <ResponsiveContainer width='95%' height={600}>
      <LineChart data={renderData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis domain={[1, 2]} />
        <Legend />
        <Line name='Length of Stay' dataKey='length' dot={{r: 5}} animationEasing='ease-in-out' />
      </LineChart>
    </ResponsiveContainer>
  )
}