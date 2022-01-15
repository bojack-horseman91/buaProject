import {useEffect, useState} from 'react'



const useGeoLocation=()=> {
    const [geoLocation,setLocation]=useState({
        loaded:false,
        location:{
            lat:"",
            lng:""
        }
    })
    const onSuccess=(location)=>{
        setLocation({
            loaded:true,
            location:{
                lat:location.coords.latitude,
                lng:location.coords.longitude
            }
        });
    }
    const onError=(error)=>{
        setLocation({loaded:true,error})
    }
    useEffect(()=>{
        if(!("geolocation" in navigator))
        {
            onError("geolocation is not supported!!!!!")
         }
        navigator.geolocation.getCurrentPosition(onSuccess,onError)
    })
    return geoLocation;
}

export default useGeoLocation;