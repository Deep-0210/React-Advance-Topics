import React from 'react'
import Counter from './Counter/Counter'
import RedCounter from './Counter/RedCounter'

const Hoc = () => {
    return (
        <div>
            <RedCounter title="Red Counter" className={'text-red-700 font-semibold'} value={Counter} />
            <RedCounter title="Blue Counter" className={'text-blue-700 font-semibold my-5'} value={Counter} />
        </div>
    )
}

export default Hoc
