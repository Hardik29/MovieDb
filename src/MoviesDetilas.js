import React from 'react'
import {  } from "module";


function MoviesDetilas({match, history}) {
    const handleSave = () => {
        history.push("/movies")
    }
    return (
        <div className="block">
            Movie-{match.params.id}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={handleSave}>
            Save
            </button>
        </div>
    )
}

export default MoviesDetilas
