import React, { useEffect, useMemo } from 'react'
import { filterTodo } from './utils'

const Todo = ({ todo, tab }: { todo: any, tab: string }) => {

    const finalTodoList = useMemo(() =>
        filterTodo(todo, tab), [todo, tab]
    )
    return (
        <div>
            {finalTodoList?.length && finalTodoList.map((e: any) => {
                return (
                    <li key={e?.id}>
                        {e?.completed ? <s>{e?.text}</s> : e?.text}
                    </li>
                )
            })}
        </div>
    )
}

export default Todo
