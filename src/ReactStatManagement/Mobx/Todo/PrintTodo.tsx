import { observer } from 'mobx-react-lite'
import { todoStore } from '../Store'

const PrintTodo = observer(() => {
    return (
        <div>
            {todoStore.filterTodo.map((e, i) => {
                return (
                    <div key={i} className='flex gap-4 w-max mx-auto'>
                        <div>
                            {i}
                        </div>

                        <div>
                            {e.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
})

export default PrintTodo
