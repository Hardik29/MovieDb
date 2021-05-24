import _ from "lodash";
import React from "react";

function PaginationComp(props) {
  const {itemsCount,pageSize,pageChange,currentPage} = props;
  const number = (itemsCount/pageSize)
  console.log(currentPage)
  if(number <= 1) 
  return null;
  const pages = _.range(1, number + 1)
  return (
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
            {pages.map(page => <li className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 
                rounded-full items-center justify-center leading-tight relative border
                 border-solid border-pink-500 bg-white text-pink-500 active cursor-pointer" key={page}>
                   <p onClick={() => pageChange(page)}>{page}</p></li> )}
           </ul>
        </nav>
      </div>
  );
}

export default PaginationComp;
