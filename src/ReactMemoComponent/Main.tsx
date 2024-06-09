import React, { useState } from 'react'
import { createTodo } from './utils'
import Todo from './Todo'
import ReactCallBack from './ReactCallBack/ReactCallBack';
import ReactMemoComponent from './React_memo/Main';

const todo = createTodo();

const Main = () => {

  const [tab, setTab] = useState<string>('all')
  return (
    <div>
      <div className='flex gap-4 w-max mx-auto mt-10'>
        <div className='border-2 border-green-700 rounded-md p-2'>
          <button onClick={() => setTab("all")}>All</button>
        </div>
        <div className='border-2 border-green-700 rounded-md p-2'>
          <button onClick={() => setTab("active")}>Active</button>
        </div>
        <div className='border-2 border-green-700 rounded-md p-2'>
          <button onClick={() => setTab("completed")}>Completed</button>
        </div>
      </div>
      <Todo todo={todo} tab={tab} />

      {/* React Call-back */}
      <ReactCallBack />

      {/* React.memo for efficient code and component rendering */}
      <ReactMemoComponent />
    </div>
  )
}

export default Main
