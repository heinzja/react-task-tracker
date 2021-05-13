import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const APP_TITLE = "Task Tracker";
const tasksInitialState = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 1:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 3:30pm",
    reminder: true,
  },
];

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(tasksInitialState);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1; // generate new id
    const newTask = { id, ...task }; // create new task
    setTasks([...tasks, newTask]); // copy current tasks state, add new task to state
  };

  // Delete Task
  const deleteTask = (id) => {
    console.log("delete: ", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Task Reminder
  const toggleTaskReminder = (id) => {
    console.log("toggle: ", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title={APP_TITLE}
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      ></Header>
      {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ""}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskReminder}
        ></Tasks>
      ) : (
        "No Tasks Available"
      )}
    </div>
  );
}

export default App;
