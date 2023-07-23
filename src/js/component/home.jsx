import React, { useState, useEffect } from "react";

//create your first component
const initialValue = ""

const apiUrl = "https://express-blog-xa7v.onrender.com/todo/users/acplata"

const Home = () => {
	const [taskList, setTaskList] = useState([]);

	const [task, setTask] = useState({
		label: "",
		done: true,
	}
	);


	const getTaskList = async () => {
		const response = await fetch(apiUrl);
		const data = await response.json();
		setTaskList(data);
	};

	const handleChange = (event) => {
		const updatedTask = { ...task, [event.target.name]: event.target.value };
		setTask(updatedTask);
	}

	const updateAPI = async (newList) => {
		const response = await fetch(apiUrl, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newList),
		});
		if (response.ok) {
			getTaskList();
		}
	};

	const addTaskToAPI = (event) => {
		if (event.key === "Enter") {
			const newTaskList = [...taskList, task];
			updateAPI(newTaskList);
		}
	};

	const handleDelete = (deleteTask) => {
		const updateTaskList = taskList.filter((element, index) => index !== deleteTask)
		updateAPI(updateTaskList);
	}

	useEffect(() => {
		getTaskList();
	}, []);

	return (
		<div onKeyDown={addTaskToAPI}>
			<h1 className="mt-5"> To Do List</h1>

			<div className="container shadow p-3 mb-5 bg-white rounded">
				<div className="card">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="form-row">
								<div className="col">
									<input type="text" name="label" className="form-control" placeholder="Task" value={task.label} onChange={handleChange}></input>
								</div>
							</div>
						</li>
						{taskList.map((element, index) => {
							return (
								<li className="list-group-item" key={index} >
									{element.label}
									<button type="button" className="btn-close" onClick={() => handleDelete(index)}></button>
								</li>
							)

						})}

					</ul>
					<div className="card-footer">
						{taskList.length} Items left
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
