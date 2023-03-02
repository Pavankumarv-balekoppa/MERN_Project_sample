import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/banner.css';

const AddPost = () => {
let [author,setAuthor] = useState("")
let [title,setTitle] = useState("")
let [summary, setSummary] = useState("")
let [images, setImages] = useState("")
let [location, setLocation] = useState("")
    let addPost = (e)=>{
        e.preventDefault()
        let data = {author,title,summary,images,location}
        if (author && title && summary && images && location) {
            axios.post('http://localhost:4000/addPost', data)
            .then(res=>{
                alert(res.data.message)
            }).catch(err=>{
                alert(err.data.message)
            })
            
        } else {
            alert("Please fill all the values")
        }
    }
    return ( 
        <div className="addPost ">
            <div className="topp row ">
                <h1 className=" text text-center text-light fw-bold" style={{marginTop:'300px'}}>Add Your Post</h1>
            </div>
            <div className="under mt-5 d-flex">
                <img className=" col-lg-6 ms-4"height={600} src="/images/pizza2.jpg" alt="" />
                <div className="post col-4 ms-5">
                    <h1>Add Post</h1>
                    <form action="" onSubmit={addPost} className="bg-light ">
                         <div className=" form-group ">
                            <label className="form-label" htmlFor="">Author</label>
                            <input type="text" 
                            className="form-control mb-2"
                            placeholder="Enter the author name"
                            name="name"
                            onChange={(e) => setAuthor(e.target.value)} 
                            />

                        </div>
                        <div className="title form-group">
                        <label className="form-label" htmlFor="">Title</label>

                            <input type="text"
                            className="form-control mb-2"
                            placeholder="Enter the title"
                            name="title"
                             onChange={(e) => setTitle(e.target.value)} 
                              />
                        </div>
                        <div className="summary form-group">
                        <label className="form-label" htmlFor="">Summary</label>

                        <input type="text" 
                            className="form-control mb-2 p-5"
                            placeholder="Enter the summary"
                            name="summary"
                            onChange={(e) => setSummary(e.target.value)}  
                            />
                        </div>
                        <div className="images form-group">
                        <label className="form-label" htmlFor="">Images</label>

                        <input type="text" 
                            className="form-control mb-2"
                            placeholder="Enter the images"
                            name="images" 
                            onChange={(e) => setImages(e.target.value)} 
                             />
                        </div>
                        <div className="location form-group">
                        <label className="form-label" htmlFor="">Location</label>

                        <input type="text" 
                            className="form-control mb-2"
                            placeholder="Enter your location"
                            name="location"
                            onChange={(e) => setLocation(e.target.value)} 
                             />
                        </div>
                        <div className="signUp_button mt-2 ">
                            <button className="btn btn-danger w-100">Add Post</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddPost;