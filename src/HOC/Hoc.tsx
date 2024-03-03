import React from 'react'
import Counter from './Counter/Counter'
import RedCounter from './Counter/RedCounter'

const Hoc = () => {
    return (
        <div>
            <RedCounter title="Red Counter" className={'text-red-700 font-semibold w-max mx-auto'} value={Counter} />
            <RedCounter title="Blue Counter" className={'text-blue-700 font-semibold w-max mx-auto my-5'} value={Counter} />
        </div>
    )
}

export default Hoc
