import _ from "lodash";
import React from "react";

function PaginationComp(props) {
  const {itemsCount,pageSize,pageChange} = props;
  const number = Math.ceil(itemsCount/pageSize)
  if(number === 1) 
  return null;
  const pages = _.range(1, number + 1)
  return (
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
            {pages.map(page => <li className=" group first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 
                rounded-full items-center justify-center leading-tight relative border
                 border-solid border-pink-500  text-pink-500 cursor-pointer hover:bg-pink-500 hover:text-white" onClick={() => pageChange(page)} key={page}>
                   <p className="" >{page}</p></li> )}
           </ul>
        </nav>
      </div>
  );
}

export default PaginationComp;
