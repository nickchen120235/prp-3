import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

import { data } from './data'

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const testData = data.map((value, index) => ({
  month: months[index],
  male: 100-value.female,
  female: value.female
}))

export const Graph = () => {
  return(
    <ResponsiveContainer width='95%' height={600}>
      <BarChart data={testData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Legend />
        <Bar dataKey='male' stackId={1} fill='#8884d8' maxBarSize={50} />
        <Bar dataKey='female' stackId={1} fill='#82ca9d' maxBarSize={50} />
      </BarChart>
    </ResponsiveContainer>
  )
}