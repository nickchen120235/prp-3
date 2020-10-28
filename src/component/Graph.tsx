import React from 'react'
import { FlexibleWidthXYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, ChartLabel } from 'react-vis'

import { data } from './data'

interface GraphProps {
  mode: string
}
type RenderDataType = {
  x: number,
  y: number,
  color: string
}

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const colors = ['#00838f', '#039be5', '#1a237e', '#ffc107', '#e65100', '#7b1fa2']

export const Graph = (props: GraphProps) => {
  // It is ugly but it should work.
  let renderData: RenderDataType[][] = []
  switch(props.mode){
  case 'gender':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.female, color: colors[0]})),
      data.map((value, index) => ({x: index+1, y: 100-value.female, color: colors[1]}))
    ]
    break
  case 'location':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.local, color: colors[0]})),
      data.map((value, index) => ({x: index+1, y: value.USA, color: colors[1]})),
      data.map((value, index) => ({x: index+1, y: value.SA, color: colors[2]})),
      data.map((value, index) => ({x: index+1, y: value.EU, color: colors[3]})),
      data.map((value, index) => ({x: index+1, y: value.MEA, color: colors[4]})),
      data.map((value, index) => ({x: index+1, y: value.ASIA, color: colors[5]})),
    ]
    break
  case 'type':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.businessmen, color: colors[0]})),
      data.map((value, index) => ({x: index+1, y: value.tourists, color: colors[1]}))
    ]
    break
  case 'reserve':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.DR, color: colors[0]})),
      data.map((value, index) => ({x: index+1, y: value.agency, color: colors[1]})),
      data.map((value, index) => ({x: index+1, y: value.AC, color: colors[2]})),
    ]
    break
  case 'age':
    renderData = [
      data.map((value, index) => ({x: index+1, y: value.u20, color: colors[0]})),
      data.map((value, index) => ({x: index+1, y: value.to35, color: colors[1]})),
      data.map((value, index) => ({x: index+1, y: value.to55, color: colors[2]})),
      data.map((value, index) => ({x: index+1, y: value.m55, color: colors[3]})),
    ]
    break
  default:
    break
  }

  return(
    <FlexibleWidthXYPlot height={550} stackBy='y' animation style={{marginLeft: '5px', marginBottom: '5px'}}>
      <VerticalGridLines /><HorizontalGridLines />
      <XAxis tickFormat={v => months[v-1]} top={500} /><YAxis left={25} />
      <ChartLabel id='x' text='Month' xPercent={.5}   yPercent={.92} />
      <ChartLabel id='y' text='%'     xPercent={.008} yPercent={.4}  />
      {renderData.map((value, index) => <VerticalBarSeries key={index} data={value} barWidth={.5} colorType='literal' />)}
    </FlexibleWidthXYPlot>
  )
}