import React from 'react'
import { FlexibleWidthXYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from 'react-vis'

import { data } from './data'

interface GraphProps {
  mode: string
}
type RenderDataType = {
  x: number,
  y: number
}

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

export const Graph = (props: GraphProps) => {
  let renderData: RenderDataType[][] = []

  // It is ugly but it should work.
  switch(props.mode){
  case 'gender':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.female})),
      data.map((value, index) => ({x: index+1, y: 100-value.female}))
    ]
    break
  case 'location':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.local})),
      data.map((value, index) => ({x: index+1, y: value.USA})),
      data.map((value, index) => ({x: index+1, y: value.SA})),
      data.map((value, index) => ({x: index+1, y: value.EU})),
      data.map((value, index) => ({x: index+1, y: value.MEA})),
      data.map((value, index) => ({x: index+1, y: value.ASIA})),
    ]
    break
  case 'type':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.businessmen})),
      data.map((value, index) => ({x: index+1, y: value.tourists}))
    ]
    break
  case 'reserve':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.DR})),
      data.map((value, index) => ({x: index+1, y: value.agency})),
      data.map((value, index) => ({x: index+1, y: value.AC})),
    ]
    break
  case 'age':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.u20})),
      data.map((value, index) => ({x: index+1, y: value.to35})),
      data.map((value, index) => ({x: index+1, y: value.to55})),
      data.map((value, index) => ({x: index+1, y: value.m55})),
    ]
    break
  default:
    break
  }
  return(
    <>
      <FlexibleWidthXYPlot height={500} style={{margin: '5px'}} stackBy='y' animation>
        <VerticalGridLines /><HorizontalGridLines />
        <XAxis tickFormat={v => months[v-1]} /><YAxis />
        {renderData.map((value, index) => <VerticalBarSeries key={index} data={value} barWidth={.5} />)}
      </FlexibleWidthXYPlot>
    </>
  )
}