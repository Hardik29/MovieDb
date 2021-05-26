import React from 'react'
import Like from './LIke'


function MoviesTable(props) {
    return (
        <div>
            <table className="table-auto">
                        <thead>
                            <tr >
                                <th className="p-2" onClick={() => props.onSort("title")}>Title</th>
                                <th className="p-2" onClick={() => props.onSort("genre.name")}>Genre</th>
                                <th className="p-2" onClick={() => props.onSort("numberInStock")}>Stock</th>
                                <th className="p-2" onClick={() => props.onSort("dailyRentalRate")}>Rate</th>
                                <th className="p-2" >Liked</th>
                            </tr>
                        </thead>
                        <tbody >
                            {props.moviesch.map((movie) =>
                                <tr key={movie._id}>
                                    <th>{movie.title}</th>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><Like /></td>
                                    <td><button className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => props.handleDelete(movie)}>
                                        Delete
                                </button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
        </div>
    )
}

export default MoviesTable
