import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

import { data } from '../utils/data'
import { months, genderKey, locationKey, typekey, reserveKey, agekey } from '../utils/consts'
import { PercentageGraphProps, DataType } from '../utils/types'

export const PercentageGraph = (props: PercentageGraphProps) => {
  let renderData: DataType[] = []
  let key: string[] = []
  switch(props.mode){
    case 'gender':
      renderData = data.map((value, index) => ({
        month: months[index],
        male: 100-value.female,
        female: value.female
      }))
      key = genderKey
      break
    case 'location':
      renderData = data.map((value, index) => ({
        month: months[index],
        local: value.local,
        usa: value.USA,
        sa: value.SA,
        eu: value.EU,
        mea: value.MEA,
        asia: value.ASIA
      }))
      key = locationKey
      break
    case 'type':
      renderData = data.map((value, index) => ({
        month: months[index],
        businessmen: value.businessmen,
        tourists: value.tourists
      }))
      key = typekey
      break
    case 'reserve':
      renderData = data.map((value, index) => ({
        month: months[index],
        direct: value.DR,
        agency: value.agency,
        air: value.AC
      }))
      key = reserveKey
      break
    case 'age':
      renderData = data.map((value, index) => ({
        month: months[index],
        u20: value.u20,
        to35: value.to35,
        to55: value.to55,
        m55: value.m55
      }))
      key = agekey
      break
    default:
      break
  }

  return(
    <ResponsiveContainer width='95%' height={600}>
      <BarChart data={renderData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis domain={[0, 'dataMax']} />
        <Legend />
        {key.map((value, index) => <Bar key={value} dataKey={value} stackId={1} fill={index%2? '#8884d8': '#82ca9d'} maxBarSize={50} />)}
      </BarChart>
    </ResponsiveContainer>
  )
}