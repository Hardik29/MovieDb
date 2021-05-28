import React from 'react'

function Tableheader(props) {
    const raiseSort = (path) => {
        const sortColumn = { ...props.sortColumn };
        if (sortColumn.path === path)
          sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        else {
          sortColumn.path = path;
          sortColumn.order = "asc";
        }
        props.onSort(sortColumn);
    }
    const raiseSortColumn = (column) => {
        console.log(column.path)
        console.log(props.sortColumn.path)
        if(column.key) return null
        if(props.sortColumn.path !== column.path) return null
        if(props.sortColumn.order === "asc" ) return (<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round"  strokeWidth={2} d="M5 15l7-7 7 7" /></svg>)
        return (<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>)
    }
    return (
        <thead>
            <tr >
                {props.columns.map((column) =>
                    <th key={column.path || column.key} className="cursor-pointer" onClick={() => raiseSort(column.path)}> <div className="flex justify-center items-center ">{column.label}{raiseSortColumn(column)}</div> </th>
                )}</tr>
        </thead>
    )
}

export default Tableheader
