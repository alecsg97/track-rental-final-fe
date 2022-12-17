import "../App.css";
import {useParams} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import EditService from "./EditService";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";


export default function ServiceDetails({fetchServices}){

    const { theUser } = useContext(UserContext)

console.log(theUser)
    const {id} = useParams();
//EDIT
    const [editing, setEditing] = useState(null);

    const edit = () =>{
        setEditing(true);
    }

    const stopEditing = () =>{
        setEditing(false);
    }
    const [theService, setTheService] = useState(null);
    
   //FETCH SERVICE DATA
    const fetchServiceDetails = ()=>{
        axios.get("http://localhost:4200/services/"+id)
        .then((response)=>{
            console.log(response.data);
            setTheService(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchServiceDetails();
    },[])

    //DELETE SERVICE

    const deleteService = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:4200/services/delete", { id: theID })
			.then((response) => {
				console.log(response);
				fetchServices();
			})
			.catch((err) => {
				console.log(err);
			});
	};

    console.log(theService);

    if(!theService){
        return ""
    }
    return(
    <div className='profile'>
    
        {editing && <EditService fetchServices={fetchServices} stopEditing={setEditing} service={theService} />} 

            {!editing && <div>
                <br></br>
                
                <h3>Make: {theService.make}</h3>
                <br></br>
                <h3>Model: {theService.model}</h3>
                <br></br>
                <h3>Type Of Driving: {theService.typeOfDriving}</h3>
                <br></br>
                <h3>Horsepower: {theService.power}</h3>

                <br></br>
                <br></br>


                <p><button className="fancyButton" onClick={edit}>Edit Car Specs</button></p>
           
           <Link to= {"/services"}><button className="fancyButton" onClick={()=>{deleteService(theService._id)}}>Delete This Car</button></Link>
           
           </div>}
          


    </div>
    )
}
