import React, { Component } from 'react';
import Book from './component/Book';

export class App extends Component {

  state = {
    name: '',
    isEditable: false,
    books: []
  }

  inputHandler = event => {
    this.setState({
      name: event.target.value
    })
  }

  addBook = event => {
    var length = this.state.books.length;
    if(event.key === 'Enter') {
      var newStateArray = this.state.books;
      newStateArray.push({id: length+1, bookname: this.state.name});
      this.setState({
        books: newStateArray,
        name: ""
      });
      console.log(length);
      
    }
  }

  deleteHandler = id => {

    var newBooks = this.state.books.filter(book => id !== book.id);
    this.setState({
      books: newBooks
    })
  } 

  

  updateHandler = (newname, id) => {
    let newBooks = this.state.books.map(book => {
      if (book.id === id) {
         return {
           ...book,
           bookname: newname
         }
      }
      return book;
    });
    this.setState({
      books: newBooks
    });
  }

  render() {
    return (
      <Book 
        inputHandler={this.inputHandler} 
        name={this.state.name}
        addBook={this.addBook}
        books={this.state.books}
        deleteHandler={this.deleteHandler}
        isEditable={this.state.isEditable}
        updateHandler={this.updateHandler}
      />
    );
  }
}

export default App;
