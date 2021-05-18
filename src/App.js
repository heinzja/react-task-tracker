import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

const APP_TITLE = "Task Tracker";
const tasksInitialState = [];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(tasksInitialState);

  useEffect(() => {
    // function used to
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      // set state of tasks = data from mock server
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // fetch our tasks from the jason-server mock backend
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // fetch a task from the jason-server mock backend
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    // fetch request to delete item from back-end json server
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    console.log("delete: ", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Task Reminder
  const toggleTaskReminder = async (id) => {
    // fetch task from database
    const taskToToggle = await fetchTask(id);
    // toggle the to reminder = !reminder
    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    // update the data on the jason-server mock back-end
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Header
                title={APP_TITLE}
                onAdd={() => {
                  setShowForm(!showForm);
                }}
                showForm={showForm}
              />
              {showForm ? <AddTask onAdd={addTask}></AddTask> : ""}

              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleTaskReminder}
                ></Tasks>
              ) : (
                "No Tasks Available"
              )}
            </>
          )}
        />
        <Route path="/about" component={About}></Route>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
