import React, { Component } from 'react';
import SingleBook from './SingleBook';

export class Book extends Component {
    render(){
        return(
            <div className="container mt-4">
                
                 <div class="row">
                 <div class="input-group  col-md-6 mx-auto">
                    <input className="form-control mb-4" 
                        onChange={this.props.inputHandler}
                        onKeyPress={this.props.addBook} 
                        type="text" value={this.props.name} 
                        placeholder="Enter a new book"
                        style={{width: "500px"}}
                    />
                 </div>
             </div>
                {this.props.books.map(book => {
                    return(
                        <SingleBook 
                            singleBook={book} 
                            deleteHandler={this.props.deleteHandler}
                            isEditable={this.props.isEditable}
                            updateHandler={this.props.updateHandler}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Book;