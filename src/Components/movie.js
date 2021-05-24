import React, { Component } from 'react'
import { getMovies, deleteMovie } from "../Services/fakeMovieService";
import {  getGenres } from "../Services/fakeGenreService";
import Like from './LIke';
import PaginationComp from './PaginationComp';
import Paginate from "../utlis/Paginate"
import ListGroup from './ListGroup';

export default class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            genre:  [],
            pageSize : 4,
            currentPage : 1,
        }
    }
    componentDidMount() {
        this.setState({ movies: getMovies(),genre:  getGenres()})
    }
    handleDelete = (movie) => {
        console.log("chal raha h kay ??")
        let m = deleteMovie(movie._id)
        //console.log(m)
        this.setState({
            movies: m
        })
        
    }
    handlePageChange = (pages) => {
       this.setState({currentPage:pages})
    }
    onItemSelect = (items) => {
       this.setState({selectedGenre : items})
       this.setState({currentPage:1})
      //console.log(this.state.selectedGenre)
    }
   
    render() {
        const filtered = this.state.selectedGenre ? this.state.movies.filter(ch => ch.genre._id === this.state.selectedGenre._id) : this.state.movies
        const moviesch = Paginate(filtered, this.state.currentPage, this.state.pageSize)
        return (
            <div className="grid grid-cols-3">
                <div className=""> 
                   <ListGroup 
                   items={this.state.genre}
                   onItemSelect={this.onItemSelect}
                   selectedGenre = {this.state.selectedGenre}
                   pageChange={this.handlePageChange}
                   />
                </div>
                <div className="col-span-2">
                we have total of {this.state.selectedGenre ? filtered.length : this.state.movies.length} movies
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody >
                        {moviesch.map((movie) => 
                            <tr key={movie._id}>
                                <th>{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like/></td>
                                <td><button className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleDelete(movie)}> 
                                Delete
                                </button>
                                </td>
                            </tr> )}
                    </tbody>
                </table>
                <PaginationComp itemsCount={filtered.length} pageSize={this.state.pageSize} pageChange={this.handlePageChange} currentPage={this.state.currentPage}/>
                </div>
              
        </div>
        )
    }
}
