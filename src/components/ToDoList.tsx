import { SetStateAction, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["What", "Was", "That"]);
  const [newTask, setNewTask] = useState(" ");

  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setNewTask(event.target.value);
  }
  function addTask() {}
  function deletTask(index) {}
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type=" text"
          placeholder="inter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delet-button" onClick={() => deletTask(index)}>
              Delet
            </button>
            <button
              className=" move-button-up"
              onClick={() => moveTaskUp(index)}
            >
              Move Task 👆
            </button>
            <button
              className="move-button-down"
              onClick={() => moveTaskDown(index)}
            >
              Move Task 👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
