import { makeAutoObservable } from "mobx";

interface Todo {
    text: string
    completed: boolean
}

interface TodoStore {
    todo: Todo[];
    addTodo: (text: string) => void;
    filterTodo: Todo[];
}

const createTodoStore = (): TodoStore => {
    return makeAutoObservable({
        todo: [] as Todo[],

        addTodo(text: string) {
            this.todo.push({ text, completed: false })
        },

        get filterTodo() {
            return this.todo;
        }
    })
}

export const todoStore = createTodoStore()