export const createHttpObject = (method, payload=undefined) => {
  const body = JSON.stringify(payload)
  const headers = new Headers()
  return { method, headers, body }
}

export const portraitMode = () => {
  const { innerHeight, innerWidth } = window
  return innerHeight >= innerWidth
}
