import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SingleBook extends Component {

    state = {
        isEditable: false
    }

    editHandler = event => {
        if(event.key === 'Enter'){
          this.setState({
            isEditable : false
          });
        }
      }

    render(){
        let output = this.state.isEditable ?
           <input 
                onChange={(e)=>this.props.updateHandler(e.target.value, this.props.singleBook.id)} 
                type="text" placeholder="Enter a name" 
                value={this.props.singleBook.bookname}
                onKeyPress={this.editHandler}
            /> : <p>{this.props.singleBook.bookname}</p>
        return(
            <div>
                <li className="list-group-item d-flex container bg-dark text-white">
                    {console.log(this.props.singleBook)}
                    {output}
                    <span onClick={() => this.setState({isEditable:true})} style={{cursor: "pointer"}} className="float-right ml-auto mx-4"><i  className="fa fa-edit"></i></span>
                    <span onClick={() => this.props.deleteHandler(this.props.singleBook.id)} style={{cursor: "pointer"}} className="float-right"><i  className="fa fa-trash"></i></span>
                </li>
            </div>
        )
    }
}

export default SingleBook;