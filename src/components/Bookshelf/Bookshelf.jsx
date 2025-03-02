import '../../index.css';
import { useState } from 'react';

const Bookshelf = (props) => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    const [newBook, setNewBook] = useState({
        title: "",
        author: ""
    })

    const handleInput = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value})

    }

    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        setBooks([...books, newBook])
        setNewBook({
            title: "",
            author: ""
        })
        
    }

    return(
        <div className="bookshelfDiv" >
            <div className="formDiv" >
                <h3>Add a Book</h3>
                {/* form will automatically have an id and the button needs to have the same id in order to control the form */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInput}
                    ></input>
    
                    <label htmlFor="author">Author:</label>
                    <input
                        id="author"
                        name="author" 
                        value={newBook.author}
                        onChange={handleInput}
                    ></input>
    
                    <button type="submit">Add book</button>

                </form>
            </div>
    
            <div className="bookCardsDiv">
                {books?.map((eachBook, index)=> {
                    return(
                        <div className="bookCard" key={index}>
                            <h3>{eachBook.title}</h3>
                            <p>by {eachBook.author}</p>
                        </div>
                    )
                })}      
            </div>
        </div>
    )
}


export default Bookshelf;