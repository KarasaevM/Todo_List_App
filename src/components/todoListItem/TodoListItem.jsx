import React, { useState } from 'react';
import { AiFillCheckSquare } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { ImCheckboxUnchecked } from 'react-icons/im';

function TodoListItem({taskObj, index, deleteTask, updateListArray, successTaskList, isCompleted}) {
	const [modal, setModal] = useState(false);

	const toggle = () => {
		setModal(!modal);
	}

	const updateTask = (obj) => {
		updateListArray(obj, index);
	}

	const successTask = () => {
		successTaskList(index);
	}

	const handleDelete = () => {
		deleteTask(index);
	}

	return (
		<div className={`todo_list__item ${isCompleted ? 'complete' : ''}`}>
			<div className="todo_list__header">
					<h3>{taskObj.Name}</h3>
					<div className="todo_list__btn">
						<button onClick = {successTask}>{isCompleted ? <AiFillCheckSquare color='white' size={20}/> : <ImCheckboxUnchecked color='white' size={20}/>}</button>
						<button onClick = {handleDelete}><BsTrashFill color={isCompleted ? 'white' : '#ff7461'} size={20}/></button>
					</div>
			</div>
			<p className='todo_list__description'>{taskObj.Description}</p>
			<div className="todo_list__info">
				<p>{taskObj.Data}</p>
				<p>{isCompleted ? "Выполнено" : "Не завершено"}</p>
			</div>
		</div>
	)
}

export default TodoListItem;