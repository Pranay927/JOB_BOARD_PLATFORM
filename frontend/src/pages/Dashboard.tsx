

import { useEffect, useState } from "react";

import axios from "axios"
function Dashboard(){
    const [jobs, setJobs] = useState();

    useEffect(()=>{
        const JobListings= async()=>{
            try {
                const response = await axios.get("http://localhost:3000/user/me", {
                    headers :{
                         "authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                console.log(response.data)
                setJobs(response.data.Message);
            } catch (error) {
                console.log(error)
            }
        }
        JobListings();
    },[])
    return(
        <>
            
            
        </>
    )
}
export default Dashboard;