import "../App.css";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import EditAppointment from "./EditAppointment";
import { Link } from "react-router-dom";


export default function AppointmentDetails({fetchAppointments, theUser}){
    const {id} = useParams();
//EDIT
    const [editing, setEditing] = useState(null);

    const edit = () =>{
        setEditing(true);
    }

    const stopEditing = () =>{
        setEditing(false);
    }
    const [theAppointment, setTheAppointment] = useState(null);

//FETCH APPT DATA
    const fetchAppointmentDetails = ()=>{
        axios.get("http://localhost:4200/appointments/"+id)
        .then((response)=>{
            console.log(response.data);
            setTheAppointment(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchAppointmentDetails();
    },[])

//DELETE APPT


    const deleteAppointment = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:4200/appointments/delete", { id: theID })
			.then((response) => {
				console.log(response);
				fetchAppointments();
			})
			.catch((err) => {
				console.log(err);
			});
	};


    console.log(theAppointment);

    if(!theAppointment){
        return ""
    }


    return(
    <div className='appointment-list-component'>
        <br></br>

        {editing && <EditAppointment fetchAppointments={fetchAppointments} stopEditing={setEditing} appointment={theAppointment} />} 

            {!editing && <div>
        
            
                <h3>Name: {theAppointment.firstName}</h3>
                <h3>Last Name: {theAppointment.lastName}</h3>
                <h3>Contact Email: {theAppointment.email}</h3>
                <h3>Contact Phone: {theAppointment.phone}</h3>
                <h3>Car: {theAppointment.whichCar}</h3>
                <h3>Rental Duration: {theAppointment.time}</h3>

                <br></br>

                <p><button className="fancyButton" onClick={edit}>Edit Track Rental</button></p>

            </div>}

           <Link to= {"/appointments"}><button className="fancyButton" onClick={()=>{deleteAppointment(theAppointment._id)}}>Delete Track Rental</button></Link>
    
    </div>
    )
}
