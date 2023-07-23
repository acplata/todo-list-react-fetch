import React, { useState } from "react";

//create your first component
const initialValue = ""

const Home = () => {
	const [task, setTask] = useState(initialValue);
	const [taskList, setTaskList] = useState([]);

	const handleChange = (event) => {
		setTask(event.target.value)
		console.log(event.target.value)
	}

	const handleEnter = (event) => {
		if (event.key === "Enter") {
			setTaskList([...taskList, task])
		}

		console.log(event.key)
	}

	const handleDelete = (deleteTask) => {
		const filterArray = taskList.filter((element, index) => index !== deleteTask)
		setTaskList(filterArray);
	}

	return (
		<>
			<h1 className="mt-5"> To Do List</h1>

			<div className="container shadow p-3 mb-5 bg-white rounded" onKeyDown={handleEnter}>
				<div className="card">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="form-row">
								<div className="col">
									<input type="text" name="task" className="form-control" placeholder="Task" onChange={handleChange}></input>
								</div>
							</div>
						</li>
						{taskList.map((element, index) => {
							return (
								<li className="list-group-item" key={index} >
									{element}
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
		</>
	);
};

export default Home;
