import React, { Component } from "react";
import Title from "../components/Title/title";
import Main from "../components/Main/main";
import Row from "../components/Row/row";
import CardSaved from "../components/CardSaved/cardSaved";
import API from "../utils/API";


class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
      }
    
      getSavedBooks = () => {
        API.getSavedBooks()
          .then(res =>
            this.setState({
              books: res.data
            })
          )
          .catch(err => console.log(err));
      };
    
      handleBookDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
      };

    render() {
        return (
            <div>
                <Title />
                <Main>
                    <Row>
                        {this.state.books.length ? (
                            <div className="cardBox">
                                {this.state.books.map(book => (
                                    <CardSaved
                                        key={book._id}
                                        title={book.title}
                                        subtitle={book.subtitle}
                                        link={book.link}
                                        authors={book.authors.join(", ")}
                                        description={book.description}
                                        image={book.image}
                                        Button={() => (
                                            <button
                                              onClick={() => this.handleBookDelete(book._id)}
                                              className="btn btn-sm btn-dark"
                                            >
                                              Delete
                                            </button>
                                          )}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h2 className="text-center">No Saved Books</h2>
                            )}
                    </Row>
                </Main>
            </div>
        );
    };
}

export default Saved;
