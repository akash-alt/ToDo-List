import React ,{useState} from 'react';
import Todolist from './Todolist';

const App = ()=>{

    //(this is functional component)
    const [inputList,setInputList] = useState(""); // here i used hooks (useState)
    const [Items,setItems] = useState([]);

    // (this is functional event)
    const itemEvent= (event)=>{
        setInputList(event.target.value);
    };

    //olditems is used for storing current values
    //we have define list of items in btn section
    //we create empty array & storing data in the olditems
    const listOfItems = ()=>{
        setItems((oldItems) =>{
            return [...oldItems,inputList]
        });
        setInputList("");  //this is used for the adding values in the item list 
                           //after that values will be clear 
    };

    // we use this for delete item from the list
    const deleteItems = (id)=>{
        console.log("delete")

//NOTE: we will passed values of the (olditems == input wala olditems )
// here we are comparing the values of the index and id(index !== id)
// and i am using filter method for the filtering of the values

        setItems((oldItems) =>{
            return oldItems.filter((arrElem,index) =>{
                return index !== id;
            });
        });
    };

    return(
        <>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Enter task"
                    value={inputList}   // here we are passing input-list for the 
                    onChange={itemEvent}/>
                    <button onClick={listOfItems}> Add </button>

                    <ol>   
                    {/* <li> {inputList}</li> */}
                       {Items.map((itemval,index) =>{
                             return <Todolist 
                             key={index}
                             id = {index}
                             onSelect = {deleteItems}
                             text={itemval}/>
                       })}

                    </ol>
                </div>
            </div>
        </>
    )

}

export default App;