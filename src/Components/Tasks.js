import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Tasks() {
  let [task, setTask] = useState(null);
  let [taskId, setTaskId] = useState(0);
  let [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task) {
      setTaskId(taskId + 1);
      localStorage.setItem(`${taskId}`, task);
      console.log(`Task Id is : ${taskId}`);
      setTask("");
      getTasks();
    } else {
      alert("Enter your task first");
    }
  };

  const deleteTask = (key) => {
    localStorage.removeItem(key);
    getTasks();
  };

  const getTasks = () => {
    // get all tasks and populate the list
    const savedTasks = Object.keys(localStorage).map((key) => ({
      id: key,
      value: localStorage.getItem(key),
    }));
    setTaskList([...savedTasks]);
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="App">
      <div className="todo-app">
        <h1>ToDo App</h1>
        <div className="task-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={() => addTask()}>Add</Button>
        </div>
        <ul className="task-list">
          {taskList.length > 0 ? (
            taskList.map((savedTask) => (
              <li className="task-item" key={savedTask.key}>
                <div className="task-checkbox">
                  <input type="checkbox" name="task1" />
                  <label></label>
                </div>
                <div className="task-text">{savedTask.value}</div>
                <div className="task-delete">
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(savedTask.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>Your added tasks will be displayed here</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
