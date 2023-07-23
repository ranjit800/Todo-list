import React, { useState } from 'react'
import todo from "../images/note.png.jpeg"
import "../App.css"

function Todo() {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('')
        }
    }

    //delete the todo
    const deleteItems = (id) => {
        console.log(id);
        const updateditems = items.filter((elem, index) => {
            return index != id;
        });
        setItems(updateditems);
    }

    const removeAll = () => {
        setItems([]);

    }

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={todo} alt="todo_logo" />
                        <figcaption><b>Add Your ToDo Here 📝</b></figcaption>
                    </figure>

                    <div className='addItem'>
                        <input type="text" placeholder='Write here'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title='Add Items' onClick={addItem}></i>
                    </div>



                    <div className='showItems'>
                        {
                            items.map((elem, index) => {
                                return (
                                    <div className='eachItem' key={index}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt add-btn" title='Delete Items' onClick={() => deleteItems(index)}></i>
                                    </div>
                                )
                            })
                        }
                    </div>



                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}> <span>CHECK LIST</span></button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Todo
