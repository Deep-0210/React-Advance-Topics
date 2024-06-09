export function createTodo() {
    const todo = [];
    for (let i = 0; i < 50; i++) {
        todo.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: Math.random() > 0.5
        });
    }
    return todo;
}

export function filterTodo(todo: any, tab: string = "all") {

    const startTime = performance.now()
    console.log("evaluated time", performance.now() - startTime)

    return todo.filter((todo: { completed: any; }) => {
        if (tab === 'all') {
            return true;
        } else if (tab === 'active') {
            return !todo.completed;
        } else if (tab === 'completed') {
            return todo.completed;
        }
    });
}
