import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminderß

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No tasks to show')}
    </div>
  );
}

export default App;
