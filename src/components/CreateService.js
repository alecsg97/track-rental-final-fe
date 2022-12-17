import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function CreateService(props){
    const navigate = useNavigate();


    const [formState, setFormState] = useState({
        // image: "",
        make: "",
        model: "",
        typeOfDriving: "",
        power: "",
    
    })

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        console.log(formState)
        axios.post("http://localhost:4200/services/create", {
            // image: formState.image,
            make: formState.make,
            model: formState.model,
            typeOfDriving: formState.typeOfDriving,
            power: formState.power,
        
        })
        .then((response)=>{
            console.log(response);
            props.fetchServices();
            navigate("/services");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            {/* <div>
                Image:
                <input type="text" value={formState.image} onChange={(e)=>{updateInput(e,"image")}} />
            </div> */}
            <div>

                <label className="form-label">
                Make:
                </label>

                <input className="form-control"  type="text" value={formState.make} onChange={(e)=>{updateInput(e,"make")}} />
            </div>

            <div>

                <label className="form-label">
                Model:
                </label>

                <input className="form-control" type="text" value={formState.model} onChange={(e)=>{updateInput(e,"model")}} />
            </div>


            <div>

                <label className="form-label">
                Type Of Driving:
                </label>

                <input className="form-control"  type="text" value={formState.typeOfDriving} onChange={(e)=>{updateInput(e,"typeOfDriving")}} />
            </div>

            <div>
                <label className="form-label">
                Horsepower:
                </label>

                <input className="form-control" type="text" value={formState.power} onChange={(e)=>{updateInput(e,"power")}} />
            </div>
            <br></br>
          
            <center><button className="fancyButton" onClick={submitForm}>Add Car</button></center>
        </div>
    )

}