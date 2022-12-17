import "../App.css";
import axios from "axios"
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function EditService({service, stopEditing, fetchServices}){
    console.log(service)

    const navigate = useNavigate();
    
    const endEdit = () =>{
        stopEditing()
    }


    const [formState, setFormState] = useState(service);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }


    const submitForm = () =>{
        axios.post("http://localhost:4200/services/edit/"+service._id, {
            make: formState.make,
            model: formState.model,
            typeOfDriving: formState.typeOfDriving,
            power: formState.power,
        }).then((response)=>{
            console.log(response)
            navigate("/services");


        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div> 
           <div>
            <br></br>
            <div>
            Make:
            <input value={formState.make} onChange={(e)=>{updateInput(e, "make")}} />
            </div>
            <br></br>

            <div>
            Model:
            <input value={formState.model} onChange={(e)=>{updateInput(e, "model")}} />
            </div>
            <br></br>
            
            <div>
            Type Of Driving:
                <input value={formState.typeOfDriving} onChange={(e)=>{updateInput(e, "typeOfDriving")}}/>
            </div>
            <br></br>
            <div>
            Horsepower:
                <input value={formState.power} onChange={(e)=>{updateInput(e, "power")}} />
            </div>

            <br></br>
            <br></br>
            </div>

            <p><button className="fancyButton" onClick={endEdit}>Go Back</button></p>
            <button className="fancyButton" onClick={submitForm}>Submit</button>
        </div>
    )
}