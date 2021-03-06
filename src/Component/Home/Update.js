import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} =useParams();
    const [task ,setTask]=useState({})
    console.log(task)
    const [name,setName] =useState(0)
    useEffect(()=>{
fetch(`http://localhost:5000/tasks/${id}`)
.then(res=>res.json())
.then(data=>{setTask(data)
            setName(data.quantity)})
    },[name])

    const handleUpdateproduct=event =>{
        event.preventDefault()
        const taskName=event.target.quantity.value
        const updateproduct={task: taskName}
        fetch(`http://localhost:5000/tasks/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setName(taskName)
        alert('task updated successfully')})
        event.target.quantity.value=''
    }
    return (
        <div  style={{minHeight:'100vh'}}>
        <p className='text-2xl'><strong>Task Name: {name}</strong></p>
                <br/>
        <form onSubmit={handleUpdateproduct} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 

                <input type="text" min={1} name='quantity' placeholder='enter new name' required />
                <br/>
                <button className='rounded pt-1 w-100' size="lg" style={{marginLeft:'1%'}} type="submit">Update task</button>
            </form>
        </div>
    );
};

export default Update;