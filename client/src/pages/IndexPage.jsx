import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider";
import SkeletonLoader from "../SkeletonLoader";


export default function IndexPage(){
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        axios.get('/places').then(response => {
            setPlaces([...response.data,...response.data,...response.data,...response.data,...response.data,...response.data,...response.data,...response.data,...response.data]);
            setLoading(false);

        })
        .catch(() => setLoading(false));
    }, []);

    return (
        loading ? <SkeletonLoader /> : (
        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {places.length > 0 && places.map(place => (
                <div >
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                        {place.photos?.length > 0 && <ImageSlider photos={place.photos} />}
                    </div>
                    <Link to={'/place/' + place._id}>
                        <div className="bg-gray-200 -mt-2 rounded-b-2xl py-2">
                        <div className="flex ml-2 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <h2 className="font-bold">{place.address}</h2>
                        </div>
                        <div className="ml-3">
                        <h3 className="text-sm text-gray-500">{place.title}</h3>
                        </div>
                        <div className="ml-3 mt-1">
                        <span className="font-bold">Price: ₼{place.price} </span> 
                        </div>
                    </div>
                    </Link>
                    
                    
                </div>
            ))}
        </div>
    )
)
}