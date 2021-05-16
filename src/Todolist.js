
import React from 'react'

const Todolist = (props) =>{

    
    return(
        <>
        <div className="todo-style">
            <i className="fa fa-trash" aria-hidden="true" 
            onClick={() =>{
                props.onSelect(props.id);//we passed "id" bcs of the matching of the index values//
            }}

            />
            <li> {props.text}</li>
        </div>
            
        </>
    ) 
    

}
export default Todolist;
