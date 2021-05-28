import React, { Component } from "react";
import Table from "./Table";
import Like from "./LIke";

export default class MOviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like", content: (item) => <Like /> },
    {
      key: "delete",
      content: (item) => (
        <button
          className=" ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => this.props.handleDelete(item)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { moviesch } = this.props;
    return (
      <div className="flex justify-center items-center m-3">
        <Table
          moviesch={moviesch}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
          columns={this.columns}
        />
      </div>
    );
  }
}
