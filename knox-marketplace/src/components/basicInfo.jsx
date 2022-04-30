// import React from 'react'
// import '../index.css';
// import {SidebarData} from './SidebarData'
// import styled from 'styled-components'
// import { Link, useNavigate } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';

// const Container = styled.div`
//     height: 80px;
//     width: 100px
//     background-color: #F7DC6F;
// `
// const Right = styled.div`
//     flex: 1;
//     text-align: right;
// `
// const Left = styled.div`
//     flex: 1;
// `
// const Wrapper = styled.div`
//     padding: 20px 20px;
//     display: flex;
//     justify-content: space-between;
// `
// const Styles = styled.div`
//  background: lavender;
//  padding: 20px;
//     form {
//         background: white;
//         border: 1px solid #dedede;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-around;
//         margin: 0 auto;
//         max-width: 500px;
//         padding: 30px 50px;
//     }`;
// export const basicInfo = () => {

//     return(
//         <div className='basicInfo'>
//             <Container>
//         <form>
//             <fieldset>
//                 <label>
//                     <h2>Title</h2>
//                     <input name="title" />
//                 </label>
//             </fieldset>
//         {/* <button type="submit">Submit</button> */}
//         </form>
//         <form>
//             <fieldset>
//                 <label>
//                     <h2>Category</h2>
//                     <input name="Category" />
//                 </label>
//             </fieldset>
//         {/* <button type="submit">Submit</button> */}
//         </form>
//         <form>
//             <fieldset>
//                 <label>
//                     <h2>Cost</h2>
//                     <input name="Cost" />
//                 </label>
//             </fieldset>
//         {/* <button type="submit">Submit</button> */}
//         </form>
//                 {/* <h2>tittle</h2>
//                 <h2>category</h2>
//                 <h2>cost</h2> */}
//             </Container>
//         </div>
//     )
// }

// export default basicInfo
import React, {useState} from 'react';
// import {useHistory} from "react-router"
import '../App.css';

export default function Form(){

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        shippingAddress: "",
        projectAddress: "",

        customDesign: "",
        description: "",
        dimensionDetail: "",
        manufactureDetail: "",

        designText: "",
        deadline: "",
        budget: "",
        comment: ""
    })

    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        // console.log(e.target)
        // console.log(form)
    }


    //onSubmit redirect to a new page
    //use history.push. import from react-router-dom
    // const history = useHistory();


    //"send" method using fetch
    // const sendEmail = (e) => {

    //     e.preventDefault();

    //     const data = {
    //         service_id: 'service_z3p8h0m',
    //         template_id: 'template_svmf3nm',
    //         user_id: 'user_7Pf1rN0FgZQwrrMpFSw55',
    //         template_params: form
    //     };

    
    //     fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })

    //     .then((result) => {
    //         console.log(result.statusText);
    //     }, (error) => {
    //         console.log(error.statusText);
    //     });
        
    //     e.target.reset();

    //     history.push("/portfolio")     //onSubmit redirect to a new page
    // }



    return (
        <div className = "form-box">

            {/* <h5 className = "form-step"> steps: {count} of 4 </h5> */}

            <form>

                
                <div className = "field1">
                {/* <label> customer info </label> */}
                <h1>YOUR ITEM's</h1>
                <h3>Name:</h3>
                <input 
                    // type ="text" 
                    className = "form-input"
                    name ="title" 
                    placeholder="📛"
                    onChange ={updateForm} 
                    // value = {form.name}
                />

                <h3>Cost:</h3>
                <input 
                    // type ="tel" 
                    className = "form-input"
                    name ="cost" 
                    placeholder="💸"
                    onChange ={updateForm} 
                    // value = {form.phone}
                />
                <h3>Category:</h3>
                <input 
                    // type ="email" 
                    className = "form-input"
                    name ="Category" 
                    placeholder="🔠"
                    onChange ={updateForm} 
                    // value = {form.email}
                />
                <h3>Description:</h3>
                <textarea 
                    // type ="text" 
                    className = "form-input"
                    name ="Description" 
                    placeholder="💭"
                    onChange ={updateForm} 
                    // value = {form.projectAddress}
                />
                
                <button 
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