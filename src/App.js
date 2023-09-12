import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors Appointment',
    day: '5th Feb at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at school',
    day: '6th Feb at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Food shopping',
    day: '5th Feb at 2:30pm',
    reminder: false
  }])

  const [showAddTask, setShowAddTask] = useState(false)

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  } 

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminderß

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const taskProps = {
    tasks: tasks,
    onDelete: deleteTask,
    onToggle: toggleReminder
  }

  const taskComponents = (tasks.length > 0) 
    ? <Tasks {...taskProps} />
    : <>No tasks to show</>;


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {taskComponents}
    </div>
  );
}

export default App;
