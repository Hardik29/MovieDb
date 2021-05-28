import React from 'react'
import Tableheader from "./Tableheader";
import Tablebody from "./Tablebody";

function table(props) {
    return (
        <table className="table-auto">
          <Tableheader
            sortColumn={props.sortColumn}
            onSort={props.onSort}
            columns={props.columns}
          />
          <Tablebody 
          data={props.moviesch} 
          columns={props.columns}
          />
        </table>
    )
}

export default table
