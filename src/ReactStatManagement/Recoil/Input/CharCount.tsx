import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountStat } from '../Store'

const CharCount = () => {

  const count = useRecoilValue(charCountStat)
  return (
    <div className='text-black w-max mx-auto'>
      <div className='mt-5'>
        <span className='font-bold text-xl'>Length: </span> {count}
      </div>
    </div>
  )
}

export default CharCount
