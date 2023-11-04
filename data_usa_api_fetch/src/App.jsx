/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState([]);

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

	return (
		<>
			<div>
				<h3>US Population</h3>
				{data.map((item) => (
					<div key={item.Year}>
						<h4>
							In {item.Year} the overall population of USA was :
							{item.Population}
						</h4>
					</div>
				))}
			</div>
		</>
	);
}

export default App;

//! We can do it in this way also

/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
// 	const [data, setData] = useState({
// 		Nation: "",
// 		Year: "",
// 		Population: 0,
// 	});

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch(
// 					"https://datausa.io/api/data?drilldowns=Nation&measures=Population"
// 				);
// 				if (!response.ok) {
// 					throw new Error("Network response was not ok");
// 				}

// 				const jsonData = await response.json();
// 				const firstItem = jsonData.data[1]; // Assuming you want the first item

// 				setData({
// 					Nation: firstItem.Nation,
// 					Year: firstItem.Year,
// 					Population: firstItem.Population,
// 				});
// 			} catch (error) {
// 				console.error("Error fetching data:", error);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	return (
// 		<>
// 			<div>
// 				<h3>{data.Nation}</h3>
// 				<h4>
// 					{data.Year} & {data.Population}
// 				</h4>
// 			</div>
// 		</>
// 	);
// }

// export default App;
