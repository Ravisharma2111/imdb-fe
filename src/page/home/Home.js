import React,{useEffect,useState} from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {

    const[mydata,setMyData] = useState('')

    useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=bd54f28e9a2879cf2ea2bdb09abd04a6")
    .then(res => res.json())
    .then(data => setMyData(data.results))
    }, [])
    console.log(mydata)
  return (
    <div>
      
    </div>
  )
}
