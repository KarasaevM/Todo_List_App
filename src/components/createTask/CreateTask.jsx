import React, { useState } from 'react';
import './CreateTask.scss';

function CreateTask({modal, toggle, save}) {
	const [taskName, setTaskName] = useState('');
	const [description, setDescription] = useState('');

	if(modal) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	const handleChange = (e) => {
        
		const {name, value} = e.target

		if (name === "taskName"){
				setTaskName(value)
		} else{
				setDescription(value)
		}
	}

	const onReset = () => {
		setTaskName('')
		setDescription('')
	}

	const handleSave = (e) => {
		e.preventDefault()
		let taskObj = {}
		const currentDate = new Date();
		const dateString = currentDate.toLocaleDateString();
		taskObj["Name"] = taskName;
		taskObj["Description"] = description;
		taskObj["Data"] = dateString;
		save(taskObj);
		onReset()
	}

	return (
		<div className={`create_task ${modal}`}>
			<div className="create_task__wrapper">
				<h2>Create Task</h2>
				<form className='create_task__form'>
					<div className="create_task__name">
						<label htmlFor="name">Task Name</label>
						<input type="text" id='name' value={taskName} onChange={handleChange} name="taskName" placeholder='Name Task' />
					</div>
					<div className="create_task__description">
						<label htmlFor="description">Description</label>
						<textarea type="text" id='description' value={description} onChange={handleChange} name="description" placeholder='Description Task'></textarea>
					</div>
					<button onClick={handleSave}>Create Task</button>
					<button onClick={toggle}>Cancel</button>
				</form>
			</div>
		</div>
	)
}

export default CreateTask;