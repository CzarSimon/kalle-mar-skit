import _ from 'lodash'
import { color } from '../styles/styles'

export const createHttpObject = (method, payload=undefined) => {
  const body = JSON.stringify(payload)
  const headers = new Headers()
  return { method, headers, body }
}

export const portraitMode = () => {
  const { innerHeight, innerWidth } = window
  return innerHeight >= innerWidth
}

export const transformRestults = results => {
  let transformedRestults = {}
  for (let result of results) {
    transformedRestults[result.Vote] = result.Count
  }
  return transformedRestults
}

export const mostlyYes = results => results.YES >= results.NO


const translateKey = key => {
  switch (_.toUpper(key)) {
    case 'YES':
      return 'Ja'
    case 'NO':
      return 'Nej'
    default:
      return 'Ja'
  }
}

export const createLabels = results => _.map(_.keys(results), key => translateKey(key))

export const createChartData = results => {
  return {
    labels: createLabels(results),
    datasets: [
      {
        data: _.values(results),
        backgroundColor: [color.red, color.green],
        hoverBackgroundColor: [color.red, color.green]
      }
    ]
  }
}
