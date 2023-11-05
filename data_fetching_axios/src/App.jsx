/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const apiUrl = "https://jsonplaceholder.typicode.com/comments";
			const response = await axios.get(apiUrl);
			setData(response.data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='App'>
			<h1>Comments Email Ids</h1>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.email}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
