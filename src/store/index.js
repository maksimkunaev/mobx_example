import { observable, computed, autorun, action } from "mobx"

class TodoList {
    @observable todos = [
        {
            task: "read a book",
            finished: false,
            id: 0
        },
        {
            task: "buy milk",
            finished: false,
            id: 1
        }
    ];

    @observable alarm = 'sleep...'


    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action addToDo(todo) {
        this.todos.push(todo)
    }

    @action wakeUp(s) {
        console.log(s)
        const fn = () => {
            this.alarm = 'WAKE UP!'
        }

        setTimeout(fn, s * 1000)
    }

}

export default new TodoList();
