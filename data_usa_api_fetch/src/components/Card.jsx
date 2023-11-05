/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Card({ employeeData }) {
	return (
		<div className='card'>
			<h4>{employeeData.employee_name}</h4>
			<p>Salary: {employeeData.employee_salary}</p>
			<p>Age: {employeeData.employee_age}</p>
		</div>
	);
}

export default Card;
