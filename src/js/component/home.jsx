import React from "react";

//create your first component
const Home = () => {
	return (
		<>
			<h1 className="mt-5"> To Do List</h1>
			<div className="container">
				<div className="card">
					<ul class="list-group list-group-flush">
						<li className="list-group-item">An item</li>
						<li className="list-group-item">A second item</li>
						<li className="list-group-item">A third item</li>
						<li className="list-group-item">A fourth item</li>
						<li className="list-group-item">A fifth item</li>
					</ul>
					<div className="card-footer">
						Items left
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
