import React from 'react';

const TableRow = ({ tableData }) => {
	const { name, website, phone, address } = tableData;
	return (
		<tr>
			<td>{name}</td>
			<td>{website && <a href={website} target='_blank'>Visit our website</a>}</td>
			<td>{phone}</td>
			<td>{address}</td>
		</tr>
	)
};

export default TableRow;