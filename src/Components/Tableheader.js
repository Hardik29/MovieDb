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
        {console.log(sortColumn)}
    }
    return (
        <thead>
            <tr >
                {props.columns.map((column) =>
                    <th key={column.path || column.path} className="-4" onClick={() => raiseSort(column.path)}>{column.label}</th>
                )}</tr>
        </thead>
    )
}

export default Tableheader
