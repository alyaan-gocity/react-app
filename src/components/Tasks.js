import Task from "./Task"

// const Tasks = (props) => {


//     const foo = 1;

//     const tasks = props.tasks;

//     const { tasks } = props

//     const { onDelete, ...restOfProps } = props

//     tasks
// }

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
     {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
     ))} 
    </>
  )
}

export default Tasks
