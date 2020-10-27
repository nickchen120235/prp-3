import React from 'react'
import { FlexibleWidthXYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from 'react-vis'

import { data } from './data'

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

export const Graph = () => {
  const renderData1 = data.map((value, index) => ({
    x: index+1,
    y: value.female
  }))
  // console.log(renderData1)
  const renderData2 = data.map((value, index) => ({
    x: index+1,
    y: 100-value.female
  }))
  // console.log(renderData2)
  return(
    <>
      <FlexibleWidthXYPlot height={500} style={{margin: '5px'}} stackBy='y'>
        <VerticalGridLines /><HorizontalGridLines />
        <XAxis tickFormat={v => months[v-1]} /><YAxis />
        <VerticalBarSeries data={renderData1} barWidth={.5} />
        <VerticalBarSeries data={renderData2} barWidth={.5} />
      </FlexibleWidthXYPlot>
    </>
  )
}