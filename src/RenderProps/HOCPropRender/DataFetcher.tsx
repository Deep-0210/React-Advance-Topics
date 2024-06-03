import React, { useEffect, useState } from 'react'
import Extra from './Extra'

const DataFetcher = () => {
  const [data, setData] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      setData("Fetched Data")
    }, 5000)

  })
  return (
    <div>
      <Extra data={data} />
    </div>
  )
}

export default DataFetcher
