import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/tasks`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert('task added successfully')
      });

        navigate(from, { replace: true });
  };
  return (
    <div className="w-50 mx-auto my-5 border rounded shadow-lg p-5"  style={{minHeight:'100vh'}}>
      <h2 className="text-4xl">Add a new task: </h2><br/>
      <form className="d-flex flex-column rounded" onSubmit={handleSubmit(onSubmit)}>
        <input className="input input-bordered" {...register("task")} placeholder="Name" required/><br/>
        <input className="input input-bordered" {...register("status")} placeholder="status" required/><br/>
        <input className="input input-bordered" {...register("starting")} placeholder="starting" required/><br/>
        <input className="input input-bordered" {...register("ending")} placeholder="ending" required/><br/>
<input type="submit" value="Submit" class="btn" />
      </form>
    </div>
  );
};

export default AddService;