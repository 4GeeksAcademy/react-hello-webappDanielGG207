
import { useNavigate

 } from "react-router-dom"

import { useState } from "react"



function AddContact () {
    const navigate = useNavigate()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    return (

        <div className="FullCenter">

         <div className="Contenedor">
            
            <div className="Contact-box">

             <h1> Add a new contact</h1>
             
             <p>Full Name</p>
             <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" name = "FullName" 
             
             onChange={(event)=> {setFullName(event.target.value)}}/>

             <p>Email</p>
             <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" name = "FullName" 
             
             onChange={(event)=> {setEmail(event.target.value)}}/>

             <p>Phone</p>
             <input type="text" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" name = "FullName" 
             
             onChange={(event)=> {setPhone(event.target.value)}}/>

             <p>Address</p>
             <input type="text" className="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1" name = "FullName" 
             
             onChange={(event)=> {setAddress(event.target.value)}}/>

             <button type="button" className="btn btn-primary boton2" onClick={(event)=> {
                          let data = {
                 
                           name: fullName,
                           phone: phone,
                           email: email,
                           address: address
                          
                      }
      
                      console.log(event)
      
                      fetch("https://playground.4geeks.com/contact/agendas/Daniel/contacts", {method:"POST", body: JSON.stringify(data) ,  headers: {
                        'Content-Type': 'application/json'
                      }})
      
                      .then((response) =>{ return (response.json())})
      
                      .then((data) =>{console.log(data)})
      
                      .catch()
      
                      navigate("/")

             }}>Add a new contact </button>

             

             <button className="return" onClick={() => {

               

                navigate("/")
             }}> Or return to contacts</button>







            </div>
            
            
        
        
         </div>
    
        </div>

       
)}

export default AddContact 