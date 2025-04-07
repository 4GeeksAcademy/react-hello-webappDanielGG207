
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
            
            <form>

            <h1> Add a new contact</h1>
             
             <label for="FullName">Name</label>
             <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" name = "FullName" id = "FullName" 
             
             onChange={(event)=> {setFullName(event.target.value)}}/>

             <label for="Email">Email</label>
             <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" name = "Email" id ="Email"
             
             onChange={(event)=> {setEmail(event.target.value)}}/>

             <label for="Phone">Phone</label>
             <input type="text" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" name = "Phone" id = "Phone"
             
             onChange={(event)=> {setPhone(event.target.value)}}/>

             <label for="Address">Address</label>
             <input type="text" className="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1" name = "Address" id = "Address"
             
             onChange={(event)=> {setAddress(event.target.value)}}/>

            </form>
             

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
      
                      .then(() =>{navigate("/")})
      
                      .catch((error)=>{console.log(error)})
      
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