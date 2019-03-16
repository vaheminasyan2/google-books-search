import React, { Component } from "react";
import Title from "../components/Title/title";
import SearchBox from "../components/SearchBox/searchBox"
import Main from "../components/Main/main";
import Row from "../components/Row/row";
import Card from "../components/Card/card";
import API from "../utils/API";

const textStyle = {
     "margin-bottom":"60px"
}

class Search extends Component {

    state = {
        books: [],
        searchTerm: "",
        message: "Start by typing in a book name.",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.searchTerm)
            .then(res => 
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "We couldn't find book that matched search criteria. Please, try again with different search term."
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            tite: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
            .then(() => this.getBooks());
    }

    render() {
        return (
            <div>
                <Title />
                <Main>
                    <Row>
                        <SearchBox
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            searchTerm={this.state.searchTerm}
                        />
                    </Row>
                    <Row>
                        {this.state.books.length ? (
                            <div style={textStyle}>
                                {this.state.books.map(book => (
                                    <Card
                                        key={book.id}
                                        title={book.volumeInfo.title}
                                        subtitle={book.volumeInfo.subtitle}
                                        link={book.volumeInfo.infoLink}
                                        authors={book.volumeInfo.authors.join(", ")}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        handleBookSave={this.handleBookSave(book.id)}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                    </Row>
                </Main>
            </div>
        );
    };
}

export default Search;
