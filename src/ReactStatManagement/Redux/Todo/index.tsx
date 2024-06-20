import React, { useState } from 'react'
import { createTodoAction } from '../Store/Index'
import { useDispatch, useSelector } from 'react-redux'
import { ToDo } from '../types'

const CreateTodo = () => {
    const [todo, setTodo] = useState<string>('')

    const dispatch = useDispatch()

    // const userData = useSelector((stat: Array<ToDo>) => stat.values)
    // console.log({ userData })

    const submitTodo = () => {
        if (todo !== '') {
            dispatch(createTodoAction.createTodo(todo))
        }
    }

    return (
        <div className='flex justify-center w-full '>
            <div className='bg-black w-1/2 rounded-lg mt-20 p-4'>
                <div className='w-1/3 mx-auto'>
                    <input type="text" name="todo" id="todo" className='bg-white h-8 border border-white rounded-lg w-full px-2 placeholder:text-black' placeholder='Todo' onChange={(e) => setTodo(e.target.value)} />
                </div>

                <div className='w-max mx-auto mt-4'>
                    <button className='bg-green-700 p-2 rounded-lg' onClick={submitTodo}>Add +</button>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo
