import React from 'react';
import TableRow from './TableRow';

const TableComponent = ({ boroughInfo }) => {
	return (
		<table className='table table-striped'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Website</th>
					<th>Phone</th>
					<th>Address</th>
				</tr>
			</thead>
			<tbody>
				{boroughInfo && boroughInfo.map((tableData, index) => <TableRow tableData={tableData} key={index} />
				)}
			</tbody>
		</table>
	)
}

export default TableComponent;