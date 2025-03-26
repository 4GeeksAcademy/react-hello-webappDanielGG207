
import { useNavigate

 } from "react-router-dom"

import { useState, useEffect } from "react"

import {  useParams } from "react-router-dom";

import storeReducer from "../store";


import useGlobalReducer from "../hooks/useGlobalReducer";


function EditContact () {
   const {store, dispatch} =useGlobalReducer()
   const { id } = useParams()
   let selectedContact = store.contacts.find((object) => { return object.id == id})
    const navigate = useNavigate()
    const [fullName, setFullName] = useState(selectedContact.name)
    const [email, setEmail] = useState(selectedContact.email)
    const [phone, setPhone] = useState(selectedContact.phone)
    const [address, setAddress] = useState(selectedContact.email)

     

     console.log(id)

     console.log(store.contacts)


     

     console.log(selectedContact)

     

     

    return (

        <div className="FullCenter">

         <div className="Contenedor">
            
            <div className="Contact-box">

             <h1> Edit a contact</h1>
             
             <p>Full Name</p>
             <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" name = "FullName" value =  {fullName}
             
             onChange={(event)=> {setFullName(event.target.value)}}/>

             <p>Email</p>
             <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" name = "FullName"  value={email}
             
             onChange={(event)=> {setEmail(event.target.value)}}/>

             <p>Phone</p>
             <input type="text" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" name = "FullName" value = {phone}
             
             onChange={(event)=> {setPhone(event.target.value)}}/>

             <p>Address</p>
             <input type="text" className="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1" name = "FullName"  value = {address}
             
             onChange={(event)=> {setAddress(event.target.value)}}/>

             <button type="button" className="btn btn-primary boton2" onClick={(event)=> {
                          let data = {
                 
                           name: fullName,
                           phone: phone,
                           email: email,
                           address: address
                          
                      }
      
                      console.log(event)
      
                      fetch("https://playground.4geeks.com/contact/agendas/Daniel/contacts/"+ id, {method:"PUT", body: JSON.stringify(data) ,  headers: {
                        'Content-Type': 'application/json'
                      }})
      
                      .then((response) =>{ return (response.json())})
      
                      .then((data) =>{console.log(data)})
      
                      .catch()
      
                      navigate("/")

             }}>Edit Contact</button>

             

             <button className="return" onClick={() => {

               

                navigate("/")
             }}> Or return to contacts</button>







            </div>
            
            
        
        
         </div>
    
        </div>

       
)}

export default EditContact