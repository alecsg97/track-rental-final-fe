import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function AllServices() {

    const [services, setServices] = useState([]);

    const fetchServices = ()=>{
        axios.get("http://localhost:4200/services/")
        .then((response)=>{
            console.log(response.data);
            setServices(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchServices();
    }, [])

    console.log(services)
    const listOfServices = services.map((eachService)=>{

        return(<div key={eachService._id} className="service-list-item">
            <Link to={"/services/"+eachService._id}>
            <h3>{eachService.make}</h3>
            </Link>
            {/* <button onClick={()=>{DeleteService(eachService._id)}}>Delete This Service</button> */}
            </div>)
          

    })


return(
    <div className="list-services-container">
    <h2>Garage</h2>
       <h5 className='profile'>{listOfServices}</h5>
       <center><button className="fancyButton" >
       <Link className = "text-link" to="/services/create">Add Car</Link></button></center>
    </div>
    );
}


