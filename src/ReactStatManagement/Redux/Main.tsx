import React from 'react'
import store from './Store/Index'
import CreateTodo from './Todo'
import { Provider } from 'react-redux'

const TodoRedux = () => {
    return (
        <div>
            <Provider store={store}>
                <CreateTodo />
            </Provider>
        </div>
    )
}

export default TodoRedux