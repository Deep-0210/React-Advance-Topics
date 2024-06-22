import React, { useEffect, useState } from 'react'
import { RootStat, ToDo } from '../types'
import { useSelector } from 'react-redux'

const PrintTodo = () => {
    const userData = useSelector((stat: RootStat) => stat.todoArray)

    const [data, setData] = useState<Array<ToDo>>([])

    useEffect(() => {
        setData(userData)
    }, [userData])

    return (
        <div className='w-max mx-auto'>
            {data?.length ? userData.map((e, i) => {
                return (
                    <div className='flex gap-4' key={i}>
                        <div>{++i}</div>
                        <div>{e.todo}</div>
                    </div>
                )
            }) : <>No Data Available</>}
        </div>
    )
}

export default PrintTodo
