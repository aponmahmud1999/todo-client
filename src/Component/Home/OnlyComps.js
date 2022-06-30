import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OnlyComps = () => {
  const navigate = useNavigate();

  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("R you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = tasks.filter((task) => task._id !== id);
          setTasks(remaining);
        });
      alert("Deleted Successfully!");
    }
  };
  return (
    <div class="overflow-x-auto min-h-screen">
      <table class="table w-full">
        <thead>
          <tr class="hover">
            <th>Sl</th>
            <th>Task</th>
            <th>Starting</th>
            <th>Ending</th>
            <th>Status</th>
            <th>operations</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <>
              {task.status === "completed" && (
                <tr class="hover">
                  <th>{index + 1}</th>
                  <td>{task.task}</td>
                  <td>{task.starting}</td>
                  <td>{task.ending}</td>
                  <td>{task.status}</td>
                  <td>
                    <div class="btn-group">
                     
                          <button
                            class="btn"
                            onClick={() => handleDelete(task._id)}
                          >
                            Delete
                          </button>
                        
                    </div>
                  </td>
                </tr>
              )}{" "}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OnlyComps;