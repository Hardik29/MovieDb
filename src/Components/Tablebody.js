import React from "react";
import _ from 'lodash';


function tablebody(props) {
  const renderCell = (item, column) => {
      if(column.content)  return column.content(item);
      return _.get(item, column.path)
  }
  const { data, columns} = props;
  return (
    <tbody>
      {data.map(item => <tr key={item._id}>
        {columns.map((column) => (
         <td className="m-4 w-32 h-14">{renderCell(item, column)}</td>
        ))}
        </tr>
      )}
    </tbody>
  );
}

export default tablebody;
