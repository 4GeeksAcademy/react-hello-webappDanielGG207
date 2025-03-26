
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Home = () => {
	const {store, dispatch} =useGlobalReducer()

    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()
	const [change, setChange] = useState(false)
	
	useEffect(() => {
	fetch("https://playground.4geeks.com/contact/agendas/Daniel/contacts")

	.then((response) => {
		
		return response.json()
	})

	.then((data) => {
		setContacts(data.contacts)
		dispatch({
			type:"modify_contacts",
			payload: data.contacts
		})
		
		console.log(store.contacts)
		console.log( contacts)


	})


    .catch()
	}, [change] )

	

	console.log("//////////////////")

	console.log(store.contacts)
	console.log( contacts)
	

	
	return (
		
		<div className="FullCenter">
			<div className="Contenedor">
			<button type="button" class="btn btn-success posicion-boton" onClick={() => {
				navigate("/add-contact")
			}
				
			}>Add New Contact</button>

            <div className="Contact-box">
				{store.contacts.map((object) => {

					return(
						<div className="container text-center">
						<div className="row">
						  <div className="col img">
							<img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="/>
						  </div>
						  <div className="col-7">
						  {object.name}
						  <p> <i className="fa-solid fa-location-dot"></i> {object.address}</p>
						  <p> <i className="fa-solid fa-phone"></i> {object.phone}</p>
						  <p><i className="fa-solid fa-envelope"></i> {object.email}</p>
						  </div>

						  <div className="col">
							<button  onClick={(event)=> {
							let id = object.id
                             console.log(id)

							 fetch("https://playground.4geeks.com/contact/agendas/Daniel/contacts/" + object.id , {method: "DELETE"})

							 .then(() => {setChange(!change)})

							 .then()
							 
							 .catch


							}}><i className="fa-solid fa-trash"></i></button>
							<button> <i class="fa-solid fa-pen-to-square" onClick={()=>{
								console.log(object.id)
								navigate("/edit/" + object.id)
							}}>
								</i></button>
							
						  </div>
						</div>
					  </div>
					)
				})}
			</div>
			</div>

			

			
			
			
		</div>
	);
}; 