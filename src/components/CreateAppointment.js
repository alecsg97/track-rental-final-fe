import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function CreateAppointment(props){
    const navigate = useNavigate();

console.log(props)

    const serviceList = props.services.map((eachService)=>{
        return <option value ={eachService._id}>{eachService.make}</option>
    })
console.log(serviceList);

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        whichCar: "",
        date: "",
        time: "",

    
    })

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        axios.post("http://localhost:4200/appointments/create", {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            phone: formState.phone,
            whichCar: formState.whichCar,
            date: formState.date,
            time: formState.time,

        
        })
        .then((response)=>{
            console.log(response);
            props.fetchAppointments();
            navigate("/appointments");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <div>
                <label className="form-label">
                First Name:
                </label>
                <input className="form-control" type="text" value={formState.firstName} onChange={(e)=>{updateInput(e,"firstName")}} />
            </div>
            <br></br>
            <br></br>

            <div>
                <label className="form-label">
                Last Name:
                </label>
                <input className="form-control"  type="text" value={formState.lastName} onChange={(e)=>{updateInput(e,"lastName")}} />
            </div>
            <br></br>
            <br></br>

            <div>
                <label className="form-label">
                Email:
                </label>
                <input className="form-control" type="text" value={formState.email} onChange={(e)=>{updateInput(e,"email")}} />
            </div>
            <br></br>
            <br></br>

            <div>
            <label className="form-label">
                Phone:
                </label>
                <input className="form-control" type="text" value={formState.phone} onChange={(e)=>{updateInput(e,"phone")}} />
            </div>
            <br></br>
            <br></br>

            <div>
            <label className="form-label">
                Car you will be using:
                </label>
                <select className="form-control" value={formState.whichCar} onChange={(e)=>{updateInput(e,"whichCar")}} >
                {serviceList}
                </select>
            </div>
            <br></br>
            <br></br>   

            <div>
            <label className="form-label">
                Track Rental Date:
                </label>
                <input className="form-control" type="date" value={formState.date} onChange={(e)=>{updateInput(e,"date")}} />
            </div>
            <br></br>
            <br></br>

            <div>
            <label className="form-label">
                Track Rental Duration:
                </label>
                <input className="form-control" type="text" value={formState.time} onChange={(e)=>{updateInput(e,"time")}} />
            </div>
            <br></br>
          <br></br>
            <center><button className="fancyButton" onClick={submitForm}>Submit Track Rental</button></center>
        </div>
    )

}