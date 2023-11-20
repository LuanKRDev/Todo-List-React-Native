export interface ITodo{
    desc: string,
    state: TodoStatusType,
}
type TodoStatusType = "todo" | "finished" 