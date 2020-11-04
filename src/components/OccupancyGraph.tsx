import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

import { data } from '../utils/data'
import { months, conventionMonths } from '../utils/consts'
import { LineProps, OccupancyDataType } from '../utils/types'

export const OccupancyGraph = (props: LineProps) => {
  let renderData: OccupancyDataType[] = data.map((value, index) => ({
    month: months[index],
    occ: value.occupancy
  }))
  renderData = props.convention? renderData.filter(value => conventionMonths.includes(value.month)): renderData

  return(
    <ResponsiveContainer width='95%' height={300}>
      <LineChart data={renderData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis domain={[50, 100]} tickCount={6} tickFormatter={value => `${value}%`} />
        <Legend wrapperStyle={{position: 'absolute', left: '5%'}} />
        <Line name='Occupancy' dataKey='occ' dot={{r: 5}} animationEasing='ease-in-out' animationDuration={500} />
      </LineChart>
    </ResponsiveContainer>
  )
}