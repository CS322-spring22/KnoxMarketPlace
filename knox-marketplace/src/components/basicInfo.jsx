import React, {useEffect, useState} from 'react';
import '../App.css';
import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

export default function Form(){
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
          const name = new Date().getTime() + file.name;
    
          console.log(name);
          const storageRef = ref(storage, name);
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              setPerc(progress);
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
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setData((prev) => ({ ...prev, image: downloadURL }));
              });
            }
          );
        };
        file && uploadFile();
      }, [file]);

    const updateForm = (e) => {
        /*
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        */
        // console.log(e.target)
        // console.log(form)

        const id = e.target.id;
        var value = e.target.value;

        if(isNaN(e.target.value) == false){
            value = parseFloat(value).toFixed(2);
        }

        setData({...data, [id]: value});
    }

    const handleAdd = async(e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            const user = auth.currentUser;
            /*
            await setDoc(doc(db, "users", user.uid), {
                ...data,
                timeStamp: serverTimestamp(),
            });
            */

            const docRef = await addDoc(collection(db, "items"), {
                uid: user.uid,
                ...data,
                timeStamp: serverTimestamp(),
            });
              
        } catch (err) {
            console.log(err);
        }

        navigate("/");
    }

    let navigate = useNavigate();

    return (
        <div className = "form-box">

            {/* <h5 className = "form-step"> steps: {count} of 4 </h5> */}

            <form onSubmit = {handleAdd}>

                
                <div className = "field1">
                {/* <label> customer info </label> */}

                <h2>YOUR ITEM INFORMATION</h2>

                <h2>Title: *</h2>
                <input 
                    type ="text" 
                    required
                    id = "title"
                    className = "form-input"
                    name ="title" 
                    placeholder="Title"
                    onChange ={updateForm} 
                />

                <h2>Price: *</h2>
                <input 
                    type ="number" 
                    required
                    id = "price"
                    className = "form-input"
                    name ="price" 
                    placeholder="Price"
                    onChange ={updateForm} 
                    min = "0"
                    max = "5000000"
                    step = ".01"
                />

                <h2>Category: *</h2>
                <select 
                    type ="option" 
                    required
                    id = "category"
                    className = "form-input"
                    name ="category" 
                    onChange ={updateForm} 
                >
                    <option>
                        
                    </option>
                    <option value = "Electronics">Electronics</option>
                    <option value = "Furniture">Furniture</option>
                    <option value = "Entertainment">Entertainment</option>
                    <option value = "Books">Books</option>
                    <option value = "Clothing">Clothing</option>
                    <option value = "Accessories">Accessories</option>
                    <option value = "Food">Food</option>
                    <option value = "Artwork">Artwork</option>
                    <option value = "Other">Other</option>
                </select>

                <div>
                <h2>Image: *</h2>
                <img
                    height="120px"
                    src={
                        file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                />
                <label htmlFor="file">
                    <DriveFolderUploadOutlinedIcon className="icon" cursor="pointer"/>
                </label>
                <input
                    type="file"
                    required
                    id="file"
                    className = "form-input"
                    name ="image"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                />
                </div>

                <h2>Description: *</h2>
                <textarea 
                    type ="text" 
                    required
                    id = "description"
                    className = "form-input"
                    name ="description" 
                    placeholder="Description"
                    onChange ={updateForm} 
                />

                <h2>YOUR CONTACT INFORMATION (For Your Buyers)</h2>

                <h2>Preferred Email: *</h2>
                <input 
                    type ="email" 
                    required
                    id = "email"
                    className = "form-input"
                    name ="email" 
                    placeholder="Email"
                    onChange ={updateForm} 
                />

                <h2>Preferred Phone Number (xxx-xxx-xxxx): *</h2>
                <input 
                    type ="tel" 
                    required
                    id = "phone"
                    className = "form-input"
                    name ="phone" 
                    placeholder="Phone Number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    onChange ={updateForm} 
                />
                
                <button 
                    disabled={per !== null && per < 100}
                    type = "submit"
                    id= "submitBtn"
                    className = "submitBtn"
                > submit</button>

                </div>
                 
            </form>
            {/* end of form */}


            

        </div>
        // end of form-box
    )
}