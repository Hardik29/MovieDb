import React from 'react'

export default function ListGroup(props) {
    return (
        <div>
            <div className="font-sans flex items-center justify-center py-8">
                <div className="overflow-hidden bg-white rounded max-w-xs border-2 border-gray-200 w-48 leading-normal text-left">
                <p className="text-gray-500 border-gray-200 border-b-2  hover:bg-blue-500 hover:text-white" onClick={() => props.onItemSelect()}>All Movies</p>
                        {props.items.map((genres)=> <p key={genres._id} className="text-gray-500 border-gray-200 border-b-2  hover:bg-blue-500 hover:text-white" onClick={() => props.onItemSelect(genres)}>{genres.name}</p>)}
                        
                </div>
            </div>
        </div>
    )
}
