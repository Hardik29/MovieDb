import React, { Component } from 'react'
import { getMovies, deleteMovie } from "../Services/fakeMovieService";
import { getGenres } from "../Services/fakeGenreService";
import PaginationComp from './PaginationComp';
import Paginate from "../utlis/Paginate"
import ListGroup from './ListGroup';
import MOviesTable from './MoviesTable';
import _ from 'lodash';

export default class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            genre: [],
            pageSize: 4,
            currentPage: 1,
            sortColumn: {path: "title", order:"asc"}
        }
        this.handleSort = this.handleSort.bind(this);
    }
    componentDidMount() {
        this.setState({ movies: getMovies(), genre: getGenres() })
    }
    handleDelete = (movie) => {
        let m = deleteMovie(movie._id)
        this.setState({
            movies: m
        })

    }
    handleSort = (path) =>{
        //console.log(path)
        this.setState({sortColumn:{ path, order:"asc"}})
        console.log(this.state.sortColumn.path)
    }
    handlePageChange = (pages) => {
        this.setState({ currentPage: pages })
    }
    onItemSelect = (items) => {
        this.setState({ selectedGenre: items, currentPage: 1 })
    }

    render() {
        const filtered = this.state.selectedGenre ? this.state.movies.filter(ch => ch.genre._id === this.state.selectedGenre._id) : this.state.movies
        const sorted = _.orderBy(filtered, [this.state.sortColumn.path], ["asc"])
        console.log(sorted)
        const moviesch = Paginate(sorted, this.state.currentPage, this.state.pageSize)
        return (
            <div className="grid grid-cols-3">
                <div className="">
                    <ListGroup
                        items={this.state.genre}
                        onItemSelect={this.onItemSelect}
                        selectedGenre={this.state.selectedGenre}
                        pageChange={this.handlePageChange}
                    />
                </div>
                <div className="col-span-2">
                    we have total of { filtered.length } movies
                    <MOviesTable 
                    moviesch={moviesch} 
                    handleDelete={this.handleDelete}
                    onSort={this.handleSort}/>
                    <PaginationComp itemsCount={filtered.length} pageSize={this.state.pageSize} pageChange={this.handlePageChange} currentPage={this.state.currentPage} />
                </div>

            </div>
        )
    }
}
