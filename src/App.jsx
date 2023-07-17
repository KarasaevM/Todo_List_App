import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import CreateTask from './components/createTask/CreateTask';
import TodoListItem from './components/todoListItem/TodoListItem';

function App() {
	const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])
	
	useEffect(() => {
		let arr = localStorage.getItem("taskList")
	 
		if(arr){
				let obj = JSON.parse(arr)
				setTaskList(obj)
		}
	}, [])

	const deleteTask = (index) => {
		let tempList = taskList
		tempList.splice(index, 1)
		localStorage.setItem("taskList", JSON.stringify(tempList))
		setTaskList(tempList)
		window.location.reload()
	}

	const successTaskList = (index) => {
		let arr = localStorage.getItem("taskList")

		let obj = JSON.parse(arr)

		!obj[index].isCompleted ? obj[index].isCompleted = true : obj[index].isCompleted = false;
		localStorage.setItem("taskList", JSON.stringify(obj));
		setTaskList(obj);
	}

	const updateListArray = (obj, index) => {
		let tempList = taskList
		tempList[index] = obj
		localStorage.setItem("taskList", JSON.stringify(tempList))
		setTaskList(tempList)
		window.location.reload()
	}

	const toggle = (e) => {
		e.preventDefault()
		setModal(!modal);
	}

	const saveTask = (taskObj) => {
		let tempList = taskList
		tempList.unshift(taskObj)
		localStorage.setItem("taskList", JSON.stringify(tempList))
		setTaskList(taskList)
		setModal(false)
	}

	const notTask = <p className='warn_task'>There are no tasks yet...</p>
	return (
		<>
		<Header toggle={toggle} modal={modal}/>
		<div className="todo_list">
			<div className="container">
			<h2>Ongoing Task</h2>
			<div className="todo_list__items">
			{taskList.length > 0 ? taskList.map((obj , index) => <TodoListItem isCompleted={taskList[index].isCompleted} key={index} taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} successTaskList={successTaskList}/> ) : notTask}
			</div>
			</div>
		</div>
		<CreateTask toggle={toggle} modal={modal} save={saveTask}/>
		</>
	)
}

export default App;