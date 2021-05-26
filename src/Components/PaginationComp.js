import _ from "lodash";
import React from "react";

function PaginationComp(props) {
  const {itemsCount,pageSize,pageChange,currentPage} = props;
  const number = Math.ceil(itemsCount/pageSize)
  console.log(currentPage)
  if(number === 1) 
  return null;
  const pages = _.range(1, number + 1)
  return (
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
            {pages.map(page => <li className=" group first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 
                rounded-full items-center justify-center leading-tight relative border
                 border-solid border-pink-500  text-pink-500 active cursor-pointer" onClick={() => pageChange(page)} key={page}>
                   <a className="" >{page}</a></li> )}
           </ul>
        </nav>
      </div>
  );
}

export default PaginationComp;
