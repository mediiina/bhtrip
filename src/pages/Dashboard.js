import React, { useEffect, useState } from 'react'
import userLogOut from '../auth/userLogOut'
import { useNavigate } from 'react-router-dom'
import "./Dashboard.css"
import "@pathofdev/react-tag-input/build/index.css";
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection } from "firebase/firestore";



const Dashboard = () => {
  const navigate = useNavigate();
  const {error, logOut} = userLogOut();

  const handleLogOut = async () => {
    await logOut();

    if (!error) {
      navigate("/");

    }

  }

  const initialState = {
    title: "",
    trending:"no",
    category:"",
    description:"",
    price:"",
  }

  const categoryOption = [
    "Nature",
    "City",
    "Castle",
    "River",
    "Lake",
    "Waterfall",
    "Bridge",
    "Mountain",
    "Ethno Village",
    "National Park"
  ];

  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);


  const{title, category, trending, description, price} = form;

  useEffect(() => {
    const uploadFile =() => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100
        setProgress (progress);
        switch (snapshot.state) {
           case "paused":
              console.log("Upload is paused");
              break;
           case "running":
              console.log("Upload is running");
              break;
          default:
              break;
      }
    }, 
    (error) => {
      console.log(error);
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
        
        setForm((prev) => ({ ...prev, imgUrl: downloadUrl}));
      });
    }
   );
  };
  file && uploadFile();
}, [file]);
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
 
  const handleTrending = (e) => {
    setForm({ ...form, trending: e.target.value});
  }
  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && title && file && description && trending && price) {
      try{
        await addDoc(collection(db, "attractions"), form );
        console.log("Document successfully added to 'attractions' collection.");
      } catch (error) {
        console.error("Error adding document to 'attractions' collection:", error);
      }
    }
    navigate("/");
  }

  return (
    
    <div className="container-fluid mb-4">
      <div>
        <button onClick={handleLogOut}>Log Out</button> 
      </div>
      <div>
        <div className="col-12">
          <div className="text-center heading py-2">
            Create Post </div>
          </div>
          <div className="input">
            <div className="col-10 col-md-8 col-lg-6">
              <form className="row post-form" onSubmit={handleSubmit}>
                <div className="col-12 py-3">
                  <input
                    type="text"
                    className="form-control input-text-box"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="col-12 py-3">
                  <p className="trending">Is it trending ?</p>
                  <div className="form-check-inline mx-2">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="yes"
                      name="radioOption"
                      checked={trending === "yes"}
                      onChange={handleTrending} 
                    />
                    <label htmlFor="radioOption" className="form-check-label">
                      Yes&nbsp;
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      value="no"
                      name="radioOption"
                      checked={trending === "no"}
                      onChange={handleTrending} 
                    />
                    <label htmlFor="radioOption" className="form-check-label">
                      No
                    </label>                    
                  </div>
                </div>
                <div className="col-12 py-3">
                  <select value={category} onChange={onCategoryChange} className="catg-dropdown"
                  >
                  <option>Please select category</option>
                  {categoryOption.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}
                  </select>
                </div>
                <div className="col-12 py-3">
                  <textarea 
                  className="form-control description-box"
                  placeholder="Description"
                  value={description}
                  name="description"
                  onChange={handleChange}/>
                </div>
                <div className="col-12 py-3">
                  <textarea 
                  className="form-control price-box"
                  placeholder="Price"
                  value={price}
                  name="price"
                  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])}
                 />
                </div>
                <div className="col-12 py-3 text-center">
                  <button 
                    className="btn btn-add" 
                    type="submit"
                    disabled={progress !== null && progress < 100}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>  
  )
} 

export default Dashboard
