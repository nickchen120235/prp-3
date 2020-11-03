import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

import { data } from '../utils/data'
import { months, conventionMonths } from '../utils/consts'
import { LengthDataType, LineProps } from '../utils/types'

export const LengthGraph = (props: LineProps) => {
  let renderData: LengthDataType[] = data.map((value, index) => ({
    month: months[index],
    length: value.LoS*24
  }))
  renderData = props.convention? renderData.filter(value => conventionMonths.includes(value.month)): renderData

  return(
    <ResponsiveContainer width='95%' height={300}>
      <LineChart data={renderData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis domain={[30, 50]} tickFormatter={value => `${value} hours`} />
        <Legend />
        <Line name='Length of Stay' dataKey='length' dot={{r: 5}} animationEasing='ease-in-out' animationDuration={500} />
      </LineChart>
    </ResponsiveContainer>
  )
}