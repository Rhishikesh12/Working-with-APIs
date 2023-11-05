// fetch data from here : https://dummy.restapiexample.com/

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
	const [data, setData] = useState([]);
	const [empData, setEmpData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://datausa.io/api/data?drilldowns=Nation&measures=Population"
				);
				const jsonData = await response.json();
				const innerObj = jsonData.data;
				setData(innerObj);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchEmpData = async () => {
			const empResponse = await fetch(
				"https://dummy.restapiexample.com/api/v1/employees"
			);
			const fetchedData = await empResponse.json();
			const innerData = fetchedData.data;

			setEmpData(innerData);
		};

		fetchEmpData();
	}, []);

	return (
		<>
			<div>
				<h1>US Population</h1>
				{data.map((item) => (
					<div key={item.Year}>
						<h4>
							In {item.Year} the overall population of USA was :
							{item.Population}
						</h4>
					</div>
				))}
			</div>
			<div>
				<h1>Employee Data</h1>
				{empData.map((item) => (
					<Card key={item.id} employeeData={item} />
				))}
			</div>
		</>
	);
}

export default App;
