import { useState, useRef } from "react"
import Post from "./Post"

function Form() {

    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState(" ")
    const [Image, setImage] = useState(null)

    const imageRef = useRef()

    // state storing data from the form
    const [posts, setPosts] = useState([])

    const handlPosts = (e) => {
        e.preventDefault()
        const newPosts = {title, Image}
        // console.log(newPosts)
        if(title != " " && Image != " "){
            setPosts([...posts, newPosts])
            setTitle(" ")
            imageRef.current.value = null
            handlIsClose()
        }
    }

    const handlIsOpen = () => {
        document.body.style.backgroundColor = "#3C486B"
        document.body.style.opacity = "0.9"
        setIsOpen(true)
    }

    const handlIsClose = () => {
        document.body.style.backgroundColor = "white"
        setIsOpen(false)
    }

    return <div>

        <button onClick={handlIsOpen} className="w-[60px] h-[60px] bg-blue-500 text-5xl pb-4 text-white fixed right-4 bottom-4 rounded-full">+</button>

        <div className={`${isOpen === true ? "block" : "hidden"} bg-blue-500 sm:px-8 px-2 w-[23em] sm:w-[28em] absolute mt-10 pb-10 sm:mx-[30%] mx-[2%] rounded-xl`}>
            <i onClick={handlIsClose} class="cursor-pointer fa-solid fa-xmark text-3xl text-white absolute right-2 "></i>
            <form>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} className="h-[40px] w-[300px] rounded-lg pl-2 mt-10 outline-none" type="text" placeholder="Enter title" />
                <input ref={imageRef} onChange={(e) => {setImage(e.target.files[0])}} className="mt-5 file:bg-yellow-500 file:border-0 file:p-3 file:rounded-lg file:text-white file:font-bold" type="file" />
                <br />
                <button onClick={handlPosts} className="bg-white mt-5 px-10 text-3xl py-2 rounded-xl">Post</button>
            </form>
        </div>

        {

            
            posts.map( (items) => {
                return isOpen === true ? " " :  <Post title={items.title} image={URL.createObjectURL(items.Image)} />
            })

        }
    </div>
}

export default Form